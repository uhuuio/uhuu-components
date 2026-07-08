(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 0);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:calc(var(--spacing) * 0)}[data-uhuu-interactive] .start,[data-uhuu-portal] .start{inset-inline-start:var(--spacing)}[data-uhuu-interactive] .end,[data-uhuu-portal] .end{inset-inline-end:var(--spacing)}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:calc(var(--spacing) * 0)}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:calc(var(--spacing) * 0)}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:calc(var(--spacing) * 0)}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:calc(var(--spacing) * 1)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:calc(var(--spacing) * 0)}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:calc(var(--spacing) * 1)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:calc(var(--spacing) * 1)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:calc(var(--spacing) * 1);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:calc(var(--spacing) * 1);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db)}@page{size:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed)) calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));margin:0}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing) * 0)}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-y-0{inset-block:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:calc(var(--spacing) * 0)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:calc(var(--spacing) * 0)}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:calc(var(--spacing) * 0)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-1{padding-left:calc(var(--spacing) * 1)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:calc(var(--spacing) * 0)}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:calc(var(--spacing) * 0)}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:calc(var(--spacing) * 0)}[data-uhuu-interactive] .start,[data-uhuu-portal] .start{inset-inline-start:var(--spacing)}[data-uhuu-interactive] .end,[data-uhuu-portal] .end{inset-inline-end:var(--spacing)}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:calc(var(--spacing) * 0)}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:calc(var(--spacing) * 0)}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:calc(var(--spacing) * 0)}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:calc(var(--spacing) * 1)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:calc(var(--spacing) * 0)}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:calc(var(--spacing) * 1)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:calc(var(--spacing) * 1)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";top:calc(var(--spacing) * 0);left:calc(var(--spacing) * 0);z-index:10;margin-top:calc(var(--spacing) * 1);margin-left:calc(var(--spacing) * 1);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{top:calc(var(--spacing) * 0);right:calc(var(--spacing) * 0);bottom:calc(var(--spacing) * 0);left:calc(var(--spacing) * 0);z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing) * 0)}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-y-0{inset-block:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:calc(var(--spacing) * 0)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:calc(var(--spacing) * 0)}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:calc(var(--spacing) * 0)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-1{padding-left:calc(var(--spacing) * 1)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:calc(var(--spacing) * 0)}[data-uhuu-interactive] .start,[data-uhuu-portal] .start{inset-inline-start:var(--spacing)}[data-uhuu-interactive] .end,[data-uhuu-portal] .end{inset-inline-end:var(--spacing)}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:calc(var(--spacing) * 0)}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:calc(var(--spacing) * 0)}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:calc(var(--spacing) * 0)}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:calc(var(--spacing) * 1)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:calc(var(--spacing) * 0)}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:calc(var(--spacing) * 1)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:calc(var(--spacing) * 1)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:100%;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as d, jsxs as D, Fragment as Oe } from "react/jsx-runtime";
import * as m from "react";
import fe, { createContext as Dt, useEffect as ce, forwardRef as Dr, useContext as Ce, createElement as vo, useState as te, useLayoutEffect as la, useMemo as U, useRef as de, useCallback as he, memo as Ad, useReducer as kd, cloneElement as Dd } from "react";
import * as ca from "react-dom";
import Md, { unstable_batchedUpdates as Zn, createPortal as Od } from "react-dom";
class fr {
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
    fr.handlePageBreakStyles(), fr.handleUhuuDialogs();
  }
}
class Vi {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
class ua {
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
    const f = s ? "A4" : a;
    return this.getDimensions({ format: f || "A4", orientation: r }) ?? this.getDimensions({ format: "A4", orientation: r }) ?? { width: 210, height: 297 };
  }
  static pageParams(t, n = {}) {
    if (typeof document > "u") return;
    const { format: r, orientation: o, bleed: i, showBleed: a, compatibility: s, printCssRaw: l, printCssUrl: c, preview: f } = n, u = this.resolveDimensions(n);
    return u && (document.documentElement.style.setProperty("--uhuu-page-width", `${u.width}mm`), document.documentElement.style.setProperty("--uhuu-page-height", `${u.height}mm`)), document.documentElement.style.setProperty("--uhuu-page-bleed", `${Math.min(Math.max(i ?? 0, 0), 400)}mm`), { page: {
      paginationType: t,
      format: r,
      orientation: o,
      bleed: i,
      width: u?.width,
      height: u?.height,
      preview: f,
      showBleed: a,
      compatibility: s,
      printCssRaw: l,
      printCssUrl: c
    } };
  }
}
const Wt = Dt(null), Td = ({ config: e, children: t }) => /* @__PURE__ */ d(Wt.Provider, { value: e, children: t }), bo = ({ children: e, className: t, setup: n }) => {
  const r = ua.pageParams("static", n);
  ce(() => {
    r?.page?.compatibility && fr.handle();
    const i = Vi.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      i && Vi.removePageStyles(i);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(Td, { config: r, children: /* @__PURE__ */ d("div", { className: o, children: e }) });
}, yo = Dr(({
  children: e,
  className: t = "",
  style: n,
  pageNo: r,
  overlay: o,
  showBleed: i,
  "data-page-key": a
}, s) => {
  const l = Ce(Wt), c = i ?? l?.page?.showBleed ?? !1;
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
        c && /* @__PURE__ */ d("div", { className: "uhuu-bleed-area" })
      ]
    }
  );
});
function Jt() {
  if (typeof window < "u") {
    const e = window.location.hostname;
    return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
  }
  return !1;
}
function _d({
  heights: e = [],
  keys: t = [],
  metas: n = [],
  availableHeight: r = 0
} = {}) {
  const o = [{ indexes: [], keys: [] }];
  let i = 0;
  const a = (h) => {
    const p = n[h] ?? {};
    return p.avoidBreakInside && p.groupKey ? p.groupKey : null;
  }, s = (h, p) => {
    let b = 0;
    for (let g = h; g < e.length && a(g) === p; g += 1)
      b += e[g] ?? 0;
    return b;
  }, l = () => {
    o[o.length - 1].indexes.length > 0 && (o.push({ indexes: [], keys: [] }), i = 0);
  }, c = (h) => typeof h == "number" && Number.isFinite(h) ? Math.max(0, Math.floor(h)) : h ? 1 : 0, f = (h, p) => {
    let b = 0;
    for (let g = 1; g <= p; g += 1)
      b += e[h + g] ?? 0;
    return b;
  };
  for (let h = 0; h < e.length; h += 1) {
    const p = n[h] ?? {}, b = e[h] ?? 0, g = t[h] ?? String(h), v = f(h, c(p.keepWithNext)), w = b + v;
    p.breakBefore && l();
    const N = a(h), x = h > 0 ? a(h - 1) : null;
    N && N !== x && o[o.length - 1].indexes.length > 0 && i + s(h, N) > r && l(), o[o.length - 1].indexes.length > 0 && i + w > r && l(), o[o.length - 1].indexes.push(h), o[o.length - 1].keys.push(g), i += b, p.breakAfter && h < e.length - 1 && l();
  }
  const u = o.filter((h) => h.indexes.length > 0);
  return u.length ? u : [{ indexes: [], keys: [] }];
}
const hr = m.createContext(null), Ld = typeof window > "u" ? m.useEffect : m.useLayoutEffect, Hi = /* @__PURE__ */ new Set();
function Gi(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function Fd(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function $d(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function zd(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function Bd(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
function Ui(e) {
  const t = e.getBoundingClientRect(), n = window.getComputedStyle(e), r = Number.parseFloat(n.marginTop || "0") || 0, o = Number.parseFloat(n.marginBottom || "0") || 0;
  return t.height + r + o;
}
function Kd(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: $d(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function Wd(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = Array.from(t.querySelectorAll('[data-uhuu-flow-item="true"]'));
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`
    };
  const a = e.getBoundingClientRect().height || e.clientHeight, s = Number.isFinite(a) && a > 0, l = s ? a : o.reduce((b, g) => b + Ui(g), 0), c = o.map(Ui), f = o.map(Kd), u = o.map((b, g) => b.dataset.uhuuFlowKey || String(g));
  if (s || n.onZeroHeight?.(), s) {
    const b = c.findIndex((g) => g > l);
    b >= 0 && n.onOversizedItem?.(u[b], c[b], l);
  }
  const h = _d({
    heights: c,
    keys: u,
    metas: f,
    availableHeight: l
  }), p = Bd(JSON.stringify({
    version: 1,
    flowId: r,
    availableHeight: Math.round(l * 100) / 100,
    heights: c.map((b) => Math.round(b * 100) / 100),
    keys: u,
    metas: f
  }));
  return { flowId: r, chunks: h, signature: p };
}
function da({ children: e, className: t = "", style: n }) {
  const r = m.useContext(hr), o = m.useRef(null), i = m.useRef(""), a = m.useRef(!1), s = m.useRef(!1), l = m.useRef(/* @__PURE__ */ new Set());
  return Ld(() => {
    if (r?.mode !== "measure" || !r.registerMeasurement || !o.current)
      return;
    const c = o.current;
    let f = 0, u = null;
    i.current = "";
    const h = () => {
      window.cancelAnimationFrame(f), f = window.requestAnimationFrame(g);
    }, p = /* @__PURE__ */ new Set(), b = () => {
      if (u) {
        for (const w of Array.from(p))
          c.contains(w) || (u.unobserve(w), p.delete(w));
        c.querySelectorAll('[data-uhuu-flow-item="true"]').forEach((w) => {
          p.has(w) || (p.add(w), u?.observe(w));
        });
      }
    }, g = () => {
      b();
      const w = c.querySelectorAll('[data-uhuu-flow="true"]');
      w.length > 1 && !a.current && Jt() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const N = w[0];
      if (!N) return;
      const x = Wd(c, N, {
        onZeroHeight: () => {
          s.current || !Jt() || (s.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onOversizedItem: (y, P, E) => {
          l.current.has(y) || !Jt() || (l.current.add(y), console.warn(
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
      window.cancelAnimationFrame(f), u?.disconnect(), v.disconnect();
    };
  }, [r]), /* @__PURE__ */ d("div", { ref: o, className: t, style: n, "data-uhuu-flow-area": "true", children: e });
}
function fa({
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
        /* @__PURE__ */ d(
          da,
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
function ha({
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
  const c = m.useContext(hr), f = c?.chunksByFlowId?.[e], h = (c?.mode === "visible" && f ? f[c.pageIndex]?.indexes ?? [] : c?.mode === "visible" && c.pageIndex > 0 ? [] : t.map((p, b) => b)).filter((p) => Number.isInteger(p) && p >= 0 && p < t.length);
  return m.useEffect(() => {
    if (!Jt() || !i || !Object.keys(i).length || !t.length)
      return;
    const p = `${e}:${Object.keys(i).join("|")}`;
    Hi.has(p) || t.some((g, v) => !!(a?.(g, v) ?? Gi(g))) || (Hi.add(p), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, a]), /* @__PURE__ */ d(
    "div",
    {
      className: s,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: h.map((p) => {
        const b = t[p];
        if (b === void 0) return null;
        const g = n(b, p), v = a?.(b, p) ?? Gi(b), w = Fd(
          v ? i?.[v] : void 0,
          o?.(b, p)
        ), N = typeof l == "function" ? l(b, p) : l;
        return /* @__PURE__ */ d(
          "div",
          {
            className: N,
            style: { display: "flow-root" },
            "data-uhuu-flow-item": "true",
            "data-uhuu-flow-key": String(g),
            "data-uhuu-flow-index": p,
            "data-uhuu-flow-break-before": w.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": w.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": zd(w.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": w.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": w.groupKey,
            children: r(b, p)
          },
          g
        );
      })
    }
  );
}
const on = (e, t) => {
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
}, jd = (e) => {
  const t = Ce(Wt);
  return /* @__PURE__ */ d(
    "div",
    {
      className: e.className,
      ...on(e, t),
      children: e.children
    }
  );
};
function Vd(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function ma(e, t, n, r = "") {
  const o = Vd(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const Hd = /\s*(page-break-before|break-before)\s*/i, Gd = 1, Ud = 3, Yd = 8;
function Xd(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function qd(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function Zd(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === Yd) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === Ud) {
      const i = (o.textContent ?? "").trim();
      i && r.push({ kind: "text", html: Xd(i), text: i });
      return;
    }
    if (o.nodeType === Gd) {
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
function Jd(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const i of e) {
    if (!i || i.kind === "break") {
      o = !0;
      continue;
    }
    const a = i.type ?? "text", s = i.html ?? "";
    s && (r.push({
      id: ma(a, i.text ?? s, r.length, n),
      type: a,
      html: s,
      breakBefore: o || !!i.breakBefore
    }), o = !!i.breakAfter);
  }
  return r;
}
function pa(e = "", t = {}) {
  const n = t.breakComment ?? Hd, o = (t.parseHtml ?? ((i) => Zd(i, n)))(e);
  return Jd(Array.isArray(o) ? o : [], t);
}
const Qd = {
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
let Yi = !1;
function ef(e) {
  return m.useMemo(() => e === !1 ? (Jt() && !Yi && (Yi = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : qd, [e]);
}
function tf({
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
  itemClassName: f,
  metaDefaults: u,
  getItemMeta: h,
  renderItem: p,
  sanitize: b,
  editable: g,
  parseHtml: v
}) {
  const w = m.useMemo(
    () => pa(e, { idPrefix: l, parseHtml: v }),
    [e, l, v]
  ), N = m.useMemo(
    () => ({ ...Qd, ...u ?? {} }),
    [u]
  ), x = ef(b), y = m.useCallback(
    (S, C) => ({
      breakBefore: S.breakBefore,
      ...h?.(S, C) ?? {}
    }),
    [h]
  ), P = m.useCallback(
    (S, C) => p ? p(S, C) : /* @__PURE__ */ d(
      "div",
      {
        className: "uhuu-flow-html-block",
        dangerouslySetInnerHTML: { __html: x(S.html) }
      }
    ),
    [p, x]
  ), E = /* @__PURE__ */ d(
    ha,
    {
      id: s,
      items: w,
      getKey: (S) => S.id,
      className: c,
      itemClassName: f,
      metaDefaults: N,
      getItemMeta: y,
      renderItem: P
    }
  );
  return /* @__PURE__ */ d(
    fa,
    {
      className: r,
      style: o,
      flowAreaClassName: i,
      flowAreaStyle: a,
      header: t,
      footer: n,
      children: g ? /* @__PURE__ */ d(jd, { dialog: g, children: E }) : E
    }
  );
}
const nf = /<!--\s*(page-break-before|break-before)\s*-->/i, rf = /^\s*\[[^\]]+\]:\s+\S+/, Xi = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function Jn(e) {
  return e.trim() === "";
}
function qi(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function Zi(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Ji(e) {
  return /^(```|~~~)/.test(e.trim());
}
function Qi(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function es(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function ts(e) {
  return nf.test(e.trim());
}
function of(e) {
  return rf.test(e);
}
function sf(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const i of n) {
    const a = o ? `${o} ${i}` : i;
    o && a.length > t ? (r.push(o), o = i) : o = a;
  }
  return o && r.push(o), r.length ? r : [e];
}
function af(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function lf(e, t, n, r, o, i) {
  const a = n.join(`
`).trim();
  if (!a) return !1;
  const s = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, l = t === "paragraph" ? sf(a, s) : [a];
  for (let c = 0; c < l.length; c += 1) {
    const f = l[c], u = af(f, i);
    e.push({
      id: ma(t, f, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: c === 0 ? r : !1
    });
  }
  return !0;
}
function cf(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], i = [];
  for (const c of r)
    of(c) ? o.push(c) : i.push(c);
  const a = [];
  let s = 0, l = !1;
  for (; s < i.length; ) {
    if (Jn(i[s])) {
      s += 1;
      continue;
    }
    if (ts(i[s])) {
      l = !0, s += 1;
      continue;
    }
    const c = s;
    let f = "paragraph";
    if (Ji(i[s])) {
      f = "code";
      const u = i[s].trim().slice(0, 3);
      for (s += 1; s < i.length && !i[s].trim().startsWith(u); )
        s += 1;
      s < i.length && (s += 1);
    } else if (qi(i[s]))
      f = "heading", s += 1;
    else if (Qi(i[s]))
      f = "rule", s += 1;
    else if (Xi.test(i[s]))
      f = "image", s += 1;
    else if (es(i, s))
      for (f = "table", s += 2; s < i.length && i[s].includes("|") && !Jn(i[s]); )
        s += 1;
    else if (Zi(i[s]))
      for (f = "list", s += 1; s < i.length && !Jn(i[s]); )
        s += 1;
    else if (i[s].trim().startsWith(">"))
      for (f = "quote", s += 1; s < i.length && i[s].trim().startsWith(">"); )
        s += 1;
    else
      for (s += 1; s < i.length && !Jn(i[s]) && !qi(i[s]) && !Ji(i[s]) && !Qi(i[s]) && !Xi.test(i[s]) && !es(i, s) && !Zi(i[s]) && !i[s].trim().startsWith(">") && !ts(i[s]); )
        s += 1;
    lf(a, f, i.slice(c, s), l, t, o) && (l = !1);
  }
  return a;
}
function ga(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ga(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function va() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ga(e)) && (r && (r += " "), r += t);
  return r;
}
const uf = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, df = (e, t) => ({
  classGroupId: e,
  validator: t
}), ba = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), mr = "-", ns = [], ff = "arbitrary..", hf = (e) => {
  const t = pf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return mf(a);
      const s = a.split(mr), l = s[0] === "" && s.length > 1 ? 1 : 0;
      return ya(s, l, t);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const l = r[a], c = n[a];
        return l ? c ? uf(c, l) : l : c || ns;
      }
      return n[a] || ns;
    }
  };
}, ya = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const c = ya(e, t + 1, i);
    if (c) return c;
  }
  const a = n.validators;
  if (a === null)
    return;
  const s = t === 0 ? e.join(mr) : e.slice(t).join(mr), l = a.length;
  for (let c = 0; c < l; c++) {
    const f = a[c];
    if (f.validator(s))
      return f.classGroupId;
  }
}, mf = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? ff + r : void 0;
})(), pf = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return gf(n, t);
}, gf = (e, t) => {
  const n = ba();
  for (const r in e) {
    const o = e[r];
    Fo(o, n, r, t);
  }
  return n;
}, Fo = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    vf(a, t, n, r);
  }
}, vf = (e, t, n, r) => {
  if (typeof e == "string") {
    bf(e, t, n);
    return;
  }
  if (typeof e == "function") {
    yf(e, t, n, r);
    return;
  }
  wf(e, t, n, r);
}, bf = (e, t, n) => {
  const r = e === "" ? t : wa(t, e);
  r.classGroupId = n;
}, yf = (e, t, n, r) => {
  if (xf(e)) {
    Fo(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(df(n, e));
}, wf = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [s, l] = o[a];
    Fo(l, wa(t, s), n, r);
  }
}, wa = (e, t) => {
  let n = e;
  const r = t.split(mr), o = r.length;
  for (let i = 0; i < o; i++) {
    const a = r[i];
    let s = n.nextPart.get(a);
    s || (s = ba(), n.nextPart.set(a, s)), n = s;
  }
  return n;
}, xf = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Cf = (e) => {
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
}, wo = "!", rs = ":", Sf = [], os = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Nf = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, l = 0, c;
    const f = o.length;
    for (let g = 0; g < f; g++) {
      const v = o[g];
      if (a === 0 && s === 0) {
        if (v === rs) {
          i.push(o.slice(l, g)), l = g + 1;
          continue;
        }
        if (v === "/") {
          c = g;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? s++ : v === ")" && s--;
    }
    const u = i.length === 0 ? o : o.slice(l);
    let h = u, p = !1;
    u.endsWith(wo) ? (h = u.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(wo) && (h = u.slice(1), p = !0)
    );
    const b = c && c > l ? c - l : void 0;
    return os(i, p, h, b);
  };
  if (t) {
    const o = t + rs, i = r;
    r = (a) => a.startsWith(o) ? i(a.slice(o.length)) : os(Sf, !1, a, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, Pf = (e) => {
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
}, Ef = (e) => ({
  cache: Cf(e.cacheSize),
  parseClassName: Nf(e),
  sortModifiers: Pf(e),
  ...hf(e)
}), Rf = /\s+/, If = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], s = e.trim().split(Rf);
  let l = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const f = s[c], {
      isExternal: u,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: b,
      maybePostfixModifierPosition: g
    } = n(f);
    if (u) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!g, w = r(v ? b.substring(0, g) : b);
    if (!w) {
      if (!v) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(b), !w) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const N = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), x = p ? N + wo : N, y = x + w;
    if (a.indexOf(y) > -1)
      continue;
    a.push(y);
    const P = o(w, v);
    for (let E = 0; E < P.length; ++E) {
      const S = P[E];
      a.push(x + S);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Af = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = xa(n)) && (o && (o += " "), o += r);
  return o;
}, xa = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xa(e[r])) && (n && (n += " "), n += t);
  return n;
}, kf = (e, ...t) => {
  let n, r, o, i;
  const a = (l) => {
    const c = t.reduce((f, u) => u(f), e());
    return n = Ef(c), r = n.cache.get, o = n.cache.set, i = s, s(l);
  }, s = (l) => {
    const c = r(l);
    if (c)
      return c;
    const f = If(l, n);
    return o(l, f), f;
  };
  return i = a, (...l) => i(Af(...l));
}, Df = [], Ne = (e) => {
  const t = (n) => n[e] || Df;
  return t.isThemeGetter = !0, t;
}, Ca = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sa = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Mf = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Of = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Tf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Lf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ff = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ct = (e) => Mf.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), St = (e) => !!e && Number.isInteger(Number(e)), Jr = (e) => e.endsWith("%") && re(e.slice(0, -1)), ft = (e) => Of.test(e), Na = () => !0, $f = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Tf.test(e) && !_f.test(e)
), $o = () => !1, zf = (e) => Lf.test(e), Bf = (e) => Ff.test(e), Kf = (e) => !W(e) && !j(e), Wf = (e) => Mt(e, Ra, $o), W = (e) => Ca.test(e), $t = (e) => Mt(e, Ia, $f), is = (e) => Mt(e, qf, re), jf = (e) => Mt(e, ka, Na), Vf = (e) => Mt(e, Aa, $o), ss = (e) => Mt(e, Pa, $o), Hf = (e) => Mt(e, Ea, Bf), Qn = (e) => Mt(e, Da, zf), j = (e) => Sa.test(e), wn = (e) => jt(e, Ia), Gf = (e) => jt(e, Aa), as = (e) => jt(e, Pa), Uf = (e) => jt(e, Ra), Yf = (e) => jt(e, Ea), er = (e) => jt(e, Da, !0), Xf = (e) => jt(e, ka, !0), Mt = (e, t, n) => {
  const r = Ca.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, jt = (e, t, n = !1) => {
  const r = Sa.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Pa = (e) => e === "position" || e === "percentage", Ea = (e) => e === "image" || e === "url", Ra = (e) => e === "length" || e === "size" || e === "bg-size", Ia = (e) => e === "length", qf = (e) => e === "number", Aa = (e) => e === "family-name", ka = (e) => e === "number" || e === "weight", Da = (e) => e === "shadow", Zf = () => {
  const e = Ne("color"), t = Ne("font"), n = Ne("text"), r = Ne("font-weight"), o = Ne("tracking"), i = Ne("leading"), a = Ne("breakpoint"), s = Ne("container"), l = Ne("spacing"), c = Ne("radius"), f = Ne("shadow"), u = Ne("inset-shadow"), h = Ne("text-shadow"), p = Ne("drop-shadow"), b = Ne("blur"), g = Ne("perspective"), v = Ne("aspect"), w = Ne("ease"), N = Ne("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
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
  ], P = () => [...y(), j, W], E = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], C = () => [j, W, l], R = () => [Ct, "full", "auto", ...C()], I = () => [St, "none", "subgrid", j, W], k = () => ["auto", {
    span: ["full", St, j, W]
  }, St, j, W], O = () => [St, "auto", j, W], z = () => ["auto", "min", "max", "fr", j, W], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], K = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...C()], T = () => [Ct, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], $ = () => [Ct, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...C()], _ = () => [Ct, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...C()], L = () => [e, j, W], Y = () => [...y(), as, ss, {
    position: [j, W]
  }], Z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], oe = () => ["auto", "cover", "contain", Uf, Wf, {
    size: [j, W]
  }], ie = () => [Jr, wn, $t], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    j,
    W
  ], B = () => ["", re, wn, $t], V = () => ["solid", "dashed", "dotted", "double"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => [re, Jr, as, ss], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    j,
    W
  ], se = () => ["none", re, j, W], ue = () => ["none", re, j, W], me = () => [re, j, W], pe = () => [Ct, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ft],
      breakpoint: [ft],
      color: [Na],
      container: [ft],
      "drop-shadow": [ft],
      ease: ["in", "out", "in-out"],
      font: [Kf],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ft],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ft],
      shadow: [ft],
      spacing: ["px", re],
      text: [ft],
      "text-shadow": [ft],
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
        aspect: ["auto", "square", Ct, W, j, v]
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
        columns: [re, W, j, s]
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
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        z: [St, "auto", j, W]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ct, "full", "auto", s, ...C()]
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
        flex: [re, Ct, "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, j, W]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, j, W]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [St, "first", "last", "none", j, W]
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
        text: ["base", n, wn, $t]
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
        font: [r, Xf, jf]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Jr, W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Gf, Vf, t]
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
        "line-clamp": [re, "none", j, is]
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", j, $t]
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
        "underline-offset": [re, "auto", j, W]
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
        bg: Y()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Z()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: oe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, St, j, W],
          radial: ["", j, W],
          conic: [St, j, W]
        }, Yf, Hf]
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
        from: ie()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ie()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ie()
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
        border: [...V(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...V(), "hidden", "none"]
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
        outline: [...V(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, j, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, wn, $t]
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
          f,
          er,
          Qn
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
        "inset-shadow": ["none", u, er, Qn]
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
        "ring-offset": [re, $t]
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
        "text-shadow": ["none", h, er, Qn]
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
        opacity: [re, j, W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
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
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": X()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": X()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": X()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": X()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": X()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": X()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": X()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [j, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": X()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": X()
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
        "mask-conic-from": X()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": X()
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
        mask: Y()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Z()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: oe()
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
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [re, j, W]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, j, W]
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
          p,
          er,
          Qn
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
        grayscale: ["", re, j, W]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, j, W]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, j, W]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, j, W]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, j, W]
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
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [re, j, W]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, j, W]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, j, W]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, j, W]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, j, W]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, j, W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, j, W]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, j, W]
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
        duration: [re, "initial", j, W]
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
        delay: [re, j, W]
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
        "perspective-origin": P()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ue()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ue()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ue()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ue()
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
        skew: me()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": me()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": me()
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
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, wn, $t, is]
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
}, Jf = /* @__PURE__ */ kf(Zf);
function ae(...e) {
  return Jf(va(e));
}
const zo = ({
  onError: e
}) => (n) => {
  e?.(n);
}, Bo = (e) => {
  const t = Ce(Wt), n = zo({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, i = e.pageHeight ?? t?.page?.height ?? 297, {
    src: a,
    imageClassName: s,
    backgroundColor: l,
    width: c,
    height: f,
    left: u = 0,
    right: h = 0,
    top: p = 0,
    bottom: b = 0
  } = e, g = (S) => `${S}mm`, v = () => {
    let S = c;
    return c ? !u && !h && (S += r) : (S = o, u || (S += r), h || (S += r), (u || h) && (S -= (u ?? 0) + (h ?? 0))), S;
  }, w = () => {
    let S = f;
    return f ? !p && !b && (S += r) : (S = i, p || (S += r), b || (S += r), (p || b) && (S -= (p ?? 0) + (b ?? 0))), S;
  }, N = v(), x = w(), y = (S) => S !== void 0 ? g(S) : void 0, E = ((S) => Object.fromEntries(
    Object.entries(S).filter(([C, R]) => R !== void 0)
  ))({
    backgroundColor: l,
    width: y(N),
    height: y(x),
    left: y(u > 0 ? u + r : u),
    right: y(h > 0 ? h + r : h),
    top: y(p > 0 ? p + r : p),
    bottom: y(b > 0 ? b + r : b)
  });
  return /* @__PURE__ */ d("div", { className: "uhuu-image-container", style: E, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ D(
    "div",
    {
      className: "uhuu-image-inner",
      ...on(e, t),
      children: [
        /* @__PURE__ */ d(
          "img",
          {
            className: ae("cover-image object-cover object-center", s),
            src: a || null,
            onError: n
          }
        ),
        e.children
      ]
    }
  ) });
};
const Qf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), eh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), ls = (e) => {
  const t = eh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ma = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), th = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var nh = {
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
const rh = Dr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, l) => vo(
    "svg",
    {
      ref: l,
      ...nh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ma("lucide", o),
      ...!i && !th(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([c, f]) => vo(c, f)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const ye = (e, t) => {
  const n = Dr(
    ({ className: r, ...o }, i) => vo(rh, {
      ref: i,
      iconNode: t,
      className: Ma(
        `lucide-${Qf(ls(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = ls(e), n;
};
const oh = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], ih = ye("arrow-down", oh);
const sh = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], cs = ye("arrow-up-down", sh);
const ah = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], lh = ye("arrow-up", ah);
const ch = [
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
], uh = ye("book-dashed", ch);
const dh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ko = ye("check", dh);
const fh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Oa = ye("chevron-down", fh);
const hh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], mh = ye("chevron-right", hh);
const ph = [
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
], gh = ye("clipboard-list", ph);
const vh = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], bh = ye("copy", vh);
const yh = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Ta = ye("ellipsis", yh);
const wh = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], _a = ye("grip-vertical", wh);
const xh = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], xo = ye("lock", xh);
const Ch = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], Sh = ye("maximize", Ch);
const Nh = [["path", { d: "M5 12h14", key: "1ays0h" }]], Ph = ye("minus", Nh);
const Eh = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Rh = ye("pencil", Eh);
const Ih = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], nt = ye("plus", Ih);
const Ah = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], kh = ye("search", Ah);
const Dh = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Mh = ye("trash-2", Dh);
const Oh = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], Th = ye("unfold-horizontal", Oh);
const _h = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], Lh = ye("unfold-vertical", _h);
const Fh = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], La = ye("x", Fh);
const $h = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], zh = ye("zoom-in", $h);
const Bh = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Kh = ye("zoom-out", Bh), Fa = m.createContext({
  portalContainer: null
});
function Wo() {
  return m.useContext(Fa);
}
function Wh({ children: e }) {
  const [t, n] = m.useState(null);
  return m.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ d(Fa.Provider, { value: { portalContainer: t }, children: e });
}
const $a = Dt({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function jo() {
  return Ce($a);
}
function Vo() {
  const { interactive: e } = jo();
  return !e;
}
function jh() {
  return typeof window < "u" && !!window?.$uhuu_renderer;
}
function Vh() {
  return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Hh({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const r = jh(), o = n || Vh(), i = r ? !1 : t, [a, s] = te(i);
  return /* @__PURE__ */ d($a.Provider, { value: { interactive: a, setInteractive: s, enableDevTools: o }, children: /* @__PURE__ */ d(Wh, { children: /* @__PURE__ */ d("div", { "data-uhuu-interactive": a ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const us = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ds = va, za = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return ds(e, n?.class, n?.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((c) => {
    const f = n?.[c], u = i?.[c];
    if (f === null) return null;
    const h = us(f) || us(u);
    return o[c][h];
  }), s = n && Object.entries(n).reduce((c, f) => {
    let [u, h] = f;
    return h === void 0 || (c[u] = h), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f) => {
    let { class: u, className: h, ...p } = f;
    return Object.entries(p).every((b) => {
      let [g, v] = b;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...s
      }[g]) : {
        ...i,
        ...s
      }[g] === v;
    }) ? [
      ...c,
      u,
      h
    ] : c;
  }, []);
  return ds(e, a, l, n?.class, n?.className);
}, Gh = za(
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
), Ae = m.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ d(
    "button",
    {
      className: ae(Gh({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
Ae.displayName = "Button";
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function fs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Mn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = fs(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : fs(e[o], null);
        }
      };
  };
}
function ve(...e) {
  return m.useCallback(Mn(...e), e);
}
function Uh(e, t) {
  const n = m.createContext(t), r = (i) => {
    const { children: a, ...s } = i, l = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ d(n.Provider, { value: l, children: a });
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
function gt(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = m.createContext(a), l = n.length;
    n = [...n, a];
    const c = (u) => {
      const { scope: h, children: p, ...b } = u, g = h?.[e]?.[l] || s, v = m.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ d(g.Provider, { value: v, children: p });
    };
    c.displayName = i + "Provider";
    function f(u, h) {
      const p = h?.[e]?.[l] || s, b = m.useContext(p);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [c, f];
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
  return o.scopeName = e, [r, Yh(o, ...t)];
}
function Yh(...e) {
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
var Rt = globalThis?.document ? m.useLayoutEffect : () => {
}, Xh = m[" useInsertionEffect ".trim().toString()] || Rt;
function sn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, a] = qh({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const f = m.useRef(e !== void 0);
    m.useEffect(() => {
      const u = f.current;
      u !== s && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const c = m.useCallback(
    (f) => {
      if (s) {
        const u = Zh(f) ? f(e) : f;
        u !== e && a.current?.(u);
      } else
        i(f);
    },
    [s, e, i, a]
  );
  return [l, c];
}
function qh({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return Xh(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Zh(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  const t = /* @__PURE__ */ Jh(e), n = m.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = m.Children.toArray(i), l = s.find(em);
    if (l) {
      const c = l.props.children, f = s.map((u) => u === l ? m.Children.count(c) > 1 ? m.Children.only(null) : m.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: m.isValidElement(c) ? m.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Jh(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (m.isValidElement(o)) {
      const a = nm(o), s = tm(i, o.props);
      return o.type !== m.Fragment && (s.ref = r ? Mn(r, a) : a), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ba = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Qh(e) {
  const t = ({ children: n }) => /* @__PURE__ */ d(Oe, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Ba, t;
}
function em(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ba;
}
function tm(e, t) {
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
function nm(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var rm = [
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
], be = rm.reduce((e, t) => {
  const n = /* @__PURE__ */ Pn(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ka(e, t) {
  e && ca.flushSync(() => e.dispatchEvent(t));
}
function Ho(e) {
  const t = e + "CollectionProvider", [n, r] = gt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (g) => {
    const { scope: v, children: w } = g, N = fe.useRef(null), x = fe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(o, { scope: v, itemMap: x, collectionRef: N, children: w });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ Pn(s), c = fe.forwardRef(
    (g, v) => {
      const { scope: w, children: N } = g, x = i(s, w), y = ve(v, x.collectionRef);
      return /* @__PURE__ */ d(l, { ref: y, children: N });
    }
  );
  c.displayName = s;
  const f = e + "CollectionItemSlot", u = "data-radix-collection-item", h = /* @__PURE__ */ Pn(f), p = fe.forwardRef(
    (g, v) => {
      const { scope: w, children: N, ...x } = g, y = fe.useRef(null), P = ve(v, y), E = i(f, w);
      return fe.useEffect(() => (E.itemMap.set(y, { ref: y, ...x }), () => {
        E.itemMap.delete(y);
      })), /* @__PURE__ */ d(h, { [u]: "", ref: P, children: N });
    }
  );
  p.displayName = f;
  function b(g) {
    const v = i(e + "CollectionConsumer", g);
    return fe.useCallback(() => {
      const N = v.collectionRef.current;
      if (!N) return [];
      const x = Array.from(N.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, S) => x.indexOf(E.ref.current) - x.indexOf(S.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: p },
    b,
    r
  ];
}
var om = m.createContext(void 0);
function Go(e) {
  const t = m.useContext(om);
  return e || t || "ltr";
}
function st(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => t.current?.(...n), []);
}
function im(e, t = globalThis?.document) {
  const n = st(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var sm = "DismissableLayer", Co = "dismissableLayer.update", am = "dismissableLayer.pointerDownOutside", lm = "dismissableLayer.focusOutside", hs, Wa = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Uo = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...l
    } = e, c = m.useContext(Wa), [f, u] = m.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, p] = m.useState({}), b = ve(t, (S) => u(S)), g = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = g.indexOf(v), N = f ? g.indexOf(f) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, y = N >= w, P = dm((S) => {
      const C = S.target, R = [...c.branches].some((I) => I.contains(C));
      !y || R || (o?.(S), a?.(S), S.defaultPrevented || s?.());
    }, h), E = fm((S) => {
      const C = S.target;
      [...c.branches].some((I) => I.contains(C)) || (i?.(S), a?.(S), S.defaultPrevented || s?.());
    }, h);
    return im((S) => {
      N === c.layers.size - 1 && (r?.(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
    }, h), m.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (hs = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), ms(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = hs);
        };
    }, [f, h, n, c]), m.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), ms());
    }, [f, c]), m.useEffect(() => {
      const S = () => p({});
      return document.addEventListener(Co, S), () => document.removeEventListener(Co, S);
    }, []), /* @__PURE__ */ d(
      be.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: x ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Uo.displayName = sm;
var cm = "DismissableLayerBranch", um = m.forwardRef((e, t) => {
  const n = m.useContext(Wa), r = m.useRef(null), o = ve(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ d(be.div, { ...e, ref: o });
});
um.displayName = cm;
function dm(e, t = globalThis?.document) {
  const n = st(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          ja(
            am,
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
function fm(e, t = globalThis?.document) {
  const n = st(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && ja(lm, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ms() {
  const e = new CustomEvent(Co);
  document.dispatchEvent(e);
}
function ja(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ka(o, i) : o.dispatchEvent(i);
}
var Qr = 0;
function Va() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ps()), document.body.insertAdjacentElement("beforeend", e[1] ?? ps()), Qr++, () => {
      Qr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Qr--;
    };
  }, []);
}
function ps() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var eo = "focusScope.autoFocusOnMount", to = "focusScope.autoFocusOnUnmount", gs = { bubbles: !1, cancelable: !0 }, hm = "FocusScope", Yo = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, l] = m.useState(null), c = st(o), f = st(i), u = m.useRef(null), h = ve(t, (g) => l(g)), p = m.useRef({
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
      let g = function(x) {
        if (p.paused || !s) return;
        const y = x.target;
        s.contains(y) ? u.current = y : Nt(u.current, { select: !0 });
      }, v = function(x) {
        if (p.paused || !s) return;
        const y = x.relatedTarget;
        y !== null && (s.contains(y) || Nt(u.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const P of x)
            P.removedNodes.length > 0 && Nt(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", v);
      const N = new MutationObserver(w);
      return s && N.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", v), N.disconnect();
      };
    }
  }, [r, s, p.paused]), m.useEffect(() => {
    if (s) {
      bs.add(p);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const w = new CustomEvent(eo, gs);
        s.addEventListener(eo, c), s.dispatchEvent(w), w.defaultPrevented || (mm(ym(Ha(s)), { select: !0 }), document.activeElement === g && Nt(s));
      }
      return () => {
        s.removeEventListener(eo, c), setTimeout(() => {
          const w = new CustomEvent(to, gs);
          s.addEventListener(to, f), s.dispatchEvent(w), w.defaultPrevented || Nt(g ?? document.body, { select: !0 }), s.removeEventListener(to, f), bs.remove(p);
        }, 0);
      };
    }
  }, [s, c, f, p]);
  const b = m.useCallback(
    (g) => {
      if (!n && !r || p.paused) return;
      const v = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, w = document.activeElement;
      if (v && w) {
        const N = g.currentTarget, [x, y] = pm(N);
        x && y ? !g.shiftKey && w === y ? (g.preventDefault(), n && Nt(x, { select: !0 })) : g.shiftKey && w === x && (g.preventDefault(), n && Nt(y, { select: !0 })) : w === N && g.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d(be.div, { tabIndex: -1, ...a, ref: h, onKeyDown: b });
});
Yo.displayName = hm;
function mm(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Nt(r, { select: t }), document.activeElement !== n) return;
}
function pm(e) {
  const t = Ha(e), n = vs(t, e), r = vs(t.reverse(), e);
  return [n, r];
}
function Ha(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function vs(e, t) {
  for (const n of e)
    if (!gm(n, { upTo: t })) return n;
}
function gm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function vm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && vm(e) && t && e.select();
  }
}
var bs = bm();
function bm() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = ys(e, t), e.unshift(t);
    },
    remove(t) {
      e = ys(e, t), e[0]?.resume();
    }
  };
}
function ys(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ym(e) {
  return e.filter((t) => t.tagName !== "A");
}
var wm = m[" useId ".trim().toString()] || (() => {
}), xm = 0;
function Et(e) {
  const [t, n] = m.useState(wm());
  return Rt(() => {
    n((r) => r ?? String(xm++));
  }, [e]), t ? `radix-${t}` : "";
}
const Cm = ["top", "right", "bottom", "left"], It = Math.min, Fe = Math.max, pr = Math.round, tr = Math.floor, it = (e) => ({
  x: e,
  y: e
}), Sm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Nm = {
  start: "end",
  end: "start"
};
function So(e, t, n) {
  return Fe(e, It(t, n));
}
function mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pt(e) {
  return e.split("-")[0];
}
function an(e) {
  return e.split("-")[1];
}
function Xo(e) {
  return e === "x" ? "y" : "x";
}
function qo(e) {
  return e === "y" ? "height" : "width";
}
const Pm = /* @__PURE__ */ new Set(["top", "bottom"]);
function ot(e) {
  return Pm.has(pt(e)) ? "y" : "x";
}
function Zo(e) {
  return Xo(ot(e));
}
function Em(e, t, n) {
  n === void 0 && (n = !1);
  const r = an(e), o = Zo(e), i = qo(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = gr(a)), [a, gr(a)];
}
function Rm(e) {
  const t = gr(e);
  return [No(e), t, No(t)];
}
function No(e) {
  return e.replace(/start|end/g, (t) => Nm[t]);
}
const ws = ["left", "right"], xs = ["right", "left"], Im = ["top", "bottom"], Am = ["bottom", "top"];
function km(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xs : ws : t ? ws : xs;
    case "left":
    case "right":
      return t ? Im : Am;
    default:
      return [];
  }
}
function Dm(e, t, n, r) {
  const o = an(e);
  let i = km(pt(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(No)))), i;
}
function gr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sm[t]);
}
function Mm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ga(e) {
  return typeof e != "number" ? Mm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vr(e) {
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
function Cs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ot(t), a = Zo(t), s = qo(a), l = pt(t), c = i === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[s] / 2 - o[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (an(t)) {
    case "start":
      p[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      p[a] += h * (n && c ? -1 : 1);
      break;
  }
  return p;
}
async function Om(e, t) {
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
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = mt(t, e), b = Ga(p), v = s[h ? u === "floating" ? "reference" : "floating" : u], w = vr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
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
  }, P = vr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Tm = async (e, t, n) => {
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
    x: f,
    y: u
  } = Cs(c, r, l), h = r, p = {}, b = 0;
  for (let v = 0; v < s.length; v++) {
    var g;
    const {
      name: w,
      fn: N
    } = s[v], {
      x,
      y,
      data: P,
      reset: E
    } = await N({
      x: f,
      y: u,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: {
        ...a,
        detectOverflow: (g = a.detectOverflow) != null ? g : Om
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    f = x ?? f, u = y ?? u, p = {
      ...p,
      [w]: {
        ...p[w],
        ...P
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (c = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: f,
      y: u
    } = Cs(c, h, l)), v = -1);
  }
  return {
    x: f,
    y: u,
    placement: h,
    strategy: o,
    middlewareData: p
  };
}, _m = (e) => ({
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
      padding: f = 0
    } = mt(e, t) || {};
    if (c == null)
      return {};
    const u = Ga(f), h = {
      x: n,
      y: r
    }, p = Zo(o), b = qo(p), g = await a.getDimensions(c), v = p === "y", w = v ? "top" : "left", N = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", y = i.reference[b] + i.reference[p] - h[p] - i.floating[b], P = h[p] - i.reference[p], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let S = E ? E[x] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(E))) && (S = s.floating[x] || i.floating[b]);
    const C = y / 2 - P / 2, R = S / 2 - g[b] / 2 - 1, I = It(u[w], R), k = It(u[N], R), O = I, z = S - g[b] - k, F = S / 2 - g[b] / 2 + C, K = So(O, F, z), M = !l.arrow && an(o) != null && F !== K && i.reference[b] / 2 - (F < O ? I : k) - g[b] / 2 < 0, T = M ? F < O ? F - O : F - z : 0;
    return {
      [p]: h[p] + T,
      data: {
        [p]: K,
        centerOffset: F - K - T,
        ...M && {
          alignmentOffset: T
        }
      },
      reset: M
    };
  }
}), Lm = function(e) {
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
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: g = !0,
        ...v
      } = mt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = pt(o), N = ot(s), x = pt(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), P = h || (x || !g ? [gr(s)] : Rm(s)), E = b !== "none";
      !h && E && P.push(...Dm(s, g, b, y));
      const S = [s, ...P], C = await l.detectOverflow(t, v), R = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && R.push(C[w]), u) {
        const F = Em(o, a, y);
        R.push(C[F[0]], C[F[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: R
      }], !R.every((F) => F <= 0)) {
        var k, O;
        const F = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, K = S[F];
        if (K && (!(u === "alignment" ? N !== ot(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every(($) => ot($.placement) === N ? $.overflows[0] > 0 : !0)))
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
          switch (p) {
            case "bestFit": {
              var z;
              const T = (z = I.filter(($) => {
                if (E) {
                  const _ = ot($.placement);
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
function Ss(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ns(e) {
  return Cm.some((t) => e[t] >= 0);
}
const Fm = function(e) {
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
      } = mt(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), s = Ss(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ns(s)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), s = Ss(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ns(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ua = /* @__PURE__ */ new Set(["left", "top"]);
async function $m(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = pt(n), s = an(n), l = ot(n) === "y", c = Ua.has(a) ? -1 : 1, f = i && l ? -1 : 1, u = mt(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
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
  return s && typeof b == "number" && (p = s === "end" ? b * -1 : b), l ? {
    x: p * f,
    y: h * c
  } : {
    x: h * c,
    y: p * f
  };
}
const zm = function(e) {
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
      } = t, l = await $m(t, e);
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
}, Bm = function(e) {
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
      } = mt(e, t), f = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, c), h = ot(pt(o)), p = Xo(h);
      let b = f[p], g = f[h];
      if (a) {
        const w = p === "y" ? "top" : "left", N = p === "y" ? "bottom" : "right", x = b + u[w], y = b - u[N];
        b = So(x, b, y);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", N = h === "y" ? "bottom" : "right", x = g + u[w], y = g - u[N];
        g = So(x, g, y);
      }
      const v = l.fn({
        ...t,
        [p]: b,
        [h]: g
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [p]: a,
            [h]: s
          }
        }
      };
    }
  };
}, Km = function(e) {
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
      } = mt(e, t), f = {
        x: n,
        y: r
      }, u = ot(o), h = Xo(u);
      let p = f[h], b = f[u];
      const g = mt(s, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const x = h === "y" ? "height" : "width", y = i.reference[h] - i.floating[x] + v.mainAxis, P = i.reference[h] + i.reference[x] - v.mainAxis;
        p < y ? p = y : p > P && (p = P);
      }
      if (c) {
        var w, N;
        const x = h === "y" ? "width" : "height", y = Ua.has(pt(o)), P = i.reference[u] - i.floating[x] + (y && ((w = a.offset) == null ? void 0 : w[u]) || 0) + (y ? 0 : v.crossAxis), E = i.reference[u] + i.reference[x] + (y ? 0 : ((N = a.offset) == null ? void 0 : N[u]) || 0) - (y ? v.crossAxis : 0);
        b < P ? b = P : b > E && (b = E);
      }
      return {
        [h]: p,
        [u]: b
      };
    }
  };
}, Wm = function(e) {
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
      } = mt(e, t), f = await a.detectOverflow(t, c), u = pt(o), h = an(o), p = ot(o) === "y", {
        width: b,
        height: g
      } = i.floating;
      let v, w;
      u === "top" || u === "bottom" ? (v = u, w = h === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = u, v = h === "end" ? "top" : "bottom");
      const N = g - f.top - f.bottom, x = b - f.left - f.right, y = It(g - f[v], N), P = It(b - f[w], x), E = !t.middlewareData.shift;
      let S = y, C = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (C = x), (r = t.middlewareData.shift) != null && r.enabled.y && (S = N), E && !h) {
        const I = Fe(f.left, 0), k = Fe(f.right, 0), O = Fe(f.top, 0), z = Fe(f.bottom, 0);
        p ? C = b - 2 * (I !== 0 || k !== 0 ? I + k : Fe(f.left, f.right)) : S = g - 2 * (O !== 0 || z !== 0 ? O + z : Fe(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: C,
        availableHeight: S
      });
      const R = await a.getDimensions(s.floating);
      return b !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Mr() {
  return typeof window < "u";
}
function ln(e) {
  return Ya(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lt(e) {
  var t;
  return (t = (Ya(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ya(e) {
  return Mr() ? e instanceof Node || e instanceof ze(e).Node : !1;
}
function Ye(e) {
  return Mr() ? e instanceof Element || e instanceof ze(e).Element : !1;
}
function at(e) {
  return Mr() ? e instanceof HTMLElement || e instanceof ze(e).HTMLElement : !1;
}
function Ps(e) {
  return !Mr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ze(e).ShadowRoot;
}
const jm = /* @__PURE__ */ new Set(["inline", "contents"]);
function On(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !jm.has(o);
}
const Vm = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Hm(e) {
  return Vm.has(ln(e));
}
const Gm = [":popover-open", ":modal"];
function Or(e) {
  return Gm.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Um = ["transform", "translate", "scale", "rotate", "perspective"], Ym = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Xm = ["paint", "layout", "strict", "content"];
function Jo(e) {
  const t = Qo(), n = Ye(e) ? Xe(e) : e;
  return Um.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Ym.some((r) => (n.willChange || "").includes(r)) || Xm.some((r) => (n.contain || "").includes(r));
}
function qm(e) {
  let t = At(e);
  for (; at(t) && !rn(t); ) {
    if (Jo(t))
      return t;
    if (Or(t))
      return null;
    t = At(t);
  }
  return null;
}
function Qo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Zm = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function rn(e) {
  return Zm.has(ln(e));
}
function Xe(e) {
  return ze(e).getComputedStyle(e);
}
function Tr(e) {
  return Ye(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function At(e) {
  if (ln(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ps(e) && e.host || // Fallback.
    lt(e)
  );
  return Ps(t) ? t.host : t;
}
function Xa(e) {
  const t = At(e);
  return rn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : at(t) && On(t) ? t : Xa(t);
}
function En(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Xa(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = ze(o);
  if (i) {
    const s = Po(a);
    return t.concat(a, a.visualViewport || [], On(o) ? o : [], s && n ? En(s) : []);
  }
  return t.concat(o, En(o, [], n));
}
function Po(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qa(e) {
  const t = Xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = at(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = pr(n) !== i || pr(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function ei(e) {
  return Ye(e) ? e : e.contextElement;
}
function Qt(e) {
  const t = ei(e);
  if (!at(t))
    return it(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = qa(t);
  let a = (i ? pr(n.width) : n.width) / r, s = (i ? pr(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Jm = /* @__PURE__ */ it(0);
function Za(e) {
  const t = ze(e);
  return !Qo() || !t.visualViewport ? Jm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ze(e) ? !1 : t;
}
function Bt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ei(e);
  let a = it(1);
  t && (r ? Ye(r) && (a = Qt(r)) : a = Qt(e));
  const s = Qm(i, n, r) ? Za(i) : it(0);
  let l = (o.left + s.x) / a.x, c = (o.top + s.y) / a.y, f = o.width / a.x, u = o.height / a.y;
  if (i) {
    const h = ze(i), p = r && Ye(r) ? ze(r) : r;
    let b = h, g = Po(b);
    for (; g && r && p !== b; ) {
      const v = Qt(g), w = g.getBoundingClientRect(), N = Xe(g), x = w.left + (g.clientLeft + parseFloat(N.paddingLeft)) * v.x, y = w.top + (g.clientTop + parseFloat(N.paddingTop)) * v.y;
      l *= v.x, c *= v.y, f *= v.x, u *= v.y, l += x, c += y, b = ze(g), g = Po(b);
    }
  }
  return vr({
    width: f,
    height: u,
    x: l,
    y: c
  });
}
function _r(e, t) {
  const n = Tr(e).scrollLeft;
  return t ? t.left + n : Bt(lt(e)).left + n;
}
function Ja(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - _r(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ep(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = lt(r), s = t ? Or(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = it(1);
  const f = it(0), u = at(r);
  if ((u || !u && !i) && ((ln(r) !== "body" || On(a)) && (l = Tr(r)), at(r))) {
    const p = Bt(r);
    c = Qt(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = a && !u && !i ? Ja(a, l) : it(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + h.y
  };
}
function tp(e) {
  return Array.from(e.getClientRects());
}
function np(e) {
  const t = lt(e), n = Tr(e), r = e.ownerDocument.body, o = Fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + _r(e);
  const s = -n.scrollTop;
  return Xe(r).direction === "rtl" && (a += Fe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const Es = 25;
function rp(e, t) {
  const n = ze(e), r = lt(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const f = Qo();
    (!f || f && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const c = _r(r);
  if (c <= 0) {
    const f = r.ownerDocument, u = f.body, h = getComputedStyle(u), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(r.clientWidth - u.clientWidth - p);
    b <= Es && (i -= b);
  } else c <= Es && (i += c);
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
const op = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ip(e, t) {
  const n = Bt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = at(e) ? Qt(e) : it(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function Rs(e, t, n) {
  let r;
  if (t === "viewport")
    r = rp(e, n);
  else if (t === "document")
    r = np(lt(e));
  else if (Ye(t))
    r = ip(t, n);
  else {
    const o = Za(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return vr(r);
}
function Qa(e, t) {
  const n = At(e);
  return n === t || !Ye(n) || rn(n) ? !1 : Xe(n).position === "fixed" || Qa(n, t);
}
function sp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = En(e, [], !1).filter((s) => Ye(s) && ln(s) !== "body"), o = null;
  const i = Xe(e).position === "fixed";
  let a = i ? At(e) : e;
  for (; Ye(a) && !rn(a); ) {
    const s = Xe(a), l = Jo(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && op.has(o.position) || On(a) && !l && Qa(e, a)) ? r = r.filter((f) => f !== a) : o = s, a = At(a);
  }
  return t.set(e, r), r;
}
function ap(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Or(t) ? [] : sp(t, this._c) : [].concat(n), r], s = a[0], l = a.reduce((c, f) => {
    const u = Rs(t, f, o);
    return c.top = Fe(u.top, c.top), c.right = It(u.right, c.right), c.bottom = It(u.bottom, c.bottom), c.left = Fe(u.left, c.left), c;
  }, Rs(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function lp(e) {
  const {
    width: t,
    height: n
  } = qa(e);
  return {
    width: t,
    height: n
  };
}
function cp(e, t, n) {
  const r = at(t), o = lt(t), i = n === "fixed", a = Bt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = it(0);
  function c() {
    l.x = _r(o);
  }
  if (r || !r && !i)
    if ((ln(t) !== "body" || On(o)) && (s = Tr(t)), r) {
      const p = Bt(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const f = o && !r && !i ? Ja(o, s) : it(0), u = a.left + s.scrollLeft - l.x - f.x, h = a.top + s.scrollTop - l.y - f.y;
  return {
    x: u,
    y: h,
    width: a.width,
    height: a.height
  };
}
function no(e) {
  return Xe(e).position === "static";
}
function Is(e, t) {
  if (!at(e) || Xe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return lt(e) === n && (n = n.ownerDocument.body), n;
}
function el(e, t) {
  const n = ze(e);
  if (Or(e))
    return n;
  if (!at(e)) {
    let o = At(e);
    for (; o && !rn(o); ) {
      if (Ye(o) && !no(o))
        return o;
      o = At(o);
    }
    return n;
  }
  let r = Is(e, t);
  for (; r && Hm(r) && no(r); )
    r = Is(r, t);
  return r && rn(r) && no(r) && !Jo(r) ? n : r || qm(e) || n;
}
const up = async function(e) {
  const t = this.getOffsetParent || el, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: cp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function dp(e) {
  return Xe(e).direction === "rtl";
}
const fp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ep,
  getDocumentElement: lt,
  getClippingRect: ap,
  getOffsetParent: el,
  getElementRects: up,
  getClientRects: tp,
  getDimensions: lp,
  getScale: Qt,
  isElement: Ye,
  isRTL: dp
};
function tl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function hp(e, t) {
  let n = null, r;
  const o = lt(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: u,
      width: h,
      height: p
    } = c;
    if (s || t(), !h || !p)
      return;
    const b = tr(u), g = tr(o.clientWidth - (f + h)), v = tr(o.clientHeight - (u + p)), w = tr(f), x = {
      rootMargin: -b + "px " + -g + "px " + -v + "px " + -w + "px",
      threshold: Fe(0, It(1, l)) || 1
    };
    let y = !0;
    function P(E) {
      const S = E[0].intersectionRatio;
      if (S !== l) {
        if (!y)
          return a();
        S ? a(!1, S) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !tl(c, e.getBoundingClientRect()) && a(), y = !1;
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
function mp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = ei(e), f = o || i ? [...c ? En(c) : [], ...En(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const u = c && s ? hp(c, n) : null;
  let h = -1, p = null;
  a && (p = new ResizeObserver((w) => {
    let [N] = w;
    N && N.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let b, g = l ? Bt(e) : null;
  l && v();
  function v() {
    const w = Bt(e);
    g && !tl(g, w) && n(), g = w, b = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    f.forEach((N) => {
      o && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), u?.(), (w = p) == null || w.disconnect(), p = null, l && cancelAnimationFrame(b);
  };
}
const pp = zm, gp = Bm, vp = Lm, bp = Wm, yp = Fm, As = _m, wp = Km, xp = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: fp,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Tm(e, t, {
    ...o,
    platform: i
  });
};
var Cp = typeof document < "u", Sp = function() {
}, lr = Cp ? la : Sp;
function br(e, t) {
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
        if (!br(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !br(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function nl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ks(e, t) {
  const n = nl(e);
  return Math.round(t * n) / n;
}
function ro(e) {
  const t = m.useRef(e);
  return lr(() => {
    t.current = e;
  }), t;
}
function Np(e) {
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
  } = e, [f, u] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = m.useState(r);
  br(h, r) || p(r);
  const [b, g] = m.useState(null), [v, w] = m.useState(null), N = m.useCallback(($) => {
    $ !== E.current && (E.current = $, g($));
  }, []), x = m.useCallback(($) => {
    $ !== S.current && (S.current = $, w($));
  }, []), y = i || b, P = a || v, E = m.useRef(null), S = m.useRef(null), C = m.useRef(f), R = l != null, I = ro(l), k = ro(o), O = ro(c), z = m.useCallback(() => {
    if (!E.current || !S.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: h
    };
    k.current && ($.platform = k.current), xp(E.current, S.current, $).then((_) => {
      const L = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: O.current !== !1
      };
      F.current && !br(C.current, L) && (C.current = L, ca.flushSync(() => {
        u(L);
      }));
    });
  }, [h, t, n, k, O]);
  lr(() => {
    c === !1 && C.current.isPositioned && (C.current.isPositioned = !1, u(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [c]);
  const F = m.useRef(!1);
  lr(() => (F.current = !0, () => {
    F.current = !1;
  }), []), lr(() => {
    if (y && (E.current = y), P && (S.current = P), y && P) {
      if (I.current)
        return I.current(y, P, z);
      z();
    }
  }, [y, P, z, I, R]);
  const K = m.useMemo(() => ({
    reference: E,
    floating: S,
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
    const _ = ks(M.floating, f.x), L = ks(M.floating, f.y);
    return s ? {
      ...$,
      transform: "translate(" + _ + "px, " + L + "px)",
      ...nl(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: L
    };
  }, [n, s, M.floating, f.x, f.y]);
  return m.useMemo(() => ({
    ...f,
    update: z,
    refs: K,
    elements: M,
    floatingStyles: T
  }), [f, z, K, M, T]);
}
const Pp = (e) => {
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
      return r && t(r) ? r.current != null ? As({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? As({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ep = (e, t) => ({
  ...pp(e),
  options: [e, t]
}), Rp = (e, t) => ({
  ...gp(e),
  options: [e, t]
}), Ip = (e, t) => ({
  ...wp(e),
  options: [e, t]
}), Ap = (e, t) => ({
  ...vp(e),
  options: [e, t]
}), kp = (e, t) => ({
  ...bp(e),
  options: [e, t]
}), Dp = (e, t) => ({
  ...yp(e),
  options: [e, t]
}), Mp = (e, t) => ({
  ...Pp(e),
  options: [e, t]
});
var Op = "Arrow", rl = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ d(
    be.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
rl.displayName = Op;
var Tp = rl;
function ti(e) {
  const [t, n] = m.useState(void 0);
  return Rt(() => {
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
var ni = "Popper", [ol, il] = gt(ni), [_p, sl] = ol(ni), al = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ d(_p, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
al.displayName = ni;
var ll = "PopperAnchor", cl = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = sl(ll, n), a = m.useRef(null), s = ve(t, a), l = m.useRef(null);
    return m.useEffect(() => {
      const c = l.current;
      l.current = r?.current || a.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ d(be.div, { ...o, ref: s });
  }
);
cl.displayName = ll;
var ri = "PopperContent", [Lp, Fp] = ol(ri), ul = m.forwardRef(
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
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: b,
      ...g
    } = e, v = sl(ri, n), [w, N] = m.useState(null), x = ve(t, (V) => N(V)), [y, P] = m.useState(null), E = ti(y), S = E?.width ?? 0, C = E?.height ?? 0, R = r + (i !== "center" ? "-" + i : ""), I = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, k = Array.isArray(c) ? c : [c], O = k.length > 0, z = {
      padding: I,
      boundary: k.filter(zp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: O
    }, { refs: F, floatingStyles: K, placement: M, isPositioned: T, middlewareData: $ } = Np({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...V) => mp(...V, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Ep({ mainAxis: o + C, alignmentAxis: a }),
        l && Rp({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Ip() : void 0,
          ...z
        }),
        l && Ap({ ...z }),
        kp({
          ...z,
          apply: ({ elements: V, rects: Q, availableWidth: X, availableHeight: H }) => {
            const { width: se, height: ue } = Q.reference, me = V.floating.style;
            me.setProperty("--radix-popper-available-width", `${X}px`), me.setProperty("--radix-popper-available-height", `${H}px`), me.setProperty("--radix-popper-anchor-width", `${se}px`), me.setProperty("--radix-popper-anchor-height", `${ue}px`);
          }
        }),
        y && Mp({ element: y, padding: s }),
        Bp({ arrowWidth: S, arrowHeight: C }),
        h && Dp({ strategy: "referenceHidden", ...z })
      ]
    }), [_, L] = hl(M), Y = st(b);
    Rt(() => {
      T && Y?.();
    }, [T, Y]);
    const Z = $.arrow?.x, oe = $.arrow?.y, ie = $.arrow?.centerOffset !== 0, [ne, B] = m.useState();
    return Rt(() => {
      w && B(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ d(
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
        children: /* @__PURE__ */ d(
          Lp,
          {
            scope: n,
            placedSide: _,
            onArrowChange: P,
            arrowX: Z,
            arrowY: oe,
            shouldHideArrow: ie,
            children: /* @__PURE__ */ d(
              be.div,
              {
                "data-side": _,
                "data-align": L,
                ...g,
                ref: x,
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
ul.displayName = ri;
var dl = "PopperArrow", $p = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fl = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Fp(dl, r), a = $p[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d(
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
        children: /* @__PURE__ */ d(
          Tp,
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
fl.displayName = dl;
function zp(e) {
  return e !== null;
}
var Bp = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [c, f] = hl(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (o.arrow?.x ?? 0) + s / 2, p = (o.arrow?.y ?? 0) + l / 2;
    let b = "", g = "";
    return c === "bottom" ? (b = a ? u : `${h}px`, g = `${-l}px`) : c === "top" ? (b = a ? u : `${h}px`, g = `${r.floating.height + l}px`) : c === "right" ? (b = `${-l}px`, g = a ? u : `${p}px`) : c === "left" && (b = `${r.floating.width + l}px`, g = a ? u : `${p}px`), { data: { x: b, y: g } };
  }
});
function hl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ml = al, Kp = cl, Wp = ul, jp = fl, Vp = "Portal", oi = m.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  Rt(() => i(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? Md.createPortal(/* @__PURE__ */ d(be.div, { ...r, ref: t }), a) : null;
});
oi.displayName = Vp;
function Hp(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ot = (e) => {
  const { present: t, children: n } = e, r = Gp(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = ve(r.ref, Up(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
Ot.displayName = "Presence";
function Gp(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = Hp(a, {
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
    const c = nr(r.current);
    i.current = s === "mounted" ? c : "none";
  }, [s]), Rt(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const h = i.current, p = nr(c);
      e ? l("MOUNT") : p === "none" || c?.display === "none" ? l("UNMOUNT") : l(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Rt(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, u = (p) => {
        const g = nr(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (p) => {
        p.target === t && (i.current = nr(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
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
function nr(e) {
  return e?.animationName || "none";
}
function Up(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var oo = "rovingFocusGroup.onEntryFocus", Yp = { bubbles: !1, cancelable: !0 }, Tn = "RovingFocusGroup", [Eo, pl, Xp] = Ho(Tn), [qp, gl] = gt(
  Tn,
  [Xp]
), [Zp, Jp] = qp(Tn), vl = m.forwardRef(
  (e, t) => /* @__PURE__ */ d(Eo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Eo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Qp, { ...e, ref: t }) }) })
);
vl.displayName = Tn;
var Qp = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: f = !1,
    ...u
  } = e, h = m.useRef(null), p = ve(t, h), b = Go(i), [g, v] = sn({
    prop: a,
    defaultProp: s ?? null,
    onChange: l,
    caller: Tn
  }), [w, N] = m.useState(!1), x = st(c), y = pl(n), P = m.useRef(!1), [E, S] = m.useState(0);
  return m.useEffect(() => {
    const C = h.current;
    if (C)
      return C.addEventListener(oo, x), () => C.removeEventListener(oo, x);
  }, [x]), /* @__PURE__ */ d(
    Zp,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: g,
      onItemFocus: m.useCallback(
        (C) => v(C),
        [v]
      ),
      onItemShiftTab: m.useCallback(() => N(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => S((C) => C + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => S((C) => C - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        be.div,
        {
          tabIndex: w || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: q(e.onFocus, (C) => {
            const R = !P.current;
            if (C.target === C.currentTarget && R && !w) {
              const I = new CustomEvent(oo, Yp);
              if (C.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const k = y().filter((M) => M.focusable), O = k.find((M) => M.active), z = k.find((M) => M.id === g), K = [O, z, ...k].filter(
                  Boolean
                ).map((M) => M.ref.current);
                wl(K, f);
              }
            }
            P.current = !1;
          }),
          onBlur: q(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), bl = "RovingFocusGroupItem", yl = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, l = Et(), c = i || l, f = Jp(bl, n), u = f.currentTabStopId === c, h = pl(n), { onFocusableItemAdd: p, onFocusableItemRemove: b, currentTabStopId: g } = f;
    return m.useEffect(() => {
      if (r)
        return p(), () => b();
    }, [r, p, b]), /* @__PURE__ */ d(
      Eo.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d(
          be.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: q(e.onMouseDown, (v) => {
              r ? f.onItemFocus(c) : v.preventDefault();
            }),
            onFocus: q(e.onFocus, () => f.onItemFocus(c)),
            onKeyDown: q(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = ng(v, f.orientation, f.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let x = h().filter((y) => y.focusable).map((y) => y.ref.current);
                if (w === "last") x.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && x.reverse();
                  const y = x.indexOf(v.currentTarget);
                  x = f.loop ? rg(x, y + 1) : x.slice(y + 1);
                }
                setTimeout(() => wl(x));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: u, hasTabStop: g != null }) : a
          }
        )
      }
    );
  }
);
yl.displayName = bl;
var eg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function tg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ng(e, t, n) {
  const r = tg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return eg[r];
}
function wl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function rg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var og = vl, ig = yl, sg = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yt = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), or = {}, io = 0, xl = function(e) {
  return e && (e.host || xl(e.parentNode));
}, ag = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = xl(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, lg = function(e, t, n, r) {
  var o = ag(t, Array.isArray(e) ? e : [e]);
  or[n] || (or[n] = /* @__PURE__ */ new WeakMap());
  var i = or[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || s.has(u) || (s.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var f = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(h) {
      if (s.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), b = p !== null && p !== "false", g = (Yt.get(h) || 0) + 1, v = (i.get(h) || 0) + 1;
          Yt.set(h, g), i.set(h, v), a.push(h), g === 1 && b && rr.set(h, !0), v === 1 && h.setAttribute(n, "true"), b || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return f(t), s.clear(), io++, function() {
    a.forEach(function(u) {
      var h = Yt.get(u) - 1, p = i.get(u) - 1;
      Yt.set(u, h), i.set(u, p), h || (rr.has(u) || u.removeAttribute(r), rr.delete(u)), p || u.removeAttribute(n);
    }), io--, io || (Yt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), or = {});
  };
}, Cl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = sg(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), lg(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, rt = function() {
  return rt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, rt.apply(this, arguments);
};
function Sl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function cg(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var cr = "right-scroll-bar-position", ur = "width-before-scroll-bar", ug = "with-scroll-bars-hidden", dg = "--removed-body-scroll-bar-size";
function so(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fg(e, t) {
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
var hg = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Ds = /* @__PURE__ */ new WeakMap();
function mg(e, t) {
  var n = fg(null, function(r) {
    return e.forEach(function(o) {
      return so(o, r);
    });
  });
  return hg(function() {
    var r = Ds.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || so(s, null);
      }), i.forEach(function(s) {
        o.has(s) || so(s, a);
      });
    }
    Ds.set(n, e);
  }, [e]), n;
}
function pg(e) {
  return e;
}
function gg(e, t) {
  t === void 0 && (t = pg);
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
        var f = a;
        a = [], f.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(f) {
          a.push(f), c();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return o;
}
function vg(e) {
  e === void 0 && (e = {});
  var t = gg(null);
  return t.options = rt({ async: !0, ssr: !1 }, e), t;
}
var Nl = function(e) {
  var t = e.sideCar, n = Sl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, rt({}, n));
};
Nl.isSideCarExport = !0;
function bg(e, t) {
  return e.useMedium(t), Nl;
}
var Pl = vg(), ao = function() {
}, Lr = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: ao,
    onWheelCapture: ao,
    onTouchMoveCapture: ao
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, u = e.shards, h = e.sideCar, p = e.noRelative, b = e.noIsolation, g = e.inert, v = e.allowPinchZoom, w = e.as, N = w === void 0 ? "div" : w, x = e.gapMode, y = Sl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = h, E = mg([n, t]), S = rt(rt({}, y), o);
  return m.createElement(
    m.Fragment,
    null,
    f && m.createElement(P, { sideCar: Pl, removeScrollBar: c, shards: u, noRelative: p, noIsolation: b, inert: g, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: x }),
    a ? m.cloneElement(m.Children.only(s), rt(rt({}, S), { ref: E })) : m.createElement(N, rt({}, S, { className: l, ref: E }), s)
  );
});
Lr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Lr.classNames = {
  fullWidth: ur,
  zeroRight: cr
};
var yg = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function wg() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yg();
  return t && e.setAttribute("nonce", t), e;
}
function xg(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Cg(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Sg = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = wg()) && (xg(t, n), Cg(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ng = function() {
  var e = Sg();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, El = function() {
  var e = Ng(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Pg = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Eg = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lo(n), lo(r), lo(o)];
}, Rg = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Pg;
  var t = Eg(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ig = El(), en = "data-scroll-locked", Ag = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ug, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(en, `] {
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
  
  .`).concat(cr, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ur, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(cr, " .").concat(cr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ur, " .").concat(ur, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(en, `] {
    `).concat(dg, ": ").concat(s, `px;
  }
`);
}, Ms = function() {
  var e = parseInt(document.body.getAttribute(en) || "0", 10);
  return isFinite(e) ? e : 0;
}, kg = function() {
  m.useEffect(function() {
    return document.body.setAttribute(en, (Ms() + 1).toString()), function() {
      var e = Ms() - 1;
      e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString());
    };
  }, []);
}, Dg = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  kg();
  var i = m.useMemo(function() {
    return Rg(o);
  }, [o]);
  return m.createElement(Ig, { styles: Ag(i, !t, o, n ? "" : "!important") });
}, Ro = !1;
if (typeof window < "u")
  try {
    var ir = Object.defineProperty({}, "passive", {
      get: function() {
        return Ro = !0, !0;
      }
    });
    window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    Ro = !1;
  }
var Xt = Ro ? { passive: !1 } : !1, Mg = function(e) {
  return e.tagName === "TEXTAREA";
}, Rl = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Mg(e) && n[t] === "visible")
  );
}, Og = function(e) {
  return Rl(e, "overflowY");
}, Tg = function(e) {
  return Rl(e, "overflowX");
}, Os = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Il(e, r);
    if (o) {
      var i = Al(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, _g = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Lg = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Il = function(e, t) {
  return e === "v" ? Og(t) : Tg(t);
}, Al = function(e, t) {
  return e === "v" ? _g(t) : Lg(t);
}, Fg = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $g = function(e, t, n, r, o) {
  var i = Fg(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), c = !1, f = a > 0, u = 0, h = 0;
  do {
    if (!s)
      break;
    var p = Al(e, s), b = p[0], g = p[1], v = p[2], w = g - v - i * b;
    (b || w) && Il(e, s) && (u += w, h += b);
    var N = s.parentNode;
    s = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(h) < 1) && (c = !0), c;
}, sr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ts = function(e) {
  return [e.deltaX, e.deltaY];
}, _s = function(e) {
  return e && "current" in e ? e.current : e;
}, zg = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Bg = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Kg = 0, qt = [];
function Wg(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(Kg++)[0], i = m.useState(El)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = cg([e.lockRef.current], (e.shards || []).map(_s), !0).filter(Boolean);
      return g.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(g, v) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !a.current.allowPinchZoom;
    var w = sr(g), N = n.current, x = "deltaX" in g ? g.deltaX : N[0] - w[0], y = "deltaY" in g ? g.deltaY : N[1] - w[1], P, E = g.target, S = Math.abs(x) > Math.abs(y) ? "h" : "v";
    if ("touches" in g && S === "h" && E.type === "range")
      return !1;
    var C = window.getSelection(), R = C && C.anchorNode, I = R ? R === E || R.contains(E) : !1;
    if (I)
      return !1;
    var k = Os(S, E);
    if (!k)
      return !0;
    if (k ? P = S : (P = S === "v" ? "h" : "v", k = Os(S, E)), !k)
      return !1;
    if (!r.current && "changedTouches" in g && (x || y) && (r.current = P), !P)
      return !0;
    var O = r.current || P;
    return $g(O, v, g, O === "h" ? x : y);
  }, []), l = m.useCallback(function(g) {
    var v = g;
    if (!(!qt.length || qt[qt.length - 1] !== i)) {
      var w = "deltaY" in v ? Ts(v) : sr(v), N = t.current.filter(function(P) {
        return P.name === v.type && (P.target === v.target || v.target === P.shadowParent) && zg(P.delta, w);
      })[0];
      if (N && N.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!N) {
        var x = (a.current.shards || []).map(_s).filter(Boolean).filter(function(P) {
          return P.contains(v.target);
        }), y = x.length > 0 ? s(v, x[0]) : !a.current.noIsolation;
        y && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = m.useCallback(function(g, v, w, N) {
    var x = { name: g, delta: v, target: w, should: N, shadowParent: jg(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== x;
      });
    }, 1);
  }, []), f = m.useCallback(function(g) {
    n.current = sr(g), r.current = void 0;
  }, []), u = m.useCallback(function(g) {
    c(g.type, Ts(g), g.target, s(g, e.lockRef.current));
  }, []), h = m.useCallback(function(g) {
    c(g.type, sr(g), g.target, s(g, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return qt.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, Xt), document.addEventListener("touchmove", l, Xt), document.addEventListener("touchstart", f, Xt), function() {
      qt = qt.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, Xt), document.removeEventListener("touchmove", l, Xt), document.removeEventListener("touchstart", f, Xt);
    };
  }, []);
  var p = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(i, { styles: Bg(o) }) : null,
    p ? m.createElement(Dg, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function jg(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Vg = bg(Pl, Wg);
var ii = m.forwardRef(function(e, t) {
  return m.createElement(Lr, rt({}, e, { ref: t, sideCar: Vg }));
});
ii.classNames = Lr.classNames;
var Io = ["Enter", " "], Hg = ["ArrowDown", "PageUp", "Home"], kl = ["ArrowUp", "PageDown", "End"], Gg = [...Hg, ...kl], Ug = {
  ltr: [...Io, "ArrowRight"],
  rtl: [...Io, "ArrowLeft"]
}, Yg = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, _n = "Menu", [Rn, Xg, qg] = Ho(_n), [Vt, Dl] = gt(_n, [
  qg,
  il,
  gl
]), Ln = il(), Ml = gl(), [Ol, Tt] = Vt(_n), [Zg, Fn] = Vt(_n), Tl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = Ln(t), [l, c] = m.useState(null), f = m.useRef(!1), u = st(i), h = Go(o);
  return m.useEffect(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d(ml, { ...s, children: /* @__PURE__ */ d(
    Ol,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ d(
        Zg,
        {
          scope: t,
          onClose: m.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Tl.displayName = _n;
var Jg = "MenuAnchor", si = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ln(n);
    return /* @__PURE__ */ d(Kp, { ...o, ...r, ref: t });
  }
);
si.displayName = Jg;
var ai = "MenuPortal", [Qg, _l] = Vt(ai, {
  forceMount: void 0
}), Ll = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Tt(ai, t);
  return /* @__PURE__ */ d(Qg, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Ot, { present: n || i.open, children: /* @__PURE__ */ d(oi, { asChild: !0, container: o, children: r }) }) });
};
Ll.displayName = ai;
var He = "MenuContent", [ev, li] = Vt(He), Fl = m.forwardRef(
  (e, t) => {
    const n = _l(He, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Tt(He, e.__scopeMenu), a = Fn(He, e.__scopeMenu);
    return /* @__PURE__ */ d(Rn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(Ot, { present: r || i.open, children: /* @__PURE__ */ d(Rn.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ d(tv, { ...o, ref: t }) : /* @__PURE__ */ d(nv, { ...o, ref: t }) }) }) });
  }
), tv = m.forwardRef(
  (e, t) => {
    const n = Tt(He, e.__scopeMenu), r = m.useRef(null), o = ve(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return Cl(i);
    }, []), /* @__PURE__ */ d(
      ci,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), nv = m.forwardRef((e, t) => {
  const n = Tt(He, e.__scopeMenu);
  return /* @__PURE__ */ d(
    ci,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), rv = /* @__PURE__ */ Pn("MenuContent.ScrollLock"), ci = m.forwardRef(
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
      onPointerDownOutside: f,
      onFocusOutside: u,
      onInteractOutside: h,
      onDismiss: p,
      disableOutsideScroll: b,
      ...g
    } = e, v = Tt(He, n), w = Fn(He, n), N = Ln(n), x = Ml(n), y = Xg(n), [P, E] = m.useState(null), S = m.useRef(null), C = ve(t, S, v.onContentChange), R = m.useRef(0), I = m.useRef(""), k = m.useRef(0), O = m.useRef(null), z = m.useRef("right"), F = m.useRef(0), K = b ? ii : m.Fragment, M = b ? { as: rv, allowPinchZoom: !0 } : void 0, T = (_) => {
      const L = I.current + _, Y = y().filter((V) => !V.disabled), Z = document.activeElement, oe = Y.find((V) => V.ref.current === Z)?.textValue, ie = Y.map((V) => V.textValue), ne = pv(ie, L, oe), B = Y.find((V) => V.textValue === ne)?.ref.current;
      (function V(Q) {
        I.current = Q, window.clearTimeout(R.current), Q !== "" && (R.current = window.setTimeout(() => V(""), 1e3));
      })(L), B && setTimeout(() => B.focus());
    };
    m.useEffect(() => () => window.clearTimeout(R.current), []), Va();
    const $ = m.useCallback((_) => z.current === O.current?.side && vv(_, O.current?.area), []);
    return /* @__PURE__ */ d(
      ev,
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
            $(_) || (S.current?.focus(), E(null));
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
        children: /* @__PURE__ */ d(K, { ...M, children: /* @__PURE__ */ d(
          Yo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(i, (_) => {
              _.preventDefault(), S.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ d(
              Uo,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: f,
                onFocusOutside: u,
                onInteractOutside: h,
                onDismiss: p,
                children: /* @__PURE__ */ d(
                  og,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: P,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: q(l, (_) => {
                      w.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d(
                      Wp,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ec(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...N,
                        ...g,
                        ref: C,
                        style: { outline: "none", ...g.style },
                        onKeyDown: q(g.onKeyDown, (_) => {
                          const Y = _.target.closest("[data-radix-menu-content]") === _.currentTarget, Z = _.ctrlKey || _.altKey || _.metaKey, oe = _.key.length === 1;
                          Y && (_.key === "Tab" && _.preventDefault(), !Z && oe && T(_.key));
                          const ie = S.current;
                          if (_.target !== ie || !Gg.includes(_.key)) return;
                          _.preventDefault();
                          const B = y().filter((V) => !V.disabled).map((V) => V.ref.current);
                          kl.includes(_.key) && B.reverse(), hv(B);
                        }),
                        onBlur: q(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(R.current), I.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          In((_) => {
                            const L = _.target, Y = F.current !== _.clientX;
                            if (_.currentTarget.contains(L) && Y) {
                              const Z = _.clientX > F.current ? "right" : "left";
                              z.current = Z, F.current = _.clientX;
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
Fl.displayName = He;
var ov = "MenuGroup", ui = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(be.div, { role: "group", ...r, ref: t });
  }
);
ui.displayName = ov;
var iv = "MenuLabel", $l = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(be.div, { ...r, ref: t });
  }
);
$l.displayName = iv;
var yr = "MenuItem", Ls = "menu.itemSelect", Fr = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = m.useRef(null), a = Fn(yr, e.__scopeMenu), s = li(yr, e.__scopeMenu), l = ve(t, i), c = m.useRef(!1), f = () => {
      const u = i.current;
      if (!n && u) {
        const h = new CustomEvent(Ls, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Ls, (p) => r?.(p), { once: !0 }), Ka(u, h), h.defaultPrevented ? c.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ d(
      zl,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: q(e.onClick, f),
        onPointerDown: (u) => {
          e.onPointerDown?.(u), c.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (u) => {
          c.current || u.currentTarget?.click();
        }),
        onKeyDown: q(e.onKeyDown, (u) => {
          const h = s.searchRef.current !== "";
          n || h && u.key === " " || Io.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Fr.displayName = yr;
var zl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = li(yr, n), s = Ml(n), l = m.useRef(null), c = ve(t, l), [f, u] = m.useState(!1), [h, p] = m.useState("");
    return m.useEffect(() => {
      const b = l.current;
      b && p((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ d(
      Rn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ d(ig, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ d(
          be.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: q(
              e.onPointerMove,
              In((b) => {
                r ? a.onItemLeave(b) : (a.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              In((b) => a.onItemLeave(b))
            ),
            onFocus: q(e.onFocus, () => u(!0)),
            onBlur: q(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), sv = "MenuCheckboxItem", Bl = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d(Hl, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d(
      Fr,
      {
        role: "menuitemcheckbox",
        "aria-checked": wr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": hi(n),
        onSelect: q(
          o.onSelect,
          () => r?.(wr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Bl.displayName = sv;
var Kl = "MenuRadioGroup", [av, lv] = Vt(
  Kl,
  { value: void 0, onValueChange: () => {
  } }
), Wl = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = st(r);
    return /* @__PURE__ */ d(av, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ d(ui, { ...o, ref: t }) });
  }
);
Wl.displayName = Kl;
var jl = "MenuRadioItem", Vl = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = lv(jl, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ d(Hl, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ d(
      Fr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": hi(i),
        onSelect: q(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Vl.displayName = jl;
var di = "MenuItemIndicator", [Hl, cv] = Vt(
  di,
  { checked: !1 }
), Gl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = cv(di, n);
    return /* @__PURE__ */ d(
      Ot,
      {
        present: r || wr(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ d(
          be.span,
          {
            ...o,
            ref: t,
            "data-state": hi(i.checked)
          }
        )
      }
    );
  }
);
Gl.displayName = di;
var uv = "MenuSeparator", Ul = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(
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
Ul.displayName = uv;
var dv = "MenuArrow", Yl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ln(n);
    return /* @__PURE__ */ d(jp, { ...o, ...r, ref: t });
  }
);
Yl.displayName = dv;
var fi = "MenuSub", [fv, Xl] = Vt(fi), ql = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = Tt(fi, t), a = Ln(t), [s, l] = m.useState(null), [c, f] = m.useState(null), u = st(o);
  return m.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ d(ml, { ...a, children: /* @__PURE__ */ d(
    Ol,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ d(
        fv,
        {
          scope: t,
          contentId: Et(),
          triggerId: Et(),
          trigger: s,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
ql.displayName = fi;
var xn = "MenuSubTrigger", Zl = m.forwardRef(
  (e, t) => {
    const n = Tt(xn, e.__scopeMenu), r = Fn(xn, e.__scopeMenu), o = Xl(xn, e.__scopeMenu), i = li(xn, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = i, c = { __scopeMenu: e.__scopeMenu }, f = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => f, [f]), m.useEffect(() => {
      const u = s.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [s, l]), /* @__PURE__ */ d(si, { asChild: !0, ...c, children: /* @__PURE__ */ d(
      zl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": ec(n.open),
        ...e,
        ref: Mn(t, o.onTriggerChange),
        onClick: (u) => {
          e.onClick?.(u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          In((u) => {
            i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          In((u) => {
            f();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const p = n.content?.dataset.side, b = p === "right", g = b ? -5 : 5, v = h[b ? "left" : "right"], w = h[b ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + g, y: u.clientY },
                  { x: v, y: h.top },
                  { x: w, y: h.top },
                  { x: w, y: h.bottom },
                  { x: v, y: h.bottom }
                ],
                side: p
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
        onKeyDown: q(e.onKeyDown, (u) => {
          const h = i.searchRef.current !== "";
          e.disabled || h && u.key === " " || Ug[r.dir].includes(u.key) && (n.onOpenChange(!0), n.content?.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Zl.displayName = xn;
var Jl = "MenuSubContent", Ql = m.forwardRef(
  (e, t) => {
    const n = _l(He, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Tt(He, e.__scopeMenu), a = Fn(He, e.__scopeMenu), s = Xl(Jl, e.__scopeMenu), l = m.useRef(null), c = ve(t, l);
    return /* @__PURE__ */ d(Rn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(Ot, { present: r || i.open, children: /* @__PURE__ */ d(Rn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(
      ci,
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
        onOpenAutoFocus: (f) => {
          a.isUsingKeyboardRef.current && l.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: q(e.onFocusOutside, (f) => {
          f.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (f) => {
          const u = f.currentTarget.contains(f.target), h = Yg[a.dir].includes(f.key);
          u && h && (i.onOpenChange(!1), s.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ql.displayName = Jl;
function ec(e) {
  return e ? "open" : "closed";
}
function wr(e) {
  return e === "indeterminate";
}
function hi(e) {
  return wr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function hv(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function mv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function pv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = mv(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const l = a.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function gv(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], l = t[a], c = s.x, f = s.y, u = l.x, h = l.y;
    f > r != h > r && n < (u - c) * (r - f) / (h - f) + c && (o = !o);
  }
  return o;
}
function vv(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return gv(n, t);
}
function In(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var bv = Tl, yv = si, wv = Ll, xv = Fl, Cv = ui, Sv = $l, Nv = Fr, Pv = Bl, Ev = Wl, Rv = Vl, Iv = Gl, Av = Ul, kv = Yl, Dv = ql, Mv = Zl, Ov = Ql, $r = "DropdownMenu", [Tv] = gt(
  $r,
  [Dl]
), ke = Dl(), [_v, tc] = Tv($r), nc = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, l = ke(t), c = m.useRef(null), [f, u] = sn({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: $r
  });
  return /* @__PURE__ */ d(
    _v,
    {
      scope: t,
      triggerId: Et(),
      triggerRef: c,
      contentId: Et(),
      open: f,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((h) => !h), [u]),
      modal: s,
      children: /* @__PURE__ */ d(bv, { ...l, open: f, onOpenChange: u, dir: r, modal: s, children: n })
    }
  );
};
nc.displayName = $r;
var rc = "DropdownMenuTrigger", oc = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = tc(rc, n), a = ke(n);
    return /* @__PURE__ */ d(yv, { asChild: !0, ...a, children: /* @__PURE__ */ d(
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
        ref: Mn(t, i.triggerRef),
        onPointerDown: q(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
oc.displayName = rc;
var Lv = "DropdownMenuPortal", ic = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ke(t);
  return /* @__PURE__ */ d(wv, { ...r, ...n });
};
ic.displayName = Lv;
var sc = "DropdownMenuContent", ac = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = tc(sc, n), i = ke(n), a = m.useRef(!1);
    return /* @__PURE__ */ d(
      xv,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || c;
          (!o.modal || f) && (a.current = !0);
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
ac.displayName = sc;
var Fv = "DropdownMenuGroup", $v = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
    return /* @__PURE__ */ d(Cv, { ...o, ...r, ref: t });
  }
);
$v.displayName = Fv;
var zv = "DropdownMenuLabel", lc = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
    return /* @__PURE__ */ d(Sv, { ...o, ...r, ref: t });
  }
);
lc.displayName = zv;
var Bv = "DropdownMenuItem", cc = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
    return /* @__PURE__ */ d(Nv, { ...o, ...r, ref: t });
  }
);
cc.displayName = Bv;
var Kv = "DropdownMenuCheckboxItem", uc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ d(Pv, { ...o, ...r, ref: t });
});
uc.displayName = Kv;
var Wv = "DropdownMenuRadioGroup", jv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ d(Ev, { ...o, ...r, ref: t });
});
jv.displayName = Wv;
var Vv = "DropdownMenuRadioItem", dc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ d(Rv, { ...o, ...r, ref: t });
});
dc.displayName = Vv;
var Hv = "DropdownMenuItemIndicator", Gv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ d(Iv, { ...o, ...r, ref: t });
});
Gv.displayName = Hv;
var Uv = "DropdownMenuSeparator", fc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ d(Av, { ...o, ...r, ref: t });
});
fc.displayName = Uv;
var Yv = "DropdownMenuArrow", Xv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
    return /* @__PURE__ */ d(kv, { ...o, ...r, ref: t });
  }
);
Xv.displayName = Yv;
var qv = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, a = ke(t), [s, l] = sn({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ d(Dv, { ...a, open: s, onOpenChange: l, children: n });
}, Zv = "DropdownMenuSubTrigger", hc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ d(Mv, { ...o, ...r, ref: t });
});
hc.displayName = Zv;
var Jv = "DropdownMenuSubContent", mc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ke(n);
  return /* @__PURE__ */ d(
    Ov,
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
mc.displayName = Jv;
var Qv = nc, eb = oc, tb = ic, pc = ac, gc = lc, vc = cc, bc = uc, yc = dc, wc = fc, nb = qv, xc = hc, Cc = mc;
const $n = Qv, zn = eb, Fs = nb, Sc = m.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d(
  xc,
  {
    ref: o,
    className: ae(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100",
      t && "pl-8",
      e
    ),
    ...r,
    children: n
  }
));
Sc.displayName = xc.displayName;
const Ao = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Cc,
  {
    ref: n,
    className: ae(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Ao.displayName = Cc.displayName;
const cn = m.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = Wo();
  return /* @__PURE__ */ d(tb, { container: o || void 0, children: /* @__PURE__ */ d(
    pc,
    {
      ref: r,
      sideOffset: t,
      "data-uhuu-editor": !0,
      className: ae(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  ) });
});
cn.displayName = pc.displayName;
const $e = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  vc,
  {
    ref: r,
    className: ae(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
$e.displayName = vc.displayName;
const rb = m.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d(
  bc,
  {
    ref: o,
    className: ae(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: t
  }
));
rb.displayName = bc.displayName;
const ob = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d(
  yc,
  {
    ref: r,
    className: ae(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: t
  }
));
ob.displayName = yc.displayName;
const Nc = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  gc,
  {
    ref: r,
    className: ae(
      "px-2 py-1.5 text-sm font-medium",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Nc.displayName = gc.displayName;
const zt = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  wc,
  {
    ref: n,
    className: ae("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
zt.displayName = wc.displayName;
const ib = (e, t) => {
  if (!(typeof window < "u" && window.$uhuu_renderer)) {
    if (e.stopPropagation(), t.onSelect) {
      t.onSelect(e);
      return;
    }
    t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog);
  }
}, mi = (e, t) => {
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
    return /* @__PURE__ */ d(
      "div",
      {
        className: ae("pointer-events-none absolute inset-0 z-10", t),
        "aria-hidden": "true",
        dangerouslySetInnerHTML: { __html: o }
      }
    );
  }
  return /* @__PURE__ */ d(
    "img",
    {
      src: e,
      alt: "",
      "aria-hidden": "true",
      className: ae(
        "pointer-events-none absolute inset-0 z-10 h-full w-full object-cover",
        t
      )
    }
  );
}, pi = (e, t) => t ? /* @__PURE__ */ d("div", { className: "absolute right-2 top-2 z-20", children: /* @__PURE__ */ D($n, { modal: !1, children: [
  /* @__PURE__ */ d(zn, { asChild: !0, children: /* @__PURE__ */ d(
    Ae,
    {
      variant: "secondary",
      size: "icon",
      title: "Image options",
      className: "h-7 w-7 shadow-sm",
      onPointerDown: (n) => n.stopPropagation(),
      onClick: (n) => n.stopPropagation(),
      children: /* @__PURE__ */ d(Ta, { className: "h-4 w-4" })
    }
  ) }),
  /* @__PURE__ */ d(cn, { className: "w-40 p-1.5", align: "end", children: e.map((n) => /* @__PURE__ */ D(
    $e,
    {
      onSelect: (r) => ib(r, n),
      disabled: n.disabled,
      children: [
        n.icon && /* @__PURE__ */ d("span", { className: "mr-2 inline-flex", children: n.icon }),
        /* @__PURE__ */ d("span", { children: n.label })
      ]
    },
    n.id
  )) })
] }) }) : null, gi = (e = []) => {
  const t = Vo();
  return e.length > 0 && !t;
}, sb = ({
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
  const c = Ce(Wt), f = gi(o), u = i ? on({ dialog: i }, c) : {};
  return m.useMemo(() => {
    if (!a) return u;
    const h = { ...u, ...a };
    return (u.className || a.className) && (h.className = `${u.className || ""} ${a.className || ""}`.trim()), Object.keys(u).forEach((p) => {
      const b = u[p], g = a[p];
      p.startsWith("on") && typeof b == "function" && typeof g == "function" && (h[p] = (v) => {
        b(v), g(v);
      });
    }), h;
  }, [u, a]), /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ D(Bo, { ...s, dialog: i, children: [
      mi(n, r),
      l
    ] }),
    pi(o, f)
  ] });
};
function vi(e) {
  const t = Ce(Wt), n = zo({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, i = e.pageHeight ?? t?.page?.height ?? 297, {
    src: a,
    imageClassName: s,
    side: l,
    backgroundColor: c,
    width: f,
    height: u,
    left: h = 0,
    right: p = 0,
    top: b = 0,
    bottom: g = 0
  } = e, v = (F) => `${F}mm`, w = () => {
    let F = f;
    return f ? !h && !p && (F += r) : (F = 2 * o, h || (F += 2 * r), p || (F += 2 * r), (h || p) && (F -= (h ?? 0) + (p ?? 0))), F;
  }, N = () => {
    let F = u;
    return u ? !b && !g && (F += r) : (F = i, b || (F += r), g || (F += r), (b || g) && (F -= (b ?? 0) + (g ?? 0))), F;
  }, x = w(), y = N(), P = (F) => F !== void 0 ? v(F) : void 0, E = (F) => Object.fromEntries(
    Object.entries(F).filter(([K, M]) => M !== void 0)
  ), S = h > 0 ? h + r : 0, C = b > 0 ? b + r : 0, R = g > 0 ? g + r : 0, I = -1 * o + S, k = b > 0 && g > 0, O = E({
    backgroundColor: c,
    width: P(x),
    ...k ? { height: P(y) } : {},
    left: P(S),
    top: P(C),
    bottom: P(R)
  }), z = E({
    width: P(x),
    ...k ? { height: P(y) } : {},
    left: P(I),
    top: P(C),
    bottom: P(R)
  });
  return /* @__PURE__ */ d("div", { className: "uhuu-image-container", style: l == "end" ? z : O, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ D("div", { className: "uhuu-image-inner", ...on(e, t), children: [
    /* @__PURE__ */ d(
      "img",
      {
        className: ae("cover-image object-cover object-center", s),
        src: a || null,
        onError: n
      }
    ),
    e.children
  ] }) });
}
const ab = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: i
}) => {
  const a = gi(n);
  return /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ D(vi, { ...o, dialog: r, children: [
      mi(e, t),
      i
    ] }),
    pi(n, a)
  ] });
}, lb = ({
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
  dialogProps: f,
  placeholder: u,
  children: h,
  imageProps: p,
  renderImage: b,
  onError: g
}) => {
  const v = Ce(Wt), w = c ? on({ dialog: c }, v) : {}, N = gi(l), x = zo({
    onError: (I) => {
      g?.(I), p?.onError?.(I);
    }
  }), y = m.useMemo(() => {
    if (!f) return w;
    const I = { ...w, ...f };
    return (w.className || f.className) && (I.className = ae(w.className, f.className)), Object.keys(w).forEach((k) => {
      const O = w[k], z = f[k];
      k.startsWith("on") && typeof O == "function" && typeof z == "function" && (I[k] = (F) => {
        O(F), z(F);
      });
    }), I;
  }, [w, f]), P = () => {
    const I = p?.className, k = p?.style, O = p?.src ?? e, z = p?.alt ?? t, F = {
      ...p,
      src: O,
      alt: z,
      className: ae("h-full w-full object-cover", r, I),
      style: { ...i, ...k }
    };
    return b ? b(F) : O ? /* @__PURE__ */ d("img", { ...F, onError: x }) : u ?? null;
  }, E = y["data-uhuu"], S = m.Children.toArray(h).some((I) => m.isValidElement(I) ? I.type === vi || I.type === Bo : !1);
  S && delete y["data-uhuu"];
  const C = m.Children.map(h, (I) => m.isValidElement(I) ? m.cloneElement(I, { dataUhuu: E }) : I);
  return /* @__PURE__ */ D("div", { className: ae(S ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ D("div", { className: "relative h-full w-full", ...y, children: [
      P(),
      C,
      mi(a, s)
    ] }),
    pi(l, N)
  ] });
}, ux = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = U(() => {
    const { annotation: M, dialog: T, overlaySvg: $, options: _, src: L } = e;
    if (!M && !T)
      return {
        computedOverlaySvg: $,
        computedOptions: _,
        computedDirectDialog: void 0
      };
    const Y = M?.value || {}, Z = $ ?? Y.annotationSvg ?? "", oe = [];
    if (M) {
      if (T) {
        const ue = {
          ...T
          // Spread everything (path, type, ratio, etc.)
        };
        if (T.type === "satellite") {
          const { path: me, type: pe, ...De } = T;
          ue.config = {
            ...De,
            path: "image"
          }, ue.path = me, ue.type = pe;
        }
        oe.push({
          id: "edit",
          label: "Edit image",
          dialog: ue
        });
      }
      const B = Array.isArray(Y.annotations) ? Y.annotations : [], { path: V, value: Q, annotations: X, ...H } = M, se = {
        path: M.path,
        type: "annotation",
        image: L,
        annotations: B,
        ...H
        // Spread extra config (visualGallery, etc.)
      };
      oe.push({
        id: "annotate",
        label: "Annotate",
        dialog: se
      });
    }
    const ie = _ ? [...oe, ..._] : oe;
    let ne;
    if (T) {
      const B = {
        ...T
        // Spread everything (path, type, ratio, etc.)
      };
      if (T.type === "satellite") {
        const { path: V, type: Q, ...X } = T;
        B.config = {
          ...X,
          path: "image"
        }, B.path = V, B.type = Q;
      }
      ne = B;
    }
    return {
      computedOverlaySvg: Z,
      computedOptions: ie.length > 0 ? ie : void 0,
      computedDirectDialog: ne
    };
  }, [e.annotation, e.dialog, e.overlaySvg, e.options, e.src]), o = U(() => e.mode ? e.mode : e.side !== void 0 ? "spread" : e.width !== void 0 || e.height !== void 0 || e.left !== void 0 || e.right !== void 0 || e.top !== void 0 || e.bottom !== void 0 ? "bleed" : "auto", [e.mode, e.side, e.width, e.height, e.left, e.right, e.top, e.bottom]), i = o === "auto" || // Auto mode always uses ImageWithOptions
  n && n.length > 0 || t || r || // Need wrapper for click-to-edit
  e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, {
    mode: a,
    side: s,
    src: l,
    alt: c,
    className: f,
    imageClassName: u,
    style: h,
    imageStyle: p,
    backgroundColor: b,
    width: g,
    height: v,
    left: w,
    right: N,
    top: x,
    bottom: y,
    pageWidth: P,
    pageHeight: E,
    bleed: S,
    overlayClassName: C,
    dialogProps: R,
    placeholder: I,
    children: k,
    imageProps: O,
    renderImage: z,
    onError: F
  } = e, K = {
    src: l,
    backgroundColor: b,
    width: g,
    height: v,
    left: w,
    right: N,
    top: x,
    bottom: y,
    pageWidth: P,
    pageHeight: E,
    bleed: S,
    imageClassName: u,
    onError: F
  };
  if (o === "auto")
    return /* @__PURE__ */ d(
      lb,
      {
        src: l,
        alt: c,
        className: f,
        style: h,
        imageClassName: u,
        imageStyle: p,
        overlaySvg: t,
        overlayClassName: C,
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
    return i && (t || n?.length || r) ? /* @__PURE__ */ d(
      ab,
      {
        className: f,
        style: h,
        overlaySvg: t,
        overlayClassName: C,
        options: n,
        dialog: r,
        dialogProps: R,
        spreadProps: M,
        children: k
      }
    ) : /* @__PURE__ */ d(vi, { ...M });
  }
  return i && (t || n?.length || r) ? /* @__PURE__ */ d(
    sb,
    {
      className: f,
      style: h,
      overlaySvg: t,
      overlayClassName: C,
      options: n,
      dialog: r,
      dialogProps: R,
      bleedProps: K,
      children: k
    }
  ) : /* @__PURE__ */ d(Bo, { ...K });
}, Ht = "uhuu_page_editor";
function Le(e) {
  return e.kind === "group";
}
function cb(e) {
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
function ub(e) {
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
function ht(e) {
  return cb(e).length;
}
function db(e) {
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
function fb(e, t) {
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
function bi(e) {
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
function Pc(e, t = Ht) {
  const n = bi(e);
  return {
    key: t,
    items: n,
    totalPages: ht(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function hb(e, t = Ht) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = bi(n.items);
  return {
    key: t,
    items: r,
    totalPages: ht(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function mb(e, t, n = Ht) {
  const r = Pc(t, n);
  return { ...e ?? {}, [n]: r };
}
function Ec() {
  return Math.random().toString(36).slice(2, 11);
}
function Rc(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? Ec() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function Ic(e, t, n) {
  const r = n?.repeatable ? Ec() : e;
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
function $s(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function ko(e, t, n) {
  for (const r of t) {
    const o = $s(r.start, n), i = $s(r.end, n);
    if (e >= o && e <= i)
      return !0;
  }
  return !1;
}
function Ac(e, t, n = 2) {
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
function pb(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = ht(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, i = r === "custom" && t.ranges ? t.ranges : Ac(r, n, o);
  if (i.length === 0)
    return [];
  const a = [];
  for (const s of e)
    if (Le(s)) {
      const l = s.pages.filter((c) => c.pageNum && ko(c.pageNum, i, n));
      l.length > 0 && a.push({
        ...s,
        pages: l
      });
    } else
      s.pageNum && ko(s.pageNum, i, n) && a.push(s);
  return a;
}
function gb(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, i = r === "custom" && n.ranges ? n.ranges : Ac(r, t, o);
  return i.length === 0 ? !1 : ko(e, i, t);
}
function kc(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function vb(e, t) {
  return t && Le(t) ? t.id : e?.id ?? null;
}
function Dc(e, t, n) {
  const r = vb(t, n);
  return r ? {
    instanceId: r,
    integration: kc(e, r)
  } : { instanceId: null, integration: void 0 };
}
function Mc(e, t, n) {
  return Dc(e, t, n).integration;
}
function zs(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function bb(e) {
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
function yb(e, t, n) {
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
function wb(e, t, n) {
  const r = bb(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: i } = r, a = kc(e, o) || {}, s = yb(
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
function xr(e, t) {
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
const Bn = m.createContext(null);
function xb(e = Ht) {
  return [e];
}
function Cb(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function Oc({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = Ht
}) {
  const [o, i] = m.useState(e ?? {}), a = m.useRef(null), s = m.useRef(!1), l = m.useRef(null), c = m.useRef(0), f = m.useRef(!0), u = m.useCallback((C) => {
    try {
      return JSON.stringify(C);
    } catch {
      return String(C);
    }
  }, []), h = m.useMemo(() => xb(r), [r]), p = m.useCallback((C, R) => {
    if (!C) return null;
    const I = { ...C };
    return R.forEach((k) => {
      delete I[k];
    }), I;
  }, []);
  m.useEffect(() => {
    if (f.current) {
      f.current = !1, e && (a.current = e, i(e));
      return;
    }
    if (s.current) {
      s.current = !1;
      const I = l.current !== null ? u(p(l.current, h)) : null, k = u(p(e, h));
      if (I !== null && I === k) {
        a.current = e;
        return;
      }
    }
    if (e === a.current)
      return;
    if (Date.now() - c.current < 500 && l.current !== null) {
      const I = p(e, h), k = p(l.current, h), O = I ? u(I) : null, z = k ? u(k) : null;
      if (O && O === z) {
        l.current = null, a.current = e;
        return;
      }
    }
    a.current = e, i((I) => e ? Cb(I, e, h) : I);
  }, [e, h, u, p]);
  const b = m.useCallback(
    (C) => {
      if (t?.(C), typeof window > "u") return;
      const R = window.$uhuu;
      R?.emitPayload && R.emitPayload(C);
    },
    [t]
  ), g = m.useCallback(
    (C) => {
      s.current = !0, i((R) => {
        const I = typeof C == "function" ? C(R) : C;
        let k = I;
        return I && typeof I == "object" && Object.keys(I).filter(
          (z) => z.startsWith("integrations.") || z === "integrations"
        ).length > 0 && I.integrations && (k = I), l.current = k, c.current = Date.now(), queueMicrotask(() => b(k)), k;
      });
    },
    [b]
  ), v = m.useCallback(
    (C, R, I) => {
      g((k) => ({
        ...k ?? {},
        pages: {
          ...k?.pages ?? {},
          [C]: {
            ...k?.pages?.[C] ?? {},
            [R]: I
          }
        }
      }));
    },
    [g]
  ), w = m.useCallback(
    (C, R) => {
      g((I) => {
        const k = I?.integrations ?? {}, O = k[C], z = typeof R == "function" ? R(O) : R;
        return {
          ...I ?? {},
          integrations: {
            ...k,
            [C]: z
          }
        };
      });
    },
    [g]
  ), N = m.useCallback(
    (C, R, I) => {
      w(C, (k) => ({
        ...k ?? {},
        [R]: I
      }));
    },
    [w]
  ), x = m.useCallback(
    (C) => {
      g((R) => {
        if (!R?.integrations || !R.integrations[C])
          return R;
        const { [C]: I, ...k } = R.integrations;
        return {
          ...R,
          integrations: Object.keys(k).length > 0 ? k : void 0
        };
      });
    },
    [g]
  ), y = m.useCallback(
    (C, R) => {
      g((I) => wb(I, C, R));
    },
    [g]
  ), P = m.useCallback(
    (C, R) => {
      const I = R ?? r;
      g((k) => mb(k, C, I));
    },
    [g, r]
  ), E = m.useCallback(
    (C) => xr(o, C),
    [o]
  ), S = m.useMemo(
    () => ({
      payload: o,
      setPayload: g,
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
      g,
      v,
      w,
      N,
      x,
      y,
      P,
      E
    ]
  );
  return /* @__PURE__ */ d(Bn.Provider, { value: S, children: n });
}
function Sb(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function Nb(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function Pb(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (i) => {
      const a = t?.pages?.[i.id]?.[r];
      return a === void 0 ? Sb(e) : e.type === "toggle" ? !!a : a;
    },
    onChange: (i, a) => {
      n(i, r, Nb(e, a));
    }
  };
}
const Cr = Dt({ zoom: 100, scaleValue: 1, hideUI: !1 });
function Eb({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = Ce(Cr), o = de(null);
  return ce(() => {
    if (!o.current) return;
    const i = () => {
      const l = o.current?.querySelectorAll("[data-section-content]");
      if (!l?.length) return;
      const c = Array.from(l).reduce((f, u) => {
        const h = Number.parseInt(u.getAttribute("data-natural-width") || "0");
        return f + h;
      }, 0);
      if (c > 0) {
        const f = c * r;
        o.current?.style.setProperty("--uhuu-group-pair-width", `${f}px`);
      }
    };
    i();
    const a = new ResizeObserver(i);
    return o.current.querySelectorAll("[data-section-content]").forEach((l) => a.observe(l)), () => a.disconnect();
  }, [e, r]), /* @__PURE__ */ d(
    "div",
    {
      ref: o,
      className: `two-pages-pair two-pages-pair--${t}`,
      "data-page-item-id": n,
      children: e
    }
  );
}
function co({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: i, hideUI: a } = Ce(Cr), s = de(null), [l, c] = te(0), [f, u] = te(0);
  ce(() => {
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
  const h = l * i, p = Math.max(f * i, 150), b = {
    left: { justify: "justify-start", origin: "top left" },
    right: { justify: "justify-end", origin: "top right" },
    center: { justify: "justify-center", origin: "top center" }
  }, { justify: g, origin: v } = b[o];
  return a ? /* @__PURE__ */ d("div", { className: n, children: e }) : /* @__PURE__ */ D(
    "div",
    {
      className: `group/section ${n}`,
      style: {
        width: `${p}px`,
        minWidth: "150px"
      },
      children: [
        /* @__PURE__ */ d("div", { children: r ?? /* @__PURE__ */ d("div", { className: "px-4 py-2 border-b border-gray-200", children: /* @__PURE__ */ D("div", { className: "text-sm font-medium text-gray-700", children: [
          t,
          " Controls"
        ] }) }) }),
        /* @__PURE__ */ d(
          "div",
          {
            className: "pt-1",
            style: {
              height: h > 0 ? `${h + 32}px` : "auto",
              minHeight: "100px"
            },
            children: /* @__PURE__ */ d("div", { className: `flex items-start ${g}`, children: /* @__PURE__ */ d(
              "div",
              {
                ref: s,
                "data-section-content": !0,
                "data-natural-width": f,
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
function Rb({
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
  const c = Vo(), f = s ?? c, [u, h] = te(n), [p, b] = te("none"), g = de(null), v = de(null), [w, N] = te(!1), [x, y] = te(0), [P, E] = te(!0), S = (O) => {
    if (!g.current || !v.current) return u;
    const z = g.current.getBoundingClientRect(), F = v.current.querySelector("[data-section-content]");
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
  }, C = (O) => {
    if (b(O), O !== "none") {
      const z = S(O);
      h(z);
    }
  }, R = () => {
    const O = Math.min(u + 25, o);
    h(O), b("none");
  }, I = () => {
    const O = Math.max(u - 25, r);
    h(O), b("none");
  };
  ce(() => {
    const O = () => {
      if (!g.current || !v.current) return;
      const K = g.current.getBoundingClientRect().width;
      if (!w) {
        const M = v.current.querySelector("[data-section-content]");
        if (M) {
          const T = Number.parseInt(M.getAttribute("data-natural-width") || "0");
          if (T > 0) {
            if (T > K - 48) {
              const $ = S("both");
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
      if (!g.current || P) return;
      const K = g.current.getBoundingClientRect().width;
      if (Math.abs(K - x) > 10) {
        if (p !== "none") {
          const M = S(p);
          h(M);
        }
        y(K);
      }
    };
    return O(), window.addEventListener("resize", z), () => {
      window.removeEventListener("resize", z);
    };
  }, [p, r, o, w, x, P]);
  const k = u / 100;
  return f ? /* @__PURE__ */ d(Cr.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ d("div", { className: t, children: e }) }) : /* @__PURE__ */ d(Cr.Provider, { value: { zoom: u, scaleValue: k, hideUI: !1 }, children: /* @__PURE__ */ D("div", { ref: g, className: `flex flex-col min-h-0 ${t}`, children: [
    /* @__PURE__ */ D("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      a,
      /* @__PURE__ */ d("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ D($n, { modal: !1, children: [
        /* @__PURE__ */ d(zn, { asChild: !0, children: /* @__PURE__ */ D(Ae, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(u),
          "%",
          /* @__PURE__ */ d(Oa, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ D(cn, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ D(
            $e,
            {
              onClick: () => C("width"),
              className: `cursor-pointer flex items-center ${p === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ d(Th, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ d("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ D(
            $e,
            {
              onClick: () => C("height"),
              className: `cursor-pointer flex items-center ${p === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ d(Lh, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ d("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ D(
            $e,
            {
              onClick: () => C("both"),
              className: `cursor-pointer flex items-center ${p === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ d(Sh, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ d("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ d(zt, { className: "my-1.5" }),
          /* @__PURE__ */ D("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (O) => O.stopPropagation(), children: [
            /* @__PURE__ */ d(
              Ae,
              {
                variant: "ghost",
                size: "sm",
                onClick: (O) => {
                  O.stopPropagation(), I();
                },
                disabled: u <= r,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom out (25%)",
                children: /* @__PURE__ */ d(Kh, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ D("div", { className: "relative", children: [
              /* @__PURE__ */ d(
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
              /* @__PURE__ */ d("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none", children: "%" })
            ] }),
            /* @__PURE__ */ d(
              Ae,
              {
                variant: "ghost",
                size: "sm",
                onClick: (O) => {
                  O.stopPropagation(), R();
                },
                disabled: u >= o,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom in (25%)",
                children: /* @__PURE__ */ d(zh, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { ref: v, children: /* @__PURE__ */ d("div", { className: l === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e }) }),
    /* @__PURE__ */ d("div", { className: "pb-16" })
  ] }) });
}
var zr = "Dialog", [Tc, _c] = gt(zr), [Ib, Je] = Tc(zr), Lc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = m.useRef(null), l = m.useRef(null), [c, f] = sn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: zr
  });
  return /* @__PURE__ */ d(
    Ib,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Et(),
      titleId: Et(),
      descriptionId: Et(),
      open: c,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((u) => !u), [f]),
      modal: a,
      children: n
    }
  );
};
Lc.displayName = zr;
var Fc = "DialogTrigger", $c = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Fc, n), i = ve(t, o.triggerRef);
    return /* @__PURE__ */ d(
      be.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": xi(o.open),
        ...r,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
$c.displayName = Fc;
var yi = "DialogPortal", [Ab, zc] = Tc(yi, {
  forceMount: void 0
}), Bc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Je(yi, t);
  return /* @__PURE__ */ d(Ab, { scope: t, forceMount: n, children: m.Children.map(r, (a) => /* @__PURE__ */ d(Ot, { present: n || i.open, children: /* @__PURE__ */ d(oi, { asChild: !0, container: o, children: a }) })) });
};
Bc.displayName = yi;
var Sr = "DialogOverlay", Kc = m.forwardRef(
  (e, t) => {
    const n = zc(Sr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Je(Sr, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ d(Ot, { present: r || i.open, children: /* @__PURE__ */ d(Db, { ...o, ref: t }) }) : null;
  }
);
Kc.displayName = Sr;
var kb = /* @__PURE__ */ Pn("DialogOverlay.RemoveScroll"), Db = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Sr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(ii, { as: kb, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d(
        be.div,
        {
          "data-state": xi(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Kt = "DialogContent", Wc = m.forwardRef(
  (e, t) => {
    const n = zc(Kt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Je(Kt, e.__scopeDialog);
    return /* @__PURE__ */ d(Ot, { present: r || i.open, children: i.modal ? /* @__PURE__ */ d(Mb, { ...o, ref: t }) : /* @__PURE__ */ d(Ob, { ...o, ref: t }) });
  }
);
Wc.displayName = Kt;
var Mb = m.forwardRef(
  (e, t) => {
    const n = Je(Kt, e.__scopeDialog), r = m.useRef(null), o = ve(t, n.contentRef, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return Cl(i);
    }, []), /* @__PURE__ */ d(
      jc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Ob = m.forwardRef(
  (e, t) => {
    const n = Je(Kt, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ d(
      jc,
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
), jc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Je(Kt, n), l = m.useRef(null), c = ve(t, l);
    return Va(), /* @__PURE__ */ D(Oe, { children: [
      /* @__PURE__ */ d(
        Yo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ d(
            Uo,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": xi(s.open),
              ...a,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ D(Oe, { children: [
        /* @__PURE__ */ d(_b, { titleId: s.titleId }),
        /* @__PURE__ */ d(Fb, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), wi = "DialogTitle", Vc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(wi, n);
    return /* @__PURE__ */ d(be.h2, { id: o.titleId, ...r, ref: t });
  }
);
Vc.displayName = wi;
var Hc = "DialogDescription", Gc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Hc, n);
    return /* @__PURE__ */ d(be.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Gc.displayName = Hc;
var Uc = "DialogClose", Yc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Uc, n);
    return /* @__PURE__ */ d(
      be.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Yc.displayName = Uc;
function xi(e) {
  return e ? "open" : "closed";
}
var Xc = "DialogTitleWarning", [Tb, qc] = Uh(Xc, {
  contentName: Kt,
  titleName: wi,
  docsSlug: "dialog"
}), _b = ({ titleId: e }) => {
  const t = qc(Xc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Lb = "DialogDescriptionWarning", Fb = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${qc(Lb).contentName}}.`;
  return m.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Zc = Lc, $b = $c, Jc = Bc, Ci = Kc, Si = Wc, Ni = Vc, Pi = Gc, Ei = Yc;
const Qc = Zc, zb = Jc, eu = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Ci,
  {
    className: ae(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
eu.displayName = Ci.displayName;
const Ri = m.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: i } = Wo();
  return /* @__PURE__ */ D(zb, { container: i || void 0, children: [
    /* @__PURE__ */ d(eu, {}),
    /* @__PURE__ */ D(
      Si,
      {
        ref: o,
        className: ae(
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
          /* @__PURE__ */ D(Ei, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ d(La, { className: "h-4 w-4" }),
            /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
Ri.displayName = Si.displayName;
const Ii = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "div",
  {
    className: ae(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ii.displayName = "SheetHeader";
const tu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "div",
  {
    className: ae(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
tu.displayName = "SheetFooter";
const Ai = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Ni,
  {
    ref: n,
    className: ae("text-lg font-medium text-gray-900", e),
    ...t
  }
));
Ai.displayName = Ni.displayName;
const ki = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Pi,
  {
    ref: n,
    className: ae("text-sm text-gray-500", e),
    ...t
  }
));
ki.displayName = Pi.displayName;
function Di(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: i
  } = e, a = ua.resolveDimensions(r), s = a.width, l = a.height, c = s / l, f = o, u = i ?? Math.round(f / c), h = s * 3.779527559, p = l * 3.779527559;
  return (b, g, v) => {
    const w = b.strictPosition, N = w === "start" || w === "end";
    if (b.kind === "group") {
      const x = b.firstPageId, y = b.firstPageComponentKey ?? x, P = xr(n, { id: x, componentKey: y }), E = b.firstPageComponent || (y ? t[y] : null), S = n?.integrations?.[b.id];
      return /* @__PURE__ */ D(
        "div",
        {
          className: `relative bg-white border transition-all ${v ? "border-blue-400 shadow-2xl scale-105" : N ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${f}px`, height: `${u}px` },
          title: b.id,
          children: [
            E ? /* @__PURE__ */ d(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ d(
                  "div",
                  {
                    style: {
                      transform: `scale(${Math.min(f / h, u / p)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ d("div", { className: "!shrink-0", style: { width: `${h}px`, height: `${p}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ d(
                      E,
                      {
                        payload: n,
                        pageId: x,
                        templateId: y,
                        pagePayload: P,
                        componentKey: y,
                        integration: S,
                        parentGroup: b
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ d("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ D("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ D("div", { className: "text-sm font-medium text-gray-700", children: [
                "Group ",
                b.id
              ] }),
              /* @__PURE__ */ d("div", { className: "text-xs text-gray-500 mt-1", children: x || "No preview" })
            ] }) }),
            /* @__PURE__ */ D("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
              "Group (",
              b.pageCount,
              " pages)"
            ] }),
            N && /* @__PURE__ */ D("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ d(xo, { className: "size-3" }),
              /* @__PURE__ */ d("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ d("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ d("div", { className: "text-sm font-medium truncate", children: b.label || b.id }) }) }) }),
            v && /* @__PURE__ */ d("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ d("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const x = b.pageId, y = b.pageComponentKey ?? x, P = xr(n, { id: x, componentKey: y }), E = b.pageComponent || (y ? t[y] : null), S = x ? Mc(n, { id: x }) : void 0;
      return /* @__PURE__ */ D(
        "div",
        {
          className: `relative bg-white border transition-all ${v ? "border-blue-400 shadow-2xl scale-105" : N ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${f}px`, height: `${u}px` },
          title: b.pageId,
          children: [
            E ? /* @__PURE__ */ d(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ d(
                  "div",
                  {
                    className: "flex items-center justify-center pointer-events-none",
                    style: {
                      transform: `scale(${Math.min(f / h, u / p)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ d("div", { className: "!shrink-0", style: { width: `${h}px`, height: `${p}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ d(
                      E,
                      {
                        payload: n,
                        pageId: x,
                        templateId: y,
                        pagePayload: P,
                        componentKey: y,
                        integration: S
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ d("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ D("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ D("div", { className: "text-sm font-medium text-gray-700", children: [
                "Page ",
                b.pageNum
              ] }),
              /* @__PURE__ */ d("div", { className: "text-xs text-gray-500 mt-1", children: x || "No preview" })
            ] }) }),
            N && /* @__PURE__ */ D("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ d(xo, { className: "size-3" }),
              /* @__PURE__ */ d("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ d("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ d("div", { className: "text-sm font-medium truncate", children: b.pageLabel || `Page ${b.pageNum}` }) }) }) }),
            v && /* @__PURE__ */ d("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ d("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging..." }) })
          ]
        }
      );
    }
  };
}
function Bb({
  open: e,
  onOpenChange: t,
  availableItems: n,
  onSelectItem: r,
  pageComponents: o,
  payload: i,
  setup: a = { width: 210, height: 297 },
  gridColsClass: s = "page-order-grid-cols"
}) {
  const [l, c] = m.useState(""), f = m.useMemo(() => {
    if (!l.trim()) return n;
    const y = l.toLowerCase();
    return n.filter(
      (P) => (P.label || "").toLowerCase().includes(y) || P.id.toLowerCase().includes(y)
    );
  }, [n, l]), u = (y) => {
    t(!1), r(y);
  }, h = a.width || 210, p = a.height || 297, b = h / p, g = 200, v = Math.round(g / b), w = m.useMemo(() => o ? Di({
    pageComponents: o,
    payload: i,
    setup: a,
    thumbnailWidth: g,
    thumbnailHeight: v
  }) : null, [o, i, a, g, v]), N = (y, P) => {
    if (!y) return [];
    if (Array.isArray(y)) return y;
    try {
      const E = y(P);
      if (!Array.isArray(E))
        return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof E), [];
      const S = E.filter((C) => typeof C == "string");
      return S.length !== E.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), S;
    } catch (E) {
      return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", E), [];
    }
  }, x = (y, P) => {
    if (y.kind === "group") {
      const C = y, R = { payload: i, item: void 0, parent: void 0 }, I = N(C.pageComponentKeys, R), k = I[0];
      return {
        kind: "group",
        id: y.id,
        label: y.label,
        pageCount: I.length,
        firstPageId: k,
        firstPageComponentKey: k
      };
    }
    const E = y, S = E.componentKey ?? E.id;
    return {
      kind: "page",
      id: E.id,
      pageId: E.id,
      pageComponentKey: S,
      pageLabel: E.label,
      pageNum: P + 1
    };
  };
  return /* @__PURE__ */ d(Qc, { open: e, onOpenChange: t, children: /* @__PURE__ */ D(Ri, { side: "bottom", className: "h-[90vh] p-0 gap-0 w-full max-w-none bg-gray-50", "data-uhuu-editor": !0, children: [
    /* @__PURE__ */ d(Ii, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ D("div", { className: "flex items-end gap-3", children: [
      /* @__PURE__ */ d("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ d(nt, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ D("div", { className: "flex-1", children: [
        /* @__PURE__ */ d(Ai, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
        /* @__PURE__ */ d(ki, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
      ] }),
      /* @__PURE__ */ D("div", { className: "flex items-center gap-1.5 text-gray-400 mb-0.5 mr-8", children: [
        /* @__PURE__ */ d(kh, { className: "w-3.5 h-3.5 shrink-0" }),
        /* @__PURE__ */ d(
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
    /* @__PURE__ */ d("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ d("div", { className: "h-full max-h-[calc(90vh-100px)] overflow-auto p-6", children: f.length === 0 ? /* @__PURE__ */ D("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ d("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ d(nt, { className: "w-8 h-8 text-gray-400" }) }),
      /* @__PURE__ */ d("div", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items available" }),
      /* @__PURE__ */ d("p", { className: "text-gray-500 mb-4", children: l.trim() ? "No pages or groups match your search." : "All pages and groups have been added." })
    ] }) : /* @__PURE__ */ d("div", { className: s, children: f.map((y, P) => {
      const E = y.kind === "group", S = y.id, C = E ? y.label || `Group ${P + 1}` : y.label || `Page ${y.id}`, R = { payload: i, item: void 0, parent: void 0 }, I = E ? N(y.pageComponentKeys, R).length : 1;
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
            /* @__PURE__ */ d("div", { className: "w-full h-full relative", children: y.thumbnail ? /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-gray-100 hover:bg-white", children: /* @__PURE__ */ d(
              "img",
              {
                src: y.thumbnail,
                className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
                alt: C
              }
            ) }) : w ? /* @__PURE__ */ d("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: w(x(y, P), P, !1) }) : /* @__PURE__ */ d(Oe, { children: E ? /* @__PURE__ */ D("div", { className: "p-4", children: [
              /* @__PURE__ */ d("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ d(nt, { className: "w-8 h-8 text-blue-600" }) }),
              /* @__PURE__ */ d("div", { className: "text-sm font-medium text-gray-700", children: C }),
              /* @__PURE__ */ D("div", { className: "text-xs text-gray-500 mt-1", children: [
                I,
                " ",
                I === 1 ? "page" : "pages"
              ] })
            ] }) : /* @__PURE__ */ D("div", { className: "p-4", children: [
              /* @__PURE__ */ d("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ d(nt, { className: "w-8 h-8 text-gray-400" }) }),
              /* @__PURE__ */ d("div", { className: "text-sm font-medium text-gray-700", children: C }),
              /* @__PURE__ */ d("div", { className: "text-xs text-gray-500 mt-1", children: S })
            ] }) }) }),
            (!w || y?.thumbnail) && /* @__PURE__ */ D(Oe, { children: [
              E && /* @__PURE__ */ D("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                "Group (",
                I,
                " ",
                I === 1 ? "page" : "pages",
                ")"
              ] }),
              /* @__PURE__ */ d("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": S, children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ d("div", { className: "text-sm font-medium truncate", children: C }) }) }) })
            ] }),
            /* @__PURE__ */ d("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ d(nt, { className: "w-4 h-4 text-white" }) })
          ]
        },
        S
      );
    }) }) }) })
  ] }) });
}
function Kb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return U(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Br = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function un(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Mi(e) {
  return "nodeType" in e;
}
function Te(e) {
  var t, n;
  return e ? un(e) ? e : Mi(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Oi(e) {
  const {
    Document: t
  } = Te(e);
  return e instanceof t;
}
function Kn(e) {
  return un(e) ? !1 : e instanceof Te(e).HTMLElement;
}
function nu(e) {
  return e instanceof Te(e).SVGElement;
}
function dn(e) {
  return e ? un(e) ? e.document : Mi(e) ? Oi(e) ? e : Kn(e) || nu(e) ? e.ownerDocument : document : document : document;
}
const qe = Br ? la : ce;
function Kr(e) {
  const t = de(e);
  return qe(() => {
    t.current = e;
  }), he(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Wb() {
  const e = de(null), t = he((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = he(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function An(e, t) {
  t === void 0 && (t = [e]);
  const n = de(e);
  return qe(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Wn(e, t) {
  const n = de();
  return U(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Nr(e) {
  const t = Kr(e), n = de(null), r = he(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Pr(e) {
  const t = de();
  return ce(() => {
    t.current = e;
  }, [e]), t.current;
}
let uo = {};
function jn(e, t) {
  return U(() => {
    if (t)
      return t;
    const n = uo[e] == null ? 0 : uo[e] + 1;
    return uo[e] = n, e + "-" + n;
  }, [e, t]);
}
function ru(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((i, a) => {
      const s = Object.entries(a);
      for (const [l, c] of s) {
        const f = i[l];
        f != null && (i[l] = f + e * c);
      }
      return i;
    }, {
      ...t
    });
  };
}
const tn = /* @__PURE__ */ ru(1), kn = /* @__PURE__ */ ru(-1);
function jb(e) {
  return "clientX" in e && "clientY" in e;
}
function Wr(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Te(e.target);
  return t && e instanceof t;
}
function Vb(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Te(e.target);
  return t && e instanceof t;
}
function Er(e) {
  if (Vb(e)) {
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
  return jb(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const kt = /* @__PURE__ */ Object.freeze({
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
        return [kt.Translate.toString(e), kt.Scale.toString(e)].join(" ");
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
}), Bs = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Hb(e) {
  return e.matches(Bs) ? e : e.querySelector(Bs);
}
const Gb = {
  display: "none"
};
function Ub(e) {
  let {
    id: t,
    value: n
  } = e;
  return fe.createElement("div", {
    id: t,
    style: Gb
  }, n);
}
function Yb(e) {
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
  return fe.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Xb() {
  const [e, t] = te("");
  return {
    announce: he((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const ou = /* @__PURE__ */ Dt(null);
function qb(e) {
  const t = Ce(ou);
  ce(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Zb() {
  const [e] = te(() => /* @__PURE__ */ new Set()), t = he((r) => (e.add(r), () => e.delete(r)), [e]);
  return [he((r) => {
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
const Jb = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Qb = {
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
function ey(e) {
  let {
    announcements: t = Qb,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Jb
  } = e;
  const {
    announce: i,
    announcement: a
  } = Xb(), s = jn("DndLiveRegion"), [l, c] = te(!1);
  if (ce(() => {
    c(!0);
  }, []), qb(U(() => ({
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
        over: p
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: h,
        over: p
      }));
    },
    onDragOver(u) {
      let {
        active: h,
        over: p
      } = u;
      i(t.onDragOver({
        active: h,
        over: p
      }));
    },
    onDragEnd(u) {
      let {
        active: h,
        over: p
      } = u;
      i(t.onDragEnd({
        active: h,
        over: p
      }));
    },
    onDragCancel(u) {
      let {
        active: h,
        over: p
      } = u;
      i(t.onDragCancel({
        active: h,
        over: p
      }));
    }
  }), [i, t])), !l)
    return null;
  const f = fe.createElement(fe.Fragment, null, fe.createElement(Ub, {
    id: r,
    value: o.draggable
  }), fe.createElement(Yb, {
    id: s,
    announcement: a
  }));
  return n ? Od(f, n) : f;
}
var Pe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Pe || (Pe = {}));
function Rr() {
}
function Ks(e, t) {
  return U(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function ty() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return U(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Ze = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function iu(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function ny(e, t) {
  const n = Er(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function su(e, t) {
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
function ry(e, t) {
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
function Ws(e) {
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
function au(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function js(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const oy = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = js(t, t.left, t.top), i = [];
  for (const a of r) {
    const {
      id: s
    } = a, l = n.get(s);
    if (l) {
      const c = iu(js(l), o);
      i.push({
        id: s,
        data: {
          droppableContainer: a,
          value: c
        }
      });
    }
  }
  return i.sort(su);
}, iy = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Ws(t), i = [];
  for (const a of r) {
    const {
      id: s
    } = a, l = n.get(s);
    if (l) {
      const c = Ws(l), f = o.reduce((h, p, b) => h + iu(c[b], p), 0), u = Number((f / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return i.sort(su);
};
function sy(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), a = o - r, s = i - n;
  if (r < o && n < i) {
    const l = t.width * t.height, c = e.width * e.height, f = a * s, u = f / (l + c - f);
    return Number(u.toFixed(4));
  }
  return 0;
}
const ay = (e) => {
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
      const l = sy(s, t);
      l > 0 && o.push({
        id: a,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return o.sort(ry);
};
function ly(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function lu(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Ze;
}
function cy(e) {
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
const uy = /* @__PURE__ */ cy(1);
function cu(e) {
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
function dy(e, t, n) {
  const r = cu(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: i,
    x: a,
    y: s
  } = r, l = e.left - a - (1 - o) * parseFloat(n), c = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), f = o ? e.width / o : e.width, u = i ? e.height / i : e.height;
  return {
    width: f,
    height: u,
    top: c,
    right: l + f,
    bottom: c + u,
    left: l
  };
}
const fy = {
  ignoreTransform: !1
};
function fn(e, t) {
  t === void 0 && (t = fy);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: f
    } = Te(e).getComputedStyle(e);
    c && (n = dy(n, c, f));
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
function Vs(e) {
  return fn(e, {
    ignoreTransform: !0
  });
}
function hy(e) {
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
function my(e, t) {
  return t === void 0 && (t = Te(e).getComputedStyle(e)), t.position === "fixed";
}
function py(e, t) {
  t === void 0 && (t = Te(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function jr(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Oi(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Kn(o) || nu(o) || n.includes(o))
      return n;
    const i = Te(e).getComputedStyle(o);
    return o !== e && py(o, i) && n.push(o), my(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function uu(e) {
  const [t] = jr(e, 1);
  return t ?? null;
}
function fo(e) {
  return !Br || !e ? null : un(e) ? e : Mi(e) ? Oi(e) || e === dn(e).scrollingElement ? window : Kn(e) ? e : null : null;
}
function du(e) {
  return un(e) ? e.scrollX : e.scrollLeft;
}
function fu(e) {
  return un(e) ? e.scrollY : e.scrollTop;
}
function Do(e) {
  return {
    x: du(e),
    y: fu(e)
  };
}
var Ee;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ee || (Ee = {}));
function hu(e) {
  return !Br || !e ? !1 : e === document.scrollingElement;
}
function mu(e) {
  const t = {
    x: 0,
    y: 0
  }, n = hu(e) ? {
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
const gy = {
  x: 0.2,
  y: 0.2
};
function vy(e, t, n, r, o) {
  let {
    top: i,
    left: a,
    right: s,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = gy);
  const {
    isTop: c,
    isBottom: f,
    isLeft: u,
    isRight: h
  } = mu(e), p = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && i <= t.top + g.height ? (p.y = Ee.Backward, b.y = r * Math.abs((t.top + g.height - i) / g.height)) : !f && l >= t.bottom - g.height && (p.y = Ee.Forward, b.y = r * Math.abs((t.bottom - g.height - l) / g.height)), !h && s >= t.right - g.width ? (p.x = Ee.Forward, b.x = r * Math.abs((t.right - g.width - s) / g.width)) : !u && a <= t.left + g.width && (p.x = Ee.Backward, b.x = r * Math.abs((t.left + g.width - a) / g.width)), {
    direction: p,
    speed: b
  };
}
function by(e) {
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
function pu(e) {
  return e.reduce((t, n) => tn(t, Do(n)), Ze);
}
function yy(e) {
  return e.reduce((t, n) => t + du(n), 0);
}
function wy(e) {
  return e.reduce((t, n) => t + fu(n), 0);
}
function gu(e, t) {
  if (t === void 0 && (t = fn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  uu(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const xy = [["x", ["left", "right"], yy], ["y", ["top", "bottom"], wy]];
class Ti {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = jr(n), o = pu(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, a, s] of xy)
      for (const l of a)
        Object.defineProperty(this, l, {
          get: () => {
            const c = s(r), f = o[i] - c;
            return this.rect[l] + f;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Cn {
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
function Cy(e) {
  const {
    EventTarget: t
  } = Te(e);
  return e instanceof t ? e : dn(e);
}
function ho(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ve;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ve || (Ve = {}));
function Hs(e) {
  e.preventDefault();
}
function Sy(e) {
  e.stopPropagation();
}
var le;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(le || (le = {}));
const vu = {
  start: [le.Space, le.Enter],
  cancel: [le.Esc],
  end: [le.Space, le.Enter, le.Tab]
}, Ny = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case le.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case le.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case le.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case le.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class _i {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Cn(dn(n)), this.windowListeners = new Cn(Te(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ve.Resize, this.handleCancel), this.windowListeners.add(Ve.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ve.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && gu(r), n(Ze);
  }
  handleKeyDown(t) {
    if (Wr(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = vu,
        coordinateGetter: a = Ny,
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
      } = r.current, f = c ? {
        x: c.left,
        y: c.top
      } : Ze;
      this.referenceCoordinates || (this.referenceCoordinates = f);
      const u = a(t, {
        active: n,
        context: r.current,
        currentCoordinates: f
      });
      if (u) {
        const h = kn(u, f), p = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const g of b) {
          const v = t.code, {
            isTop: w,
            isRight: N,
            isLeft: x,
            isBottom: y,
            maxScroll: P,
            minScroll: E
          } = mu(g), S = by(g), C = {
            x: Math.min(v === le.Right ? S.right - S.width / 2 : S.right, Math.max(v === le.Right ? S.left : S.left + S.width / 2, u.x)),
            y: Math.min(v === le.Down ? S.bottom - S.height / 2 : S.bottom, Math.max(v === le.Down ? S.top : S.top + S.height / 2, u.y))
          }, R = v === le.Right && !N || v === le.Left && !x, I = v === le.Down && !y || v === le.Up && !w;
          if (R && C.x !== u.x) {
            const k = g.scrollLeft + h.x, O = v === le.Right && k <= P.x || v === le.Left && k >= E.x;
            if (O && !h.y) {
              g.scrollTo({
                left: k,
                behavior: s
              });
              return;
            }
            O ? p.x = g.scrollLeft - k : p.x = v === le.Right ? g.scrollLeft - P.x : g.scrollLeft - E.x, p.x && g.scrollBy({
              left: -p.x,
              behavior: s
            });
            break;
          } else if (I && C.y !== u.y) {
            const k = g.scrollTop + h.y, O = v === le.Down && k <= P.y || v === le.Up && k >= E.y;
            if (O && !h.x) {
              g.scrollTo({
                top: k,
                behavior: s
              });
              return;
            }
            O ? p.y = g.scrollTop - k : p.y = v === le.Down ? g.scrollTop - P.y : g.scrollTop - E.y, p.y && g.scrollBy({
              top: -p.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, tn(kn(u, this.referenceCoordinates), p));
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
_i.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = vu,
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
function Gs(e) {
  return !!(e && "distance" in e);
}
function Us(e) {
  return !!(e && "delay" in e);
}
class Li {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = Cy(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: a
    } = i;
    this.props = t, this.events = n, this.document = dn(a), this.documentListeners = new Cn(this.document), this.listeners = new Cn(r), this.windowListeners = new Cn(Te(a)), this.initialCoordinates = (o = Er(i)) != null ? o : Ze, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ve.Resize, this.handleCancel), this.windowListeners.add(Ve.DragStart, Hs), this.windowListeners.add(Ve.VisibilityChange, this.handleCancel), this.windowListeners.add(Ve.ContextMenu, Hs), this.documentListeners.add(Ve.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Us(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Gs(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ve.Click, Sy, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ve.SelectionChange, this.removeTextSelection), n(t));
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
    const l = (n = Er(t)) != null ? n : Ze, c = kn(o, l);
    if (!r && s) {
      if (Gs(s)) {
        if (s.tolerance != null && ho(c, s.tolerance))
          return this.handleCancel();
        if (ho(c, s.distance))
          return this.handleStart();
      }
      if (Us(s) && ho(c, s.tolerance))
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
    t.code === le.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Py = {
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
class Fi extends Li {
  constructor(t) {
    const {
      event: n
    } = t, r = dn(n.target);
    super(t, Py, r);
  }
}
Fi.activators = [{
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
const Ey = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Mo;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Mo || (Mo = {}));
class Ry extends Li {
  constructor(t) {
    super(t, Ey, dn(t.event.target));
  }
}
Ry.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Mo.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const mo = {
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
class Iy extends Li {
  constructor(t) {
    super(t, mo);
  }
  static setup() {
    return window.addEventListener(mo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(mo.move.name, t);
    };
    function t() {
    }
  }
}
Iy.activators = [{
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
var Sn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Sn || (Sn = {}));
var Ir;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ir || (Ir = {}));
function Ay(e) {
  let {
    acceleration: t,
    activator: n = Sn.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: a = 5,
    order: s = Ir.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: f,
    delta: u,
    threshold: h
  } = e;
  const p = Dy({
    delta: u,
    disabled: !i
  }), [b, g] = Wb(), v = de({
    x: 0,
    y: 0
  }), w = de({
    x: 0,
    y: 0
  }), N = U(() => {
    switch (n) {
      case Sn.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Sn.DraggableRect:
        return o;
    }
  }, [n, o, l]), x = de(null), y = he(() => {
    const E = x.current;
    if (!E)
      return;
    const S = v.current.x * w.current.x, C = v.current.y * w.current.y;
    E.scrollBy(S, C);
  }, []), P = U(() => s === Ir.TreeOrder ? [...c].reverse() : c, [s, c]);
  ce(
    () => {
      if (!i || !c.length || !N) {
        g();
        return;
      }
      for (const E of P) {
        if (r?.(E) === !1)
          continue;
        const S = c.indexOf(E), C = f[S];
        if (!C)
          continue;
        const {
          direction: R,
          speed: I
        } = vy(E, C, N, t, h);
        for (const k of ["x", "y"])
          p[k][R[k]] || (I[k] = 0, R[k] = 0);
        if (I.x > 0 || I.y > 0) {
          g(), x.current = E, b(y, a), v.current = I, w.current = R;
          return;
        }
      }
      v.current = {
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
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      b,
      c,
      P,
      f,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const ky = {
  x: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  },
  y: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  }
};
function Dy(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Pr(t);
  return Wn((o) => {
    if (n || !r || !o)
      return ky;
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
function My(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Wn((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function Oy(e, t) {
  return U(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, i = o.activators.map((a) => ({
      eventName: a.eventName,
      handler: t(a.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var Dn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Dn || (Dn = {}));
var Oo;
(function(e) {
  e.Optimized = "optimized";
})(Oo || (Oo = {}));
const Ys = /* @__PURE__ */ new Map();
function Ty(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, a] = te(null), {
    frequency: s,
    measure: l,
    strategy: c
  } = o, f = de(e), u = v(), h = An(u), p = he(function(w) {
    w === void 0 && (w = []), !h.current && a((N) => N === null ? w : N.concat(w.filter((x) => !N.includes(x))));
  }, [h]), b = de(null), g = Wn((w) => {
    if (u && !n)
      return Ys;
    if (!w || w === Ys || f.current !== e || i != null) {
      const N = /* @__PURE__ */ new Map();
      for (let x of e) {
        if (!x)
          continue;
        if (i && i.length > 0 && !i.includes(x.id) && x.rect.current) {
          N.set(x.id, x.rect.current);
          continue;
        }
        const y = x.node.current, P = y ? new Ti(l(y), y) : null;
        x.rect.current = P, P && N.set(x.id, P);
      }
      return N;
    }
    return w;
  }, [e, i, n, u, l]);
  return ce(() => {
    f.current = e;
  }, [e]), ce(
    () => {
      u || p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), ce(
    () => {
      i && i.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), ce(
    () => {
      u || typeof s != "number" || b.current !== null || (b.current = setTimeout(() => {
        p(), b.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, p, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: p,
    measuringScheduled: i != null
  };
  function v() {
    switch (c) {
      case Dn.Always:
        return !1;
      case Dn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function $i(e, t) {
  return Wn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function _y(e, t) {
  return $i(e, t);
}
function Ly(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Kr(t), o = U(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return ce(() => () => o?.disconnect(), [o]), o;
}
function Vr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Kr(t), o = U(
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
function Fy(e) {
  return new Ti(fn(e), e);
}
function Xs(e, t, n) {
  t === void 0 && (t = Fy);
  const [r, o] = te(null);
  function i() {
    o((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = l ?? n) != null ? c : null;
      }
      const f = t(e);
      return JSON.stringify(l) === JSON.stringify(f) ? l : f;
    });
  }
  const a = Ly({
    callback(l) {
      if (e)
        for (const c of l) {
          const {
            type: f,
            target: u
          } = c;
          if (f === "childList" && u instanceof HTMLElement && u.contains(e)) {
            i();
            break;
          }
        }
    }
  }), s = Vr({
    callback: i
  });
  return qe(() => {
    i(), e ? (s?.observe(e), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s?.disconnect(), a?.disconnect());
  }, [e]), r;
}
function $y(e) {
  const t = $i(e);
  return lu(e, t);
}
const qs = [];
function zy(e) {
  const t = de(e), n = Wn((r) => e ? r && r !== qs && e && t.current && e.parentNode === t.current.parentNode ? r : jr(e) : qs, [e]);
  return ce(() => {
    t.current = e;
  }, [e]), n;
}
function By(e) {
  const [t, n] = te(null), r = de(e), o = he((i) => {
    const a = fo(i.target);
    a && n((s) => s ? (s.set(a, Do(a)), new Map(s)) : null);
  }, []);
  return ce(() => {
    const i = r.current;
    if (e !== i) {
      a(i);
      const s = e.map((l) => {
        const c = fo(l);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, Do(c)]) : null;
      }).filter((l) => l != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      a(e), a(i);
    };
    function a(s) {
      s.forEach((l) => {
        const c = fo(l);
        c?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), U(() => e.length ? t ? Array.from(t.values()).reduce((i, a) => tn(i, a), Ze) : pu(e) : Ze, [e, t]);
}
function Zs(e, t) {
  t === void 0 && (t = []);
  const n = de(null);
  return ce(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ce(() => {
    const r = e !== Ze;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? kn(e, n.current) : Ze;
}
function Ky(e) {
  ce(
    () => {
      if (!Br)
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
function Wy(e, t) {
  return U(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: i
    } = r;
    return n[o] = (a) => {
      i(a, t);
    }, n;
  }, {}), [e, t]);
}
function bu(e) {
  return U(() => e ? hy(e) : null, [e]);
}
const Js = [];
function jy(e, t) {
  t === void 0 && (t = fn);
  const [n] = e, r = bu(n ? Te(n) : null), [o, i] = te(Js);
  function a() {
    i(() => e.length ? e.map((l) => hu(l) ? r : new Ti(t(l), l)) : Js);
  }
  const s = Vr({
    callback: a
  });
  return qe(() => {
    s?.disconnect(), a(), e.forEach((l) => s?.observe(l));
  }, [e]), o;
}
function yu(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Kn(t) ? t : e;
}
function Vy(e) {
  let {
    measure: t
  } = e;
  const [n, r] = te(null), o = he((c) => {
    for (const {
      target: f
    } of c)
      if (Kn(f)) {
        r((u) => {
          const h = t(f);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [t]), i = Vr({
    callback: o
  }), a = he((c) => {
    const f = yu(c);
    i?.disconnect(), f && i?.observe(f), r(f ? t(f) : null);
  }, [t, i]), [s, l] = Nr(a);
  return U(() => ({
    nodeRef: s,
    rect: n,
    setRef: l
  }), [n, s, l]);
}
const Hy = [{
  sensor: Fi,
  options: {}
}, {
  sensor: _i,
  options: {}
}], Gy = {
  current: {}
}, dr = {
  draggable: {
    measure: Vs
  },
  droppable: {
    measure: Vs,
    strategy: Dn.WhileDragging,
    frequency: Oo.Optimized
  },
  dragOverlay: {
    measure: fn
  }
};
class Nn extends Map {
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
const Uy = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Nn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Rr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: dr,
  measureDroppableContainers: Rr,
  windowRect: null,
  measuringScheduled: !1
}, wu = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Rr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Rr
}, Vn = /* @__PURE__ */ Dt(wu), xu = /* @__PURE__ */ Dt(Uy);
function Yy() {
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
      containers: new Nn()
    }
  };
}
function Xy(e, t) {
  switch (t.type) {
    case Pe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Pe.DragMove:
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
    case Pe.DragEnd:
    case Pe.DragCancel:
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
    case Pe.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new Nn(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Pe.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const a = new Nn(e.droppable.containers);
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
    case Pe.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new Nn(e.droppable.containers);
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
function qy(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = Ce(Vn), i = Pr(r), a = Pr(n?.id);
  return ce(() => {
    if (!t && !r && i && a != null) {
      if (!Wr(i) || document.activeElement === i.target)
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
        for (const f of [l.current, c.current]) {
          if (!f)
            continue;
          const u = Hb(f);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, a, i]), null;
}
function Cu(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function Zy(e) {
  return U(
    () => ({
      draggable: {
        ...dr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...dr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...dr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function Jy(e) {
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
    const f = n(c), u = lu(f, r);
    if (a || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = uu(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, a, s, r, n]);
}
const Hr = /* @__PURE__ */ Dt({
  ...Ze,
  scaleX: 1,
  scaleY: 1
});
var Pt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Pt || (Pt = {}));
const Qy = /* @__PURE__ */ Ad(function(t) {
  var n, r, o, i;
  let {
    id: a,
    accessibility: s,
    autoScroll: l = !0,
    children: c,
    sensors: f = Hy,
    collisionDetection: u = ay,
    measuring: h,
    modifiers: p,
    ...b
  } = t;
  const g = kd(Xy, void 0, Yy), [v, w] = g, [N, x] = Zb(), [y, P] = te(Pt.Uninitialized), E = y === Pt.Initialized, {
    draggable: {
      active: S,
      nodes: C,
      translate: R
    },
    droppable: {
      containers: I
    }
  } = v, k = S != null ? C.get(S) : null, O = de({
    initial: null,
    translated: null
  }), z = U(() => {
    var Se;
    return S != null ? {
      id: S,
      // It's possible for the active node to unmount while dragging
      data: (Se = k?.data) != null ? Se : Gy,
      rect: O
    } : null;
  }, [S, k]), F = de(null), [K, M] = te(null), [T, $] = te(null), _ = An(b, Object.values(b)), L = jn("DndDescribedBy", a), Y = U(() => I.getEnabled(), [I]), Z = Zy(h), {
    droppableRects: oe,
    measureDroppableContainers: ie,
    measuringScheduled: ne
  } = Ty(Y, {
    dragging: E,
    dependencies: [R.x, R.y],
    config: Z.droppable
  }), B = My(C, S), V = U(() => T ? Er(T) : null, [T]), Q = qr(), X = _y(B, Z.draggable.measure);
  Jy({
    activeNode: S != null ? C.get(S) : null,
    config: Q.layoutShiftCompensation,
    initialRect: X,
    measure: Z.draggable.measure
  });
  const H = Xs(B, Z.draggable.measure, X), se = Xs(B ? B.parentElement : null), ue = de({
    activatorEvent: null,
    active: null,
    activeNode: B,
    collisionRect: null,
    collisions: null,
    droppableRects: oe,
    draggableNodes: C,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), me = I.getNodeFor((n = ue.current.over) == null ? void 0 : n.id), pe = Vy({
    measure: Z.dragOverlay.measure
  }), De = (r = pe.nodeRef.current) != null ? r : B, Be = E ? (o = pe.rect) != null ? o : H : null, ct = !!(pe.nodeRef.current && pe.rect), mn = $y(ct ? null : H), _t = bu(De ? Te(De) : null), Ke = zy(E ? me ?? B : null), Lt = jy(Ke), bt = Cu(p, {
    transform: {
      x: R.x - mn.x,
      y: R.y - mn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: T,
    active: z,
    activeNodeRect: H,
    containerNodeRect: se,
    draggingNodeRect: Be,
    over: ue.current.over,
    overlayNodeRect: pe.rect,
    scrollableAncestors: Ke,
    scrollableAncestorRects: Lt,
    windowRect: _t
  }), pn = V ? tn(V, R) : null, gn = By(Ke), Yr = Zs(gn), Gt = Zs(gn, [H]), yt = tn(bt, Yr), wt = Be ? uy(Be, bt) : null, ut = z && wt ? u({
    active: z,
    collisionRect: wt,
    droppableRects: oe,
    droppableContainers: Y,
    pointerCoordinates: pn
  }) : null, Hn = au(ut, "id"), [Qe, Gn] = te(null), vn = ct ? bt : tn(bt, Gt), Un = ly(vn, (i = Qe?.rect) != null ? i : null, H), Ut = de(null), bn = he(
    (Se, Re) => {
      let {
        sensor: Ie,
        options: Ge
      } = Re;
      if (F.current == null)
        return;
      const _e = C.get(F.current);
      if (!_e)
        return;
      const Me = Se.nativeEvent, We = new Ie({
        active: F.current,
        activeNode: _e,
        event: Me,
        options: Ge,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ue,
        onAbort(we) {
          if (!C.get(we))
            return;
          const {
            onDragAbort: je
          } = _.current, A = {
            id: we
          };
          je?.(A), N({
            type: "onDragAbort",
            event: A
          });
        },
        onPending(we, et, je, A) {
          if (!C.get(we))
            return;
          const {
            onDragPending: J
          } = _.current, ee = {
            id: we,
            constraint: et,
            initialCoordinates: je,
            offset: A
          };
          J?.(ee), N({
            type: "onDragPending",
            event: ee
          });
        },
        onStart(we) {
          const et = F.current;
          if (et == null)
            return;
          const je = C.get(et);
          if (!je)
            return;
          const {
            onDragStart: A
          } = _.current, G = {
            activatorEvent: Me,
            active: {
              id: et,
              data: je.data,
              rect: O
            }
          };
          Zn(() => {
            A?.(G), P(Pt.Initializing), w({
              type: Pe.DragStart,
              initialCoordinates: we,
              active: et
            }), N({
              type: "onDragStart",
              event: G
            }), M(Ut.current), $(Me);
          });
        },
        onMove(we) {
          w({
            type: Pe.DragMove,
            coordinates: we
          });
        },
        onEnd: Ue(Pe.DragEnd),
        onCancel: Ue(Pe.DragCancel)
      });
      Ut.current = We;
      function Ue(we) {
        return async function() {
          const {
            active: je,
            collisions: A,
            over: G,
            scrollAdjustedTranslate: J
          } = ue.current;
          let ee = null;
          if (je && J) {
            const {
              cancelDrop: ge
            } = _.current;
            ee = {
              activatorEvent: Me,
              active: je,
              collisions: A,
              delta: J,
              over: G
            }, we === Pe.DragEnd && typeof ge == "function" && await Promise.resolve(ge(ee)) && (we = Pe.DragCancel);
          }
          F.current = null, Zn(() => {
            w({
              type: we
            }), P(Pt.Uninitialized), Gn(null), M(null), $(null), Ut.current = null;
            const ge = we === Pe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (ee) {
              const xe = _.current[ge];
              xe?.(ee), N({
                type: ge,
                event: ee
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), Ft = he((Se, Re) => (Ie, Ge) => {
    const _e = Ie.nativeEvent, Me = C.get(Ge);
    if (
      // Another sensor is already instantiating
      F.current !== null || // No active draggable
      !Me || // Event has already been captured
      _e.dndKit || _e.defaultPrevented
    )
      return;
    const We = {
      active: Me
    };
    Se(Ie, Re.options, We) === !0 && (_e.dndKit = {
      capturedBy: Re.sensor
    }, F.current = Ge, bn(Ie, Re));
  }, [C, bn]), xt = Oy(f, Ft);
  Ky(f), qe(() => {
    H && y === Pt.Initializing && P(Pt.Initialized);
  }, [H, y]), ce(
    () => {
      const {
        onDragMove: Se
      } = _.current, {
        active: Re,
        activatorEvent: Ie,
        collisions: Ge,
        over: _e
      } = ue.current;
      if (!Re || !Ie)
        return;
      const Me = {
        active: Re,
        activatorEvent: Ie,
        collisions: Ge,
        delta: {
          x: yt.x,
          y: yt.y
        },
        over: _e
      };
      Zn(() => {
        Se?.(Me), N({
          type: "onDragMove",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [yt.x, yt.y]
  ), ce(
    () => {
      const {
        active: Se,
        activatorEvent: Re,
        collisions: Ie,
        droppableContainers: Ge,
        scrollAdjustedTranslate: _e
      } = ue.current;
      if (!Se || F.current == null || !Re || !_e)
        return;
      const {
        onDragOver: Me
      } = _.current, We = Ge.get(Hn), Ue = We && We.rect.current ? {
        id: We.id,
        rect: We.rect.current,
        data: We.data,
        disabled: We.disabled
      } : null, we = {
        active: Se,
        activatorEvent: Re,
        collisions: Ie,
        delta: {
          x: _e.x,
          y: _e.y
        },
        over: Ue
      };
      Zn(() => {
        Gn(Ue), Me?.(we), N({
          type: "onDragOver",
          event: we
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Hn]
  ), qe(() => {
    ue.current = {
      activatorEvent: T,
      active: z,
      activeNode: B,
      collisionRect: wt,
      collisions: ut,
      droppableRects: oe,
      draggableNodes: C,
      draggingNode: De,
      draggingNodeRect: Be,
      droppableContainers: I,
      over: Qe,
      scrollableAncestors: Ke,
      scrollAdjustedTranslate: yt
    }, O.current = {
      initial: Be,
      translated: wt
    };
  }, [z, B, ut, wt, C, De, Be, oe, I, Qe, Ke, yt]), Ay({
    ...Q,
    delta: R,
    draggingRect: wt,
    pointerCoordinates: pn,
    scrollableAncestors: Ke,
    scrollableAncestorRects: Lt
  });
  const Xr = U(() => ({
    active: z,
    activeNode: B,
    activeNodeRect: H,
    activatorEvent: T,
    collisions: ut,
    containerNodeRect: se,
    dragOverlay: pe,
    draggableNodes: C,
    droppableContainers: I,
    droppableRects: oe,
    over: Qe,
    measureDroppableContainers: ie,
    scrollableAncestors: Ke,
    scrollableAncestorRects: Lt,
    measuringConfiguration: Z,
    measuringScheduled: ne,
    windowRect: _t
  }), [z, B, H, T, ut, se, pe, C, I, oe, Qe, ie, Ke, Lt, Z, ne, _t]), Yn = U(() => ({
    activatorEvent: T,
    activators: xt,
    active: z,
    activeNodeRect: H,
    ariaDescribedById: {
      draggable: L
    },
    dispatch: w,
    draggableNodes: C,
    over: Qe,
    measureDroppableContainers: ie
  }), [T, xt, z, H, w, L, C, Qe, ie]);
  return fe.createElement(ou.Provider, {
    value: x
  }, fe.createElement(Vn.Provider, {
    value: Yn
  }, fe.createElement(xu.Provider, {
    value: Xr
  }, fe.createElement(Hr.Provider, {
    value: Un
  }, c)), fe.createElement(qy, {
    disabled: s?.restoreFocus === !1
  })), fe.createElement(ey, {
    ...s,
    hiddenTextDescribedById: L
  }));
  function qr() {
    const Se = K?.autoScrollEnabled === !1, Re = typeof l == "object" ? l.enabled === !1 : l === !1, Ie = E && !Se && !Re;
    return typeof l == "object" ? {
      ...l,
      enabled: Ie
    } : {
      enabled: Ie
    };
  }
}), ew = /* @__PURE__ */ Dt(null), Qs = "button", tw = "Draggable";
function nw(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = jn(tw), {
    activators: a,
    activatorEvent: s,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: f,
    draggableNodes: u,
    over: h
  } = Ce(Vn), {
    role: p = Qs,
    roleDescription: b = "draggable",
    tabIndex: g = 0
  } = o ?? {}, v = l?.id === t, w = Ce(v ? Hr : ew), [N, x] = Nr(), [y, P] = Nr(), E = Wy(a, t), S = An(n);
  qe(
    () => (u.set(t, {
      id: t,
      key: i,
      node: N,
      activatorNode: y,
      data: S
    }), () => {
      const R = u.get(t);
      R && R.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const C = U(() => ({
    role: p,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": v && p === Qs ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": f.draggable
  }), [r, p, g, v, b, f.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: c,
    attributes: C,
    isDragging: v,
    listeners: r ? void 0 : E,
    node: N,
    over: h,
    setNodeRef: x,
    setActivatorNodeRef: P,
    transform: w
  };
}
function Su() {
  return Ce(xu);
}
const rw = "Droppable", ow = {
  timeout: 25
};
function iw(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = jn(rw), {
    active: a,
    dispatch: s,
    over: l,
    measureDroppableContainers: c
  } = Ce(Vn), f = de({
    disabled: n
  }), u = de(!1), h = de(null), p = de(null), {
    disabled: b,
    updateMeasurementsFor: g,
    timeout: v
  } = {
    ...ow,
    ...o
  }, w = An(g ?? r), N = he(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
        c(Array.isArray(w.current) ? w.current : [w.current]), p.current = null;
      }, v);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), x = Vr({
    callback: N,
    disabled: b || !a
  }), y = he((C, R) => {
    x && (R && (x.unobserve(R), u.current = !1), C && x.observe(C));
  }, [x]), [P, E] = Nr(y), S = An(t);
  return ce(() => {
    !x || !P.current || (x.disconnect(), u.current = !1, x.observe(P.current));
  }, [P, x]), ce(
    () => (s({
      type: Pe.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: P,
        rect: h,
        data: S
      }
    }), () => s({
      type: Pe.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), ce(() => {
    n !== f.current.disabled && (s({
      type: Pe.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), f.current.disabled = n);
  }, [r, i, n, s]), {
    active: a,
    rect: h,
    isOver: l?.id === r,
    node: P,
    over: l,
    setNodeRef: E
  };
}
function sw(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = te(null), [i, a] = te(null), s = Pr(n);
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
  }, [t, r, i]), fe.createElement(fe.Fragment, null, n, r ? Dd(r, {
    ref: a
  }) : null);
}
const aw = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function lw(e) {
  let {
    children: t
  } = e;
  return fe.createElement(Vn.Provider, {
    value: wu
  }, fe.createElement(Hr.Provider, {
    value: aw
  }, t));
}
const cw = {
  position: "fixed",
  touchAction: "none"
}, uw = (e) => Wr(e) ? "transform 250ms ease" : void 0, dw = /* @__PURE__ */ Dr((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: i,
    className: a,
    rect: s,
    style: l,
    transform: c,
    transition: f = uw
  } = e;
  if (!s)
    return null;
  const u = o ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...cw,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: kt.Transform.toString(u),
    transformOrigin: o && r ? ny(r, s) : void 0,
    transition: typeof f == "function" ? f(r) : f,
    ...l
  };
  return fe.createElement(n, {
    className: a,
    style: h,
    ref: t
  }, i);
}), fw = (e) => (t) => {
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
}, hw = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: kt.Transform.toString(t)
  }, {
    transform: kt.Transform.toString(n)
  }];
}, mw = {
  duration: 250,
  easing: "ease",
  keyframes: hw,
  sideEffects: /* @__PURE__ */ fw({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function pw(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return Kr((i, a) => {
    if (t === null)
      return;
    const s = n.get(i);
    if (!s)
      return;
    const l = s.node.current;
    if (!l)
      return;
    const c = yu(a);
    if (!c)
      return;
    const {
      transform: f
    } = Te(a).getComputedStyle(a), u = cu(f);
    if (!u)
      return;
    const h = typeof t == "function" ? t : gw(t);
    return gu(l, o.draggable.measure), h({
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
function gw(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...mw,
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
    const f = {
      x: s.rect.left - a.rect.left,
      y: s.rect.top - a.rect.top
    }, u = {
      scaleX: l.scaleX !== 1 ? a.rect.width * l.scaleX / s.rect.width : 1,
      scaleY: l.scaleY !== 1 ? a.rect.height * l.scaleY / s.rect.height : 1
    }, h = {
      x: l.x - f.x,
      y: l.y - f.y,
      ...u
    }, p = o({
      ...c,
      active: a,
      dragOverlay: s,
      transform: {
        initial: l,
        final: h
      }
    }), [b] = p, g = p[p.length - 1];
    if (JSON.stringify(b) === JSON.stringify(g))
      return;
    const v = r?.({
      active: a,
      dragOverlay: s,
      ...c
    }), w = s.node.animate(p, {
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
let ea = 0;
function vw(e) {
  return U(() => {
    if (e != null)
      return ea++, ea;
  }, [e]);
}
const bw = /* @__PURE__ */ fe.memo((e) => {
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
    activatorEvent: f,
    active: u,
    activeNodeRect: h,
    containerNodeRect: p,
    draggableNodes: b,
    droppableContainers: g,
    dragOverlay: v,
    over: w,
    measuringConfiguration: N,
    scrollableAncestors: x,
    scrollableAncestorRects: y,
    windowRect: P
  } = Su(), E = Ce(Hr), S = vw(u?.id), C = Cu(a, {
    activatorEvent: f,
    active: u,
    activeNodeRect: h,
    containerNodeRect: p,
    draggingNodeRect: v.rect,
    over: w,
    overlayNodeRect: v.rect,
    scrollableAncestors: x,
    scrollableAncestorRects: y,
    transform: E,
    windowRect: P
  }), R = $i(h), I = pw({
    config: r,
    draggableNodes: b,
    droppableContainers: g,
    measuringConfiguration: N
  }), k = R ? v.setRef : void 0;
  return fe.createElement(lw, null, fe.createElement(sw, {
    animation: I
  }, u && S ? fe.createElement(dw, {
    key: S,
    id: u.id,
    ref: k,
    as: s,
    activatorEvent: f,
    adjustScale: t,
    className: l,
    transition: i,
    rect: R,
    style: {
      zIndex: c,
      ...o
    },
    transform: C
  }, n) : null));
});
function zi(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function yw(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function ar(e) {
  return e !== null && e >= 0;
}
function ww(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function xw(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Bi = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = zi(t, r, n), a = t[o], s = i[o];
  return !s || !a ? null : {
    x: s.left - a.left,
    y: s.top - a.top,
    scaleX: s.width / a.width,
    scaleY: s.height / a.height
  };
}, Nu = "Sortable", Pu = /* @__PURE__ */ fe.createContext({
  activeIndex: -1,
  containerId: Nu,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Bi,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Cw(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = Bi,
    disabled: i = !1
  } = e;
  const {
    active: a,
    dragOverlay: s,
    droppableRects: l,
    over: c,
    measureDroppableContainers: f
  } = Su(), u = jn(Nu, n), h = s.rect !== null, p = U(() => r.map((E) => typeof E == "object" && "id" in E ? E.id : E), [r]), b = a != null, g = a ? p.indexOf(a.id) : -1, v = c ? p.indexOf(c.id) : -1, w = de(p), N = !ww(p, w.current), x = v !== -1 && g === -1 || N, y = xw(i);
  qe(() => {
    N && b && f(p);
  }, [N, p, b, f]), ce(() => {
    w.current = p;
  }, [p]);
  const P = U(
    () => ({
      activeIndex: g,
      containerId: u,
      disabled: y,
      disableTransforms: x,
      items: p,
      overIndex: v,
      useDragOverlay: h,
      sortedRects: yw(p, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, u, y.draggable, y.droppable, x, p, v, l, h, o]
  );
  return fe.createElement(Pu.Provider, {
    value: P
  }, t);
}
const Sw = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return zi(n, r, o).indexOf(t);
}, Nw = (e) => {
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
}, Pw = {
  duration: 200,
  easing: "ease"
}, Eu = "transform", Ew = /* @__PURE__ */ kt.Transition.toString({
  property: Eu,
  duration: 0,
  easing: "linear"
}), Rw = {
  roleDescription: "sortable"
};
function Iw(e) {
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
        const c = fn(r.current, {
          ignoreTransform: !0
        }), f = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (f.x || f.y) && a(f);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, o]), ce(() => {
    i && a(null);
  }, [i]), i;
}
function Aw(e) {
  let {
    animateLayoutChanges: t = Nw,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = Sw,
    id: a,
    strategy: s,
    resizeObserverConfig: l,
    transition: c = Pw
  } = e;
  const {
    items: f,
    containerId: u,
    activeIndex: h,
    disabled: p,
    disableTransforms: b,
    sortedRects: g,
    overIndex: v,
    useDragOverlay: w,
    strategy: N
  } = Ce(Pu), x = kw(r, p), y = f.indexOf(a), P = U(() => ({
    sortable: {
      containerId: u,
      index: y,
      items: f
    },
    ...o
  }), [u, o, y, f]), E = U(() => f.slice(f.indexOf(a)), [f, a]), {
    rect: S,
    node: C,
    isOver: R,
    setNodeRef: I
  } = iw({
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
  } = nw({
    id: a,
    data: P,
    attributes: {
      ...Rw,
      ...n
    },
    disabled: x.draggable
  }), Y = Kb(I, K), Z = !!k, oe = Z && !b && ar(h) && ar(v), ie = !w && T, ne = ie && oe ? L : null, V = oe ? ne ?? (s ?? N)({
    rects: g,
    activeNodeRect: z,
    activeIndex: h,
    overIndex: v,
    index: y
  }) : null, Q = ar(h) && ar(v) ? i({
    id: a,
    items: f,
    activeIndex: h,
    overIndex: v
  }) : y, X = k?.id, H = de({
    activeId: X,
    items: f,
    newIndex: Q,
    containerId: u
  }), se = f !== H.current.items, ue = t({
    active: k,
    containerId: u,
    isDragging: T,
    isSorting: Z,
    id: a,
    index: y,
    items: f,
    newIndex: H.current.newIndex,
    previousItems: H.current.items,
    previousContainerId: H.current.containerId,
    transition: c,
    wasDragging: H.current.activeId != null
  }), me = Iw({
    disabled: !ue,
    index: y,
    node: C,
    rect: S
  });
  return ce(() => {
    Z && H.current.newIndex !== Q && (H.current.newIndex = Q), u !== H.current.containerId && (H.current.containerId = u), f !== H.current.items && (H.current.items = f);
  }, [Z, Q, u, f]), ce(() => {
    if (X === H.current.activeId)
      return;
    if (X != null && H.current.activeId == null) {
      H.current.activeId = X;
      return;
    }
    const De = setTimeout(() => {
      H.current.activeId = X;
    }, 50);
    return () => clearTimeout(De);
  }, [X]), {
    active: k,
    activeIndex: h,
    attributes: F,
    data: P,
    rect: S,
    index: y,
    newIndex: Q,
    items: f,
    isOver: R,
    isSorting: Z,
    isDragging: T,
    listeners: M,
    node: C,
    overIndex: v,
    over: $,
    setNodeRef: Y,
    setActivatorNodeRef: _,
    setDroppableNodeRef: I,
    setDraggableNodeRef: K,
    transform: me ?? V,
    transition: pe()
  };
  function pe() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      me || // Or to prevent items jumping to back to their "new" position when items change
      se && H.current.newIndex === y
    )
      return Ew;
    if (!(ie && !Wr(O) || !c) && (Z || ue))
      return kt.Transition.toString({
        ...c,
        property: Eu
      });
  }
}
function kw(e, t) {
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
function Ar(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const Dw = [le.Down, le.Right, le.Up, le.Left], Mw = (e, t) => {
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
  if (Dw.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    i.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = o.get(u.id);
      if (h)
        switch (e.code) {
          case le.Down:
            r.top < h.top && l.push(u);
            break;
          case le.Up:
            r.top > h.top && l.push(u);
            break;
          case le.Left:
            r.left > h.left && l.push(u);
            break;
          case le.Right:
            r.left < h.left && l.push(u);
            break;
        }
    });
    const c = iy({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: l
    });
    let f = au(c, "id");
    if (f === a?.id && c.length > 1 && (f = c[1].id), f != null) {
      const u = i.get(n.id), h = i.get(f), p = h ? o.get(h.id) : null, b = h?.node.current;
      if (b && p && u && h) {
        const v = jr(b).some((E, S) => s[S] !== E), w = Ru(u, h), N = Ow(u, h), x = v || !w ? {
          x: 0,
          y: 0
        } : {
          x: N ? r.width - p.width : 0,
          y: N ? r.height - p.height : 0
        }, y = {
          x: p.left,
          y: p.top
        };
        return x.x && x.y ? y : kn(y, x);
      }
    }
  }
};
function Ru(e, t) {
  return !Ar(e) || !Ar(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function Ow(e, t) {
  return !Ar(e) || !Ar(t) || !Ru(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function Tw({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: i = !1
}) {
  const { attributes: a, listeners: s, setNodeRef: l, transform: c, transition: f, isDragging: u } = Aw({
    id: o(e),
    disabled: i
  }), h = {
    transform: kt.Transform.toString(c),
    transition: f
  };
  return /* @__PURE__ */ D("div", { ref: l, style: h, className: `relative group/drag-item ${u ? "opacity-50" : ""} ${i ? "opacity-60" : ""}`, children: [
    n(e, t, u),
    !i && (r ? /* @__PURE__ */ d("div", { ...a, ...s, children: r(e, t) }) : (
      /* If no drag indicator, make entire item draggable */
      /* @__PURE__ */ d(
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
function _w({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ d("div", { className: "rotate-2", children: n(e, t, !0) });
}
function Lw({
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
  renderDragOverlay: f,
  isItemDisabled: u,
  canDropAt: h
}) {
  const [p, b] = te(e);
  ce(() => {
    b(e);
  }, [e]);
  const [g, v] = te(null), w = ty(
    Ks(Fi),
    Ks(_i, {
      coordinateGetter: Mw
    })
  ), N = (E) => {
    const S = p.find((C) => o(C) === E.active.id);
    S && u && u(S) || v(E.active.id);
  }, x = (E) => {
    const { active: S, over: C } = E;
    if (!C || S.id === C.id) {
      v(null);
      return;
    }
    const R = p.find((O) => o(O) === S.id), I = p.findIndex((O) => o(O) === S.id), k = p.findIndex((O) => o(O) === C.id);
    if (R && u && u(R)) {
      v(null);
      return;
    }
    if (h && !h(R, k, p)) {
      v(null);
      return;
    }
    if (I !== -1 && k !== -1) {
      const O = zi(p, I, k);
      b(O), t(O);
    }
    v(null);
  }, y = p.find((E) => o(E) === g), P = y ? p.findIndex((E) => o(E) === g) : -1;
  return /* @__PURE__ */ D("div", { className: `w-full ${a}`, children: [
    s && /* @__PURE__ */ d("div", { className: "mb-6", children: s() }),
    p.length === 0 && l ? l() : /* @__PURE__ */ d("div", { className: "mb-6", children: /* @__PURE__ */ D(
      Qy,
      {
        sensors: w,
        collisionDetection: oy,
        onDragStart: N,
        onDragEnd: x,
        children: [
          /* @__PURE__ */ d(Cw, { items: p.map(o), strategy: Bi, children: /* @__PURE__ */ d("div", { className: i, children: p.map((E, S) => /* @__PURE__ */ d(
            Tw,
            {
              item: E,
              index: S,
              renderItem: n,
              renderDragIndicator: r,
              keyExtractor: o,
              disabled: u ? u(E) : !1
            },
            o(E)
          )) }) }),
          /* @__PURE__ */ d(bw, { children: y ? f ? /* @__PURE__ */ d("div", { className: "rotate-2 shadow-lg", children: f(y, P) }) : /* @__PURE__ */ d(_w, { item: y, index: P, renderItem: n }) : null })
        ]
      }
    ) }),
    c && /* @__PURE__ */ D("div", { className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs", children: [
      /* @__PURE__ */ d("div", { className: "font-medium mb-1", children: "Debug Info" }),
      /* @__PURE__ */ D("div", { className: "text-gray-600 text-xs", children: [
        "Items: ",
        p.length,
        " | Active: ",
        g || "none"
      ] }),
      /* @__PURE__ */ D("div", { className: "text-xs text-gray-500 mt-1 break-all", children: [
        "Order: ",
        p.map((E, S) => `${S + 1}:${o(E).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const Fw = za(
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
function Ki({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ d("div", { className: ae(Fw({ variant: t }), e), ...n });
}
function $w({
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
        /* @__PURE__ */ d(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "200px",
              height: "280px"
            },
            children: e.content || /* @__PURE__ */ D("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ d("div", { className: "text-sm font-medium text-gray-700", children: e.label || `Page ${t + 1}` }),
              /* @__PURE__ */ d("div", { className: "text-xs text-gray-400 mt-1 font-mono", children: e.id })
            ] })
          }
        ),
        /* @__PURE__ */ d("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ d(Ki, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${a ? "opacity-75" : ""}`, children: a ? /* @__PURE__ */ d(xo, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ D(Oe, { children: [
          /* @__PURE__ */ d("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ d(_a, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function zw({
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
  description: f = "Drag and drop pages to change their order.",
  gridColsClass: u = "page-order-grid-cols"
}) {
  const [h, p] = m.useState(n), [b, g] = m.useState(!1), v = (R) => R.id;
  m.useEffect(() => {
    if (!e)
      p(n), g(!1);
    else if (!b)
      p(n);
    else {
      const R = new Set(h.map(v));
      (R.size !== n.length || n.some((k) => !R.has(v(k)))) && p(n);
    }
  }, [n, e, b, h]);
  const w = (R) => {
    p(R), g(!0);
  }, N = () => {
    r(h), g(!1), t(!1);
  }, x = () => {
    p(n), g(!1), t(!1);
  }, y = m.useMemo(() => (!i || typeof i != "function") && a ? Di({ pageComponents: a, payload: s, setup: l }) : null, [i, a, s, l]), P = (R, I, k) => {
    const O = R.strictPosition, F = !!o && !(O === "start" || O === "end"), K = (T) => {
      T.preventDefault(), T.stopPropagation(), o && (o(R), p(($) => $.filter((_) => v(_) !== v(R))), g(!0));
    }, M = i && typeof i == "function" ? i(R, I, k) : y ? y(R, I, k) : /* @__PURE__ */ d($w, { page: R, index: I, isDragging: k });
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
            /* @__PURE__ */ d(_a, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ d(nt, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, E = () => /* @__PURE__ */ D("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ d("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ d(cs, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ d("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ d("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), S = m.useCallback((R) => {
    const I = R.strictPosition;
    return I === "start" || I === "end";
  }, []), C = m.useCallback((R, I, k) => {
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
  return /* @__PURE__ */ d(Qc, { open: e, onOpenChange: (R) => {
    R || x();
  }, children: /* @__PURE__ */ D(
    Ri,
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
        /* @__PURE__ */ d(Ii, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ D("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ d("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ d(cs, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ D("div", { className: "flex-1", children: [
            /* @__PURE__ */ d(Ai, { className: "text-base font-medium text-gray-900 leading-tight", children: c }),
            /* @__PURE__ */ d(ki, { className: "text-xs text-gray-400 mt-0.5", children: f })
          ] }),
          /* @__PURE__ */ D(Ki, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            h.length,
            " ",
            h.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ d("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ d("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ d(
          Lw,
          {
            items: h,
            onChange: w,
            renderItem: P,
            keyExtractor: v,
            renderEmptyState: E,
            gridColsClass: u,
            className: "pb-4",
            isItemDisabled: S,
            canDropAt: C
          }
        ) }) }),
        /* @__PURE__ */ D(tu, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
          /* @__PURE__ */ d(
            Ae,
            {
              variant: "outline",
              onClick: x,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ d(
            Ae,
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
function Bw({
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
  reference: f,
  overlay: u,
  className: h,
  pageNo: p = 0,
  totalPages: b,
  measurementPageNo: g,
  measurementTotalPages: v,
  dataBinding: w,
  flowPageIndex: N = 0,
  flowChunksByFlowId: x,
  measureFlow: y = !1,
  flowMeasurementKey: P,
  flowMeasurementVersion: E,
  onFlowMeasurement: S,
  renderVisible: C = !0
}) {
  const R = typeof u == "function" ? (T) => u({ pageNo: T, pageId: e }) : () => u, I = n || t || e, O = [I ? `uhuu-page--${I}` : "", h].filter(Boolean).join(" "), z = (T = p, $ = b) => r ? /* @__PURE__ */ d(
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
    P && S?.(P, T);
  }, [P, S]), M = m.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: E,
      registerMeasurement: K
    }),
    [E, K]
  );
  return /* @__PURE__ */ D(Oe, { children: [
    y && S && P && /* @__PURE__ */ d(
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
        children: /* @__PURE__ */ d(bo, { setup: c, children: /* @__PURE__ */ d(yo, { className: O, pageNo: p, "data-page-key": I, children: /* @__PURE__ */ d(hr.Provider, { value: M, children: z(
          g ?? p,
          v ?? b
        ) }) }) })
      }
    ),
    C && /* @__PURE__ */ d(bo, { setup: c, children: /* @__PURE__ */ D(
      yo,
      {
        className: O,
        pageNo: p,
        overlay: ({ pageNo: T }) => R(T),
        "data-page-key": I,
        children: [
          f,
          /* @__PURE__ */ d(hr.Provider, { value: F, children: z(p, b) })
        ]
      }
    ) })
  ] });
}
const Iu = m.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d(
    "select",
    {
      className: ae(
        "flex h-8 w-full rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
      children: t
    }
  )
);
Iu.displayName = "Select";
function Au(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Gr = "Switch", [Kw] = gt(Gr), [Ww, jw] = Kw(Gr), ku = m.forwardRef(
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
      form: f,
      ...u
    } = e, [h, p] = m.useState(null), b = ve(t, (x) => p(x)), g = m.useRef(!1), v = h ? f || !!h.closest("form") : !0, [w, N] = sn({
      prop: o,
      defaultProp: i ?? !1,
      onChange: c,
      caller: Gr
    });
    return /* @__PURE__ */ D(Ww, { scope: n, checked: w, disabled: s, children: [
      /* @__PURE__ */ d(
        be.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": Tu(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...u,
          ref: b,
          onClick: q(e.onClick, (x) => {
            N((y) => !y), v && (g.current = x.isPropagationStopped(), g.current || x.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ d(
        Ou,
        {
          control: h,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: w,
          required: a,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ku.displayName = Gr;
var Du = "SwitchThumb", Mu = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = jw(Du, n);
    return /* @__PURE__ */ d(
      be.span,
      {
        "data-state": Tu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Mu.displayName = Du;
var Vw = "SwitchBubbleInput", Ou = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, i) => {
    const a = m.useRef(null), s = ve(a, i), l = Au(n), c = ti(t);
    return m.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (l !== n && p) {
        const b = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(b);
      }
    }, [l, n, r]), /* @__PURE__ */ d(
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
Ou.displayName = Vw;
function Tu(e) {
  return e ? "checked" : "unchecked";
}
var _u = ku, Hw = Mu;
const Lu = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  _u,
  {
    ref: n,
    className: ae(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(
      Hw,
      {
        className: ae(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Lu.displayName = _u.displayName;
function Fu(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var $u = ["PageUp", "PageDown"], zu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Bu = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, hn = "Slider", [To, Gw, Uw] = Ho(hn), [Ku] = gt(hn, [
  Uw
]), [Yw, Ur] = Ku(hn), Wu = m.forwardRef(
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
      value: f,
      onValueChange: u = () => {
      },
      onValueCommit: h = () => {
      },
      inverted: p = !1,
      form: b,
      ...g
    } = e, v = m.useRef(/* @__PURE__ */ new Set()), w = m.useRef(0), x = a === "horizontal" ? Xw : qw, [y = [], P] = sn({
      prop: f,
      defaultProp: c,
      onChange: (k) => {
        [...v.current][w.current]?.focus(), u(k);
      }
    }), E = m.useRef(y);
    function S(k) {
      const O = t0(y, k);
      I(k, O);
    }
    function C(k) {
      I(k, w.current);
    }
    function R() {
      const k = E.current[w.current];
      y[w.current] !== k && h(y);
    }
    function I(k, O, { commit: z } = { commit: !1 }) {
      const F = i0(i), K = s0(Math.round((k - r) / i) * i + r, F), M = Fu(K, [r, o]);
      P((T = []) => {
        const $ = Qw(T, M, O);
        if (o0($, l * i)) {
          w.current = $.indexOf(M);
          const _ = String($) !== String(T);
          return _ && z && h($), _ ? $ : T;
        } else
          return T;
      });
    }
    return /* @__PURE__ */ d(
      Yw,
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
        children: /* @__PURE__ */ d(To.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ d(To.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ d(
          x,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...g,
            ref: t,
            onPointerDown: q(g.onPointerDown, () => {
              s || (E.current = y);
            }),
            min: r,
            max: o,
            inverted: p,
            onSlideStart: s ? void 0 : S,
            onSlideMove: s ? void 0 : C,
            onSlideEnd: s ? void 0 : R,
            onHomeKeyDown: () => !s && I(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && I(o, y.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: k, direction: O }) => {
              if (!s) {
                const K = $u.includes(k.key) || k.shiftKey && zu.includes(k.key) ? 10 : 1, M = w.current, T = y[M], $ = i * K * O;
                I(T + $, M, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Wu.displayName = hn;
var [ju, Vu] = Ku(hn, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Xw = m.forwardRef(
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
      ...f
    } = e, [u, h] = m.useState(null), p = ve(t, (x) => h(x)), b = m.useRef(void 0), g = Go(o), v = g === "ltr", w = v && !i || !v && i;
    function N(x) {
      const y = b.current || u.getBoundingClientRect(), P = [0, y.width], S = Wi(P, w ? [n, r] : [r, n]);
      return b.current = y, S(x - y.left);
    }
    return /* @__PURE__ */ d(
      ju,
      {
        scope: e.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ d(
          Hu,
          {
            dir: g,
            "data-orientation": "horizontal",
            ...f,
            ref: p,
            style: {
              ...f.style,
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
              const P = Bu[w ? "from-left" : "from-right"].includes(x.key);
              c?.({ event: x, direction: P ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), qw = m.forwardRef(
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
    } = e, f = m.useRef(null), u = ve(t, f), h = m.useRef(void 0), p = !o;
    function b(g) {
      const v = h.current || f.current.getBoundingClientRect(), w = [0, v.height], x = Wi(w, p ? [r, n] : [n, r]);
      return h.current = v, x(g - v.top);
    }
    return /* @__PURE__ */ d(
      ju,
      {
        scope: e.__scopeSlider,
        startEdge: p ? "bottom" : "top",
        endEdge: p ? "top" : "bottom",
        size: "height",
        direction: p ? 1 : -1,
        children: /* @__PURE__ */ d(
          Hu,
          {
            "data-orientation": "vertical",
            ...c,
            ref: u,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (g) => {
              const v = b(g.clientY);
              i?.(v);
            },
            onSlideMove: (g) => {
              const v = b(g.clientY);
              a?.(v);
            },
            onSlideEnd: () => {
              h.current = void 0, s?.();
            },
            onStepKeyDown: (g) => {
              const w = Bu[p ? "from-bottom" : "from-top"].includes(g.key);
              l?.({ event: g, direction: w ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Hu = m.forwardRef(
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
    } = e, f = Ur(hn, n);
    return /* @__PURE__ */ d(
      be.span,
      {
        ...c,
        ref: t,
        onKeyDown: q(e.onKeyDown, (u) => {
          u.key === "Home" ? (a(u), u.preventDefault()) : u.key === "End" ? (s(u), u.preventDefault()) : $u.concat(zu).includes(u.key) && (l(u), u.preventDefault());
        }),
        onPointerDown: q(e.onPointerDown, (u) => {
          const h = u.target;
          h.setPointerCapture(u.pointerId), u.preventDefault(), f.thumbs.has(h) ? h.focus() : r(u);
        }),
        onPointerMove: q(e.onPointerMove, (u) => {
          u.target.hasPointerCapture(u.pointerId) && o(u);
        }),
        onPointerUp: q(e.onPointerUp, (u) => {
          const h = u.target;
          h.hasPointerCapture(u.pointerId) && (h.releasePointerCapture(u.pointerId), i(u));
        })
      }
    );
  }
), Gu = "SliderTrack", Uu = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Ur(Gu, n);
    return /* @__PURE__ */ d(
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
Uu.displayName = Gu;
var _o = "SliderRange", Yu = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Ur(_o, n), i = Vu(_o, n), a = m.useRef(null), s = ve(t, a), l = o.values.length, c = o.values.map(
      (h) => Zu(h, o.min, o.max)
    ), f = l > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
    return /* @__PURE__ */ d(
      be.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [i.startEdge]: f + "%",
          [i.endEdge]: u + "%"
        }
      }
    );
  }
);
Yu.displayName = _o;
var Lo = "SliderThumb", Xu = m.forwardRef(
  (e, t) => {
    const n = Gw(e.__scopeSlider), [r, o] = m.useState(null), i = ve(t, (s) => o(s)), a = m.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ d(Zw, { ...e, ref: i, index: a });
  }
), Zw = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...i } = e, a = Ur(Lo, n), s = Vu(Lo, n), [l, c] = m.useState(null), f = ve(t, (N) => c(N)), u = l ? a.form || !!l.closest("form") : !0, h = ti(l), p = a.values[r], b = p === void 0 ? 0 : Zu(p, a.min, a.max), g = e0(r, a.values.length), v = h?.[s.size], w = v ? n0(v, b, s.direction) : 0;
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
          /* @__PURE__ */ d(To.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ d(
            be.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || g,
              "aria-valuemin": a.min,
              "aria-valuenow": p,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...i,
              ref: f,
              style: p === void 0 ? { display: "none" } : e.style,
              onFocus: q(e.onFocus, () => {
                a.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          u && /* @__PURE__ */ d(
            qu,
            {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: p
            },
            r
          )
        ]
      }
    );
  }
);
Xu.displayName = Lo;
var Jw = "RadioBubbleInput", qu = m.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, r) => {
    const o = m.useRef(null), i = ve(o, r), a = Au(t);
    return m.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
      if (a !== t && f) {
        const u = new Event("input", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(u);
      }
    }, [a, t]), /* @__PURE__ */ d(
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
qu.displayName = Jw;
function Qw(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, i) => o - i);
}
function Zu(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return Fu(i, [0, 100]);
}
function e0(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function t0(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function n0(e, t, n) {
  const r = e / 2, i = Wi([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
function r0(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function o0(e, t) {
  if (t > 0) {
    const n = r0(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Wi(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function i0(e) {
  return (String(e).split(".")[1] || "").length;
}
function s0(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Ju = Wu, a0 = Uu, l0 = Yu, c0 = Xu;
const ji = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ D(
  Ju,
  {
    ref: n,
    className: ae(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ d(a0, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ d(l0, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ d(c0, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
ji.displayName = Ju.displayName;
var u0 = /* @__PURE__ */ Symbol.for("react.lazy"), kr = m[" use ".trim().toString()];
function d0(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Qu(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === u0 && "_payload" in e && d0(e._payload);
}
// @__NO_SIDE_EFFECTS__
function f0(e) {
  const t = /* @__PURE__ */ h0(e), n = m.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    Qu(i) && typeof kr == "function" && (i = kr(i._payload));
    const s = m.Children.toArray(i), l = s.find(p0);
    if (l) {
      const c = l.props.children, f = s.map((u) => u === l ? m.Children.count(c) > 1 ? m.Children.only(null) : m.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: m.isValidElement(c) ? m.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function h0(e) {
  const t = m.forwardRef((n, r) => {
    let { children: o, ...i } = n;
    if (Qu(o) && typeof kr == "function" && (o = kr(o._payload)), m.isValidElement(o)) {
      const a = v0(o), s = g0(i, o.props);
      return o.type !== m.Fragment && (s.ref = r ? Mn(r, a) : a), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var m0 = /* @__PURE__ */ Symbol("radix.slottable");
function p0(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === m0;
}
function g0(e, t) {
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
function v0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var b0 = [
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
], y0 = b0.reduce((e, t) => {
  const n = /* @__PURE__ */ f0(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), w0 = "Label", ed = m.forwardRef((e, t) => /* @__PURE__ */ d(
  y0.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
ed.displayName = w0;
var td = ed;
const Zt = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  td,
  {
    ref: n,
    className: ae(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Zt.displayName = td.displayName;
function nd(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((a) => typeof a == "function" ? a(o) : a === o.id || a === o.templateId || o.componentKey === a) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function x0({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = nd(e, t), o = (i) => {
    const a = i.getValue(t);
    switch (i.type) {
      case "select":
        return /* @__PURE__ */ D("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ d(Zt, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ d(
            Iu,
            {
              id: i.id,
              value: String(a),
              onChange: (s) => n(i, t, s.target.value),
              className: "w-full text-sm",
              children: i.options.map((s) => /* @__PURE__ */ d("option", { value: s.value, children: s.label }, s.value))
            }
          )
        ] }, i.id);
      case "toggle": {
        const s = typeof a == "boolean" ? a : a === "true";
        return /* @__PURE__ */ D("div", { className: "flex items-center justify-between py-1.5", children: [
          /* @__PURE__ */ d(Zt, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ d(
            Lu,
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
            /* @__PURE__ */ d(Zt, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
            /* @__PURE__ */ d("span", { className: "text-xs font-mono tabular-nums text-gray-700", children: s })
          ] }),
          /* @__PURE__ */ d(
            ji,
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
          /* @__PURE__ */ d(Zt, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ d(
              Ae,
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
                children: /* @__PURE__ */ d(Ph, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ d("div", { className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200", children: /* @__PURE__ */ d("span", { className: "text-sm font-mono tabular-nums font-medium text-gray-900", children: s }) }),
            /* @__PURE__ */ d(
              Ae,
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
                children: /* @__PURE__ */ d(nt, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }, i.id);
      }
      case "color-series": {
        const s = String(a);
        return /* @__PURE__ */ D("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ d(Zt, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ d("div", { className: "flex flex-wrap gap-1.5", children: i.options.map((l) => {
            const c = s === l.value;
            return /* @__PURE__ */ d(
              "button",
              {
                onClick: () => n(i, t, l.value),
                className: `h-7 w-7 rounded-md border-2 transition-all flex items-center justify-center ${c ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"}`,
                style: { backgroundColor: l.hex || l.value },
                type: "button",
                title: `${l.label}${l.hex ? ` (${l.hex})` : ""}`,
                children: c && /* @__PURE__ */ d(Ko, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
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
  return /* @__PURE__ */ d("div", { className: "space-y-3", children: r.map((i) => o(i)) });
}
function C0({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || nd(e, t).length === 0 ? null : /* @__PURE__ */ D($n, { modal: !1, children: [
    /* @__PURE__ */ d(zn, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ D(
      Ae,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ d(Ta, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ d(cn, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ d(
      x0,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function S0({
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
  onAddPage: f,
  onDuplicate: u,
  onDelete: h
}) {
  const [p, b] = te(!1), [g, v] = te(!1), [w, N] = te(e), x = de(null);
  ce(() => {
    N(e);
  }, [e]), ce(() => {
    g && setTimeout(() => {
      x.current?.focus(), x.current?.select();
    }, 10);
  }, [g]);
  const y = () => {
    const S = w.trim();
    S && S !== e && s?.(S), v(!1);
  }, P = n || r || o || i || a, E = t || P;
  return g ? /* @__PURE__ */ d(
    "input",
    {
      ref: x,
      value: w,
      onChange: (S) => N(S.target.value),
      onKeyDown: (S) => {
        S.key === "Enter" && y(), S.key === "Escape" && (N(e), v(!1)), S.stopPropagation();
      },
      onBlur: y,
      className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
      "data-uhuu-editor": !0
    }
  ) : E ? /* @__PURE__ */ D($n, { open: p, onOpenChange: b, modal: !1, children: [
    /* @__PURE__ */ d(zn, { asChild: !0, children: /* @__PURE__ */ D(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ d("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ d(Oa, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ D(cn, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ D($e, { onSelect: (S) => {
        S.preventDefault(), b(!1), v(!0);
      }, children: [
        /* @__PURE__ */ d(Rh, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && P && /* @__PURE__ */ d(zt, {}),
      n && /* @__PURE__ */ D($e, { onClick: l, children: [
        /* @__PURE__ */ d(lh, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ D($e, { onClick: c, children: [
        /* @__PURE__ */ d(ih, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ d(zt, {}),
      o && /* @__PURE__ */ D($e, { onClick: f, children: [
        /* @__PURE__ */ d(nt, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      i && /* @__PURE__ */ D($e, { onClick: u, children: [
        /* @__PURE__ */ d(bh, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      a && /* @__PURE__ */ d(zt, {}),
      a && /* @__PURE__ */ D($e, { onClick: h, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ d(Mh, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ d("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function N0(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: i,
    payload: a,
    setup: s,
    stateKey: l = Ht,
    resolveNewItem: c,
    notifyError: f,
    pageFilter: u
  } = e, [h, p] = te(t), [b, g] = te(!1), v = de(t);
  ce(() => {
    try {
      const M = JSON.stringify(v.current), T = JSON.stringify(t);
      M !== T && (v.current = t, p(t));
    } catch {
      v.current !== t && (v.current = t, p(t));
    }
  }, [t]);
  const w = Ce(Bn), N = he((M) => {
    p(M);
    const T = Pc(M, l);
    w?.mergePageEditorState && w.mergePageEditorState(M, l), o?.(T), r?.(M, T);
  }, [r, o, l, w]), x = U(() => {
    const M = /* @__PURE__ */ new Map();
    return h.forEach((T) => {
      const $ = T.templateId ?? T.id;
      M.set($, (M.get($) ?? 0) + 1), Le(T) && T.pages?.forEach((_) => {
        const L = _.templateId ?? _.id;
        M.set(L, (M.get(L) ?? 0) + 1);
      });
    }), M;
  }, [h]), y = U(() => n.filter((M) => {
    if (M.kind === "page") {
      const Z = M, oe = Z.templateId ?? Z.id, ie = x.get(oe) ?? 0, ne = Z.repeatable ?? !1, B = Z.maxInstances ?? null;
      return !(!ne && ie > 0 || B !== null && ie >= B);
    }
    const T = M, $ = T.templateId ?? T.id, _ = x.get($) ?? 0, L = T.repeatable ?? !1, Y = T.maxInstances ?? null;
    return !(!L && _ > 0 || L && Y !== null && _ >= Y);
  }), [n, x]), P = U(() => ht(h), [h]), E = he(async (M, T) => {
    const $ = (B) => B ? typeof B == "string" ? B : B.mode ?? "optional" : "none", _ = (B, V) => {
      if (!B) return [];
      if (Array.isArray(B)) return B;
      try {
        const Q = B(V);
        if (!Array.isArray(Q))
          return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof Q), [];
        const X = Q.filter((H) => typeof H == "string");
        return X.length !== Q.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), X;
      } catch (Q) {
        return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", Q), [];
      }
    }, Y = ((B) => {
      if (B.kind === "page") {
        const se = B, ue = se.templateId ?? se.id, me = se.componentKey ?? se.id;
        return Rc(ue, me, {
          label: se.label,
          className: se.className,
          repeatable: se.repeatable,
          maxInstances: se.maxInstances,
          integration: se.integration,
          strictPosition: se.strictPosition
        });
      }
      const V = B, Q = V.templateId ?? V.id, X = {
        payload: a,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, H = _(V.pageComponentKeys, X);
      return Ic(Q, H, {
        label: V.label,
        repeatable: V.repeatable ?? !1,
        maxInstances: V.maxInstances ?? null,
        integration: V.integration,
        strictPosition: V.strictPosition
      });
    })(M);
    typeof window < "u" && window.$uhuu?.debug;
    let Z, oe = Y;
    if (c)
      oe = await c(Y);
    else {
      const B = $(Y.integration);
      let V = !1;
      if (B !== "none" && typeof window < "u") {
        const Q = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        Q && (Z = await Q({ item: Y, mode: B }), Z == null && B === "required" && (V = !0));
      }
      if (V) return { success: !1 };
    }
    if (oe === null) return { success: !1 };
    const ie = oe ?? Y;
    if (Z !== void 0 && w?.setIntegrationPayload) {
      const B = ie.id;
      w.setIntegrationPayload(B, Z);
    }
    return N(((B, V, Q) => {
      const X = V.strictPosition;
      if (X === "start") return [V, ...B];
      if (X === "end") return [...B, V];
      const H = [], se = [], ue = [];
      if (B.forEach((pe) => {
        const De = pe.strictPosition;
        De === "start" ? H.push(pe) : De === "end" ? ue.push(pe) : se.push(pe);
      }), !Q || Q.mode === "end")
        return [...H, ...se, V, ...ue];
      const me = se.findIndex((pe) => pe.id === Q.anchorId);
      return me === -1 ? B.find((Be) => Be.id === Q.anchorId)?.strictPosition === "start" ? [...H, V, ...se, ...ue] : [...H, ...se, V, ...ue] : (Q.mode === "before" ? se.splice(me, 0, V) : se.splice(me + 1, 0, V), [...H, ...se, ...ue]);
    })(h, ie, T)), { success: !0, insertedId: ie.id };
  }, [h, N, c, w]), S = he((M) => {
    const T = (_) => {
      f ? f(_) : alert(_);
    }, $ = h.find((_) => _.id === M);
    if ($) {
      if (ht(h) <= 1) {
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
        if (ht(h) <= 1) {
          T("Cannot remove the last page. At least one page is required.");
          return;
        }
        if (_.pages.length === 1) {
          if (w?.removeIntegrationPayload) {
            const Y = _.id;
            w.payload?.integrations?.[Y] !== void 0 && w.removeIntegrationPayload(Y);
          }
          N(h.filter((Y) => Y.id !== _.id));
        } else
          N(h.map((Y) => Y.id === _.id && Le(Y) ? {
            ...Y,
            pages: Y.pages.filter((Z) => Z.id !== M)
          } : Y));
        return;
      }
  }, [h, f, N, w]), C = he((M, T) => {
    N(h.map(($) => $.id === M ? Le($) ? {
      ...$,
      ...T
    } : { ...$, ...T } : $));
  }, [h, N]), R = he((M) => {
    N(M);
  }, [N]), I = U(() => {
    const M = ub(h);
    return u ? pb(M, u) : M;
  }, [h, u]), k = he((M) => {
    const T = [];
    return I.forEach(($) => {
      Le($) ? ($.pages ?? []).forEach((L) => {
        T.push(M(L, $));
      }) : T.push(M($, $));
    }), T;
  }, [I]), O = U(
    () => db(I),
    [I]
  ), z = he((M) => {
    const T = fb(M, h);
    N(((_) => {
      const L = [], Y = [], Z = [];
      return _.forEach((oe) => {
        const ie = oe.strictPosition;
        ie === "start" ? L.push(oe) : ie === "end" ? Z.push(oe) : Y.push(oe);
      }), [...L, ...Y, ...Z];
    })(T));
  }, [h, N]), F = he(() => {
    g(!0);
  }, []), K = U(() => {
    if (i)
      return Di({ pageComponents: i, payload: a, setup: s });
  }, [i, a, s]);
  return {
    items: h,
    itemsWithPageNum: I,
    totalPageCount: P,
    availableItemsToAdd: y,
    addItem: E,
    removeItem: S,
    updateItemFields: C,
    reorderItems: R,
    addDialogOpen: b,
    setAddDialogOpen: g,
    openAddDialog: F,
    renderItems: k,
    itemsForReorder: O,
    handleReorder: z,
    defaultRenderThumbnail: K
  };
}
function P0({
  items: e,
  reorderItems: t,
  availableItemsToAdd: n,
  setPendingInsertPosition: r,
  openAddDialog: o
}) {
  const i = U(
    () => e.filter((s) => !s.strictPosition),
    [e]
  );
  return he(
    (s, l) => {
      if (!s) return {};
      const c = s.id, f = i.findIndex((v) => v.id === c), u = f !== -1, h = u && f > 0 ? () => {
        const v = [...e], w = v.findIndex((N) => N.id === c);
        w < 1 || ([v[w - 1], v[w]] = [v[w], v[w - 1]], t(v));
      } : void 0, p = u && f < i.length - 1 ? () => {
        const v = [...e], w = v.findIndex((N) => N.id === c);
        w < 0 || w >= v.length - 1 || ([v[w], v[w + 1]] = [v[w + 1], v[w]], t(v));
      } : void 0, b = u && s.repeatable ? () => {
        const w = { ...e.find((y) => y.id === c) ?? s, id: `${c}_copy_${Date.now()}` }, N = [...e], x = N.findIndex((y) => y.id === c);
        N.splice(x < 0 ? N.length : x + 1, 0, w), t(N);
      } : void 0;
      return { onAddPage: l && n.length > 0 ? () => {
        r({ mode: "before", anchorId: l }), o();
      } : void 0, onMoveUp: h, onMoveDown: p, onDuplicate: b };
    },
    [e, i, t, n, r, o]
  );
}
function E0(e = [], t = {}) {
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
function R0({
  logicalPages: e,
  pageFilter: t,
  layoutKey: n = ""
}) {
  const [r, o] = te({
    layoutKey: n,
    layouts: {}
  }), i = r.layoutKey === n ? r.layouts : {}, a = U(
    () => e.filter((p) => p.hasFlow).map((p) => p.flowKey).join("|"),
    [e]
  ), s = U(
    () => new Set(a ? a.split("|") : []),
    [a]
  ), l = U(() => {
    const p = {};
    for (const b of e) {
      if (!b.hasFlow) continue;
      const g = i[b.flowKey];
      g && (p[b.flowKey] = g);
    }
    return p;
  }, [i, e]), c = he((p, b) => {
    s.has(p) && o((g) => {
      const v = g.layoutKey === n ? g.layouts : {}, w = {};
      let N = !1;
      for (const [S, C] of Object.entries(v))
        s.has(S) ? w[S] = C : N = !0;
      const x = w[p] ?? { flows: {} }, y = x.flows[b.flowId], P = y ? JSON.stringify(y) : "", E = JSON.stringify(b.chunks);
      return g.layoutKey === n && P === E && !N ? g : {
        layoutKey: n,
        layouts: {
          ...w,
          [p]: {
            flows: {
              ...x.flows,
              [b.flowId]: b.chunks
            }
          }
        }
      };
    });
  }, [s, n]), f = U(
    () => E0(e, l),
    [e, l]
  ), u = f.length, h = U(
    () => f.filter((p) => gb(p.pageNum, u, t)),
    [f, u, t]
  );
  return {
    allVirtualPages: f,
    renderedVirtualPages: h,
    virtualTotalPageCount: u,
    registerMeasurement: c
  };
}
function ta(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function I0(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function A0({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const i = Dc(e, t, n), a = n && Le(n) ? n.id : void 0, s = `pages.${t.id}`, l = a ? `pages.${a}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: a,
    integration: {
      instanceId: i.instanceId,
      data: i.integration,
      path: (c) => zs(i.instanceId, c)
    },
    paths: {
      integration: (c) => zs(i.instanceId, c),
      page: (c) => ta(s, c),
      group: (c) => ta(l, c),
      document: (c) => c ?? null
    },
    defaults: {
      imageGalleryPath: I0(
        e,
        i.integration,
        o
      )
    }
  };
}
const na = (e, t, n = !1, r) => {
  const o = typeof e == "string" ? e : e.id, i = r?.[o], a = typeof e == "string" ? i?.componentKey ?? o : e.componentKey ?? i?.componentKey ?? e.id, s = t ?? o, l = (typeof e == "string" ? void 0 : e.repeatable) ?? i?.repeatable ?? !1, c = (typeof e == "string" ? void 0 : e.maxInstances) ?? i?.maxInstances ?? null, f = (typeof e == "string" ? void 0 : e.label) ?? i?.label, u = (typeof e == "string" ? void 0 : e.className) ?? i?.className, h = (typeof e == "string" ? void 0 : e.component) ?? i?.component, p = (typeof e == "string" ? void 0 : e.integration) ?? i?.integration, b = (typeof e == "string" ? void 0 : e.strictPosition) ?? i?.strictPosition, g = (typeof e == "string" ? void 0 : e.hasFlow) ?? i?.hasFlow;
  return n ? {
    kind: "page",
    id: o,
    componentKey: a,
    templateId: s,
    label: f,
    className: u,
    repeatable: l,
    maxInstances: c,
    integration: p,
    component: h,
    strictPosition: b,
    hasFlow: g,
    ...typeof e == "string" ? {} : e
  } : Rc(s, a, {
    label: f,
    className: u,
    repeatable: l,
    maxInstances: c,
    integration: p,
    component: h,
    strictPosition: b,
    hasFlow: g,
    ...typeof e == "string" ? {} : e
  });
}, ra = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, a = D0(e.pageComponentKeys, o).map((s) => {
    const l = r?.[s], c = l?.dataKey, f = l?.hasFlow;
    return c || f ? { key: s, ...c ? { dataKey: c } : {}, ...f ? { hasFlow: f } : {} } : s;
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
      pages: a.map((c, f) => {
        const u = typeof c == "string" ? c : c.key, h = typeof c == "string" ? void 0 : c.dataKey;
        return {
          id: `${s}__${h ?? u}__${f}`,
          componentKey: u,
          templateId: u,
          ...h ? { dataKey: h } : {},
          ...r?.[u]?.hasFlow ? { hasFlow: !0 } : {}
        };
      })
    };
  }
  return Ic(e.id, a, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, k0 = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], D0 = (e, t) => {
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
}, M0 = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: i = {},
    payload: a
  } = e, s = k0(n), l = /* @__PURE__ */ new Map();
  s.forEach((g) => l.set(g.id, g));
  const c = r.length ? r : Object.keys(o), f = { ...i };
  Object.entries(o).forEach(([g, v]) => {
    v.component && (f[g] = v.component);
  });
  const u = t.map((g) => {
    if (typeof g == "string") {
      const w = l.get(g);
      return w ? ra(w, !0, a, o) : na(g, void 0, !0, o);
    }
    return g.pageComponentKeys !== void 0 ? ra(g, !0, a, o) : na(g, void 0, !0, o);
  }), h = s.map((g) => ({
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
  })), b = [
    ...c.filter((g) => o?.[g]?.allowAsSinglePage !== !1).map((g) => {
      const v = o?.[g];
      return {
        kind: "page",
        id: g,
        // Template ID
        templateId: g,
        componentKey: v?.componentKey ?? g,
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
  return { initialItems: u, availableItems: b, pageComponents: f };
};
var rd = "AlertDialog", [O0] = gt(rd, [
  _c
]), vt = _c(), od = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = vt(t);
  return /* @__PURE__ */ d(Zc, { ...r, ...n, modal: !0 });
};
od.displayName = rd;
var T0 = "AlertDialogTrigger", _0 = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = vt(n);
    return /* @__PURE__ */ d($b, { ...o, ...r, ref: t });
  }
);
_0.displayName = T0;
var L0 = "AlertDialogPortal", id = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = vt(t);
  return /* @__PURE__ */ d(Jc, { ...r, ...n });
};
id.displayName = L0;
var F0 = "AlertDialogOverlay", sd = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = vt(n);
    return /* @__PURE__ */ d(Ci, { ...o, ...r, ref: t });
  }
);
sd.displayName = F0;
var nn = "AlertDialogContent", [$0, z0] = O0(nn), B0 = /* @__PURE__ */ Qh("AlertDialogContent"), ad = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, i = vt(n), a = m.useRef(null), s = ve(t, a), l = m.useRef(null);
    return /* @__PURE__ */ d(
      Tb,
      {
        contentName: nn,
        titleName: ld,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ d($0, { scope: n, cancelRef: l, children: /* @__PURE__ */ D(
          Si,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: s,
            onOpenAutoFocus: q(o.onOpenAutoFocus, (c) => {
              c.preventDefault(), l.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ d(B0, { children: r }),
              /* @__PURE__ */ d(W0, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
ad.displayName = nn;
var ld = "AlertDialogTitle", cd = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = vt(n);
    return /* @__PURE__ */ d(Ni, { ...o, ...r, ref: t });
  }
);
cd.displayName = ld;
var ud = "AlertDialogDescription", dd = m.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = vt(n);
  return /* @__PURE__ */ d(Pi, { ...o, ...r, ref: t });
});
dd.displayName = ud;
var K0 = "AlertDialogAction", fd = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = vt(n);
    return /* @__PURE__ */ d(Ei, { ...o, ...r, ref: t });
  }
);
fd.displayName = K0;
var hd = "AlertDialogCancel", md = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = z0(hd, n), i = vt(n), a = ve(t, o);
    return /* @__PURE__ */ d(Ei, { ...i, ...r, ref: a });
  }
);
md.displayName = hd;
var W0 = ({ contentRef: e }) => {
  const t = `\`${nn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${nn}\` by passing a \`${ud}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${nn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return m.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, j0 = od, V0 = id, pd = sd, gd = ad, vd = fd, bd = md, yd = cd, wd = dd;
const H0 = j0, G0 = V0, xd = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  pd,
  {
    ref: n,
    className: ae(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xd.displayName = pd.displayName;
const Cd = m.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = Wo();
  return /* @__PURE__ */ D(G0, { container: r || void 0, children: [
    /* @__PURE__ */ d(xd, {}),
    /* @__PURE__ */ d(
      gd,
      {
        ref: n,
        "data-uhuu-editor": !0,
        className: ae(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md border border-gray-200 bg-white p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e
        ),
        ...t
      }
    )
  ] });
});
Cd.displayName = gd.displayName;
const Sd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d("div", { className: ae("flex flex-col gap-2 text-left", e), ...t });
Sd.displayName = "AlertDialogHeader";
const Nd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "div",
  {
    className: ae("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
Nd.displayName = "AlertDialogFooter";
const Pd = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  yd,
  {
    ref: n,
    className: ae("text-base font-semibold text-gray-900", e),
    ...t
  }
));
Pd.displayName = yd.displayName;
const Ed = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  wd,
  {
    ref: n,
    className: ae("text-sm text-gray-600", e),
    ...t
  }
));
Ed.displayName = wd.displayName;
const Rd = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  vd,
  {
    ref: n,
    className: ae(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
Rd.displayName = vd.displayName;
const U0 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  bd,
  {
    ref: n,
    className: ae(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
U0.displayName = bd.displayName;
const po = "__edit__", go = "__print__";
function oa({
  checked: e,
  label: t,
  onSelect: n,
  keepOpen: r = !1
}) {
  return /* @__PURE__ */ D(
    $e,
    {
      onSelect: (o) => {
        r && o.preventDefault(), n();
      },
      className: "flex items-center gap-2",
      children: [
        e ? /* @__PURE__ */ d(Ko, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ d("span", { className: "w-3 h-3" }),
        /* @__PURE__ */ d("span", { className: "flex-1 truncate", children: t })
      ]
    }
  );
}
function ia({ label: e, value: t }) {
  return /* @__PURE__ */ D(Sc, { className: "flex items-center justify-between gap-4 text-xs", children: [
    /* @__PURE__ */ d("span", { className: "text-gray-700", children: e }),
    /* @__PURE__ */ D("span", { className: "flex items-center gap-1 text-gray-400", children: [
      t ? /* @__PURE__ */ d("span", { className: "max-w-[110px] truncate", children: t }) : null,
      /* @__PURE__ */ d(mh, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function Y0({
  modes: e,
  selectedMode: t,
  onModeChange: n,
  interactive: r,
  onInteractiveChange: o,
  hasReferenceRenderer: i = !1,
  referenceOpacity: a = 50,
  onReferenceOpacityChange: s,
  brandKits: l,
  activeBrandKitId: c,
  onSelectBrandKit: f,
  onAddBrandKit: u
}) {
  const h = e ? Object.keys(e) : [], p = [
    { value: po, label: "Edit" },
    ...h.length > 0 ? h.map((y) => ({ value: y, label: e[y].label })) : [{ value: go, label: "Print" }]
  ], b = r ? po : t || h[0] || go, g = p.find((y) => y.value === b)?.label ?? "Edit", v = (y) => {
    if (y === po) {
      o(!0);
      return;
    }
    o(!1), y !== go && e && e[y] && n?.(y, e[y]);
  }, w = !!l && l.length > 0, N = l?.find((y) => y.id === c)?.name, x = () => {
    const y = window.prompt(
      "Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:"
    );
    y && y.trim() && u?.(y.trim());
  };
  return /* @__PURE__ */ D($n, { modal: !1, children: [
    /* @__PURE__ */ d(zn, { asChild: !0, children: /* @__PURE__ */ D(
      Ae,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ d(uh, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ d("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ D(cn, { align: "end", className: "min-w-[200px]", children: [
      /* @__PURE__ */ D(Fs, { children: [
        /* @__PURE__ */ d(ia, { label: "Print Preview", value: g }),
        /* @__PURE__ */ d(Ao, { className: "min-w-[180px]", children: p.map((y) => /* @__PURE__ */ d(
          oa,
          {
            checked: b === y.value,
            label: y.label,
            onSelect: () => v(y.value)
          },
          y.value
        )) })
      ] }),
      w && /* @__PURE__ */ D(Fs, { children: [
        /* @__PURE__ */ d(ia, { label: "Brand Kit", value: N }),
        /* @__PURE__ */ D(Ao, { className: "min-w-[200px]", children: [
          l.map((y) => /* @__PURE__ */ d(
            oa,
            {
              checked: c === y.id,
              label: y.name,
              keepOpen: !0,
              onSelect: () => f?.(y.id)
            },
            y.id
          )),
          u && /* @__PURE__ */ D(Oe, { children: [
            /* @__PURE__ */ d(zt, {}),
            /* @__PURE__ */ D(
              $e,
              {
                onSelect: (y) => {
                  y.preventDefault(), x();
                },
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ d(nt, { className: "w-3 h-3 text-gray-400" }),
                  /* @__PURE__ */ d("span", { className: "flex-1", children: "Add published kit…" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      i && /* @__PURE__ */ D(Oe, { children: [
        /* @__PURE__ */ d(zt, {}),
        /* @__PURE__ */ d(Nc, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ D("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ D("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ d("span", { children: "Opacity" }),
            /* @__PURE__ */ D("span", { children: [
              a,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: "pt-2", children: /* @__PURE__ */ d(
            ji,
            {
              value: [a],
              min: 0,
              max: 100,
              step: 5,
              onValueChange: (y) => {
                const P = y[0] ?? a;
                s?.(P);
              }
            }
          ) }),
          /* @__PURE__ */ D("div", { className: "pt-2 flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ d("span", { children: "Hidden" }),
            /* @__PURE__ */ d("span", { children: "Solid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const X0 = { width: 210, height: 297 };
function q0(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function Z0({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ d("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ D("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ d("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ d(Ko, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
    /* @__PURE__ */ D("h2", { className: "text-base font-medium text-gray-900 mb-5", children: [
      e,
      " added"
    ] }),
    /* @__PURE__ */ D("div", { className: "flex gap-2 w-full", children: [
      /* @__PURE__ */ d(Ae, { variant: "outline", size: "sm", onClick: n, className: "flex-1", children: "Add another" }),
      /* @__PURE__ */ d(Ae, { variant: "default", size: "sm", onClick: t, className: "flex-1", children: "Done" })
    ] })
  ] }) }) : null;
}
function sa({
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
  menuItems: f,
  gridColsClass: u,
  reorderTitle: h = "Reorder Pages and Groups",
  reorderDescription: p = "Drag and drop to reorder. Groups move as a single unit.",
  stateKey: b = Ht,
  onItemsChange: g,
  onStateChange: v,
  resolveNewItem: w,
  pageFilter: N,
  printConfigs: x,
  brandKits: y,
  activeBrandKitId: P,
  onSelectBrandKit: E,
  onAddBrandKit: S
}) {
  const C = o ?? X0, { interactive: R, setInteractive: I, enableDevTools: k } = jo(), O = Vo(), [z, F] = te(null), [K, M] = te(null), [T, $] = te(void 0), [_, L] = te(0), [Y, Z] = te(0), oe = z ?? N, ie = U(() => K ? { ...C, ...K } : C, [C, K]), ne = Ce(Bn), B = ne?.payload ?? r, [V, Q] = te(!1), X = ie?.preview ?? "single_page", H = U(
    () => X === "two_pages" ? { ...ie, preview: "single_page" } : ie,
    [X, ie]
  ), se = U(() => bi(e), [e]), ue = U(() => i?.length ? i.map((A) => "getValue" in A ? A : ne?.setPageOptionValue ? Pb(
    A,
    ne.payload,
    ne.setPageOptionValue
  ) : ((Jt() || k) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [i, ne]), [me, pe] = te(null), [De, Be] = te({ mode: "end" }), [ct, mn] = te(null), _t = de(null), {
    items: Ke,
    itemsWithPageNum: Lt,
    availableItemsToAdd: bt,
    addItem: pn,
    removeItem: gn,
    reorderItems: Yr,
    updateItemFields: Gt,
    addDialogOpen: yt,
    setAddDialogOpen: wt,
    openAddDialog: ut,
    itemsForReorder: Hn,
    handleReorder: Qe,
    defaultRenderThumbnail: Gn
  } = N0({
    initialItems: se,
    availableItems: t,
    pageComponents: n,
    payload: B,
    setup: ie,
    stateKey: b,
    onItemsChange: g,
    onStateChange: v,
    resolveNewItem: w,
    notifyError: a
  }), vn = U(() => {
    const A = [];
    for (const G of Lt) {
      const J = Le(G) ? G.pages ?? [] : [G];
      for (const ee of J) {
        if (!ee?.id) continue;
        const ge = Le(G) ? G : void 0;
        A.push({
          ...ee,
          kind: "page",
          id: ee.id,
          pageNum: ee.pageNum ?? A.length + 1,
          basePageNum: ee.pageNum ?? A.length + 1,
          parentGroup: ge,
          flowKey: q0(ee, ge)
        });
      }
    }
    return A.sort((G, J) => (G.basePageNum ?? 0) - (J.basePageNum ?? 0));
  }, [Lt]), Un = U(() => JSON.stringify({
    format: H?.format,
    orientation: H?.orientation,
    width: H?.width,
    height: H?.height,
    bleed: H?.bleed,
    showBleed: H?.showBleed,
    preview: H?.preview,
    flowPages: vn.filter((A) => A.hasFlow).map((A) => A.flowKey).join("|")
  }), [H, vn]), Ut = U(() => ht(Ke), [Ke]), {
    allVirtualPages: bn,
    renderedVirtualPages: Ft,
    virtualTotalPageCount: xt,
    registerMeasurement: Xr
  } = R0({
    logicalPages: vn,
    pageFilter: oe,
    layoutKey: Un
  }), Yn = U(
    () => new Set(Ft.map((A) => A.virtualPageId)),
    [Ft]
  ), qr = U(
    () => bn.filter((A) => A.hasFlow && A.virtualPageIndex === 0 && (c || !Yn.has(A.virtualPageId))),
    [bn, Yn, c]
  );
  m.useEffect(() => {
    if (!ct) return;
    const A = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${ct}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(A);
  }, [ct]);
  const Se = P0({
    items: Ke,
    reorderItems: Yr,
    availableItemsToAdd: bt,
    setPendingInsertPosition: Be,
    openAddDialog: ut
  }), Re = he(async (A) => {
    const G = await pn(A, De);
    G.success && (mn(G.insertedId), _t.current && clearTimeout(_t.current), _t.current = setTimeout(() => mn(null), 1200), Be({ mode: "end" }), A.repeatable && A.integration && pe(A));
  }, [pn, De]), Ie = he(() => {
    const A = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!A.length) return { mode: "end" };
    const G = window.innerHeight / 2;
    let J = null, ee = 1 / 0;
    for (const xe of A) {
      const tt = xe.getBoundingClientRect(), dt = Math.abs(tt.top + tt.height / 2 - G);
      dt < ee && (ee = dt, J = xe);
    }
    const ge = J?.getAttribute("data-page-item-id");
    return ge ? { mode: "after", anchorId: ge } : { mode: "end" };
  }, []), Ge = he(() => {
    Be(Ie()), ut();
  }, [Ie, ut]), _e = m.useCallback(
    (A, G, J) => {
      if (!G) return;
      const ee = A.applyPatch?.(J, G);
      ee && Gt(G.id, ee), A.onChange?.(G.id, J, {
        item: G,
        updateItem: (ge) => Gt(G.id, ge)
      });
    },
    [Gt]
  ), Me = (A) => /* @__PURE__ */ D("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ d("span", { children: "Page" }),
    /* @__PURE__ */ D("span", { children: [
      A.pageNo,
      " / ",
      A.total
    ] })
  ] }), We = (A, G, J) => l ? l({ pageNo: A, total: xt, pageId: G, parent: J }) : Me({ pageNo: A, total: xt }), Ue = (A, G = {}) => {
    const J = A.parentGroup;
    if (c && G.renderVisible !== !1)
      return c({ page: A, parent: J });
    const ee = A.componentKey ?? A.id, ge = k && s ? s(A) : null, xe = k && s ? m.isValidElement(ge) ? m.cloneElement(ge, {
      opacity: Y
    }) : ge : null, tt = A.templateId ?? ee, dt = n[ee], Xn = ne?.getPagePayload ? ne.getPagePayload(A) : xr(B, { id: A.id, templateId: tt, componentKey: ee }), Zr = Mc(
      B,
      A,
      J
    ), qn = A0({
      payload: B,
      page: A,
      parentGroup: J,
      pagePayload: Xn
    });
    return /* @__PURE__ */ d(
      Bw,
      {
        pageId: A.id,
        templateId: tt,
        pageNo: A.pageNum,
        measurementPageNo: A.basePageNum,
        component: dt,
        payload: B,
        pagePayload: Xn,
        integration: Zr,
        page: A,
        parentGroup: J,
        componentKey: ee,
        setup: H,
        reference: xe,
        overlay: ({ pageNo: yn }) => We(yn, A.id, J),
        className: A.className,
        dataBinding: qn,
        totalPages: xt,
        measurementTotalPages: Ut,
        flowPageIndex: A.virtualPageIndex,
        flowChunksByFlowId: A.flowChunksByFlowId,
        measureFlow: G.measureFlow ?? (!!A.hasFlow && A.virtualPageIndex === 0),
        flowMeasurementKey: A.flowKey,
        flowMeasurementVersion: Un,
        onFlowMeasurement: A.hasFlow ? Xr : void 0,
        renderVisible: G.renderVisible ?? !0
      },
      `${G.renderVisible === !1 ? "measure-only" : "page"}-${A.virtualPageId}`
    );
  }, we = (A, G, J) => {
    const ee = !!G && Le(G), ge = ee && G.pages[0]?.id === A.id;
    if (A.virtualPageIndex > 0)
      return /* @__PURE__ */ D("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ d("span", { className: "page-number", children: A.pageNum }),
        /* @__PURE__ */ D("span", { className: "text-xs text-gray-500", children: [
          A.label || A.componentKey || A.id,
          " continued"
        ] })
      ] });
    if (ee && !ge)
      return /* @__PURE__ */ d("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ d("span", { className: "page-number", children: A.pageNum }),
        A.label && /* @__PURE__ */ d("span", { className: "text-xs text-gray-500", children: A.label }),
        /* @__PURE__ */ d("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const xe = ee ? G : A, tt = ee ? G.label || G.id : A.label || `Page ${A.pageNum}`;
    return /* @__PURE__ */ D("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ d("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: A.pageNum }),
      /* @__PURE__ */ d(
        S0,
        {
          name: tt,
          canRename: !0,
          canMoveUp: !!J?.onMoveUp,
          canMoveDown: !!J?.onMoveDown,
          canAddPage: !!J?.onAddPage,
          canDuplicate: !!J?.onDuplicate,
          canDelete: Ut > 1,
          onRename: (dt) => Gt(xe.id, { label: dt || void 0 }),
          onMoveUp: J?.onMoveUp,
          onMoveDown: J?.onMoveDown,
          onAddPage: J?.onAddPage,
          onDuplicate: J?.onDuplicate,
          onDelete: () => gn(xe.id)
        }
      ),
      /* @__PURE__ */ d("span", { className: "pl-1", children: ue.length > 0 && /* @__PURE__ */ d(
        C0,
        {
          pageOptions: ue,
          targetItem: xe,
          onChange: _e,
          title: ee ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, et = U(() => {
    if (X !== "two_pages") return [];
    const A = Ft;
    if (!A.length) return [];
    const G = [{ left: void 0, right: A[0], layout: "right" }];
    for (let J = 1; J < A.length; J += 2) {
      const ee = A[J], ge = A[J + 1];
      if (ge)
        G.push({ left: ee, right: ge, layout: "spread" });
      else {
        const xe = ee.pageNum % 2 === 0;
        G.push({
          left: xe ? ee : void 0,
          right: xe ? void 0 : ee,
          layout: xe ? "left" : "right"
        });
      }
    }
    return G;
  }, [X, Ft]), je = /* @__PURE__ */ D("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ D(Ki, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      xt,
      " ",
      xt === 1 ? "Page" : "Pages"
    ] }),
    k && /* @__PURE__ */ d(
      Y0,
      {
        modes: x,
        selectedMode: T,
        onModeChange: (A, G) => {
          $(A), F(G.filter ?? null), M(G.pageFormat ?? null), L((J) => J + 1);
        },
        interactive: R,
        onInteractiveChange: (A) => {
          I(A), A && M(null);
        },
        hasReferenceRenderer: !!s,
        referenceOpacity: Y,
        onReferenceOpacityChange: Z,
        brandKits: y,
        activeBrandKitId: P,
        onSelectBrandKit: E,
        onAddBrandKit: S
      }
    ),
    R && /* @__PURE__ */ D(Oe, { children: [
      bt.length > 0 && /* @__PURE__ */ D(
        Ae,
        {
          variant: "ghost",
          size: "sm",
          onClick: Ge,
          title: "Add page or group",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ d(nt, { className: "w-3.5 h-3.5" }),
            "Add"
          ]
        }
      ),
      /* @__PURE__ */ D(
        Ae,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => Q(!0),
          title: "Reorder pages and groups using drag and drop",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ d(gh, { className: "w-3.5 h-3.5" }),
            "Reorder"
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ D(Oe, { children: [
    qr.map((A) => Ue(A, {
      renderVisible: !1,
      measureFlow: !0
    })),
    k && !R && /* @__PURE__ */ D(
      Ae,
      {
        onClick: () => I(!0),
        "data-uhuu-editor": !0,
        size: "sm",
        className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
        title: "Back to Edit Mode",
        children: [
          /* @__PURE__ */ d(La, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ d(
      Rb,
      {
        defaultZoom: 80,
        minZoom: 25,
        maxZoom: 200,
        menuItems: f ?? je,
        onAddPage: Ge,
        preview: X,
        children: X === "two_pages" ? et.map((A, G) => {
          const J = A.left ?? A.right, ee = A.right ?? A.left, ge = J?.parentGroup?.id ?? J?.id ?? null, xe = ee?.parentGroup?.id ?? ee?.id ?? null, tt = A.left?.parentGroup?.id ?? A.left?.id, dt = A.right?.parentGroup?.id ?? A.right?.id, Xn = tt === ct, Zr = dt === ct, qn = (yn, Id) => Se(yn ? yn.parentGroup ?? yn : void 0, Id);
          return /* @__PURE__ */ D(Eb, { layout: A.layout, pageItemId: xe ?? void 0, children: [
            A.left && /* @__PURE__ */ d(
              "div",
              {
                "data-page-item-id": A.left.virtualPageIndex === 0 ? tt : void 0,
                className: Xn ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ d(
                  co,
                  {
                    title: `Sheet ${A.left.pageNum}`,
                    controls: we(A.left, A.left.parentGroup, qn(A.left, ge)),
                    origin: A.left.pageNum % 2 === 0 ? "right" : "left",
                    children: Ue(A.left)
                  },
                  A.left.virtualPageId
                )
              }
            ),
            A.right && /* @__PURE__ */ d(
              "div",
              {
                "data-page-item-id": A.right.virtualPageIndex === 0 ? dt : void 0,
                className: Zr ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ d(
                  co,
                  {
                    title: `Sheet ${A.right.pageNum}`,
                    controls: we(A.right, A.right.parentGroup, qn(A.right, xe)),
                    origin: A.right.pageNum % 2 === 0 ? "right" : "left",
                    children: Ue(A.right)
                  },
                  A.right.virtualPageId
                )
              }
            )
          ] }, `pair-${G}`);
        }) : Ft.map((A) => {
          const G = A.parentGroup ?? A, J = A.parentGroup?.id ?? A.id, ee = Se(G, J), ge = A.parentGroup?.id ?? A.id, xe = ct === ge;
          return /* @__PURE__ */ d(
            "div",
            {
              "data-page-item-id": A.virtualPageIndex === 0 ? ge : void 0,
              className: xe ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ d(
                co,
                {
                  title: `Sheet ${A.pageNum}`,
                  controls: we(A, A.parentGroup, ee),
                  children: Ue(A)
                }
              )
            },
            A.virtualPageId
          );
        })
      },
      `dev-mode-${_}-${T ?? "default"}`
    ),
    R && !O && /* @__PURE__ */ D(Oe, { children: [
      /* @__PURE__ */ d(
        Bb,
        {
          open: yt,
          onOpenChange: wt,
          availableItems: bt,
          onSelectItem: Re,
          pageComponents: n,
          payload: B,
          setup: C,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ d(
        zw,
        {
          open: V,
          onOpenChange: Q,
          pages: Hn,
          onReorder: (A) => {
            Qe(A), Q(!1);
          },
          onRemove: (A) => gn(A.id),
          pageComponents: n,
          payload: B,
          setup: C,
          renderThumbnail: Gn,
          title: h,
          description: p,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ d(
      Z0,
      {
        label: me ? me.label ?? me.id : null,
        onDone: () => pe(null),
        onAddAnother: () => {
          const A = me;
          pe(null), A && Re(A);
        }
      }
    )
  ] });
}
function J0(e) {
  const { templateConfig: t, ...n } = e;
  return Ce(Bn) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ d(sa, { ...n }) : /* @__PURE__ */ d(
    Oc,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ d(sa, { ...n })
    }
  );
}
function Q0(e) {
  const n = Ce(Bn)?.payload ?? e.payload, r = m.useMemo(
    () => M0({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), [o, i] = m.useState({
    open: !1,
    message: ""
  }), a = m.useCallback((c) => {
    i({ open: !0, message: c });
  }, []), s = m.useMemo(
    () => hb(n),
    [n]
  ), l = m.useMemo(() => {
    if (!s?.items)
      return r.initialItems;
    const c = e.templateConfig.groups ?? {}, f = Array.isArray(c) ? c : Object.entries(c).map(([y, P]) => ({ id: y, ...P })), u = new Map(f.map((y) => [y.id, y])), h = e.templateConfig.pages ?? {}, p = (y) => {
      const P = y?.componentKey ?? y?.templateId ?? y?.id;
      return !(h[P] ?? h[y?.templateId] ?? h[y?.id])?.hasFlow || y?.hasFlow ? y : { ...y, hasFlow: !0 };
    }, b = s.items.map((y) => {
      if (y.kind !== "group") return p(y);
      const P = y.templateId ?? y.id, E = u.get(P), S = E?.strictPosition !== void 0 && !y.strictPosition ? { ...y, strictPosition: E.strictPosition } : y, C = {
        ...S,
        pages: (S.pages ?? []).map(p)
      };
      if (!E || typeof E.pageComponentKeys != "function") return C;
      try {
        const R = E.pageComponentKeys({ payload: n, item: void 0, parent: void 0 });
        return Array.isArray(R) ? R.length === 0 ? {
          ...C,
          pages: []
        } : {
          ...C,
          pages: R.map((I, k) => {
            const O = h[I], z = O?.dataKey;
            return {
              id: `${C.id}__${z ?? I}__${k}`,
              componentKey: I,
              templateId: I,
              ...z ? { dataKey: z } : {},
              ...O?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${S.id} must return an array, got:`, typeof R), S);
      } catch (R) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${C.id}:`, R), C;
      }
    }), g = new Set(r.initialItems.map((y) => y.id)), v = b.filter((y) => g.has(y.id)), w = ht(v), N = ht(r.initialItems);
    if (!Array.from(g).some(
      (y) => !v.some((P) => P.id === y)
    ) && w !== N) {
      const y = b.filter((R) => {
        if (R.kind !== "group") return !g.has(R.id);
        const I = R.templateId ?? R.id;
        return R.id !== I && !g.has(R.id);
      });
      if (y.length === 0) return r.initialItems;
      const P = [...r.initialItems, ...y], E = P.filter((R) => R.strictPosition === "start"), S = P.filter((R) => R.strictPosition === "end"), C = P.filter((R) => !R.strictPosition);
      return [...E, ...C, ...S];
    }
    return b;
  }, [s?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ d(
      J0,
      {
        ...e,
        payload: n,
        initialItems: l,
        availableItems: r.availableItems,
        pageComponents: r.pageComponents,
        notifyError: a
      }
    ),
    /* @__PURE__ */ d(
      H0,
      {
        open: o.open,
        onOpenChange: (c) => {
          c || i({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ D(Cd, { children: [
          /* @__PURE__ */ D(Sd, { children: [
            /* @__PURE__ */ d(Pd, { children: "Cannot remove item" }),
            /* @__PURE__ */ d(Ed, { children: o.message })
          ] }),
          /* @__PURE__ */ d(Nd, { children: /* @__PURE__ */ d(Rd, { onClick: () => i({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function ex(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = aa(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return aa(t, e);
  }
}
function aa(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function tx(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(e))
    if (typeof i == "function")
      r[o] = i(t);
    else if (typeof i == "string") {
      const a = i.startsWith("integration.") ? i.slice(12) : i;
      r[o] = ex(a, t);
    }
  return r;
}
function nx(e, t, n) {
  return e(t, n);
}
function rx(e, t, n) {
  return typeof e == "function" ? nx(e, t, n) : tx(e, t);
}
function ox(e, t, n) {
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
function ix(e, t, n = {}, r, o = null) {
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
function sx(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: i } = e, a = m.useMemo(() => rx(r, n, t?.payload), [r, n, t?.payload]), s = m.useMemo(() => ox(t, n, o), [t, n, o]), l = m.useCallback(
    (f, u = {}, h) => ix(
      t,
      f,
      u,
      h,
      s
    ),
    [t, s]
  ), c = m.useCallback(
    (f, u = {}, h) => {
      const p = l(f, u, h);
      if (!p) return {};
      const b = on({ dialog: p }, { page: { paginationType: "static" } });
      if (b.onClick) {
        const g = b.onClick;
        b.onClick = (v) => {
          v.stopPropagation(), g(v);
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
const dx = {
  Pagination: bo,
  Sheet: yo,
  FlowArea: da,
  FlowPage: fa,
  Flow: ha,
  FlowDocument: tf,
  markdownToFlowItems: cf,
  htmlToFlowItems: pa
}, fx = {
  TemplateDataProvider: Oc,
  PageEditor: Q0,
  InteractiveModeProvider: Hh,
  useInteractive: jo,
  useIntegrationAdapter: sx
};
export {
  jd as Editable,
  fx as EditorShell,
  ux as ImageBlock,
  dx as Static
};
//# sourceMappingURL=uhuu-components.es.js.map
