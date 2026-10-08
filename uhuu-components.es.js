(function(){(function(e,t){try{if(typeof document>`u`)return;let n=document.head||document.getElementsByTagName(`head`)[0];if(!n)return;let r=t&&t.styleId||`uhuu-components-styles`,i=document.getElementById(r);i||(i=document.createElement(`style`),i.setAttribute(`id`,r),t&&t.attributes&&Object.entries(t.attributes).forEach(([e,t])=>{try{i.setAttribute(e,t)}catch{}})),i.textContent!==e&&(i.textContent=e),i.parentNode!==n&&(n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i))}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})(`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop,*,:before,:after,::backdrop,*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop,*,:before,:after,::backdrop,*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-900:oklch(20.8% .042 265.755);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 none);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-900:oklch(20.8% .042 265.755);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-900:oklch(20.8% .042 265.755);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";z-index:10;margin-top:var(--spacing);margin-left:var(--spacing);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:2147483647px;border-top-right-radius:2147483647px;border-bottom-right-radius:2147483647px;position:absolute;top:0;left:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute;inset:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}[data-uhuu-interactive] :where([data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where([data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=markdown]:empty){background-color:#ff44cc14;min-width:3em;min-height:1lh}[data-uhuu-interactive] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=markdown]:empty){vertical-align:top;display:inline-block}}}@layer utilities{@media (width>=40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media (width>=48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media (width>=64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media (width>=80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media (width>=96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab, var(--color-gray-200) 60%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab, var(--color-gray-200) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab, var(--color-white) 60%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab, var(--color-black) 40%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab, var(--color-black) 50%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab, var(--color-blue-500) 10%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab, var(--color-blue-600) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab, var(--color-gray-600) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab, var(--color-white) 50%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab, var(--color-white) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab, var(--color-white) 90%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab, var(--color-white) 95%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}@media (hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}@media (hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}@media (width>=40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media (width>=48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}@supports (color:color-mix(in lab, red, red)){.border-gray-200\\/60{border-color:color-mix(in oklab, var(--color-gray-200) 60%, transparent)}}@supports (color:color-mix(in lab, red, red)){.border-gray-200\\/80{border-color:color-mix(in oklab, var(--color-gray-200) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){.border-white\\/60{border-color:color-mix(in oklab, var(--color-white) 60%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-black\\/40{background-color:color-mix(in oklab, var(--color-black) 40%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-black\\/50{background-color:color-mix(in oklab, var(--color-black) 50%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-blue-500\\/10{background-color:color-mix(in oklab, var(--color-blue-500) 10%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-blue-600\\/80{background-color:color-mix(in oklab, var(--color-blue-600) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-gray-100\\/80{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-gray-600\\/80{background-color:color-mix(in oklab, var(--color-gray-600) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-white\\/50{background-color:color-mix(in oklab, var(--color-white) 50%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-white\\/80{background-color:color-mix(in oklab, var(--color-white) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-white\\/90{background-color:color-mix(in oklab, var(--color-white) 90%, transparent)}}@supports (color:color-mix(in lab, red, red)){.bg-white\\/95{background-color:color-mix(in oklab, var(--color-white) 95%, transparent)}}@supports (color:color-mix(in lab, red, red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}@media (hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}@media (hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}@supports (color:color-mix(in lab, red, red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}@media (width>=40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media (width>=48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}@media (width>=40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media (width>=48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media (width>=64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media (width>=80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media (width>=96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab, var(--color-gray-200) 60%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab, var(--color-gray-200) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab, var(--color-white) 60%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab, var(--color-black) 40%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab, var(--color-black) 50%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab, var(--color-blue-500) 10%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab, var(--color-blue-600) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab, var(--color-gray-600) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab, var(--color-white) 50%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab, var(--color-white) 80%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab, var(--color-white) 90%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab, var(--color-white) 95%, transparent)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}@media (hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}@media (hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}@media (width>=40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media (width>=48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.left-\\[191\\.5mm\\]{left:191.5mm}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[3mm\\]{margin-bottom:3mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[15mm\\]{width:15mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[148mm\\]{width:148mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab, red, red)){.border-gray-200\\/60{border-color:color-mix(in oklab, var(--color-gray-200) 60%, transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab, red, red)){.border-gray-200\\/80{border-color:color-mix(in oklab, var(--color-gray-200) 80%, transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab, red, red)){.border-white\\/60{border-color:color-mix(in oklab, var(--color-white) 60%, transparent)}}.\\!bg-black{background-color:var(--color-black)!important}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#4a5157\\]{background-color:#4a5157}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#415662\\]{background-color:#415662}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab, red, red)){.bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab, red, red)){.bg-black\\/40{background-color:color-mix(in oklab, var(--color-black) 40%, transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab, red, red)){.bg-black\\/50{background-color:color-mix(in oklab, var(--color-black) 50%, transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab, red, red)){.bg-blue-500\\/10{background-color:color-mix(in oklab, var(--color-blue-500) 10%, transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab, red, red)){.bg-blue-600\\/80{background-color:color-mix(in oklab, var(--color-blue-600) 80%, transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){.bg-gray-100\\/80{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab, red, red)){.bg-gray-600\\/80{background-color:color-mix(in oklab, var(--color-gray-600) 80%, transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-slate-900{background-color:var(--color-slate-900)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab, red, red)){.bg-white\\/50{background-color:color-mix(in oklab, var(--color-white) 50%, transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab, red, red)){.bg-white\\/80{background-color:color-mix(in oklab, var(--color-white) 80%, transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab, red, red)){.bg-white\\/90{background-color:color-mix(in oklab, var(--color-white) 90%, transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab, red, red)){.bg-white\\/95{background-color:color-mix(in oklab, var(--color-white) 95%, transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab, red, red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[3mm\\]{padding-inline:3mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media (hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab, red, red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media (width>=40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media (width>=48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media (width>=40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media (width>=48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media (width>=64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media (width>=80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media (width>=96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[3mm\\],[data-uhuu-portal] .mb-\\[3mm\\]{margin-bottom:3mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[148mm\\],[data-uhuu-portal] .w-\\[148mm\\]{width:148mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-baseline,[data-uhuu-portal] .items-baseline{align-items:baseline}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:2147483647px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab, var(--color-gray-200) 60%, transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab, var(--color-gray-200) 80%, transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab, var(--color-white) 60%, transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#415662\\],[data-uhuu-portal] .bg-\\[\\#415662\\]{background-color:#415662}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab, var(--color-black) 40%, transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab, var(--color-black) 50%, transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab, var(--color-blue-500) 10%, transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab, var(--color-blue-600) 80%, transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab, var(--color-gray-600) 80%, transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-slate-900,[data-uhuu-portal] .bg-slate-900{background-color:var(--color-slate-900)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab, var(--color-white) 50%, transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab, var(--color-white) 80%, transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab, var(--color-white) 90%, transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab, var(--color-white) 95%, transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[3mm\\],[data-uhuu-portal] .px-\\[3mm\\]{padding-inline:3mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-400,[data-uhuu-portal] .text-slate-400{color:var(--color-slate-400)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .ring,[data-uhuu-portal] .ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media (hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media (width>=40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media (width>=48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:var(--spacing);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:var(--spacing);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media (hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab, var(--color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (width>=96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}:root{--uhuu-page-width:210mm;--uhuu-page-height:297mm;--uhuu-page-bleed:0mm;--uhuu-page-background:var(--background,#fff);--uhuu-outline-color:var(--outline-color,#d1d5db);--uhuu-sheet-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width:0mm;--uhuu-glue-width:0mm;--uhuu-paper-color:#fff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--tw-outline-style);outline-offset:calc(1px * -1);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*=group\\/section]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*=group\\/section]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*=group\\/section]{grid-column:1;justify-self:end}}
/*$vite$:1*/`,{styleId:`uhuu-components-styles`})})();import * as e from "react";
import t, { cloneElement as n, createContext as r, createElement as i, forwardRef as a, memo as o, useCallback as s, useContext as c, useEffect as l, useLayoutEffect as u, useMemo as d, useReducer as f, useRef as p, useState as m } from "react";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
import * as v from "react-dom";
import { createPortal as y, flushSync as b, unstable_batchedUpdates as x } from "react-dom";
//#region \0rolldown/runtime.js
var S = Object.defineProperty, C = (e, t) => {
	let n = {};
	for (var r in e) S(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || S(n, Symbol.toStringTag, { value: "Module" }), n;
}, w = class e {
	static handlePageBreakStyles() {
		document?.querySelectorAll(".page-break-after[data-paged-css]").forEach((e) => {
			let t = e.closest("div.uhuu-page-sheet"), n = e.getAttribute("data-paged-css");
			t && n && n.split(" ").filter(Boolean).forEach((e) => t.classList.add(e));
		});
	}
	static handleUhuuDialogs() {
		if (typeof window < "u" && window.$uhuu_renderer) return;
		let e = function() {
			let e = JSON.parse(this.getAttribute("data-uhuu") || "{}");
			window.$uhuu?.editDialog?.(e);
		};
		document?.querySelectorAll("[data-uhuu]").forEach((t) => {
			t.removeEventListener("click", e), t.addEventListener("click", e);
		});
	}
	static handle() {
		e.handlePageBreakStyles(), e.handleUhuuDialogs();
	}
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
		let { format: n, orientation: r, bleed: i, showBleed: a, compatibility: o, printCssRaw: s, printCssUrl: c, preview: l, binding: u } = t, d = this.resolveDimensions(t), f = this.resolveCssVars(t);
		if (typeof document < "u") for (let [e, t] of Object.entries(f)) document.documentElement.style.setProperty(e, t);
		return { page: {
			paginationType: e,
			format: n,
			orientation: r,
			bleed: i,
			width: d?.width,
			height: d?.height,
			preview: l,
			showBleed: a,
			compatibility: o,
			printCssRaw: s,
			printCssUrl: c,
			binding: k(u),
			sheet: j({
				...d,
				bleed: this.clampBleed(i),
				binding: u
			})
		} };
	}
}, L = r(null), ee = ({ config: e, children: t }) => /* @__PURE__ */ g(L.Provider, {
	value: e,
	children: t
}), te = ({ children: e, className: t, setup: n }) => {
	let r = I.pageParams("static", n);
	l(() => {
		r?.page?.compatibility && w.handle();
		let e = T.setupPageStyles(r?.page?.printCssUrl);
		return () => {
			e && T.removePageStyles(e);
		};
	}, [
		n,
		r?.page?.compatibility,
		r?.page?.printCssUrl
	]);
	let i = [t, r?.page?.preview].filter(Boolean).join(" ");
	return /* @__PURE__ */ g(ee, {
		config: r,
		children: /* @__PURE__ */ g("div", {
			className: i,
			children: e
		})
	});
}, ne = a(({ children: e, className: t = "", style: n, pageNo: r, overlay: i, showBleed: a, "data-page-key": o }, s) => {
	let l = c(L), u = a ?? l?.page?.showBleed ?? !1;
	return /* @__PURE__ */ _("div", {
		className: `uhuu-page-sheet ${t}`,
		style: n,
		ref: s,
		"data-page-key": o,
		children: [
			e,
			i && i({ pageNo: r }),
			u && /* @__PURE__ */ g("div", { className: "uhuu-bleed-area" })
		]
	});
});
//#endregion
//#region src/uhuu/utility/is-dev.ts
function R() {
	if (typeof window < "u") {
		let e = window.location.hostname;
		return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
	}
	return !1;
}
//#endregion
//#region src/uhuu/pagination-static/flow-core.js
function z(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function re(e) {
	return typeof e == "string" && e ? e : null;
}
function ie(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : +!!e;
}
function B({ itemIndex: e = -1, fragmentIndexes: t = [], groupKeys: n = [], pageIndex: r = 0, pageCount: i = 1, itemCount: a = 0, previousSourceIndex: o, fragmentIndex: s } = {}) {
	let c = Number.isInteger(s) ? s : t.indexOf(e), l = re(n[e]), u = c > 0 ? t[c - 1] : null, d = u === null ? null : re(n[u]), f = c > 0 ? t[c - 1] : o ?? (e > 0 ? e - 1 : null), p = f === null ? null : re(n[f]), m = !!(l && p !== l), h = !!(l && d !== l);
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
function ae() {
	return {
		scannedItems: 0,
		chunkerCalls: 0,
		freshPageAttempts: 0,
		pages: 0
	};
}
function oe({ heights: e = [], keys: t = [], metas: n = [], availableHeight: r = 0, headerGroupKeys: i = [], headerGroupHeights: a = {}, headerGroupRepeats: o = {}, previousHeaderGroupKey: s, onUnplaceableItem: c, window: l, maxChunks: u = 0, metrics: d } = {}) {
	let f = l?.indexes, p = l?.offset ?? 0, m = f ? Math.max(0, f.length - p) : e.length, h = f ? (e) => f[p + e] : (e) => e, g = z(r) || Infinity, _ = [{
		indexes: [],
		keys: []
	}], v = 0, y = () => _[_.length - 1], b = () => {
		let e = y().indexes;
		return e.length ? e[e.length - 1] : null;
	}, x = () => y().indexes.length > 0 || !!y().unplaceable, S = (e) => re(i[h(e)]), C = (e) => z(a[e] ?? 0), w = (e) => o[e] !== !1, T = (e, t) => {
		let n = S(e);
		return n ? t == null ? (e > 0 ? S(e - 1) : re(s)) !== n || w(n) : S(t) !== n : !1;
	}, E = (t, n) => {
		let r = S(t);
		return z(e[h(t)]) + (r && T(t, n) ? C(r) : 0);
	}, D = (e) => {
		let t = n[h(e)] ?? {};
		return t.avoidBreakInside && t.groupKey ? t.groupKey : null;
	}, O = (e, t, n) => {
		let r = 0, i = n;
		for (let n = e; n < m && D(n) === t; n += 1) d && (d.scannedItems += 1), r += E(n, i), i = n;
		return r;
	}, k = (e, t, { currentHeight: n, ownHeight: r, stopEarly: i } = {}) => {
		let a = 0, o = e;
		for (let s = 1; s <= t; s += 1) {
			let t = e + s;
			if (t >= m || (d && (d.scannedItems += 1), a += E(t, o), i && n + (r + a) > g)) break;
			o = t;
		}
		return a;
	}, A = () => {
		x() && (_.push({
			indexes: [],
			keys: []
		}), v = 0);
	}, j = (e, n, r) => {
		let i = t[h(e)] ?? String(h(e)), a = S(e) ?? void 0, o = a && T(e, null) ? C(a) : 0, s = {
			index: e,
			key: i,
			height: n,
			headerHeight: o,
			requiredHeight: r,
			availableHeight: g,
			groupKey: a,
			reason: o > 0 ? "item-with-header-too-tall" : "item-too-tall"
		};
		y().unplaceable = s, c?.(s), _.push({
			indexes: [],
			keys: []
		}), v = 0;
	};
	for (let r = 0; r < m && !(u && _.length > u); r += 1) {
		d && (d.scannedItems += 1);
		let i = n[h(r)] ?? {}, a = z(e[h(r)]), o = t[h(r)] ?? String(h(r));
		i.breakBefore && A();
		let s = D(r), c = r > 0 ? D(r - 1) : null;
		s && s !== c && x() && v + O(r, s, b()) > g && A();
		let l = b(), u = E(r, l);
		if (x() && u > g - v && (A(), l = null, u = E(r, l)), u > g) {
			j(r, a, u);
			continue;
		}
		let f = x(), p = f ? k(r, ie(i.keepWithNext), {
			currentHeight: v,
			ownHeight: u,
			stopEarly: Number.isFinite(g)
		}) : 0, _ = u + p;
		f && v + _ > g && (A(), l = null, u = E(r, l), u > g) ? j(r, a, u) : (y().indexes.push(r), y().keys.push(o), v += u, i.breakAfter && r < m - 1 && A());
	}
	let M = _.filter((e) => e.indexes.length > 0 || !!e.unplaceable);
	if (!M.length) return d && !u && (d.pages = 1), [{
		indexes: [],
		keys: []
	}];
	let N = u ? M.slice(0, u) : M;
	return d && !u && (d.pages = N.length), N.map((e) => {
		if (!e.indexes.length) return e;
		let t = [];
		for (let n = 0; n < e.indexes.length; n += 1) {
			let r = e.indexes[n], i = S(r), a = n > 0 ? e.indexes[n - 1] : null;
			if (!i || !T(r, a)) continue;
			let o = r > 0 ? S(r - 1) : null;
			t.push({
				groupKey: i,
				itemIndex: r,
				isContinuation: o === i
			});
		}
		return t.length ? {
			...e,
			groupHeaders: t
		} : e;
	});
}
function V(e, t, n) {
	return (e.indexes ?? []).reduce((e, n) => e + z(t[n]), 0) + (e.groupHeaders ?? []).reduce((e, t) => e + z(n[t.groupKey]), 0);
}
function se(e, t, n) {
	return !t || !n ? e : {
		...e,
		headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
		headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
	};
}
function ce(e, t, n, r, i, a) {
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
function le(e, t, n, r, i, a, o) {
	if (n >= t.length) return {
		chunk: {
			indexes: [],
			keys: []
		},
		consumed: 0,
		height: 0
	};
	let s = se(e, i, a);
	e.metrics && (e.metrics.chunkerCalls += 1);
	let c = ce(oe({
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
		height: V(c, e.heights ?? [], s.headerGroupHeights ?? {})
	};
}
function ue({ nodes: e = [], itemCount: t = 0 } = {}) {
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
function de(e, t, n, r, i) {
	let a = z(r.chunk.unplaceable?.requiredHeight);
	if (a > 0 && a <= i) return "move";
	let o = t[n];
	if (o === void 0) return "no";
	let s = e.metas?.[o] ?? {};
	return ie(s.keepWithNext) > 0 || s.avoidBreakInside && s.groupKey ? "compare" : "no";
}
function fe(e) {
	return !!(e.layout?.length || e.unplaceable);
}
function pe({ nodes: e = [], heights: t = [], keys: n = [], metas: r = [], availableHeight: i = 0, headerGroupKeys: a = [], headerGroupHeights: o = {}, headerGroupRepeats: s = {}, columnHeaderGroupHeights: c = {}, columnHeaderGroupRepeats: l = {}, onUnplaceableItem: u, metrics: d } = {}) {
	ue({
		nodes: e,
		itemCount: t.length
	});
	let f = z(i) || Infinity, p = {
		heights: t,
		keys: n,
		metas: r,
		headerGroupKeys: a,
		headerGroupHeights: o,
		headerGroupRepeats: s,
		columnHeaderGroupHeights: c,
		columnHeaderGroupRepeats: l,
		metrics: d
	}, m = [{
		indexes: [],
		keys: [],
		layout: []
	}], h = 0, g = () => m[m.length - 1], _ = () => {
		fe(g()) && (m.push({
			indexes: [],
			keys: [],
			layout: []
		}), h = 0);
	}, v = (e) => {
		g().indexes.push(...e.indexes ?? []), g().keys.push(...e.keys ?? []), !g().unplaceable && e.unplaceable && (g().unplaceable = e.unplaceable), e.unplaceable && u?.(e.unplaceable);
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
				f - h <= 0 && fe(g()) && _(), r[i[o]]?.breakBefore && fe(g()) && _();
				let e = o > 0 ? i[o - 1] : void 0, t = le(p, i, o, f - h, void 0, void 0, e);
				if (fe(g())) {
					let n = de(p, i, o, t, f);
					if (n !== "no") {
						d && (d.freshPageAttempts += 1);
						let r = le(p, i, o, f, void 0, void 0, e);
						(n === "move" || r.consumed > t.consumed) && (_(), t = r);
					}
				}
				g().layout.push({
					kind: "items",
					chunk: t.chunk
				}), v(t.chunk), h += t.height, o += t.consumed, t.consumed === 0 && (o += 1);
				let n = t.chunk.indexes?.at(-1) ?? t.chunk.unplaceable?.index;
				(o < i.length || t.chunk.unplaceable || n !== void 0 && r[n]?.breakAfter) && _();
			}
			continue;
		}
		let a = (i.columns ?? []).map((e) => ({
			id: String(e?.id ?? ""),
			indexes: (e?.indexes ?? []).filter((e) => Number.isInteger(e) && e >= 0 && e < t.length),
			cursor: 0
		})).filter((e) => e.id && e.indexes.length);
		if (a.length) for (; a.some((e) => e.cursor < e.indexes.length);) {
			f - h <= 0 && fe(g()) && _(), a.some((e) => {
				let t = e.indexes[e.cursor];
				return t !== void 0 && r[t]?.breakBefore;
			}) && fe(g()) && _();
			let e = f - h, t = a.map((t) => le(p, t.indexes, t.cursor, e, i.id, t.id, t.cursor > 0 ? t.indexes[t.cursor - 1] : void 0)), n, o = () => n ??= a.map((e) => (d && (d.freshPageAttempts += 1), le(p, e.indexes, e.cursor, f, i.id, e.id, e.cursor > 0 ? e.indexes[e.cursor - 1] : void 0)));
			if (fe(g()) && a.some((e, n) => {
				let r = de(p, e.indexes, e.cursor, t[n], f);
				return r === "no" ? !1 : r === "move" || o()[n].consumed > t[n].consumed;
			}) && (_(), t = o()), !t.some((e) => e.consumed > 0)) {
				let e = a.find((e) => e.cursor < e.indexes.length);
				throw TypeError(`[uhuu-components] Static.FlowColumns made no pagination progress${e ? ` in column "${e.id}"` : ""}.`);
			}
			let s = a.map((e, n) => ({
				id: e.id,
				chunk: t[n].chunk
			}));
			g().layout.push({
				kind: "columns",
				id: String(i.id ?? "columns"),
				columns: s
			});
			for (let { chunk: e } of s) v(e);
			let c = Math.max(0, ...t.map((e) => e.height));
			h += c, a.forEach((e, n) => {
				e.cursor += t[n].consumed;
			});
			let l = a.some((e) => e.cursor < e.indexes.length), u = t.some((e) => {
				let t = e.chunk.indexes?.at(-1) ?? e.chunk.unplaceable?.index;
				return t !== void 0 && r[t]?.breakAfter;
			}), m = t.some((e) => !!e.chunk.unplaceable);
			(l || u || m) && _();
		}
	}
	let y = m.filter(fe);
	return y.length ? (d && (d.pages = y.length), y) : (d && (d.pages = 1), [{
		indexes: [],
		keys: [],
		layout: []
	}]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-measure.ts
var me = /* @__PURE__ */ C({
	getEffectiveScale: () => he,
	getOuterHeight: () => ge,
	hashString: () => we,
	parseKeepWithNext: () => ve,
	readFlowItemElements: () => Ce,
	readHeaderGroupHeights: () => Se,
	readHeaderGroupKey: () => be,
	readHeaderGroupRepeats: () => xe,
	readItemMeta: () => _e,
	serializeKeepWithNext: () => ye
});
function he(e) {
	let t = e.getBoundingClientRect().width, n = e.offsetWidth;
	if (!(t > 0) || !(n > 0)) return 1;
	let r = t / n;
	return Math.abs(r - 1) < .002 ? 1 : r;
}
function ge(e, t = 1) {
	let n = e.getBoundingClientRect(), r = window.getComputedStyle(e), i = Number.parseFloat(r.marginTop || "0") || 0, a = Number.parseFloat(r.marginBottom || "0") || 0;
	return n.height / t + i + a;
}
function _e(e) {
	return {
		breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
		breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
		keepWithNext: ve(e.dataset.uhuuFlowKeepWithNext),
		avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
		groupKey: e.dataset.uhuuFlowGroupKey
	};
}
function ve(e) {
	if (!e) return !1;
	if (e === "true") return !0;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : !1;
}
function ye(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function be(e) {
	return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function xe(e) {
	let t = {};
	for (let n of e) {
		let e = be(n);
		e && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[e] = !1 : e in t || (t[e] = !0));
	}
	return t;
}
function Se(e, t = 1) {
	let n = {};
	for (let r of Array.from(e.querySelectorAll("[data-uhuu-flow-group-header=\"true\"]"))) {
		let e = r.dataset.uhuuFlowHeaderGroupKey;
		e && (n[e] = Math.max(n[e] ?? 0, ge(r, t)));
	}
	return n;
}
function Ce(e) {
	return Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
}
function we(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return (t >>> 0).toString(36);
}
//#endregion
//#region src/uhuu/pagination-static/flow-static.tsx
var Te = oe, Ee = pe, De = e.createContext(null), Oe = typeof window > "u" ? e.useEffect : e.useLayoutEffect, ke = /* @__PURE__ */ new Set();
function Ae(e) {
	if (!e || typeof e != "object" || !("type" in e)) return;
	let t = e.type;
	return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function je(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) r !== void 0 && (n[e] = r);
	return n;
}
function Me(e) {
	return Number.parseFloat(e || "0") || 0;
}
function Ne(e, t) {
	let n = (e) => {
		let t = window.getComputedStyle(e);
		return Me(t.paddingTop) + Me(t.paddingBottom) + Me(t.borderTopWidth) + Me(t.borderBottomWidth);
	};
	for (let r of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let e = window.getComputedStyle(r), i = Me(e.marginTop) + Me(e.marginBottom);
		if (n(r) > .01 || i > .01) throw TypeError("[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps.");
		let a = [];
		for (let e of Array.from(r.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
			let r = window.getComputedStyle(e), i = Me(r.marginTop) + Me(r.marginBottom);
			if (n(e) > .01 || i > .01 || Me(r.rowGap) > .01 || Me(r.minHeight) > .01 || r.maxHeight !== "none") throw TypeError("[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps.");
			let o = Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]")).reduce((e, n) => e + ge(n, t), 0);
			a.push(o);
		}
		let o = Math.max(0, ...a);
		if (ge(r, t) > o + 1) throw TypeError("[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent.");
	}
}
function Pe(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	if (t.dataset.uhuuFlowLayout === "columns") return Fe(e, t, n);
	let i = Ce(t);
	if (!i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: []
		}],
		signature: `${r}:empty`,
		unplaceableItems: []
	};
	let a = e.getBoundingClientRect(), o = he(e), s = a.height ? a.height / o : e.clientHeight, c = Number.isFinite(s) && s > 0, l = i.map((e) => ge(e, o)), u = i.map(_e), d = i.map((e, t) => e.dataset.uhuuFlowKey || String(t)), f = i.map(be), p = xe(i), m = Se(t, o), h = [], g = c ? s : l.reduce((e, t) => e + t, 0) + Object.values(m).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: Te({
			heights: l,
			keys: d,
			metas: u,
			availableHeight: g,
			headerGroupKeys: f,
			headerGroupHeights: m,
			headerGroupRepeats: p,
			onUnplaceableItem: (e) => {
				h.push(e), n.onUnplaceableItem?.(e);
			}
		}),
		signature: we(JSON.stringify({
			version: 2,
			flowId: r,
			availableHeight: Math.round(g * 100) / 100,
			heights: l.map((e) => Math.round(e * 100) / 100),
			keys: d,
			metas: u,
			headerGroupKeys: f,
			headerGroupHeights: m,
			headerGroupRepeats: p,
			unplaceableItems: h
		})),
		unplaceableItems: h
	};
}
function Fe(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	let i = Ce(t);
	if (!i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: [],
			layout: []
		}],
		signature: `${r}:columns:empty`,
		unplaceableItems: []
	};
	let a = e.getBoundingClientRect(), o = he(e);
	Ne(t, o);
	let s = a.height ? a.height / o : e.clientHeight, c = Number.isFinite(s) && s > 0, l = Math.max(-1, ...i.map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10))), u = Array.from({ length: l + 1 }, () => 0), d = Array.from({ length: l + 1 }, (e, t) => String(t)), f = Array.from({ length: l + 1 }, () => ({})), p = Array.from({ length: l + 1 }, () => void 0);
	for (let e of i) {
		let t = Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10);
		!Number.isInteger(t) || t < 0 || (u[t] = ge(e, o), d[t] = e.dataset.uhuuFlowKey || String(t), f[t] = _e(e), p[t] = be(e));
	}
	let m = Array.from(t.children).flatMap((e) => {
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
	}), h = xe(i), g = Se(t, o), _ = {}, v = {};
	for (let e of Array.from(t.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let t = e.dataset.uhuuFlowLayoutId;
		if (t) {
			_[t] = {}, v[t] = {};
			for (let n of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
				let e = n.dataset.uhuuFlowColumn;
				if (!e) continue;
				let r = Array.from(n.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
				_[t][e] = Se(n, o), v[t][e] = xe(r);
			}
		}
	}
	let y = [], b = c ? s : u.reduce((e, t) => e + t, 0) + Object.values(g).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: Ee({
			nodes: m,
			heights: u,
			keys: d,
			metas: f,
			availableHeight: b,
			headerGroupKeys: p,
			headerGroupHeights: g,
			headerGroupRepeats: h,
			columnHeaderGroupHeights: _,
			columnHeaderGroupRepeats: v,
			onUnplaceableItem: (e) => {
				y.push(e), n.onUnplaceableItem?.(e);
			}
		}),
		signature: we(JSON.stringify({
			version: 3,
			flowId: r,
			availableHeight: Math.round(b * 100) / 100,
			nodes: m,
			heights: u.map((e) => Math.round(e * 100) / 100),
			keys: d,
			metas: f,
			headerGroupKeys: p,
			headerGroupHeights: g,
			headerGroupRepeats: h,
			columnHeaderGroupHeights: _,
			columnHeaderGroupRepeats: v,
			unplaceableItems: y
		})),
		unplaceableItems: y
	};
}
function Ie({ children: t, className: n = "", style: r, onFlowMeasurement: i }) {
	let a = e.useContext(De), o = e.useRef(null), s = e.useRef(""), c = e.useRef(!1), l = e.useRef(!1), u = e.useRef(/* @__PURE__ */ new Set());
	return Oe(() => {
		if (a?.mode !== "measure" || !a.registerMeasurement || !o.current) return;
		let e = o.current, t = null, n = null;
		s.current = "";
		let r = /* @__PURE__ */ new Set(), d = () => {
			if (n) {
				for (let t of Array.from(r)) e.contains(t) || (n.unobserve(t), r.delete(t));
				e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]").forEach((e) => {
					r.has(e) || (r.add(e), n?.observe(e));
				});
			}
		};
		function f() {
			d();
			let t = e.querySelectorAll("[data-uhuu-flow=\"true\"]");
			t.length > 1 && !c.current && R() && (c.current = !0, console.warn("[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."));
			let n = t[0];
			if (!n) return;
			let r = Pe(e, n, {
				onZeroHeight: () => {
					!l.current && R() && (l.current = !0, console.warn("[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."));
				},
				onUnplaceableItem: (e) => {
					!u.current.has(e.key) && R() && (u.current.add(e.key), console.warn(`[uhuu-components] Static.Flow item "${e.key}" cannot fit in its FlowArea (${Math.round(e.requiredHeight)}px required > ${Math.round(e.availableHeight)}px available). It is rendered as a controlled flow error instead of clipped content.`));
				}
			});
			r && r.signature !== s.current && (s.current = r.signature, i?.(r), a?.registerMeasurement?.(r));
		}
		let p = () => {
			t === null && (t = window.requestAnimationFrame(() => {
				t = null, f();
			}));
		};
		n = new ResizeObserver(p), n.observe(e), d(), p();
		let m = new MutationObserver(() => {
			p();
		});
		return m.observe(e, {
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
			t !== null && window.cancelAnimationFrame(t), n?.disconnect(), m.disconnect();
		};
	}, [a, i]), /* @__PURE__ */ g("div", {
		ref: o,
		className: n,
		style: r,
		"data-uhuu-flow-area": "true",
		children: t
	});
}
function Le({ children: e, header: t, footer: n, className: r = "", style: i, flowAreaClassName: a = "", flowAreaStyle: o, onFlowMeasurement: s }) {
	return /* @__PURE__ */ _("div", {
		className: `h-full w-full flex flex-col ${r}`,
		style: i,
		"data-uhuu-flow-page": "true",
		children: [
			t,
			/* @__PURE__ */ g(Ie, {
				className: `flex-1 min-h-0 ${a}`,
				style: o,
				onFlowMeasurement: s,
				children: e
			}),
			n
		]
	});
}
function Re(e) {
	if (typeof e == "string") return e ? {
		key: e,
		repeatHeader: !0
	} : void 0;
	if (e?.key) return {
		key: e.key,
		repeatHeader: e.repeatHeader !== !1
	};
}
function ze(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.has(e) || t.set(e, n);
	}), t;
}
function Be(e) {
	if (!e) return;
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.itemIndex);
		e || (e = /* @__PURE__ */ new Set(), t.set(n.itemIndex, e)), e.add(n.groupKey);
	}
	return t;
}
function Ve({ id: t, items: n, getKey: r, renderItem: i, getItemMeta: a, metaDefaults: o, getItemType: s, getItemGroup: c, renderGroupHeader: l, className: u = "", itemClassName: d, groupHeaderClassName: f, renderUnplaceableItem: p }) {
	let m = e.useContext(De), h = m?.chunksByFlowId?.[t], v = m?.mode === "visible" && h ? h[m.pageIndex] : void 0, y = (m?.mode === "visible" && h ? v?.indexes ?? [] : m?.mode === "visible" && m.pageIndex > 0 ? [] : n.map((e, t) => t)).filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), b = n.map((e, t) => Re(c?.(e, t))), x = b.map((e) => e?.key), S = ze(y), C = l ? Be(v?.groupHeaders) : void 0, w = m?.mode === "visible" ? m.pageIndex : 0, T = m?.mode === "visible" && h ? h.length : 1;
	return e.useEffect(() => {
		if (!R() || !o || !Object.keys(o).length || !n.length) return;
		let e = `${t}:${Object.keys(o).join("|")}`;
		ke.has(e) || n.some((e, t) => !!(s?.(e, t) ?? Ae(e))) || (ke.add(e), console.warn(`[uhuu-components] Static.Flow "${t}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		o,
		s
	]), /* @__PURE__ */ _("div", {
		className: u,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		children: [v?.unplaceable && (p?.(v.unplaceable, {
			flowId: t,
			pageIndex: w,
			pageCount: T
		}) ?? /* @__PURE__ */ _("div", {
			role: "alert",
			className: "uhuu-flow-unplaceable",
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": v.unplaceable.key,
			children: [
				"Unable to fit “",
				v.unplaceable.key,
				"” on a page. Reduce its height or split it."
			]
		})), y.map((c) => {
			let u = n[c];
			if (u === void 0) return null;
			let p = r(u, c), m = b[c], h = {
				...B({
					itemIndex: c,
					fragmentIndexes: y,
					fragmentIndex: S.get(c) ?? -1,
					groupKeys: x,
					pageIndex: w,
					pageCount: T,
					itemCount: n.length
				}),
				flowId: t,
				itemKey: p,
				item: u
			}, v = s?.(u, c) ?? Ae(u), E = je(v ? o?.[v] : void 0, a?.(u, c)), D = typeof d == "function" ? d(u, c) : d, O = !!(m && C?.get(c)?.has(m.key)), k = !!(m && l && (O || !C && h.isFirstInGroupOnPage && (h.isFirstInGroup || m.repeatHeader !== !1))), A = typeof f == "function" ? m ? f(m, h) : void 0 : f;
			return /* @__PURE__ */ _(e.Fragment, { children: [k && m && /* @__PURE__ */ g("div", {
				className: A,
				style: { display: "flow-root" },
				"data-uhuu-flow-group-header": "true",
				"data-uhuu-flow-header-group-key": m.key,
				children: l?.(m, h)
			}), /* @__PURE__ */ g("div", {
				className: D,
				style: { display: "flow-root" },
				"data-uhuu-flow-item": "true",
				"data-uhuu-flow-key": String(p),
				"data-uhuu-flow-index": c,
				"data-uhuu-flow-break-before": E.breakBefore ? "true" : void 0,
				"data-uhuu-flow-break-after": E.breakAfter ? "true" : void 0,
				"data-uhuu-flow-keep-with-next": ye(E.keepWithNext),
				"data-uhuu-flow-avoid-break-inside": E.avoidBreakInside ? "true" : void 0,
				"data-uhuu-flow-group-key": E.groupKey,
				"data-uhuu-flow-header-group-key": m?.key,
				"data-uhuu-flow-header-repeat": m ? m.repeatHeader === !1 ? "false" : "true" : void 0,
				children: i(u, c, h)
			})] }, p);
		})]
	});
}
function He({ id: t, items: n, layout: r, getKey: i, renderItem: a, getItemMeta: o, metaDefaults: s, getItemType: c, getItemGroup: l, renderGroupHeader: u, className: d = "", itemClassName: f, groupHeaderClassName: p, renderUnplaceableItem: m, getColumnGroupProps: h, getColumnProps: v, getColumnItemProps: y }) {
	ue({
		nodes: r,
		itemCount: n.length
	});
	let b = e.useContext(De), x = b?.chunksByFlowId?.[t], S = b?.mode === "visible" && x ? x[b.pageIndex] : void 0, C = b?.mode !== "visible", w = b?.mode === "visible" ? b.pageIndex : 0, T = b?.mode === "visible" && x ? x.length : 1, E = n.map((e, t) => Re(l?.(e, t))), D = E.map((e) => e?.key), O = { flowId: t };
	e.useEffect(() => {
		if (!R() || !s || !Object.keys(s).length || !n.length) return;
		let e = `${t}:columns:${Object.keys(s).join("|")}`;
		ke.has(e) || n.some((e, t) => !!(c?.(e, t) ?? Ae(e))) || (ke.add(e), console.warn(`[uhuu-components] Static.FlowColumns "${t}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		s,
		c
	]);
	let k = (e) => e ? m?.(e, {
		flowId: t,
		pageIndex: w,
		pageCount: T
	}) ?? /* @__PURE__ */ _("div", {
		role: "alert",
		className: "uhuu-flow-unplaceable",
		"data-uhuu-flow-unplaceable": "true",
		"data-uhuu-flow-unplaceable-key": e.key,
		"data-uhuu-flow-column-id": e.columnId,
		children: [
			"Unable to fit “",
			e.key,
			"” on a page. Reduce its height or split it."
		]
	}) : null, A = (r, l, d, m = !1, h) => {
		let v = r.filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), y = ze(v), b = h ? ze(h) : void 0, x = u ? Be(l?.groupHeaders) : void 0;
		return v.map((r) => {
			let S = n[r];
			if (S === void 0) return null;
			let C = i(S, r), O = E[r], k = y.get(r) ?? -1, A = b?.get(r) ?? -1, j = {
				...B({
					itemIndex: r,
					fragmentIndexes: v,
					fragmentIndex: k,
					groupKeys: D,
					pageIndex: w,
					pageCount: T,
					itemCount: n.length,
					previousSourceIndex: l?.previousSourceIndex ?? (A > 0 ? h?.[A - 1] : void 0)
				}),
				flowId: t,
				itemKey: C,
				item: S
			}, M = c?.(S, r) ?? Ae(S), N = je(M ? s?.[M] : void 0, o?.(S, r)), P = typeof f == "function" ? f(S, r) : f, F = d?.(r), I = !!(O && x?.get(r)?.has(O.key)), L = !!(O && u && (I || !x && j.isFirstInGroupOnPage && (j.isFirstInGroup || O.repeatHeader !== !1))), ee = typeof p == "function" ? O ? p(O, j) : void 0 : p;
			return /* @__PURE__ */ _(e.Fragment, { children: [L && O && /* @__PURE__ */ g("div", {
				className: ee,
				style: { display: "flow-root" },
				"data-uhuu-flow-group-header": "true",
				"data-uhuu-flow-header-group-key": O.key,
				children: u?.(O, j)
			}), /* @__PURE__ */ g("div", {
				className: [P, F?.className].filter(Boolean).join(" "),
				style: {
					display: "flow-root",
					...F?.style
				},
				"data-uhuu-flow-item": "true",
				"data-uhuu-flow-layout-node": m ? "item" : void 0,
				"data-uhuu-flow-key": String(C),
				"data-uhuu-flow-index": r,
				"data-uhuu-flow-break-before": N.breakBefore ? "true" : void 0,
				"data-uhuu-flow-break-after": N.breakAfter ? "true" : void 0,
				"data-uhuu-flow-keep-with-next": ye(N.keepWithNext),
				"data-uhuu-flow-avoid-break-inside": N.avoidBreakInside ? "true" : void 0,
				"data-uhuu-flow-group-key": N.groupKey,
				"data-uhuu-flow-header-group-key": O?.key,
				"data-uhuu-flow-header-repeat": O ? O.repeatHeader === !1 ? "false" : "true" : void 0,
				children: a(S, r, j)
			})] }, C);
		});
	}, j = new Map(r.filter((e) => e.kind === "columns").map((e) => [e.id, e])), M = C ? r : S?.layout ?? [];
	return /* @__PURE__ */ g("div", {
		className: d,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-layout": "columns",
		children: M.map((t, n) => {
			if (t.kind === "item") return /* @__PURE__ */ g(e.Fragment, { children: A([t.index], void 0, void 0, !0) }, `item:${t.index}:${n}`);
			if (t.kind === "items") return /* @__PURE__ */ _(e.Fragment, { children: [k(t.chunk.unplaceable), A(t.chunk.indexes, t.chunk, void 0, !0)] }, `items:${n}`);
			let r = C ? t : j.get(t.id);
			if (!r) return null;
			let i = new Map(r.columns.map((e) => [e.id, e])), a = C ? r.columns.map((e) => ({ id: e.id })) : t.columns, o = h?.(r, O);
			return /* @__PURE__ */ g("div", {
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
					let n = v?.(r, t, O), a = e.chunk?.indexes ?? t.indexes;
					return /* @__PURE__ */ _("div", {
						className: n?.className,
						style: {
							minWidth: 0,
							flex: "1 1 0%",
							display: "flex",
							flexDirection: "column",
							...n?.style
						},
						"data-uhuu-flow-column": t.id,
						children: [k(e.chunk?.unplaceable), A(a, e.chunk, (e) => y?.(r, t, e, O), !1, t.indexes)]
					}, t.id);
				})
			}, `columns:${r.id}:${n}`);
		})
	});
}
//#endregion
//#region src/uhuu/editable/dialog-props.js
var Ue = (e, t) => {
	let n = e?.dialog;
	if (!n) return {};
	let r = typeof window < "u" && window.$uhuu_renderer, i = n.type ? { "data-uhuu-type": n.type } : {};
	return t?.page?.paginationType === "dynamic" ? {
		...i,
		"data-uhuu": JSON.stringify(n)
	} : r ? {
		...i,
		"data-uhuu": ""
	} : {
		onClick: (e) => {
			typeof window < "u" && window.$uhuu_renderer || (e.stopPropagation(), window.$uhuu?.editDialog?.(n));
		},
		...i,
		"data-uhuu": ""
	};
}, We = "uhuu-text-empty", Ge = /* @__PURE__ */ new Set([
	"text",
	"textarea",
	"markdown"
]), Ke = (e) => typeof e == "object" && !!e && "type" in e && typeof e.type == "string" && Ge.has(e.type), qe = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(qe) : !1, Je = (e) => {
	let t = c(L), n = Ke(e.dialog) && qe(e.children) ? [e.className, We].filter(Boolean).join(" ") : e.className;
	return /* @__PURE__ */ g("div", {
		className: n,
		...Ue(e, t),
		children: e.children
	});
};
//#endregion
//#region src/uhuu/pagination-static/flow-id.js
function Ye(e) {
	return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function Xe(e, t, n, r = "") {
	return `${r}${e}-${n}-${Ye(t) || "block"}`;
}
//#endregion
//#region src/uhuu/pagination-static/html-flow.js
var Ze = /\s*(page-break-before|break-before)\s*/i, Qe = 1, $e = 3, et = 8;
function tt(e) {
	return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function nt(e) {
	return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function rt(e, t) {
	if (typeof document > "u") return [];
	let n = document.createElement("template");
	n.innerHTML = String(e ?? "");
	let r = [];
	return n.content.childNodes.forEach((e) => {
		if (e.nodeType === et) t.test(e.textContent ?? "") && r.push({ kind: "break" });
		else if (e.nodeType === $e) {
			let t = (e.textContent ?? "").trim();
			t && r.push({
				kind: "text",
				html: tt(t),
				text: t
			});
		} else if (e.nodeType === Qe) {
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
function it(e, t) {
	let n = t.idPrefix ?? "", r = [], i = !1;
	for (let t of e) {
		if (!t || t.kind === "break") {
			i = !0;
			continue;
		}
		let e = t.type ?? "text", a = t.html ?? "";
		a && (r.push({
			id: Xe(e, t.text ?? a, r.length, n),
			type: e,
			html: a,
			breakBefore: i || !!t.breakBefore
		}), i = !!t.breakAfter);
	}
	return r;
}
function at(e = "", t = {}) {
	let n = t.breakComment ?? Ze, r = (t.parseHtml ?? ((e) => rt(e, n)))(e);
	return it(Array.isArray(r) ? r : [], t);
}
//#endregion
//#region src/uhuu/pagination-static/flow-document.tsx
var ot = {
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
}, st = !1;
function ct(t) {
	return e.useMemo(() => t === !1 ? (R() && !st && (st = !0, console.warn("[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML.")), (e) => e) : typeof t == "function" ? t : nt, [t]);
}
function lt({ html: t, header: n, footer: r, className: i = "", style: a, flowAreaClassName: o = "", flowAreaStyle: s, id: c = "flow-document", idPrefix: l, flowClassName: u = "w-full", itemClassName: d, metaDefaults: f, getItemMeta: p, renderItem: m, sanitize: h, editable: _, parseHtml: v }) {
	let y = e.useMemo(() => at(t, {
		idPrefix: l,
		parseHtml: v
	}), [
		t,
		l,
		v
	]), b = e.useMemo(() => ({
		...ot,
		...f ?? {}
	}), [f]), x = ct(h), S = e.useCallback((e, t) => ({
		breakBefore: e.breakBefore,
		...p?.(e, t) ?? {}
	}), [p]), C = e.useCallback((e, t) => m ? m(e, t) : /* @__PURE__ */ g("div", {
		className: "uhuu-flow-html-block",
		dangerouslySetInnerHTML: { __html: x(e.html) }
	}), [m, x]), w = /* @__PURE__ */ g(Ve, {
		id: c,
		items: y,
		getKey: (e) => e.id,
		className: u,
		itemClassName: d,
		metaDefaults: b,
		getItemMeta: S,
		renderItem: C
	});
	return /* @__PURE__ */ g(Le, {
		className: i,
		style: a,
		flowAreaClassName: o,
		flowAreaStyle: s,
		header: n,
		footer: r,
		children: _ ? /* @__PURE__ */ g(Je, {
			dialog: _,
			className: !y.length && Ke(_) ? We : void 0,
			children: w
		}) : w
	});
}
//#endregion
//#region src/uhuu/pagination-static/markdown-flow.js
var ut = /<!--\s*(page-break-before|break-before)\s*-->/i, dt = /^\s*\[[^\]]+\]:\s+\S+/, ft = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function pt(e) {
	return e.trim() === "";
}
function mt(e) {
	return /^#{1,6}\s+/.test(e.trim());
}
function ht(e) {
	return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function gt(e) {
	return /^(```|~~~)/.test(e.trim());
}
function _t(e) {
	return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function vt(e, t) {
	let n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
	return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function yt(e) {
	return ut.test(e.trim());
}
function bt(e) {
	return dt.test(e);
}
function xt(e, t) {
	if (!t || e.length <= t) return [e];
	let n = e.split(/\s+/).filter(Boolean), r = [], i = "";
	for (let e of n) {
		let n = i ? `${i} ${e}` : e;
		i && n.length > t ? (r.push(i), i = e) : i = n;
	}
	return i && r.push(i), r.length ? r : [e];
}
function St(e, t) {
	return t.length ? `${e}\n\n${t.join("\n")}` : e;
}
function Ct(e, t, n, r, i, a) {
	let o = n.join("\n").trim();
	if (!o) return !1;
	let s = Number.isFinite(i.maxParagraphLength) ? Math.max(0, Math.floor(i.maxParagraphLength)) : 0, c = t === "paragraph" ? xt(o, s) : [o];
	for (let n = 0; n < c.length; n += 1) {
		let o = c[n], s = St(o, a);
		e.push({
			id: Xe(t, o, e.length, i.idPrefix ?? ""),
			type: t,
			markdown: s,
			breakBefore: n === 0 && r
		});
	}
	return !0;
}
function wt(e = "", t = {}) {
	let n = String(e ?? "").replace(/\r\n/g, "\n").split("\n"), r = [], i = [];
	for (let e of n) bt(e) ? r.push(e) : i.push(e);
	let a = [], o = 0, s = !1;
	for (; o < i.length;) {
		if (pt(i[o])) {
			o += 1;
			continue;
		}
		if (yt(i[o])) {
			s = !0, o += 1;
			continue;
		}
		let e = o, n = "paragraph";
		if (gt(i[o])) {
			n = "code";
			let e = i[o].trim().slice(0, 3);
			for (o += 1; o < i.length && !i[o].trim().startsWith(e);) o += 1;
			o < i.length && (o += 1);
		} else if (mt(i[o])) n = "heading", o += 1;
		else if (_t(i[o])) n = "rule", o += 1;
		else if (ft.test(i[o])) n = "image", o += 1;
		else if (vt(i, o)) for (n = "table", o += 2; o < i.length && i[o].includes("|") && !pt(i[o]);) o += 1;
		else if (ht(i[o])) for (n = "list", o += 1; o < i.length && !pt(i[o]);) o += 1;
		else if (i[o].trim().startsWith(">")) for (n = "quote", o += 1; o < i.length && i[o].trim().startsWith(">");) o += 1;
		else for (o += 1; o < i.length && !pt(i[o]) && !mt(i[o]) && !gt(i[o]) && !_t(i[o]) && !ft.test(i[o]) && !vt(i, o) && !ht(i[o]) && !i[o].trim().startsWith(">") && !yt(i[o]);) o += 1;
		Ct(a, n, i.slice(e, o), s, t, r) && (s = !1);
	}
	return a;
}
//#endregion
//#region src/uhuu/pagination-static/cover-spread.tsx
var Tt = (e) => `${Number(e.toFixed(4))}mm`;
function Et(e, t) {
	let n = p(!1);
	l(() => {
		t || n.current || !R() || (n.current = !0, console.warn(`[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`));
	}, [e, t]);
}
var Dt = a(function({ sheet: e, left: t, right: n, spine: r, pageNo: i, overlay: a, binding: o, showBleed: s, className: l = "", style: u, leftClassName: d = "", rightClassName: f = "", leftPageKey: p, rightPageKey: m }, v) {
	let y = c(L), b = o === void 0 ? y?.page?.binding ?? null : k(o), x = s ?? y?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
	Et(e, b);
	let w = (t) => a ? ({ pageNo: n }) => a({
		pageNo: n,
		side: t,
		sheet: e
	}) : void 0, T = /* @__PURE__ */ g(ne, {
		className: `uhuu-page-sheet--panel ${d}`.trim(),
		pageNo: S,
		overlay: w("left"),
		showBleed: x,
		"data-page-key": p,
		children: t
	}), E = /* @__PURE__ */ g(ne, {
		className: `uhuu-page-sheet--panel ${f}`.trim(),
		pageNo: C,
		overlay: w("right"),
		showBleed: x,
		"data-page-key": m,
		children: n
	});
	if (!b) return /* @__PURE__ */ _(h, { children: [T, E] });
	let D = e === "inner", O = D && b.glue > 0;
	return /* @__PURE__ */ _("div", {
		ref: v,
		className: `uhuu-page-sheet uhuu-cover-spread ${l}`.trim(),
		style: u,
		"data-sheet": e,
		"data-spine": b.spine,
		"data-glue": b.glue,
		children: [
			/* @__PURE__ */ g("div", {
				className: "uhuu-spread-panel",
				"data-side": "left",
				children: T
			}),
			/* @__PURE__ */ _("div", {
				className: "uhuu-spread-spine",
				"data-blank": D ? "true" : "false",
				children: [!D && r, x && /* @__PURE__ */ g("div", {
					className: "uhuu-spread-guide",
					"data-label": `spine ${Tt(b.spine)}${D ? " · blank" : ""}`
				})]
			}),
			/* @__PURE__ */ g("div", {
				className: "uhuu-spread-panel",
				"data-side": "right",
				children: E
			}),
			O && ["left", "right"].map((e) => /* @__PURE__ */ g("div", {
				className: "uhuu-glue-zone",
				"data-side": e,
				children: x && /* @__PURE__ */ g("div", {
					className: "uhuu-spread-guide",
					"data-label": `glue ${Tt(b.glue)}`
				})
			}, e))
		]
	});
});
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function Ot(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Ot(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function kt() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ot(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.7.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var At = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, jt = (e, t) => ({
	classGroupId: e,
	validator: t
}), Mt = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Nt = "-", Pt = [], Ft = "arbitrary..", It = (e) => {
	let t = zt(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Rt(e);
			let n = e.split(Nt);
			return Lt(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? At(i, t) : t : i || Pt;
			}
			return n[e] || Pt;
		}
	};
}, Lt = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Lt(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Nt) : e.slice(t).join(Nt), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Rt = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Ft + r : void 0;
})(), zt = (e) => {
	let { theme: t, classGroups: n } = e;
	return Bt(n, t);
}, Bt = (e, t) => {
	let n = Mt();
	for (let r in e) {
		let i = e[r];
		Vt(i, n, r, t);
	}
	return n;
}, Vt = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Ht(i, t, n, r);
	}
}, Ht = (e, t, n, r) => {
	typeof e == "string" ? Ut(e, t, n) : typeof e == "function" ? Wt(e, t, n, r) : Gt(e, t, n, r);
}, Ut = (e, t, n) => {
	let r = e === "" ? t : Kt(t, e);
	r.classGroupId = n;
}, Wt = (e, t, n, r) => {
	qt(e) ? Vt(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(jt(n, e)));
}, Gt = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Vt(o, Kt(t, a), n, r);
	}
}, Kt = (e, t) => {
	let n = e, r = t.split(Nt), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Mt(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, qt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Jt = (e) => {
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
}, Yt = "!", Xt = ":", Zt = [], Qt = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), $t = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Xt) {
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
		s.endsWith(Yt) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Yt) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Qt(t, l, c, u);
	};
	if (t) {
		let e = t + Xt, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Qt(Zt, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, en = (e) => {
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
}, tn = (e) => ({
	cache: Jt(e.cacheSize),
	parseClassName: $t(e),
	sortModifiers: en(e),
	postfixLookupClassGroupIds: nn(e),
	...It(e)
}), nn = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, rn = /\s+/, an = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(rn), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Yt : _, y = v + g;
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
}, on = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = sn(n)) && (i && (i += " "), i += r);
	return i;
}, sn = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = sn(e[r])) && (n && (n += " "), n += t);
	return n;
}, cn = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = tn(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = an(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(on(...e));
}, ln = [], un = (e) => {
	let t = (t) => t[e] || ln;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, dn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, fn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, pn = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, mn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, _n = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yn = (e) => pn.test(e), H = (e) => !!e && !Number.isNaN(Number(e)), bn = (e) => !!e && Number.isInteger(Number(e)), xn = (e) => e.endsWith("%") && H(e.slice(0, -1)), Sn = (e) => mn.test(e), Cn = () => !0, wn = (e) => hn.test(e) && !gn.test(e), Tn = () => !1, En = (e) => _n.test(e), Dn = (e) => vn.test(e), On = (e) => !U(e) && !W(e), kn = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), An = (e) => Gn(e, Yn, Tn), U = (e) => dn.test(e), jn = (e) => Gn(e, Xn, wn), Mn = (e) => Gn(e, Zn, H), Nn = (e) => Gn(e, $n, Cn), Pn = (e) => Gn(e, Qn, Tn), Fn = (e) => Gn(e, qn, Tn), In = (e) => Gn(e, Jn, Dn), Ln = (e) => Gn(e, er, En), W = (e) => fn.test(e), Rn = (e) => Kn(e, Xn), zn = (e) => Kn(e, Qn), Bn = (e) => Kn(e, qn), Vn = (e) => Kn(e, Yn), Hn = (e) => Kn(e, Jn), Un = (e) => Kn(e, er, !0), Wn = (e) => Kn(e, $n, !0), Gn = (e, t, n) => {
	let r = dn.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Kn = (e, t, n = !1) => {
	let r = fn.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, qn = (e) => e === "position" || e === "percentage", Jn = (e) => e === "image" || e === "url", Yn = (e) => e === "length" || e === "size" || e === "bg-size", Xn = (e) => e === "length", Zn = (e) => e === "number", Qn = (e) => e === "family-name", $n = (e) => e === "number" || e === "weight", er = (e) => e === "shadow", tr = /*#__PURE__*/ cn(() => {
	let e = un("color"), t = un("font"), n = un("text"), r = un("font-weight"), i = un("tracking"), a = un("leading"), o = un("breakpoint"), s = un("container"), c = un("spacing"), l = un("radius"), u = un("shadow"), d = un("inset-shadow"), f = un("text-shadow"), p = un("drop-shadow"), m = un("blur"), h = un("perspective"), g = un("aspect"), _ = un("ease"), v = un("animate"), y = () => [
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
		W,
		U
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
		W,
		U,
		c
	], T = () => [
		yn,
		"full",
		"auto",
		...w()
	], E = () => [
		bn,
		"none",
		"subgrid",
		W,
		U
	], D = () => [
		"auto",
		{ span: [
			"full",
			bn,
			W,
			U
		] },
		bn,
		W,
		U
	], O = () => [
		bn,
		"auto",
		W,
		U
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		W,
		U
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
		yn,
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
		yn,
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
		yn,
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
		W,
		U
	], L = () => [
		...b(),
		Bn,
		Fn,
		{ position: [W, U] }
	], ee = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], te = () => [
		"auto",
		"cover",
		"contain",
		Vn,
		An,
		{ size: [W, U] }
	], ne = () => [
		xn,
		Rn,
		jn
	], R = () => [
		"",
		"none",
		"full",
		l,
		W,
		U
	], z = () => [
		"",
		H,
		Rn,
		jn
	], re = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ie = () => [
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
	], B = () => [
		H,
		xn,
		Bn,
		Fn
	], ae = () => [
		"",
		"none",
		m,
		W,
		U
	], oe = () => [
		"none",
		H,
		W,
		U
	], V = () => [
		"none",
		H,
		W,
		U
	], se = () => [
		H,
		W,
		U
	], ce = () => [
		yn,
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
			blur: [Sn],
			breakpoint: [Sn],
			color: [Cn],
			container: [Sn],
			"drop-shadow": [Sn],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [On],
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
			"inset-shadow": [Sn],
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
			radius: [Sn],
			shadow: [Sn],
			spacing: ["px", H],
			text: [Sn],
			"text-shadow": [Sn],
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
				yn,
				U,
				W,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				W,
				U
			] }],
			"container-named": [kn],
			columns: [{ columns: [
				H,
				"auto",
				U,
				W,
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
				bn,
				"auto",
				W,
				U
			] }],
			basis: [{ basis: [
				yn,
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
				H,
				yn,
				"auto",
				"initial",
				"none",
				U
			] }],
			grow: [{ grow: [
				"",
				H,
				W,
				U
			] }],
			shrink: [{ shrink: [
				"",
				H,
				W,
				U
			] }],
			order: [{ order: [
				bn,
				"first",
				"last",
				"none",
				W,
				U
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
				Rn,
				jn
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Wn,
				Nn
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
				xn,
				U
			] }],
			"font-family": [{ font: [
				zn,
				Pn,
				t
			] }],
			"font-features": [{ "font-features": [U] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				W,
				U
			] }],
			"line-clamp": [{ "line-clamp": [
				H,
				"none",
				W,
				Mn
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				W,
				U
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				W,
				U
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
			"text-decoration-style": [{ decoration: [...re(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				H,
				"from-font",
				"auto",
				W,
				jn
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				H,
				"auto",
				W,
				U
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
				bn,
				W,
				U
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
				W,
				U
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
				W,
				U
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
			"bg-repeat": [{ bg: ee() }],
			"bg-size": [{ bg: te() }],
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
						bn,
						W,
						U
					],
					radial: [
						"",
						W,
						U
					],
					conic: [
						"",
						bn,
						W,
						U
					]
				},
				Hn,
				In
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: ne() }],
			"gradient-via-pos": [{ via: ne() }],
			"gradient-to-pos": [{ to: ne() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: R() }],
			"rounded-s": [{ "rounded-s": R() }],
			"rounded-e": [{ "rounded-e": R() }],
			"rounded-t": [{ "rounded-t": R() }],
			"rounded-r": [{ "rounded-r": R() }],
			"rounded-b": [{ "rounded-b": R() }],
			"rounded-l": [{ "rounded-l": R() }],
			"rounded-ss": [{ "rounded-ss": R() }],
			"rounded-se": [{ "rounded-se": R() }],
			"rounded-ee": [{ "rounded-ee": R() }],
			"rounded-es": [{ "rounded-es": R() }],
			"rounded-tl": [{ "rounded-tl": R() }],
			"rounded-tr": [{ "rounded-tr": R() }],
			"rounded-br": [{ "rounded-br": R() }],
			"rounded-bl": [{ "rounded-bl": R() }],
			"border-w": [{ border: z() }],
			"border-w-x": [{ "border-x": z() }],
			"border-w-y": [{ "border-y": z() }],
			"border-w-s": [{ "border-s": z() }],
			"border-w-e": [{ "border-e": z() }],
			"border-w-bs": [{ "border-bs": z() }],
			"border-w-be": [{ "border-be": z() }],
			"border-w-t": [{ "border-t": z() }],
			"border-w-r": [{ "border-r": z() }],
			"border-w-b": [{ "border-b": z() }],
			"border-w-l": [{ "border-l": z() }],
			"divide-x": [{ "divide-x": z() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": z() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...re(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...re(),
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
				...re(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				H,
				W,
				U
			] }],
			"outline-w": [{ outline: [
				"",
				H,
				Rn,
				jn
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				Un,
				Ln
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Un,
				Ln
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: z() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [H, jn] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": z() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Un,
				Ln
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				H,
				W,
				U
			] }],
			"mix-blend": [{ "mix-blend": [
				...ie(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ie() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [H] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": B() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": B() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": B() }],
			"mask-image-t-to-pos": [{ "mask-t-to": B() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": B() }],
			"mask-image-r-to-pos": [{ "mask-r-to": B() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": B() }],
			"mask-image-b-to-pos": [{ "mask-b-to": B() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": B() }],
			"mask-image-l-to-pos": [{ "mask-l-to": B() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": B() }],
			"mask-image-x-to-pos": [{ "mask-x-to": B() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": B() }],
			"mask-image-y-to-pos": [{ "mask-y-to": B() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [W, U] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": B() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": B() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [H] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": B() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": B() }],
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
			"mask-repeat": [{ mask: ee() }],
			"mask-size": [{ mask: te() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				W,
				U
			] }],
			filter: [{ filter: [
				"",
				"none",
				W,
				U
			] }],
			blur: [{ blur: ae() }],
			brightness: [{ brightness: [
				H,
				W,
				U
			] }],
			contrast: [{ contrast: [
				H,
				W,
				U
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Un,
				Ln
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				H,
				W,
				U
			] }],
			"hue-rotate": [{ "hue-rotate": [
				H,
				W,
				U
			] }],
			invert: [{ invert: [
				"",
				H,
				W,
				U
			] }],
			saturate: [{ saturate: [
				H,
				W,
				U
			] }],
			sepia: [{ sepia: [
				"",
				H,
				W,
				U
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				W,
				U
			] }],
			"backdrop-blur": [{ "backdrop-blur": ae() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				H,
				W,
				U
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				H,
				W,
				U
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				H,
				W,
				U
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				H,
				W,
				U
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				H,
				W,
				U
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				H,
				W,
				U
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				H,
				W,
				U
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				H,
				W,
				U
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
				W,
				U
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				H,
				"initial",
				W,
				U
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				W,
				U
			] }],
			delay: [{ delay: [
				H,
				W,
				U
			] }],
			animate: [{ animate: [
				"none",
				v,
				W,
				U
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				W,
				U
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
			skew: [{ skew: se() }],
			"skew-x": [{ "skew-x": se() }],
			"skew-y": [{ "skew-y": se() }],
			transform: [{ transform: [
				W,
				U,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ce() }],
			"translate-x": [{ "translate-x": ce() }],
			"translate-y": [{ "translate-y": ce() }],
			"translate-z": [{ "translate-z": ce() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				bn,
				W,
				U
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
				W,
				U
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
				W,
				U
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				H,
				Rn,
				jn,
				Mn
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
});
//#endregion
//#region src/uhuu/ui/cn.ts
function G(...e) {
	return tr(kt(e));
}
//#endregion
//#region src/uhuu/image/use-image-load-failure.ts
var nr = ({ onError: e }) => (t) => {
	e?.(t);
}, rr = (e, t) => e && e > 0 ? e + t : 0, ir = ({ width: e, left: t = 0, right: n = 0 }, r, i, a) => {
	if (e) return !t && !n ? e + i : e;
	let o = a * r;
	return t || (o += a * i), n || (o += a * i), (t || n) && (o -= t + n), o;
}, ar = (e, t) => {
	let n = e.bleed ?? 0, r = e.pageWidth ?? 210, i = t === "spread" ? 2 : 1, a = r + 2 * n, o = ir(e, r, n, i), s = rr(e.left, n), c = a - ((t === "spread" && e.side === "end" ? -r + s : s) + o);
	return {
		top: `${Math.max(0, rr(e.top, n))}mm`,
		right: `${Math.max(0, c)}mm`
	};
}, or = (e) => {
	let t = c(L), n = nr({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, backgroundColor: l, width: u, height: d, left: f = 0, right: p = 0, top: m = 0, bottom: h = 0 } = e, v = (e) => `${e}mm`, y = () => ir({
		width: u,
		left: f,
		right: p
	}, i, r, 1), b = () => {
		let e = d;
		return d ? !m && !h && (e += r) : (e = a, m || (e += r), h || (e += r), (m || h) && (e -= (m ?? 0) + (h ?? 0))), e;
	}, x = y(), S = b(), C = (e) => e === void 0 ? void 0 : v(e), w = ((e) => Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0)))({
		backgroundColor: l,
		width: C(x),
		height: C(S),
		left: C(f > 0 ? f + r : f),
		right: C(p > 0 ? p + r : p),
		top: C(m > 0 ? m + r : m),
		bottom: C(h > 0 ? h + r : h)
	});
	return /* @__PURE__ */ g("div", {
		className: "uhuu-image-container",
		style: w,
		...e.dataUhuu === void 0 ? {} : { "data-uhuu": e.dataUhuu },
		children: /* @__PURE__ */ _("div", {
			className: "uhuu-image-inner",
			...Ue(e, t),
			children: [/* @__PURE__ */ g("img", {
				className: G("cover-image object-cover object-center", s),
				src: o || null,
				onError: n
			}), e.children]
		})
	});
}, sr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), cr = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), lr = (e) => {
	let t = cr(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, ur = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), dr = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, fr = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, pr = a(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => i("svg", {
	ref: l,
	...fr,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: ur("lucide", a),
	...!o && !dr(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]])), mr = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(pr, {
		ref: a,
		iconNode: t,
		className: ur(`lucide-${sr(lr(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = lr(e), n;
}, hr = mr("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), gr = mr("arrow-up-down", [
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
]), _r = mr("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), vr = mr("book-dashed", [
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
]), yr = mr("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), br = mr("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), xr = mr("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Sr = mr("clipboard-list", [
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
]), Cr = mr("copy", [["rect", {
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
}]]), wr = mr("ellipsis", [
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
]), Tr = mr("grip-vertical", [
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
]), Er = mr("lock", [["rect", {
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
}]]), Dr = mr("maximize", [
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
]), Or = mr("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), kr = mr("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), Ar = mr("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), jr = mr("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Mr = mr("trash-2", [
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
]), Nr = mr("unfold-horizontal", [
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
]), Pr = mr("unfold-vertical", [
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
]), Fr = mr("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Ir = mr("zoom-in", [
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
]), Lr = mr("zoom-out", [
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
]), Rr = e.createContext({ portalContainer: null });
function zr() {
	return e.useContext(Rr);
}
function Br({ children: t }) {
	let [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (typeof document > "u") return;
		let e = document.createElement("div");
		return e.setAttribute("data-uhuu-portal", ""), e.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(e), r(e), () => {
			document.body.removeChild(e);
		};
	}, []), /* @__PURE__ */ g(Rr.Provider, {
		value: { portalContainer: n },
		children: t
	});
}
var Vr = {
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
}, Hr = {
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
}, Ur = {
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
}, Wr = {
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
}, Gr = ["lang", "locale"];
function Kr(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase().split(/[-_]/)[0];
	return /^[a-z]{2,3}$/.test(t) ? t : null;
}
function qr(e, t) {
	for (let n of e ?? []) {
		let e = Kr(n);
		if (e && (!t || t.includes(e))) return e;
	}
	return null;
}
function Jr(e, t) {
	let n = new URLSearchParams(e?.search ?? "");
	return qr([
		e?.locale,
		e?.host,
		...Gr.map((e) => n.get(e)),
		e?.documentLang
	]) ?? qr(e?.navigatorLanguages ?? [], t) ?? "en";
}
function Yr(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = e.listen("loaded", (e) => {
		let n = Kr(e?.locale);
		n && t(n);
	});
	return typeof n == "function" ? n : () => {};
}
function Xr(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zr(e, t) {
	if (!Xr(t)) return e;
	let n = { ...Xr(e) ? e : {} };
	for (let [e, r] of Object.entries(t)) r != null && (n[e] = Xr(r) && Xr(n[e]) ? Zr(n[e], r) : r);
	return n;
}
function Qr(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) {
		let t = Kr(e);
		t && Xr(r) && (n[t] = Zr(n[t], r));
	}
	return n;
}
function $r(e, t, n = "en") {
	if (e == null) return;
	if (typeof e == "string") return e;
	if (!Xr(e)) return String(e);
	let r = [
		t,
		Kr(t),
		n
	].filter(Boolean);
	for (let t of r) if (typeof e[t] == "string") return e[t];
	let i = Object.values(e).find((e) => typeof e == "string");
	return typeof i == "string" ? i : void 0;
}
var ei = /* @__PURE__ */ new Map();
function ti(e, t) {
	if (!ei.has(e)) {
		let t = null;
		try {
			t = new Intl.PluralRules(e);
		} catch {
			t = null;
		}
		ei.set(e, t);
	}
	let n = ei.get(e);
	return n ? n.select(t) : t === 1 ? "one" : "other";
}
function ni(e, t) {
	let n = e;
	for (let e of t.split(".")) {
		if (!Xr(n)) return;
		n = n[e];
	}
	return typeof n == "string" ? n : void 0;
}
function ri(e, t) {
	return t ? e.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (e, n) => {
		let r = t[n];
		return r == null ? e : String(r);
	}) : e;
}
function ii({ locale: e, catalogs: t, fallbackLocale: n = "en" }) {
	let r = Kr(e) ?? n, i = [.../* @__PURE__ */ new Set([r, n])].map((e) => t?.[e]).filter(Xr);
	return function(e, t) {
		let n = typeof t?.count == "number" ? t.count : null, a = n === null ? [e] : [
			`${e}_${ti(r, n)}`,
			`${e}_other`,
			e
		];
		for (let e of i) for (let n of a) {
			let r = ni(e, n);
			if (r !== void 0) return ri(r, t);
		}
		return e;
	};
}
//#endregion
//#region src/uhuu/i18n/locale-context.tsx
var ai = [
	"de",
	"fr",
	"it",
	"en"
], oi = {
	en: Vr,
	de: Hr,
	fr: Ur,
	it: Wr
}, si = r(null);
function ci(e) {
	return [...ai, ...Object.keys(e ?? {}).map((e) => Kr(e) ?? e)];
}
function li(e, t) {
	let n = ci(e);
	if (typeof window > "u") return Jr({ locale: t }, n);
	let r = window.uhuuData?.locale;
	return Jr({
		locale: t,
		host: r,
		search: window.location?.search,
		documentLang: window.document?.documentElement?.lang,
		navigatorLanguages: window.navigator?.languages ?? [window.navigator?.language]
	}, n);
}
function ui(e, t) {
	return {
		locale: e,
		t: ii({
			locale: e,
			catalogs: Qr(oi, t),
			fallbackLocale: "en"
		}),
		localize: (t) => $r(t, e, "en")
	};
}
var di = null;
function fi() {
	return di ||= ui(li()), di;
}
function pi() {
	let [e, t] = m(null);
	return l(() => {
		if (typeof window < "u") return Yr(window.$uhuu, t);
	}, []), e;
}
function mi({ locale: e, translations: t }) {
	let n = pi(), r = d(() => Kr(e) ?? n ?? li(t), [
		e,
		n,
		t
	]);
	return d(() => ui(r, t), [r, t]);
}
function hi({ value: e, children: t }) {
	return /* @__PURE__ */ g(si.Provider, {
		value: e,
		children: t
	});
}
function gi() {
	return c(si) ?? fi();
}
//#endregion
//#region src/uhuu/editor-shell/interactive-mode-context.tsx
var _i = r({
	interactive: !0,
	setInteractive: () => {},
	enableDevTools: !1
});
function vi() {
	let e = c(_i), { locale: t } = gi();
	return d(() => ({
		...e,
		locale: t
	}), [e, t]);
}
function yi() {
	let { interactive: e } = vi();
	return !e;
}
function bi() {
	return typeof window < "u" && !!window?.$uhuu_renderer;
}
function xi() {
	return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Si({ children: e, defaultInteractive: t = !0, enableDevTools: n = !1, locale: r, translations: i }) {
	let a = bi(), o = n || xi(), [s, c] = m(!a && t), l = mi({
		locale: r,
		translations: i
	}), u = d(() => ({
		interactive: s,
		setInteractive: c,
		enableDevTools: o
	}), [s, o]);
	return /* @__PURE__ */ g(_i.Provider, {
		value: u,
		children: /* @__PURE__ */ g(hi, {
			value: l,
			children: /* @__PURE__ */ g(Br, { children: /* @__PURE__ */ g("div", {
				"data-uhuu-interactive": s ? "" : void 0,
				style: { display: "contents" },
				children: e
			}) })
		})
	});
}
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var Ci = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, wi = kt, Ti = (e, t) => (n) => {
	if (t?.variants == null) return wi(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Ci(t) || Ci(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return wi(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, Ei = Ti("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
}), Di = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ g("button", {
	className: G(Ei({
		variant: t,
		size: n,
		className: e
	})),
	ref: i,
	...r
}));
Di.displayName = "Button";
//#endregion
//#region node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var Oi = Object.defineProperty, ki = (e, t) => Oi(e, "name", {
	value: t,
	configurable: !0
}), Ai = !!(typeof window < "u" && window.document && window.document.createElement);
function K(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ ki(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
ki(K, "composeEventHandlers");
function ji(e) {
	if (!Ai) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
ki(ji, "getOwnerWindow");
function Mi(e) {
	if (!Ai) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
ki(Mi, "getOwnerDocument");
function Ni(e, t = !1) {
	let { activeElement: n } = Mi(e);
	if (!n?.nodeName) return null;
	if (Pi(n) && n.contentDocument) return Ni(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Mi(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
ki(Ni, "getActiveElement");
function Pi(e) {
	return e.tagName === "IFRAME";
}
ki(Pi, "isFrame");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Fi = Object.defineProperty, Ii = (e, t) => Fi(e, "name", {
	value: t,
	configurable: !0
});
function Li(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Ii(Li, "setRef");
function Ri(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Li(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Li(e[t], null);
			}
		};
	};
}
Ii(Ri, "composeRefs");
function q(...t) {
	return e.useCallback(Ri(...t), t);
}
Ii(q, "useComposedRefs");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var zi = Object.defineProperty, Bi = (e, t) => zi(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Vi(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ Bi((t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ g(r.Provider, {
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
	return Bi(a, "useContext"), [i, a];
}
Bi(Vi, "createContext");
// @__NO_SIDE_EFFECTS__
function Hi(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ Bi((n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ g(c.Provider, {
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
		return Bi(c, "useContext"), [s, c];
	}
	Bi(i, "createContext");
	let a = /* @__PURE__ */ Bi(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ Bi(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, Ui(a, ...n)];
}
Bi(Hi, "createContextScope");
function Ui(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ Bi(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ Bi(function(t) {
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
Bi(Ui, "composeContextScopes");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Wi = globalThis?.document ? e.useLayoutEffect : () => {}, Gi = Object.defineProperty, Ki = (e, t) => Gi(e, "name", {
	value: t,
	configurable: !0
}), qi = e.useEffectEvent, Ji = e.useInsertionEffect;
function Yi(t) {
	if (typeof qi == "function") return qi(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof Ji == "function" ? Ji(() => {
		n.current = t;
	}) : Wi(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
Ki(Yi, "useEffectEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Xi = Object.defineProperty, Zi = (e, t) => Xi(e, "name", {
	value: t,
	configurable: !0
}), Qi = e.useInsertionEffect || Wi;
function $i({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ Zi(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = ea({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = ta(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
Zi($i, "useControllableState");
function ea({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return Qi(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
Zi(ea, "useUncontrolledState");
function ta(e) {
	return typeof e == "function";
}
Zi(ta, "isFunction");
var na = Symbol("RADIX:SYNC_STATE");
function ra(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = Yi(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === na) return {
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
			type: na,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
Zi(ra, "useControllableStateReducer");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.4.0_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var ia = Object.defineProperty, aa = (e, t) => ia(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function oa(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...a } = n, o = null, s = !1, c = [];
		ma(i) && typeof ya == "function" && (i = ya(i._payload)), e.Children.forEach(i, (e) => {
			if (fa(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				ma(n) && typeof ya == "function" && (n = ya(n._payload)), o = la(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = e.cloneElement(o, void 0, c) : !s && e.Children.count(i) === 1 && e.isValidElement(i) && (o = i);
		let l = o ? da(o) : void 0, u = q(r, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? va(t) : _a(t));
			return i;
		}
		let d = ua(a, o.props ?? {});
		return o.type !== e.Fragment && (d.ref = r ? u : l), e.cloneElement(o, d);
	});
	return n.displayName = `${t}.Slot`, n;
}
aa(oa, "createSlot");
var sa = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ca(e) {
	let t = /* @__PURE__ */ aa((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = sa, t;
}
aa(ca, "createSlottable");
var la = /* @__PURE__ */ aa((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function ua(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = ga(a, i));
	}
	return {
		...e,
		...n
	};
}
aa(ua, "mergeProps");
function da(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
aa(da, "getElementRef");
function fa(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === sa;
}
aa(fa, "isSlottable");
var pa = Symbol.for("react.lazy");
function ma(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === pa && "_payload" in e && ha(e._payload);
}
aa(ma, "isLazyComponent");
function ha(e) {
	return typeof e == "object" && !!e && "then" in e;
}
aa(ha, "isPromiseLike");
function ga(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
aa(ga, "concatAriaDescribedby");
var _a = /* @__PURE__ */ aa((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), va = /* @__PURE__ */ aa((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), ya = e.use, ba = Object.defineProperty, xa = (e, t) => ba(e, "name", {
	value: t,
	configurable: !0
}), J = [
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
	let r = /* @__PURE__ */ oa(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function Sa(e, t) {
	e && v.flushSync(() => e.dispatchEvent(t));
}
xa(Sa, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_b1d6247ab86485bab1740806d97e8d38/node_modules/@radix-ui/react-collection/dist/index.mjs
var Ca = Object.defineProperty, wa = (e, t) => Ca(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ta(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ Hi(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ wa((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ g(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ oa(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = q(t, o(c, n).collectionRef);
		return /* @__PURE__ */ g(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ oa(d), m = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), c = q(n, s), l = o(d, r);
		return e.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ g(p, {
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
	return wa(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
wa(Ta, "createCollection");
var Ea = /* @__PURE__ */ new WeakMap(), Da = class e extends Map {
	static {
		wa(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], Ea.set(this, !0);
	}
	set(e, t) {
		return Ea.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = Aa(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = Oa(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Oa(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Oa(this.#e, e);
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
function Oa(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = ka(e, t);
	return n === -1 ? void 0 : e[n];
}
wa(Oa, "at");
function ka(e, t) {
	let n = e.length, r = Aa(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
wa(ka, "toSafeIndex");
function Aa(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
wa(Aa, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function ja(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ Hi(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new Da(),
		setItemMap: /* @__PURE__ */ wa(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ wa(({ state: e, ...t }) => e ? /* @__PURE__ */ g(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ g(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ wa((e) => {
		let t = _();
		return /* @__PURE__ */ g(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ wa((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = q(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = Fa(() => {});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s]), /* @__PURE__ */ g(a, {
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
	let u = t + "CollectionSlot", d = /* @__PURE__ */ oa(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = q(t, o(u, n).collectionRef);
		return /* @__PURE__ */ g(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ oa(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = q(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		Ma(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(Pa) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(Pa)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new Da(e)));
			};
		}, [
			c,
			h,
			d
		]), /* @__PURE__ */ g(m, {
			"data-radix-collection-item": "",
			ref: u,
			children: i
		});
	});
	h.displayName = p;
	function _() {
		return e.useState(new Da());
	}
	wa(_, "useInitCollection");
	function v(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return wa(v, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: v,
		useInitCollection: _
	}];
}
wa(ja, "createCollection");
function Ma(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
wa(Ma, "shallowEqual");
function Na(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
wa(Na, "isElementPreceding");
function Pa(e, t) {
	return !e[1].element || !t[1].element ? 0 : Na(e[1].element, t[1].element) ? -1 : 1;
}
wa(Pa, "sortByDocumentPosition");
function Fa(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
wa(Fa, "getChildListObserver");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var Ia = Object.defineProperty, La = (e, t) => Ia(e, "name", {
	value: t,
	configurable: !0
}), Ra = {
	LTR: "ltr",
	RTL: "rtl"
}, za = e.createContext(void 0);
function Ba(t) {
	let n = e.useContext(za);
	return t || n || Ra.LTR;
}
La(Ba, "useDirection");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var Va = Object.defineProperty, Ha = (e, t) => Va(e, "name", {
	value: t,
	configurable: !0
});
function Ua(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
Ha(Ua, "useCallbackRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.20_@types+react-dom@19.3.0_@types+react@19.3.0__@_4e89f70e986c5a91a92277a59b4de3bd/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Wa = Object.defineProperty, Ga = (e, t) => Wa(e, "name", {
	value: t,
	configurable: !0
}), Ka = "dismissableLayer.update", qa = "dismissableLayer.pointerDownOutside", Ja = "dismissableLayer.focusOutside", Ya, Xa = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), Za = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ga(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(Xa), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), _ = q(n, p), v = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? v.indexOf(y) : -1, x = f ? v.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = e.useRef(!1), T = eo((e) => {
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
	}), E = to((e) => {
		if (i && w.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), D = f ? x === v.length - 1 : !1, O = Ua((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (D) return m.addEventListener("keydown", O, { capture: !0 }), () => m.removeEventListener("keydown", O, { capture: !0 });
	}, [
		m,
		D,
		O
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ya = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), no(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Ya));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), no());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ Ga(() => h({}), "handleUpdate");
		return document.addEventListener(Ka, e), () => document.removeEventListener(Ka, e);
	}, []), /* @__PURE__ */ g(J.div, {
		...u,
		ref: _,
		style: {
			pointerEvents: S ? C ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: K(t.onFocusCapture, E.onFocusCapture),
		onBlurCapture: K(t.onBlurCapture, E.onBlurCapture),
		onPointerDownCapture: K(t.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function Qa() {
	let t = e.useContext(Xa), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
Ga(Qa, "useDismissableLayerSurface");
var $a = /* @__PURE__ */ Ga(() => !0, "IS_TRUE");
function eo(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = $a } = n, c = Ua(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		Ga(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		Ga(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		Ga(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		Ga(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Ga((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || ro(qa, c, p, { discrete: !0 });
				};
				if (Ga(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
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
	]), { onPointerDownCapture: /* @__PURE__ */ Ga(() => l.current = !0, "onPointerDownCapture") };
}
Ga(eo, "usePointerDownOutside");
function to(t, n = globalThis?.document) {
	let r = Ua(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ Ga((e) => {
			e.target && !i.current && ro(Ja, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ Ga(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Ga(() => i.current = !1, "onBlurCapture")
	};
}
Ga(to, "useFocusOutside");
function no() {
	let e = new CustomEvent(Ka);
	document.dispatchEvent(e);
}
Ga(no, "dispatchUpdate");
function ro(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Sa(i, a) : i.dispatchEvent(a);
}
Ga(ro, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var io = Object.defineProperty, ao = (e, t) => io(e, "name", {
	value: t,
	configurable: !0
}), oo = 0, so = null;
function co(e) {
	return lo(), e.children;
}
ao(co, "FocusGuards");
function lo() {
	e.useEffect(() => {
		so ||= {
			start: uo(),
			end: uo()
		};
		let { start: e, end: t } = so;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), oo++, () => {
			oo === 1 && (so?.start.remove(), so?.end.remove(), so = null), oo = Math.max(0, oo - 1);
		};
	}, []);
}
ao(lo, "useFocusGuards");
function uo() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
ao(uo, "createFocusGuard");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_17bb03d71df6075c07bd134f364dcf6d/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var fo = Object.defineProperty, po = (e, t) => fo(e, "name", {
	value: t,
	configurable: !0
}), mo = "focusScope.autoFocusOnMount", ho = "focusScope.autoFocusOnUnmount", go = {
	bubbles: !1,
	cancelable: !0
}, _o = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ po(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = Ua(o), f = Ua(s), p = e.useRef(null), m = q(n, u), h = e.useRef(a);
	e.useEffect(() => {
		h.current = a;
	});
	let _ = e.useCallback((e) => e ? l?.contains(e) ? !0 : !!h.current?.some((t) => t.contains(e)) : !1, [l]), v = e.useRef({
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
				_(t) ? p.current = t : Oo(p.current, { select: !0 });
			}, t = function(e) {
				if (v.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (_(t) || Oo(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Oo(l);
			};
			po(e, "handleFocusIn"), po(t, "handleFocusOut"), po(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
		_
	]), e.useEffect(() => {
		if (l) {
			ko.add(v);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(mo, go);
				l.addEventListener(mo, d), l.dispatchEvent(t), t.defaultPrevented || (So(Mo(wo(l)), { select: !0 }), document.activeElement === e && Oo(l));
			}
			return () => {
				l.removeEventListener(mo, d), setTimeout(() => {
					let t = new CustomEvent(ho, go);
					l.addEventListener(ho, f), l.dispatchEvent(t), t.defaultPrevented || Oo(e ?? document.body, { select: !0 }), l.removeEventListener(ho, f), ko.remove(v);
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
			let t = e.currentTarget, [i, a] = Co(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && Oo(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && Oo(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		v.paused
	]);
	return /* @__PURE__ */ g(J.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: y
	});
}, "FocusScope")), vo = e.createContext(null);
function yo({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ g(vo.Provider, {
		value: e,
		children: t
	}) : t;
}
po(yo, "FocusScopeBranchProvider");
function bo() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ po((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ po((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
po(bo, "useFocusScopeBranchRegistry");
function xo(t) {
	let n = e.useContext(vo);
	e.useEffect(() => {
		if (t && n) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
po(xo, "useFocusScopeBranch");
function So(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Oo(r, { select: t }), document.activeElement !== n) return;
}
po(So, "focusFirst");
function Co(e) {
	let t = wo(e);
	return [To(t, e), To(t.reverse(), e)];
}
po(Co, "getTabbableEdges");
function wo(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ po((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
po(wo, "getTabbableCandidates");
function To(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Eo(r, { upTo: t }))) return r;
}
po(To, "findVisible");
function Eo(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
po(Eo, "isHidden");
function Do(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
po(Do, "isSelectableInput");
function Oo(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Do(e) && t && e.select();
	}
}
po(Oo, "focus");
var ko = Ao();
function Ao() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = jo(e, t), e.unshift(t);
		},
		remove(t) {
			e = jo(e, t), e[0]?.resume();
		}
	};
}
po(Ao, "createFocusScopesStack");
function jo(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
po(jo, "arrayRemove");
function Mo(e) {
	return e.filter((e) => e.tagName !== "A");
}
po(Mo, "removeLinks");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
var No = Object.defineProperty, Po = (e, t) => No(e, "name", {
	value: t,
	configurable: !0
}), Fo = e.useId || (() => void 0), Io = 0;
function Lo(t) {
	let [n, r] = e.useState(Fo());
	return Wi(() => {
		t || r((e) => e ?? String(Io++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
Po(Lo, "useId");
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Ro = [
	"top",
	"right",
	"bottom",
	"left"
], zo = Math.min, Bo = Math.max, Vo = Math.round, Ho = Math.floor, Uo = (e) => ({
	x: e,
	y: e
}), Wo = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Go(e, t, n) {
	return Bo(e, zo(t, n));
}
function Ko(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function qo(e) {
	return e.split("-")[0];
}
function Jo(e) {
	return e.split("-")[1];
}
function Yo(e) {
	return e === "x" ? "y" : "x";
}
function Xo(e) {
	return e === "y" ? "height" : "width";
}
function Zo(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Qo(e) {
	return Yo(Zo(e));
}
function $o(e, t, n) {
	n === void 0 && (n = !1);
	let r = Jo(e), i = Qo(e), a = Xo(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = cs(o)), [o, cs(o)];
}
function es(e) {
	let t = cs(e);
	return [
		ts(e),
		t,
		ts(t)
	];
}
function ts(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var ns = ["left", "right"], rs = ["right", "left"], is = ["top", "bottom"], as = ["bottom", "top"];
function os(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? rs : ns : t ? ns : rs;
		case "left":
		case "right": return t ? is : as;
		default: return [];
	}
}
function ss(e, t, n, r) {
	let i = Jo(e), a = os(qo(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ts)))), a;
}
function cs(e) {
	let t = qo(e);
	return Wo[t] + e.slice(t.length);
}
function ls(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function us(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : ls(e);
}
function ds(e) {
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
function fs(e, t, n) {
	let { reference: r, floating: i } = e, a = Zo(t), o = Qo(t), s = Xo(o), c = qo(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = Jo(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function ps(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Ko(t, e), p = us(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = ds(await i.getClippingRect({
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
	}, y = ds(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var ms = 50, hs = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: ps
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = fs(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < ms && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = fs(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, gs = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Ko(e, t) || {};
		if (l == null) return {};
		let d = us(u), f = {
			x: n,
			y: r
		}, p = Qo(i), m = Xo(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = zo(d[_], T), D = zo(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = Go(E, k, O), j = !c.arrow && Jo(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), _s = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Ko(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = qo(r), _ = Zo(o), v = qo(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [cs(o)] : es(o)), x = p !== "none";
			!d && x && b.push(...ss(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = $o(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Zo(t) || T.every((e) => Zo(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = Zo(e.placement);
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
function vs(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function ys(e) {
	return Ro.some((t) => e[t] >= 0);
}
var bs = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Ko(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = vs(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: ys(e)
					} };
				}
				case "escaped": {
					let e = vs(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: ys(e)
					} };
				}
				default: return {};
			}
		}
	};
}, xs = /*#__PURE__*/ new Set(["left", "top"]);
async function Ss(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = qo(n), s = Jo(n), c = Zo(n) === "y", l = xs.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Ko(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Cs = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Ss(t, e);
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
}, ws = function(e) {
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
			} }, ...l } = Ko(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Zo(i), p = Yo(f), m = u[p], h = u[f], g = (e, t) => Go(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, Ts = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Ko(e, t), u = {
				x: n,
				y: r
			}, d = Zo(i), f = Yo(d), p = u[f], m = u[d], h = Ko(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = xs.has(qo(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Es = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = Ko(e, t), c = await i.detectOverflow(t, s), l = qo(n), u = Jo(n), d = Zo(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = zo(p - c[m], g), y = zo(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Bo(c.left, c.right) : S = p - 2 * Bo(c.top, c.bottom)), await o({
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
function Ds() {
	return typeof window < "u";
}
function Os(e) {
	return js(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ks(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function As(e) {
	return ((js(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function js(e) {
	return Ds() ? e instanceof Node || e instanceof ks(e).Node : !1;
}
function Ms(e) {
	return Ds() ? e instanceof Element || e instanceof ks(e).Element : !1;
}
function Ns(e) {
	return Ds() ? e instanceof HTMLElement || e instanceof ks(e).HTMLElement : !1;
}
function Ps(e) {
	return !Ds() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ks(e).ShadowRoot;
}
function Fs(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Ks(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Is(e) {
	return /^(table|td|th)$/.test(Os(e));
}
function Ls(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Rs = /transform|translate|scale|rotate|perspective|filter/, zs = /paint|layout|strict|content/, Bs = (e) => !!e && e !== "none", Vs;
function Hs(e) {
	let t = Ms(e) ? Ks(e) : e;
	return Bs(t.transform) || Bs(t.translate) || Bs(t.scale) || Bs(t.rotate) || Bs(t.perspective) || !Ws() && (Bs(t.backdropFilter) || Bs(t.filter)) || Rs.test(t.willChange || "") || zs.test(t.contain || "");
}
function Us(e) {
	let t = Js(e);
	for (; Ns(t) && !Gs(t);) {
		if (Hs(t)) return t;
		if (Ls(t)) return null;
		t = Js(t);
	}
	return null;
}
function Ws() {
	return Vs ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Vs;
}
function Gs(e) {
	return /^(html|body|#document)$/.test(Os(e));
}
function Ks(e) {
	return ks(e).getComputedStyle(e);
}
function qs(e) {
	return Ms(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Js(e) {
	if (Os(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Ps(e) && e.host || As(e);
	return Ps(t) ? t.host : t;
}
function Ys(e) {
	let t = Js(e);
	return Gs(t) ? (e.ownerDocument || e).body : Ns(t) && Fs(t) ? t : Ys(t);
}
function Xs(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Ys(e), i = r === e.ownerDocument?.body, a = ks(r);
	if (i) {
		let e = Zs(a);
		return t.concat(a, a.visualViewport || [], Fs(r) ? r : [], e && n ? Xs(e) : []);
	}
	return t.concat(r, Xs(r, [], n));
}
function Zs(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Qs(e) {
	let t = Ks(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Ns(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Vo(n) !== a || Vo(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function $s(e) {
	return Ms(e) ? e : e.contextElement;
}
function ec(e) {
	let t = $s(e);
	if (!Ns(t)) return Uo(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Qs(t), o = (a ? Vo(n.width) : n.width) / r, s = (a ? Vo(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var tc = /*#__PURE__*/ Uo(0);
function nc(e) {
	let t = ks(e);
	return !Ws() || !t.visualViewport ? tc : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function rc(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === ks(e);
}
function ic(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = $s(e), o = Uo(1);
	t && (r ? Ms(r) && (o = ec(r)) : o = ec(e));
	let s = rc(a, n, r) ? nc(a) : Uo(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = ks(a), t = Ms(r) ? ks(r) : r, n = e, i = Zs(n);
		for (; i && t !== n;) {
			let e = ec(i), t = i.getBoundingClientRect(), r = Ks(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = ks(i), i = Zs(n);
		}
	}
	return ds({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ac(e, t) {
	let n = qs(e).scrollLeft;
	return t ? t.left + n : ic(As(e)).left + n;
}
function oc(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - ac(e, n),
		y: n.top + t.scrollTop
	};
}
function sc(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = As(r), s = t ? Ls(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Uo(1), u = Uo(0), d = Ns(r);
	if ((d || !a) && ((Os(r) !== "body" || Fs(o)) && (c = qs(r)), d)) {
		let e = ic(r);
		l = ec(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? oc(o, c) : Uo(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function cc(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function lc(e) {
	let t = qs(e), n = e.ownerDocument.body, r = Bo(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Bo(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + ac(e), o = -t.scrollTop;
	return Ks(n).direction === "rtl" && (a += Bo(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var uc = 25;
function dc(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = ks(e), a = As(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Ws() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (ac(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= uc && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function fc(e, t) {
	let n = ic(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = ec(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function pc(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = dc(e, n, t);
	else if (t === "document") r = lc(As(e));
	else if (Ms(t)) r = fc(t, n);
	else {
		let n = nc(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return ds(r);
}
function mc(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Xs(e, [], !1).filter((e) => Ms(e) && Os(e) !== "body"), i = null, a = Ks(e).position === "fixed", o = a ? Js(e) : e;
	for (; Ms(o) && !Gs(o);) {
		let e = Ks(o), t = Hs(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Js(o);
	}
	return t.set(e, r), r;
}
function hc(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Ls(t) ? [] : mc(t, this._c) : [].concat(n), r], o = pc(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = pc(t, a[e], i);
		s = Bo(n.top, s), c = zo(n.right, c), l = zo(n.bottom, l), u = Bo(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function gc(e) {
	let { width: t, height: n } = Qs(e);
	return {
		width: t,
		height: n
	};
}
function _c(e, t, n) {
	let r = Ns(t), i = As(t), a = n === "fixed", o = ic(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Uo(0);
	if ((r || !a) && ((Os(t) !== "body" || Fs(i)) && (s = qs(t)), r)) {
		let e = ic(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = ac(i));
	let l = i && !r && !a ? oc(i, s) : Uo(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function vc(e) {
	return Ks(e).position === "static";
}
function yc(e, t) {
	if (!Ns(e) || Ks(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return As(e) === n && (n = n.ownerDocument.body), n;
}
function bc(e, t) {
	let n = ks(e);
	if (Ls(e)) return n;
	if (!Ns(e)) {
		let t = Js(e);
		for (; t && !Gs(t);) {
			if (Ms(t) && !vc(t)) return t;
			t = Js(t);
		}
		return n;
	}
	let r = yc(e, t);
	for (; r && Is(r) && vc(r);) r = yc(r, t);
	return r && Gs(r) && vc(r) && !Hs(r) ? n : r || Us(e) || n;
}
var xc = async function(e) {
	let t = this.getOffsetParent || bc, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: _c(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Sc(e) {
	return Ks(e).direction === "rtl";
}
var Cc = {
	convertOffsetParentRelativeRectToViewportRelativeRect: sc,
	getDocumentElement: As,
	getClippingRect: hc,
	getOffsetParent: bc,
	getElementRects: xc,
	getClientRects: cc,
	getDimensions: gc,
	getScale: ec,
	isElement: Ms,
	isRTL: Sc
};
function wc(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Tc(e, t, n) {
	let r = null, i, a = As(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Ho(d), h = Ho(a.clientWidth - (u + f)), g = Ho(a.clientHeight - (d + p)), _ = Ho(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Bo(0, zo(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!wc(l, e.getBoundingClientRect())) return s();
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
	let c = ks(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Ec(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = $s(e), u = i || a ? [...l ? Xs(l) : [], ...t ? Xs(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Tc(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? ic(e) : null;
	c && g();
	function g() {
		let t = ic(e);
		h && !wc(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Dc = Cs, Oc = ws, kc = _s, Ac = Es, jc = bs, Mc = gs, Nc = Ts, Pc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Cc,
		...i.platform,
		_c: r
	};
	return hs(e, t, {
		...i,
		platform: a
	});
}, Fc = typeof document < "u" ? u : function() {};
function Ic(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Ic(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Ic(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Lc(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Rc(e, t) {
	let n = Lc(e);
	return Math.round(t * n) / n;
}
function zc(t) {
	let n = e.useRef(t);
	return Fc(() => {
		n.current = t;
	}), n;
}
function Bc(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	Ic(p, i) || m(i);
	let [h, g] = e.useState(null), [_, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = zc(l), k = zc(a), A = zc(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), Pc(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !Ic(E.current, t) && (E.current = t, v.flushSync(() => {
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
	Fc(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	Fc(() => (M.current = !0, () => {
		M.current = !1;
	}), []), Fc(() => {
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
		let t = Rc(P.floating, d.x), n = Rc(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Lc(P.floating) >= 1.5 && { willChange: "transform" }
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
var Vc = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Mc({
				element: r.current,
				padding: i
			}).fn(n) : r ? Mc({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Hc = (e, t) => {
	let n = Dc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Uc = (e, t) => {
	let n = Oc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Wc = (e, t) => ({
	fn: Nc(e).fn,
	options: [e, t]
}), Gc = (e, t) => {
	let n = kc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Kc = (e, t) => {
	let n = Ac(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, qc = (e, t) => {
	let n = jc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Jc = (e, t) => {
	let n = Vc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Yc = Object.defineProperty, Xc = (e, t) => Yc(e, "name", {
	value: t,
	configurable: !0
});
function Zc(t) {
	let [n, r] = e.useState(void 0);
	return Wi(() => {
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
Xc(Zc, "useSize");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_04b331dcddb9198baac431c3d7633ae9/node_modules/@radix-ui/react-popper/dist/index.mjs
var Qc = Object.defineProperty, $c = (e, t) => Qc(e, "name", {
	value: t,
	configurable: !0
}), el = {
	Partial: "partial",
	Always: "always"
}, tl = {
	Optimized: "optimized",
	Always: "always"
}, nl = "Popper", [rl, il] = /* @__PURE__ */ Hi(nl), [al, ol] = rl(nl), sl = /* @__PURE__ */ $c((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ g(al, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), cl = "PopperAnchor", ll = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $c(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = ol(cl, r), s = e.useRef(null), c = o.onAnchorChange, l = q(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && gl(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ g(J.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), ul = "PopperContent", [dl, fl] = rl(ul), pl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $c(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = el.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = tl.Optimized, onPlaced: h, ..._ } = t, v = ol(ul, r), [y, b] = e.useState(null), x = q(n, b), [S, C] = e.useState(null), w = Zc(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(ml),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = Bc({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: /* @__PURE__ */ $c((...e) => Ec(...e, { animationFrame: m === tl.Always }), "whileElementsMounted"),
		elements: { reference: v.anchor },
		middleware: [
			Hc({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && Uc({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === el.Partial ? Wc() : void 0,
				...j
			}),
			l && Gc({ ...j }),
			Kc({
				...j,
				apply: /* @__PURE__ */ $c(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && Jc({
				element: S,
				padding: c
			}),
			hl({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && qc({
				strategy: "referenceHidden",
				...j,
				boundary: A ? j.boundary : void 0
			})
		]
	}), L = v.setPlacementState;
	Wi(() => (L(P), () => {
		L(void 0);
	}), [P, L]);
	let [ee, te] = gl(P), ne = Ua(h);
	Wi(() => {
		F && ne?.();
	}, [F, ne]);
	let R = I.arrow?.x, z = I.arrow?.y, re = I.arrow?.centerOffset !== 0, [ie, B] = e.useState();
	return Wi(() => {
		y && B(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ g("div", {
		ref: M.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: F ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ie,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ g(dl, {
			scope: r,
			placedSide: ee,
			placedAlign: te,
			onArrowChange: C,
			arrowX: R,
			arrowY: z,
			shouldHideArrow: re,
			children: /* @__PURE__ */ g(J.div, {
				"data-side": ee,
				"data-align": te,
				..._,
				ref: x,
				style: {
					..._.style,
					animation: F ? _.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function ml(e) {
	return e !== null;
}
$c(ml, "isNotNull");
var hl = /* @__PURE__ */ $c((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = gl(n), u = {
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
function gl(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
$c(gl, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-portal@1.1.18_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_8071c404ead3ecd57efdf7c5517d13a4/node_modules/@radix-ui/react-portal/dist/index.mjs
var _l = Object.defineProperty, vl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => _l(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	Wi(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? v.createPortal(/* @__PURE__ */ g(J.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), yl = Object.defineProperty, bl = (e, t) => yl(e, "name", {
	value: t,
	configurable: !0
});
function xl(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
bl(xl, "useStateMachine");
var Sl = /* @__PURE__ */ bl((t) => {
	let { present: n, children: r } = t, i = Cl(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = Tl(i.ref, Dl(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function Cl(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = xl(t ? "mounted" : "unmounted", {
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
		c === "mounted" ? (o.current = s.current ?? El(i.current), s.current = void 0) : o.current = "none";
	}, [c]), Wi(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = El(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), Wi(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ bl((r) => {
				let o = El(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ bl((e) => {
				e.target === n && (o.current = El(i.current));
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
				i.current = t, s.current = El(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
bl(Cl, "usePresence");
function wl(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
bl(wl, "setRef");
function Tl(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = wl(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : wl(t[e], null);
			}
		};
	}, []);
}
bl(Tl, "useStableComposedRefs");
function El(e) {
	return e?.animationName || "none";
}
bl(El, "getAnimationName");
function Dl(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
bl(Dl, "getElementRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var Ol = Object.defineProperty, kl = (e, t) => Ol(e, "name", {
	value: t,
	configurable: !0
}), Al = !1;
function jl() {
	let [t, n] = e.useState(Al);
	return e.useEffect(() => {
		Al || (Al = !0, n(!0));
	}, []), t;
}
kl(jl, "useIsHydrated");
var Ml = e.useSyncExternalStore;
function Nl() {
	return () => {};
}
kl(Nl, "subscribe");
function Pl() {
	return Ml(Nl, () => !0, () => !1);
}
kl(Pl, "useIsHydratedModern");
var Fl = typeof Ml == "function" ? Pl : jl, Il = Object.defineProperty, Ll = (e, t) => Il(e, "name", {
	value: t,
	configurable: !0
}), Rl = "rovingFocusGroup.onEntryFocus", zl = {
	bubbles: !1,
	cancelable: !0
}, Bl = "RovingFocusGroup", [Vl, Hl, Ul] = /* @__PURE__ */ Ta(Bl), [Wl, Gl] = /* @__PURE__ */ Hi(Bl, [Ul]), Kl = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, ql = {
	LTR: "ltr",
	RTL: "rtl"
}, [Jl, Yl] = Wl(Bl), Xl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ll(function(e, t) {
	return /* @__PURE__ */ g(Vl.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ g(Vl.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ g(Zl, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), Zl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ll(function(t, n) {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = q(n, p), h = Ba(o), [_, v] = $i({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: Bl
	}), [y, b] = e.useState(!1), x = Ua(u), S = Hl(r), C = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(Rl, x), () => e.removeEventListener(Rl, x);
	}, [x]), /* @__PURE__ */ g(Jl, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: _,
		onItemFocus: e.useCallback((e) => v(e), [v]),
		onItemShiftTab: e.useCallback(() => b(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ g(J.div, {
			tabIndex: y || w === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: K(t.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: K(t.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !y) {
					let t = new CustomEvent(Rl, zl);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						ru([
							e.find((e) => e.active),
							e.find((e) => e.id === _),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				C.current = !1;
			}),
			onBlur: K(t.onBlur, () => b(!1))
		})
	});
}, "RovingFocusGroupImpl")), Ql = "RovingFocusGroupItem", $l = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ll(function(t, n) {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = Lo(), u = o || l, d = Yl(Ql, r), f = d.currentTabStopId === u, p = Hl(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: _ } = d, v = Fl();
	return Wi(() => {
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
	]), /* @__PURE__ */ g(Vl.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ g(J.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: K(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: K(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: K(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = nu(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? iu(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => ru(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: _ != null
			}) : s
		})
	});
}, "RovingFocusGroupItem")), eu = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function tu(e, t) {
	return t === ql.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
Ll(tu, "getDirectionAwareKey");
function nu(e, t, n) {
	let r = tu(e.key, n);
	if (!(t === Kl.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === Kl.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return eu[r];
}
Ll(nu, "getFocusIntent");
function ru(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
Ll(ru, "focusFirst");
function iu(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Ll(iu, "wrapArray");
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var au = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, ou = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), cu = {}, lu = 0, uu = function(e) {
	return e && (e.host || uu(e.parentNode));
}, du = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = uu(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, fu = function(e, t, n, r) {
	var i = du(t, Array.isArray(e) ? e : [e]);
	cu[n] || (cu[n] = /* @__PURE__ */ new WeakMap());
	var a = cu[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (ou.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				ou.set(e, c), a.set(e, l), o.push(e), c === 1 && i && su.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), lu++, function() {
		o.forEach(function(e) {
			var t = ou.get(e) - 1, i = a.get(e) - 1;
			ou.set(e, t), a.set(e, i), t || (su.has(e) || e.removeAttribute(r), su.delete(e)), i || e.removeAttribute(n);
		}), lu--, lu || (ou = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), cu = {});
	};
}, pu = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || au(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), fu(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, mu = function() {
	return mu = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, mu.apply(this, arguments);
};
function hu(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function gu(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var _u = "right-scroll-bar-position", vu = "width-before-scroll-bar", yu = "with-scroll-bars-hidden", bu = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function xu(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function Su(e, t) {
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
var Cu = typeof window < "u" ? e.useLayoutEffect : e.useEffect, wu = /* @__PURE__ */ new WeakMap();
function Tu(e, t) {
	var n = Su(t || null, function(t) {
		return e.forEach(function(e) {
			return xu(e, t);
		});
	});
	return Cu(function() {
		var t = wu.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || xu(e, null);
			}), i.forEach(function(e) {
				r.has(e) || xu(e, a);
			});
		}
		wu.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function Eu(e) {
	return e;
}
function Du(e, t) {
	t === void 0 && (t = Eu);
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
function Ou(e) {
	e === void 0 && (e = {});
	var t = Du(null);
	return t.options = mu({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var ku = function(t) {
	var n = t.sideCar, r = hu(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, mu({}, r));
};
ku.isSideCarExport = !0;
function Au(e, t) {
	return e.useMedium(t), ku;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var ju = Ou(), Mu = function() {}, Nu = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Mu,
		onWheelCapture: Mu,
		onTouchMoveCapture: Mu
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = hu(t, [
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
	]), S = p, C = Tu([r, n]), w = mu(mu({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: ju,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), mu(mu({}, w), { ref: C })) : e.createElement(y, mu({}, w, {
		className: l,
		ref: C
	}), c));
});
Nu.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Nu.classNames = {
	fullWidth: vu,
	zeroRight: _u
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Pu = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function Fu() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Pu();
	return t && e.setAttribute("nonce", t), e;
}
function Iu(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Lu(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Ru = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Fu()) && (Iu(t, n), Lu(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, zu = function() {
	var t = Ru();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Bu = function() {
	var e = zu();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Vu = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Hu = function(e) {
	return parseInt(e || "", 10) || 0;
}, Uu = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Hu(n),
		Hu(r),
		Hu(i)
	];
}, Wu = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Vu;
	var t = Uu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Gu = Bu(), Ku = "data-scroll-locked", qu = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${yu} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Ku}] {
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
  
  .${_u} {
    right: ${s}px ${r};
  }
  
  .${vu} {
    margin-right: ${s}px ${r};
  }
  
  .${_u} .${_u} {
    right: 0 ${r};
  }
  
  .${vu} .${vu} {
    margin-right: 0 ${r};
  }
  
  body[${Ku}] {
    ${bu}: ${s}px;
  }
`;
}, Ju = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Yu = function() {
	e.useEffect(function() {
		return document.body.setAttribute(Ku, (Ju() + 1).toString()), function() {
			var e = Ju() - 1;
			e <= 0 ? document.body.removeAttribute(Ku) : document.body.setAttribute(Ku, e.toString());
		};
	}, []);
}, Xu = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	Yu();
	var o = e.useMemo(function() {
		return Wu(a);
	}, [a]);
	return e.createElement(Gu, { styles: qu(o, !n, a, r ? "" : "!important") });
}, Zu = !1;
if (typeof window < "u") try {
	var Qu = Object.defineProperty({}, "passive", { get: function() {
		return Zu = !0, !0;
	} });
	window.addEventListener("test", Qu, Qu), window.removeEventListener("test", Qu, Qu);
} catch {
	Zu = !1;
}
var $u = Zu ? { passive: !1 } : !1, ed = function(e) {
	return e.tagName === "TEXTAREA";
}, td = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ed(e) && n[t] === "visible");
}, nd = function(e) {
	return td(e, "overflowY");
}, rd = function(e) {
	return td(e, "overflowX");
}, id = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), sd(e, r)) {
			var i = cd(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, ad = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, od = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, sd = function(e, t) {
	return e === "v" ? nd(t) : rd(t);
}, cd = function(e, t) {
	return e === "v" ? ad(t) : od(t);
}, ld = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, ud = function(e, t, n, r, i) {
	var a = ld(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = cd(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && sd(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, dd = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, fd = function(e) {
	return [e.deltaX, e.deltaY];
}, pd = function(e) {
	return e && "current" in e ? e.current : e;
}, md = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, hd = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, gd = 0, _d = [];
function vd(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(gd++)[0], o = e.useState(Bu)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = gu([t.lockRef.current], (t.shards || []).map(pd), !0).filter(Boolean);
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
		var n = dd(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = id(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = id(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return ud(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (_d.length && _d[_d.length - 1] === o) {
			var r = "deltaY" in t ? fd(t) : dd(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && md(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(pd).filter(Boolean).filter(function(e) {
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
			shadowParent: yd(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = dd(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, fd(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, dd(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return _d.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, $u), document.addEventListener("touchmove", l, $u), document.addEventListener("touchstart", d, $u), function() {
			_d = _d.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, $u), document.removeEventListener("touchmove", l, $u), document.removeEventListener("touchstart", d, $u);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: hd(a) }) : null, m ? e.createElement(Xu, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function yd(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var bd = Au(ju, vd), xd = e.forwardRef(function(t, n) {
	return e.createElement(Nu, mu({}, t, {
		ref: n,
		sideCar: bd
	}));
});
xd.classNames = Nu.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_3ae13a8b8abaffcff00d77dee41e2df0/node_modules/@radix-ui/react-menu/dist/index.mjs
var Sd = Object.defineProperty, Y = (e, t) => Sd(e, "name", {
	value: t,
	configurable: !0
}), Cd = {
	LTR: "ltr",
	RTL: "rtl"
}, wd = ["Enter", " "], Td = [
	"ArrowDown",
	"PageUp",
	"Home"
], Ed = [
	"ArrowUp",
	"PageDown",
	"End"
], Dd = [...Td, ...Ed], Od = {
	ltr: [...wd, "ArrowRight"],
	rtl: [...wd, "ArrowLeft"]
}, kd = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Ad = "Menu", [jd, Md, Nd] = /* @__PURE__ */ Ta(Ad), [Pd, Fd] = /* @__PURE__ */ Hi(Ad, [
	Nd,
	il,
	Gl
]), Id = il(), Ld = Gl(), [Rd, zd] = Pd(Ad), [Bd, Vd] = Pd(Ad), Hd = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = Id(n), [l, u] = e.useState(null), d = e.useRef(!1), f = Ua(o), p = Ba(a);
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
	}, [r, f]), /* @__PURE__ */ g(sl, {
		...c,
		children: /* @__PURE__ */ g(Rd, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ g(Bd, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
}, "Menu"), Ud = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = Id(n);
	return /* @__PURE__ */ g(ll, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), Wd = "MenuPortal", [Gd, Kd] = Pd(Wd, { forceMount: void 0 }), qd = /* @__PURE__ */ Y((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = zd(Wd, t);
	return /* @__PURE__ */ g(Gd, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ g(Sl, {
			present: n || a.open,
			children: /* @__PURE__ */ g(vl, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), Jd = "MenuContent", [Yd, Xd] = Pd(Jd), Zd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = Kd(Jd, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = zd(Jd, e.__scopeMenu), o = Vd(Jd, e.__scopeMenu);
	return /* @__PURE__ */ g(jd.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ g(Sl, {
			present: r || a.open,
			children: /* @__PURE__ */ g(jd.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ g(Qd, {
					...i,
					ref: t
				}) : /* @__PURE__ */ g($d, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), Qd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = zd(Jd, t.__scopeMenu), i = e.useRef(null), a = q(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return pu(e);
	}, []), /* @__PURE__ */ g(tf, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: K(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), $d = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = zd(Jd, e.__scopeMenu);
	return /* @__PURE__ */ g(tf, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), ef = /* @__PURE__ */ oa("MenuContent.ScrollLock"), tf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ..._ } = t, v = zd(Jd, r), y = Vd(Jd, r), b = Id(r), x = Ld(r), S = Md(r), [C, w] = e.useState(null), T = e.useRef(null), [E, D] = e.useState(null);
	xo(E);
	let { nodes: O, registry: k } = bo(), A = !!(a || h), j = q(n, T, v.onContentChange, D), M = e.useRef(0), N = e.useRef(""), P = e.useRef(0), F = e.useRef(null), I = e.useRef("right"), L = e.useRef(0), ee = e.useMemo(() => h ? [T, ...O.map((e) => ({ current: e }))] : [], [
		T,
		O,
		h
	]), te = h ? xd : e.Fragment, ne = h ? {
		as: ef,
		allowPinchZoom: !0,
		shards: ee
	} : void 0, R = /* @__PURE__ */ Y((e) => {
		let t = N.current + e, n = S().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = kf(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(/* @__PURE__ */ Y((function e(t) {
			N.current = t, window.clearTimeout(M.current), t !== "" && (M.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	e.useEffect(() => () => window.clearTimeout(M.current), []), lo();
	let z = e.useCallback((e) => I.current === F.current?.side && jf(e, F.current?.area), []);
	return /* @__PURE__ */ g(Yd, {
		scope: r,
		searchRef: N,
		onItemEnter: e.useCallback((e) => {
			z(e) && e.preventDefault();
		}, [z]),
		onItemLeave: e.useCallback((e) => {
			z(e) || (T.current?.focus(), w(null));
		}, [z]),
		onTriggerLeave: e.useCallback((e) => {
			z(e) && e.preventDefault();
		}, [z]),
		pointerGraceTimerRef: P,
		onPointerGraceIntentChange: e.useCallback((e) => {
			F.current = e;
		}, []),
		children: /* @__PURE__ */ g(yo, {
			registry: A ? k : null,
			children: /* @__PURE__ */ g(te, {
				...ne,
				children: /* @__PURE__ */ g(_o, {
					asChild: !0,
					trapped: a,
					branches: O,
					onMountAutoFocus: K(o, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: s,
					children: /* @__PURE__ */ g(Za, {
						asChild: !0,
						disableOutsidePointerEvents: c,
						onEscapeKeyDown: u,
						onPointerDownOutside: d,
						onFocusOutside: f,
						onInteractOutside: p,
						onDismiss: m,
						children: /* @__PURE__ */ g(Xl, {
							asChild: !0,
							...x,
							dir: y.dir,
							orientation: "vertical",
							loop: i,
							currentTabStopId: C,
							onCurrentTabStopIdChange: w,
							onEntryFocus: K(l, (e) => {
								y.isUsingKeyboardRef.current || e.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: /* @__PURE__ */ g(pl, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": wf(v.open),
								"data-radix-menu-content": "",
								dir: y.dir,
								...b,
								..._,
								ref: j,
								style: {
									outline: "none",
									..._.style
								},
								onKeyDown: K(_.onKeyDown, (e) => {
									let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
									t && (e.key === "Tab" && e.preventDefault(), !n && r && R(e.key));
									let i = T.current;
									if (e.target !== i || !Dd.includes(e.key)) return;
									e.preventDefault();
									let a = S().filter((e) => !e.disabled).map((e) => e.ref.current);
									Ed.includes(e.key) && a.reverse(), Df(a);
								}),
								onBlur: K(t.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(M.current), N.current = "");
								}),
								onPointerMove: K(t.onPointerMove, Mf((e) => {
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
}, "MenuContentImpl")), nf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ g(J.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), rf = "MenuItem", af = "menu.itemSelect", of = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = Vd(rf, t.__scopeMenu), c = Xd(rf, t.__scopeMenu), l = q(n, o), u = e.useRef(!1), d = /* @__PURE__ */ Y(() => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(af, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(af, (e) => i?.(e), { once: !0 }), Sa(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ g(sf, {
		...a,
		ref: l,
		disabled: r,
		onClick: K(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: K(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: K(t.onKeyDown, (e) => {
			r || e.target !== e.currentTarget || (c.searchRef.current === "" || e.key !== " ") && wd.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), sf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = Xd(rf, r), c = Ld(r), l = e.useRef(null), u = q(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ g(jd.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ g($l, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ g(J.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: K(t.onPointerMove, Mf((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: K(t.onPointerLeave, Mf((e) => s.onItemLeave(e))),
				onFocus: K(t.onFocus, () => f(!0)),
				onBlur: K(t.onBlur, () => f(!1))
			})
		})
	});
}, "MenuItemImpl")), cf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ g(pf, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ g(of, {
			role: "menuitemcheckbox",
			"aria-checked": Tf(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Ef(n),
			onSelect: K(i.onSelect, () => r?.(Tf(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [lf, uf] = Pd("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Y(() => {}, "onValueChange")
}), df = "MenuRadioItem", ff = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { value: n, ...r } = e, i = uf(df, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ g(pf, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ g(of, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Ef(a),
			onSelect: K(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), [pf, mf] = Pd("MenuItemIndicator", { checked: !1 }), hf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ g(J.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), gf = "MenuSub", [_f, vf] = Pd(gf), yf = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = zd(gf, n), s = Id(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = Ua(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ g(sl, {
		...s,
		children: /* @__PURE__ */ g(Rd, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ g(_f, {
				scope: n,
				contentId: Lo(),
				triggerId: Lo(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
}, "MenuSub"), bf = "MenuSubTrigger", xf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = zd(bf, t.__scopeMenu), i = Vd(bf, t.__scopeMenu), a = vf(bf, t.__scopeMenu), o = Xd(bf, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]);
	let f = q(n, a.onTriggerChange);
	return /* @__PURE__ */ g(Ud, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ g(sf, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": r.open ? a.contentId : void 0,
			"data-state": wf(r.open),
			...t,
			ref: f,
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: K(t.onPointerMove, Mf((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: K(t.onPointerLeave, Mf((e) => {
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
			onKeyDown: K(t.onKeyDown, (e) => {
				t.disabled || e.target !== e.currentTarget || (o.searchRef.current === "" || e.key !== " ") && Od[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), Sf = "MenuSubContent", Cf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = Kd(Jd, t.__scopeMenu), { forceMount: i = r.forceMount, align: a = "start", ...o } = t, s = zd(Jd, t.__scopeMenu), c = Vd(Jd, t.__scopeMenu), l = vf(Sf, t.__scopeMenu), u = e.useRef(null), d = q(n, u);
	return /* @__PURE__ */ g(jd.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ g(Sl, {
			present: i || s.open,
			children: /* @__PURE__ */ g(jd.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ g(tf, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: d,
					align: a,
					side: c.dir === Cd.RTL ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: K(t.onFocusOutside, (e) => {
						e.target !== l.trigger && s.onOpenChange(!1);
					}),
					onEscapeKeyDown: K(t.onEscapeKeyDown, (e) => {
						c.onClose(), e.preventDefault();
					}),
					onKeyDown: K(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = kd[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function wf(e) {
	return e ? "open" : "closed";
}
Y(wf, "getOpenState");
function Tf(e) {
	return e === "indeterminate";
}
Y(Tf, "isIndeterminate");
function Ef(e) {
	return Tf(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Y(Ef, "getCheckedState");
function Df(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Y(Df, "focusFirst");
function Of(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Y(Of, "wrapArray");
function kf(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Of(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Y(kf, "getNextMatch");
function Af(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Y(Af, "isPointInPolygon");
function jf(e, t) {
	return t ? Af({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Y(jf, "isPointerInGraceArea");
function Mf(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Y(Mf, "whenMouse");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@type_629a5a4a562bce11ef9cf18d771c29ae/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var Nf = Object.defineProperty, Pf = (e, t) => Nf(e, "name", {
	value: t,
	configurable: !0
}), Ff = "DropdownMenu", [If, Lf] = /* @__PURE__ */ Hi(Ff, [Fd]), Rf = Fd(), [zf, Bf] = If(Ff), Vf = /* @__PURE__ */ Pf((t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = Rf(n), u = e.useRef(null), [d, f] = $i({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: Ff
	});
	return /* @__PURE__ */ g(zf, {
		scope: n,
		triggerId: Lo(),
		triggerRef: u,
		contentId: Lo(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ g(Hd, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
}, "DropdownMenu"), Hf = "DropdownMenuTrigger", Uf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = Bf(Hf, n), o = Rf(n), s = q(t, a.triggerRef);
	return /* @__PURE__ */ g(Ud, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ g(J.button, {
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
			onPointerDown: K(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: K(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
}, "DropdownMenuTrigger")), Wf = /* @__PURE__ */ Pf((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = Rf(t);
	return /* @__PURE__ */ g(qd, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), Gf = "DropdownMenuContent", Kf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(t, n) {
	let { __scopeDropdownMenu: r, ...i } = t, a = Bf(Gf, r), o = Rf(r), s = e.useRef(!1);
	return /* @__PURE__ */ g(Zd, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: K(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: K(t.onInteractOutside, (e) => {
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
}, "DropdownMenuContent")), qf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Rf(n);
	return /* @__PURE__ */ g(nf, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), Jf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Rf(n);
	return /* @__PURE__ */ g(of, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), Yf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Rf(n);
	return /* @__PURE__ */ g(cf, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), Xf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Rf(n);
	return /* @__PURE__ */ g(ff, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), Zf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Rf(n);
	return /* @__PURE__ */ g(hf, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), Qf = /* @__PURE__ */ Pf((e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = Rf(t), [s, c] = $i({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ g(yf, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, "DropdownMenuSub"), $f = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Rf(n);
	return /* @__PURE__ */ g(xf, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), ep = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Pf(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Rf(n);
	return /* @__PURE__ */ g(Cf, {
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
}, "DropdownMenuSubContent")), tp = Vf, np = Uf, rp = Qf, ip = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ g($f, {
	ref: i,
	className: G("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100", t && "pl-8", e),
	...r,
	children: n
}));
ip.displayName = $f.displayName;
var ap = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(ep, {
	ref: n,
	className: G("z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
ap.displayName = ep.displayName;
var op = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
	let { portalContainer: i } = zr();
	return /* @__PURE__ */ g(Wf, {
		container: i || void 0,
		children: /* @__PURE__ */ g(Kf, {
			ref: r,
			sideOffset: t,
			"data-uhuu-editor": !0,
			className: G("z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
			...n
		})
	});
});
op.displayName = Kf.displayName;
var sp = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(Jf, {
	ref: r,
	className: G("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e),
	...n
}));
sp.displayName = Jf.displayName;
var cp = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ g(Yf, {
	ref: i,
	className: G("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: t
}));
cp.displayName = Yf.displayName;
var lp = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ g(Xf, {
	ref: r,
	className: G("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: t
}));
lp.displayName = Xf.displayName;
var up = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(qf, {
	ref: r,
	className: G("px-2 py-1.5 text-sm font-medium", t && "pl-8", e),
	...n
}));
up.displayName = qf.displayName;
var dp = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(Zf, {
	ref: n,
	className: G("-mx-1 my-1 h-px bg-gray-200", e),
	...t
}));
dp.displayName = Zf.displayName;
var fp = (e, t) => {
	typeof window < "u" && window.$uhuu_renderer || (e.stopPropagation(), t.onSelect ? t.onSelect(e) : t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog));
}, pp = (e, t) => {
	if (!e) return null;
	let n = e.trim();
	if (n.startsWith("<")) {
		let e = n.replace(/<svg\b([^>]*)>/i, (e, t) => {
			let n = t;
			return /\bwidth=/.test(n) ? n = n.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "width=\"100%\"") : n += " width=\"100%\"", /\bheight=/.test(n) ? n = n.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "height=\"100%\"") : n += " height=\"100%\"", /\bpreserveAspectRatio=/.test(n) ? n = n.replace(/\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "preserveAspectRatio=\"xMidYMid slice\"") : n += " preserveAspectRatio=\"xMidYMid slice\"", `<svg${n}>`;
		});
		return /* @__PURE__ */ g("div", {
			className: G("pointer-events-none absolute inset-0 z-10", t),
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: e }
		});
	}
	return /* @__PURE__ */ g("img", {
		src: e,
		alt: "",
		"aria-hidden": "true",
		className: G("pointer-events-none absolute inset-0 z-10 h-full w-full object-cover", t)
	});
};
function mp({ options: e, anchorInsets: t }) {
	let { t: n } = gi(), r = /* @__PURE__ */ g("div", {
		className: "pointer-events-auto absolute right-2 top-2 z-20",
		children: /* @__PURE__ */ _(tp, {
			modal: !1,
			children: [/* @__PURE__ */ g(np, {
				asChild: !0,
				children: /* @__PURE__ */ g(Di, {
					variant: "secondary",
					size: "icon",
					title: n("image.options"),
					className: "h-7 w-7 shadow-sm",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ g(wr, { className: "h-4 w-4" })
				})
			}), /* @__PURE__ */ g(op, {
				className: "w-40 p-1.5",
				align: "end",
				children: e.map((e) => /* @__PURE__ */ _(sp, {
					onSelect: (t) => fp(t, e),
					disabled: e.disabled,
					children: [e.icon && /* @__PURE__ */ g("span", {
						className: "mr-2 inline-flex",
						children: e.icon
					}), /* @__PURE__ */ g("span", { children: e.label })]
				}, e.id))
			})]
		})
	});
	return t ? /* @__PURE__ */ g("div", {
		className: "pointer-events-none absolute z-20",
		style: t,
		children: r
	}) : r;
}
var hp = (e, t, n) => t ? /* @__PURE__ */ g(mp, {
	options: e,
	anchorInsets: n
}) : null, gp = (e = []) => {
	let t = yi();
	return e.length > 0 && !t;
}, _p = ({ className: t, style: n, overlaySvg: r, overlayClassName: i, options: a = [], dialog: o, dialogProps: s, bleedProps: l, children: u }) => {
	let d = c(L), f = gp(a), p = ar({
		...l,
		pageWidth: l?.pageWidth ?? d?.page?.width ?? 210,
		bleed: l?.bleed ?? d?.page?.bleed ?? 0
	}, "bleed"), m = o ? Ue({ dialog: o }, d) : {};
	return e.useMemo(() => {
		if (!s) return m;
		let e = {
			...m,
			...s
		};
		return (m.className || s.className) && (e.className = `${m.className || ""} ${s.className || ""}`.trim()), Object.keys(m).forEach((t) => {
			let n = m[t], r = s[t];
			t.startsWith("on") && typeof n == "function" && typeof r == "function" && (e[t] = (e) => {
				n(e), r(e);
			});
		}), e;
	}, [m, s]), /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ _(or, {
		...l,
		dialog: o,
		children: [pp(r, i), u]
	}), hp(a, f, p)] });
};
//#endregion
//#region src/uhuu/image/image-spread.tsx
function vp(e) {
	let t = c(L), n = nr({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, side: l, backgroundColor: u, width: d, height: f, left: p = 0, right: m = 0, top: h = 0, bottom: v = 0 } = e, y = (e) => `${e}mm`, b = () => ir({
		width: d,
		left: p,
		right: m
	}, i, r, 2), x = () => {
		let e = f;
		return f ? !h && !v && (e += r) : (e = a, h || (e += r), v || (e += r), (h || v) && (e -= (h ?? 0) + (v ?? 0))), e;
	}, S = b(), C = x(), w = (e) => e === void 0 ? void 0 : y(e), T = (e) => Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0)), E = p > 0 ? p + r : 0;
	m > 0 && m + r;
	let D = h > 0 ? h + r : 0, O = v > 0 ? v + r : 0, k = -1 * i + E, A = h > 0 && v > 0, j = T({
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
	return /* @__PURE__ */ g("div", {
		className: "uhuu-image-container",
		style: l == "end" ? M : j,
		...e.dataUhuu === void 0 ? {} : { "data-uhuu": e.dataUhuu },
		children: /* @__PURE__ */ _("div", {
			className: "uhuu-image-inner",
			...Ue(e, t),
			children: [/* @__PURE__ */ g("img", {
				className: G("cover-image object-cover object-center", s),
				src: o || null,
				onError: n
			}), e.children]
		})
	});
}
//#endregion
//#region src/uhuu/image/image-spread-with-overlay.tsx
var yp = ({ overlaySvg: e, overlayClassName: t, options: n = [], dialog: r, spreadProps: i, children: a }) => {
	let o = c(L), s = gp(n), l = ar({
		...i,
		pageWidth: i?.pageWidth ?? o?.page?.width ?? 210,
		bleed: i?.bleed ?? o?.page?.bleed ?? 0
	}, "spread");
	return /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ _(vp, {
		...i,
		dialog: r,
		children: [pp(e, t), a]
	}), hp(n, s, l)] });
}, bp = ({ src: t, alt: n = "", className: r, imageClassName: i, style: a, imageStyle: o, overlaySvg: s, overlayClassName: l, options: u = [], dialog: d, dialogProps: f, placeholder: p, children: m, imageProps: h, renderImage: v, onError: y }) => {
	let b = c(L), x = d ? Ue({ dialog: d }, b) : {}, S = gp(u), C = nr({ onError: (e) => {
		y?.(e), h?.onError?.(e);
	} }), w = e.useMemo(() => {
		if (!f) return x;
		let e = {
			...x,
			...f
		};
		return (x.className || f.className) && (e.className = G(x.className, f.className)), Object.keys(x).forEach((t) => {
			let n = x[t], r = f[t];
			t.startsWith("on") && typeof n == "function" && typeof r == "function" && (e[t] = (e) => {
				n(e), r(e);
			});
		}), e;
	}, [x, f]), T = h?.src ?? t, E = !T && !p && !v, D = () => {
		let e = h?.className, t = h?.style, r = T, a = h?.alt ?? n, s = {
			...h,
			src: r,
			alt: a,
			className: G("h-full w-full object-cover", i, e),
			style: {
				...o,
				...t
			}
		};
		return v ? v(s) : r ? /* @__PURE__ */ g("img", {
			...s,
			onError: C
		}) : p ?? null;
	}, O = w["data-uhuu"], k = e.Children.toArray(m).some((t) => e.isValidElement(t) ? t.type === vp || t.type === or : !1);
	k && delete w["data-uhuu"];
	let A = e.Children.map(m, (t) => e.isValidElement(t) ? e.cloneElement(t, { dataUhuu: O }) : t);
	return /* @__PURE__ */ _("div", {
		className: G(k ? "relative h-full w-full" : "relative", r),
		style: a,
		children: [/* @__PURE__ */ _("div", {
			...w,
			className: G("relative h-full w-full", E && "uhuu-image-empty", w.className),
			children: [
				D(),
				A,
				pp(s, l)
			]
		}), hp(u, S)]
	});
}, xp = (e) => {
	let { t } = gi(), { computedOverlaySvg: n, computedOptions: r, computedDirectDialog: i } = d(() => {
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
	]), o = a === "auto" || r && r.length > 0 || n || i || e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, { mode: s, side: c, src: l, alt: u, className: f, imageClassName: p, style: m, imageStyle: h, backgroundColor: _, width: v, height: y, left: b, right: x, top: S, bottom: C, pageWidth: w, pageHeight: T, bleed: E, overlayClassName: D, dialogProps: O, placeholder: k, children: A, imageProps: j, renderImage: M, onError: N } = e, P = {
		src: l,
		backgroundColor: _,
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
	if (a === "auto") return /* @__PURE__ */ g(bp, {
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
		children: A,
		imageProps: j,
		renderImage: M,
		onError: N
	});
	if (a === "spread") {
		let e = {
			...P,
			side: c,
			imageClassName: p
		};
		return o && (n || r?.length || i) ? /* @__PURE__ */ g(yp, {
			className: f,
			style: m,
			overlaySvg: n,
			overlayClassName: D,
			options: r,
			dialog: i,
			dialogProps: O,
			spreadProps: e,
			children: A
		}) : /* @__PURE__ */ g(vp, { ...e });
	}
	return o && (n || r?.length || i) ? /* @__PURE__ */ g(_p, {
		className: f,
		style: m,
		overlaySvg: n,
		overlayClassName: D,
		options: r,
		dialog: i,
		dialogProps: O,
		bleedProps: P,
		children: A
	}) : /* @__PURE__ */ g(or, { ...P });
}, X = (e) => typeof e == "object" && !!e && !Array.isArray(e), Sp = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Z = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, Cp = "https://render.uhuu.io/media/thumb", wp = "image/svg+xml";
function Tp(e) {
	return typeof e == "string" ? { url: Z(e) } : X(e) ? {
		url: Z(e.contentUrl) ?? Z(e.url) ?? Z(e.src),
		type: Z(e.encodingFormat) ?? Z(e.mimeType)
	} : { url: void 0 };
}
function Ep() {
	try {
		return !!globalThis.$uhuu?.is?.printProduct?.();
	} catch {
		return !1;
	}
}
function Dp(e) {
	try {
		return new URL(e);
	} catch {
		return;
	}
}
function Op(e, t, n) {
	if (n && n.toLowerCase().startsWith(wp)) return !0;
	if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
	if (/\.svgz?$/i.test(t.pathname)) return !0;
	for (let e of t.searchParams.values()) {
		let t = e.toLowerCase();
		if (t === "svg" || t === wp) return !0;
	}
	return !1;
}
var kp = (e) => !!e && `${e.origin}${e.pathname}` == "https://render.uhuu.io/media/thumb" && e.searchParams.has("url");
function Ap(e, t = {}) {
	let n = X(t) ? t : {}, { url: r, type: i } = Tp(e);
	if (!r) return;
	if (/^(?:data|blob):/i.test(r)) return r;
	let a = r, o = Dp(r), s = Z(n.format);
	if (kp(o) && (s ||= Z(o.searchParams.get("format")), a = Z(o.searchParams.get("url")) ?? r, o = Dp(a)), !/^https?:\/\//i.test(a) || Op(a, o, i)) return a;
	let c = (typeof n.print == "boolean" ? n.print : Ep()) ? Z(n.printSize) ?? "4000x4000" : Z(n.size) ?? "2000x2000", l = s ? `&format=${encodeURIComponent(s)}` : "";
	return `${Cp}?blank=true&size=${encodeURIComponent(c)}${l}&url=${encodeURIComponent(a)}`;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-css-vars.js
var jp = [
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
], Mp = [
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
], Np = [
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
], Pp = [
	...Np.map(([e]) => e),
	"chart-1",
	"chart-2",
	"chart-3",
	"chart-4",
	"chart-5"
], Fp = RegExp(`^--(?:color-)?(?:${Pp.join("|")})$`), Ip = /^--color-kit-[A-Za-z0-9_-]+$/, Lp = /^--font-(?:kit-)?(?:sans|serif|display|mono)$/;
function Rp(e) {
	let t = X(e) ? e.runtime : void 0;
	return X(t) && t.version === 2 && X(t.light) ? t : void 0;
}
var zp = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, Bp = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, Vp = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)", Hp = RegExp(`^ok(?:lch|lab)\\(\\s*${Vp}\\s+${Vp}\\s+${Vp}(?:\\s*\\/\\s*${Vp})?\\s*\\)$`, "i"), Up = /^[a-z]+$/i, Wp = /* @__PURE__ */ new Set([
	"inherit",
	"initial",
	"unset",
	"revert",
	"none"
]), Gp = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", Kp = RegExp(`^(${Gp})(deg|turn|rad|grad)?\\s+(${Gp})%\\s+(${Gp})%(?:\\s*\\/\\s*(${Gp})(%)?)?$`, "i"), qp = RegExp(`^hsla?\\(\\s*(${Gp})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${Gp})%\\s*(?:,\\s*|\\s+)(${Gp})%\\s*(?:(?:,|\\/)\\s*(${Gp})(%)?\\s*)?\\)$`, "i"), Jp = /[;{}<>\\\n\r]/, Yp = /^[A-Za-z0-9_-]+$/, Xp = (e, t, n) => Math.min(n, Math.max(t, e)), Zp = (e) => e.toString(16).padStart(2, "0"), Qp = {
	deg: 1,
	turn: 360,
	rad: 180 / Math.PI,
	grad: .9
};
function $p(e, t, n, r, i, a) {
	let o = (Number(e) * Qp[(t || "deg").toLowerCase()] % 360 + 360) % 360, s = Xp(Number(n) / 100, 0, 1), c = Xp(Number(r) / 100, 0, 1), l = s * Math.min(c, 1 - c), u = (e) => {
		let t = (e + o / 30) % 12;
		return Math.round((c - l * Math.max(-1, Math.min(t - 3, 9 - t, 1))) * 255);
	}, [d, f, p] = [
		u(0),
		u(8),
		u(4)
	], m = i === void 0 ? 1 : Xp(Number(i) / (a ? 100 : 1), 0, 1);
	return m >= 1 ? `#${Zp(d)}${Zp(f)}${Zp(p)}` : `rgba(${d}, ${f}, ${p}, ${Number(m.toFixed(3))})`;
}
function em(e) {
	let t = Z(e);
	if (!t) return;
	if (zp.test(t) || Bp.test(t) || Hp.test(t)) return t;
	if (Up.test(t)) return Wp.has(t.toLowerCase()) ? void 0 : t;
	let n = Kp.exec(t) ?? qp.exec(t);
	if (n) return $p(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function tm(e, t) {
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
function nm(e, t) {
	for (let n of t) {
		let t = em(tm(e, n));
		if (t !== void 0) return t;
	}
}
var rm = (e) => {
	if (typeof e == "string" && e.includes(",")) return Z(e.slice(e.indexOf(",") + 1));
};
function im(e, t) {
	if (e.includes(",")) return e;
	let n = /^(["']).*\1$/.test(e) ? e : `"${e}"`;
	return t ? `${n}, ${t}` : n;
}
function am(e, t) {
	if (typeof t == "string" && t) {
		if (Array.isArray(e)) return e.find((e) => X(e) && e.id === t);
		if (X(e)) return Sp(e, t) && X(e[t]) ? e[t] : Object.values(e).find((e) => X(e) && e.id === t);
	}
}
function om(e, t) {
	let n = Mp.find(([e]) => e === t)?.[1];
	if (!n || !X(e)) return;
	let r = X(e.tokens) ? e.tokens : {}, i = Z(r[n.token]), a = Z(r.primitives?.typography?.[n.primitive]), o = am(e.fonts, e.assignments?.[`font.${t}`]);
	!Z(o?.family) && X(e.fonts) && (o = n.keys.map((t) => Sp(e.fonts, t) ? e.fonts[t] : void 0).find((e) => X(e) && Z(e.family)));
	let s = Z(o?.family);
	if (s) return im(s, Z(o.fallback) ?? rm(a) ?? rm(i) ?? n.generic);
	let c = i ?? a;
	return c ? im(c, rm(a) ?? n.generic) : void 0;
}
function sm(e, t = {}) {
	let n = {};
	if (X(t?.defaults)) for (let [e, r] of Object.entries(t.defaults)) {
		if (!e.startsWith("--")) continue;
		let t = e.startsWith("--color-") ? em(r) : Z(r);
		t !== void 0 && !Jp.test(t) && (n[e] = t);
	}
	if (!X(e)) return n;
	let r = Rp(e);
	if (r) {
		for (let [e, t] of Object.entries(r.light)) {
			let r = Fp.test(e) || Ip.test(e) ? em(t) : Lp.test(e) ? Z(t) : void 0;
			r !== void 0 && !Jp.test(r) && (n[e] = r);
		}
		return n;
	}
	let i = X(e.tokens) ? e.tokens : {}, a = X(i.light?.semantic) ? i.light.semantic : {};
	for (let [e, t] of Np) {
		let r = em(a[t]);
		r !== void 0 && (n[`--${e}`] = r, n[`--color-${e}`] = r);
	}
	for (let [e, t] of jp) {
		let r = nm(i, t);
		r !== void 0 && (n[`--color-kit-${e}`] = r);
	}
	let o = i.light?.aliases;
	if (X(o)) {
		let e = (e, t) => {
			let r = Yp.test(e) ? em(t) : void 0;
			r !== void 0 && (n[`--color-kit-${e}`] = r);
		};
		for (let [t, n] of Object.entries(o)) if (t !== "hero" && X(n)) for (let [r, i] of Object.entries(n)) e(t === "template" ? r : `${t}-${r}`, i);
		for (let [t, n] of Object.entries(o)) X(n) || e(t, n);
	}
	for (let [t] of Mp) {
		let r = om(e, t);
		r === void 0 || Jp.test(r) || (n[`--font-${t}`] = r, n[`--font-kit-${t}`] = r);
	}
	return n;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-assets.js
var cm = /^https?:\/\//i, lm = "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live";
function um(e, t) {
	let n = X(e) ? Z(e.baseUrl) : void 0;
	if (n) return n.replace(/\/+$/, "");
	let r = Z(t);
	if (r && cm.test(r)) try {
		return new URL(".", r).toString().replace(/\/+$/, "");
	} catch {
		return;
	}
}
function dm(e, t) {
	let n = Z(e);
	if (n && !/\s/.test(n)) {
		if (cm.test(n) || /^data:/i.test(n)) return n;
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
var fm = /^kit-[\w-]+$/i;
function pm(e, t = {}) {
	if (!X(e)) return null;
	let n = (Z(t.publicBaseUrl) ?? "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live").replace(/\/+$/, ""), r = Z(String(e.brandKitTeamId ?? t.teamId ?? "")), i = (e) => r ? `${n}/teams/${encodeURIComponent(r)}/kits/${encodeURIComponent(e)}/brandkit.json` : null, a = Z(e.brandKitUrl);
	if (a) return fm.test(a) ? i(a) : dm(a) ?? null;
	let o = Z(e.brandKitId);
	if (o) return fm.test(o) ? i(o) : null;
	let s = X(e.brandKit?.storage) ? Z(e.brandKit.storage.publicUrl) : void 0;
	return s && cm.test(s) ? s : null;
}
async function mm(e, t = {}) {
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
var hm = {
	primary: "primary",
	logo: "primary",
	lockup: "primary",
	mark: "mark",
	icon: "mark",
	symbol: "mark",
	wordmark: "wordmark"
}, gm = {
	primary: "logo",
	mark: "icon"
}, _m = {
	primary: "logo.primary",
	mark: "logo.icon"
}, vm = (e) => X(e) ? Z(e.svg) ?? Z(e.png) : void 0;
function ym(e, t = {}) {
	if (!X(e)) return null;
	let n = hm[String(t.kind ?? "primary").toLowerCase()] ?? "primary", r = t.background === "dark" ? "dark" : "light", i = um(e, t.sourceUrl), a = Z(e.name), o = bm(e, n, r, i, a) ?? (n === "wordmark" ? null : xm(e, n, r, i, a));
	return o || n !== "wordmark" ? o : ym(e, {
		...t,
		kind: "primary"
	});
}
function bm(e, t, n, r, i) {
	let a = (Array.isArray(e.logoSystem?.variants) ? e.logoSystem.variants.filter(X) : []).filter((e) => e.kind === t && vm(e.files)), o = a.find((e) => e.background === n) ?? a.find((e) => e.background === "any") ?? a[0];
	if (!o) return null;
	let s = dm(vm(o.files), r);
	return s ? {
		src: s,
		alt: Z(o.name) ?? i,
		kind: t,
		background: o.background,
		...X(o.minWidth) ? { minWidth: o.minWidth } : {},
		...X(o.clearSpace) ? { clearSpace: o.clearSpace } : {}
	} : null;
}
function xm(e, t, n, r, i) {
	let a = X(e.logos) ? e.logos : {}, o = a[gm[t]];
	if (X(o)) {
		let e = n === "dark" ? "light" : "dark";
		for (let a of [n, e]) {
			let e = o[a], n = dm(X(e) ? e.src ?? e.url : e, r);
			if (n) return {
				src: n,
				alt: Z(o.alt) ?? i,
				kind: t,
				background: a
			};
		}
	}
	let s = Z(e.assignments?.[_m[t]]), c = s && a[s] || e.assets?.[t === "mark" ? "icon" : "primary"];
	if (X(c)) {
		let e = dm(c.src ?? c.url, r);
		if (e) return {
			src: e,
			alt: Z(c.alt) ?? Z(c.name) ?? i,
			kind: t
		};
	}
	return null;
}
var Sm = {
	photos: "photo",
	icons: "icon",
	graphics: "graphic",
	backgrounds: "background",
	templates: "template"
};
function Cm(e, t, n = {}) {
	if (!X(e) || !X(e.collections)) return null;
	let r = e.collections, i = Sm[t] ?? t, a = Z(e.assignments?.[`media.${t}`]), o = (a && X(r[a]) ? a : void 0) ?? Object.keys(r).find((e) => X(r[e]) && r[e].type === i);
	if (!o) return null;
	let s = r[o], c = um(e, n.sourceUrl), l = X(s.versions) ? s.versions : {}, u = [Z(n.versionId), Z(s.defaultVersionId)].find((e) => e && X(l[e])), d = u ? l[u] : void 0, f = X(s.schema?.keys) ? s.schema.keys : {}, p = [];
	d && X(d.items) ? p = [...Object.keys(f).filter((e) => e in d.items), ...Object.keys(d.items).filter((e) => !(e in f))].map((e) => [e, d.items[e]]) : Array.isArray(s.items) && (p = s.items.map((e, t) => [String(X(e) && Z(e.key) ? e.key : t), e]));
	let m = p.flatMap(([e, t]) => {
		if (!X(t)) return [];
		let n = dm(t.src ?? t.url, c);
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
var wm = (e) => typeof e == "string" ? e.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_") : "";
function Tm(e, t) {
	let n = Array.isArray(e?.config?.env) ? e.config.env : [];
	for (let e of (Array.isArray(t) ? t : [t]).map(wm)) {
		let t = n.find((t) => X(t) && wm(t.key) === e && Z(t.value));
		if (t) return t.value.trim();
	}
}
function Em(e, t) {
	let n = t === "macro" ? "macro" : "micro", r = e?.config?.maps?.styles?.[n], i = X(r) ? Z(r.url) : void 0;
	if (i) return {
		url: i,
		...Z(r.name) ? { name: Z(r.name) } : {},
		source: "config.maps"
	};
	let a = n.toUpperCase(), o = Tm(e, [
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
var Dm = /["\\\n\r\f<>]/, Om = (e) => (Array.isArray(e) ? e : X(e) ? Object.values(e) : []).filter(X);
function km(e) {
	return e.provider === "google" || e.provider === "css" ? e.provider : e.source === "google" || e.source === "css" ? e.source : Z(e.cssUrl) ? "css" : void 0;
}
var Am = (e) => Z(e.split(",")[0]?.replace(/^\s*(["'])(.*)\1\s*$/, "$2"));
function jm(e) {
	let t = (Array.isArray(e.weights) ? e.weights : (e.faces ?? []).map((e) => e?.weight)).map(Number).filter((e) => Number.isInteger(e) && e >= 1 && e <= 1e3);
	return [...new Set(t)].sort((e, t) => e - t);
}
function Mm(e, t) {
	let n = encodeURIComponent(e).replace(/%20/g, "+"), r = jm(t), i = Array.isArray(t.faces) ? t.faces : [], a = Array.isArray(t.styles) ? t.styles : i.map((e) => e?.style), o = r.length > 0 ? `:wght@${r.join(";")}` : "";
	if (a.includes("italic")) {
		let e = (Array.isArray(t.styles) ? (a.includes("normal") ? [0, 1] : [1]).flatMap((e) => (r.length ? r : [400]).map((t) => [e, t])) : i.filter((e) => e?.style === "normal" || e?.style === "italic").map((e) => [+(e.style === "italic"), Number(e.weight)]).filter(([, e]) => Number.isInteger(e) && e >= 1 && e <= 1e3)).sort(([e, t], [n, r]) => e - n || t - r).map((e) => e.join(","));
		o = `:ital,wght@${[...new Set(e)].join(";")}`;
	}
	return `https://fonts.googleapis.com/css2?family=${n}${o}&display=swap`;
}
function Nm(e) {
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
function Pm(e) {
	let t = String(e.format ?? e.src ?? "").toLowerCase();
	return t.includes("woff2") ? "woff2" : t.includes("woff") ? "woff" : t.includes("otf") || t.includes("opentype") ? "opentype" : "truetype";
}
function Fm(e) {
	let t = String(e ?? "").trim();
	return /^\d{1,4}(?:\s+\d{1,4})?$/.test(t) ? t : "400";
}
function Im(e, t, n) {
	let r = dm(t.src, n);
	if (r && !Dm.test(r)) return [
		"@font-face {",
		`  font-family: "${e}";`,
		`  src: url("${r}") format("${Pm(t)}");`,
		`  font-style: ${t.style === "italic" ? "italic" : "normal"};`,
		`  font-weight: ${Fm(t.weight)};`,
		"  font-display: swap;",
		"}"
	].join("\n");
}
function Lm(e, t = {}) {
	if (!X(e)) return {
		fontFaceCss: "",
		stylesheetUrls: []
	};
	let n = um(e, t?.sourceUrl), r = [], i = [], a = (e) => {
		let t = dm(e, n);
		t && !/^data:/i.test(t) && !r.includes(t) && r.push(t);
	}, o = Rp(e);
	if (o) {
		for (let e of Array.isArray(o.fontStylesheets) ? o.fontStylesheets : []) a(e);
		for (let e of Array.isArray(o.fontFaces) ? o.fontFaces : []) {
			if (!X(e)) continue;
			let t = Z(e.family), r = t ? Am(t) : void 0;
			if (!r || Dm.test(r)) continue;
			let a = Im(r, e, n);
			a && !i.includes(a) && i.push(a);
		}
		return {
			fontFaceCss: i.join("\n"),
			stylesheetUrls: r
		};
	}
	for (let t of Om(e.fonts)) {
		let e = Z(t.family), r = e ? Am(e) : void 0;
		if (!r || Dm.test(r)) continue;
		let o = km(t);
		o && a(Z(t.cssUrl) ? t.cssUrl : o === "google" ? Mm(r, t) : void 0);
		for (let e of Array.isArray(t.faces) ? t.faces : []) a(e?.cssUrl);
		if (!o) for (let e of Nm(t)) {
			let t = Im(r, e, n);
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
var Rm = r(null);
function zm(e) {
	try {
		return typeof location > "u" ? e : new URL(e, location.href).toString();
	} catch {
		return e;
	}
}
function Bm({ brandKit: e, src: t, defaults: n, sourceUrl: r, onLoad: i, onError: a, className: o, style: s, children: c }) {
	let u = typeof t == "string" && t.trim() !== "" ? t.trim() : void 0, [f, p] = m(null);
	l(() => {
		if (!u) return;
		let e = new AbortController();
		return mm(u, { signal: e.signal }).then((t) => {
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
	let h = u && f?.src === u ? f : null, v = h?.brandKit ?? e ?? null, y = h?.brandKit && u ? zm(u) : r, b = u ? h ? h.brandKit ? "ready" : "error" : "loading" : "idle", x = d(() => {
		let e = um(v, y);
		return {
			brandKit: v,
			cssVars: sm(v, { defaults: n }),
			sourceUrl: y,
			status: b,
			logo: (e = {}) => ym(v, {
				...e,
				sourceUrl: y
			}),
			collection: (e, t = {}) => Cm(v, e, {
				...t,
				sourceUrl: y
			}),
			mapStyle: (e) => Em(v, e),
			env: (e) => Tm(v, e),
			resolveUrl: (t) => dm(t, e)
		};
	}, [
		v,
		y,
		n,
		b
	]), S = d(() => Lm(v, { sourceUrl: y }), [v, y]);
	return /* @__PURE__ */ _(Rm.Provider, {
		value: x,
		children: [
			S.stylesheetUrls.map((e) => /* @__PURE__ */ g("link", {
				rel: "stylesheet",
				href: e,
				"data-uhuu-brand-kit-font": ""
			}, e)),
			S.fontFaceCss ? /* @__PURE__ */ g("style", {
				"data-uhuu-brand-kit-font": "",
				children: S.fontFaceCss
			}) : null,
			/* @__PURE__ */ g("div", {
				"data-uhuu-brand-kit": typeof v?.id == "string" ? v.id : "",
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
function Vm() {
	return c(Rm);
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-utils.ts
var Hm = "uhuu_page_editor";
function Um(e) {
	return e.kind === "group";
}
function Wm(e) {
	let t = [], n = 1;
	for (let r of e) if (Um(r)) for (let e of r.pages) t.push({
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
function Gm(e) {
	let t = [], n = 1;
	for (let r of e) if (Um(r)) {
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
function Km(e) {
	return Wm(e).length;
}
function qm(e) {
	return e.map((e) => {
		let t = e.strictPosition;
		if (Um(e)) {
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
function Jm(e, t) {
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
function Ym(e) {
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
function Xm(e, t = Hm) {
	let n = Ym(e);
	return {
		key: t,
		items: n,
		totalPages: Km(n),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Zm(e, t = Hm) {
	let n = e?.[t];
	if (!n?.items) return null;
	let r = Ym(n.items);
	return {
		key: t,
		items: r,
		totalPages: Km(r),
		updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Qm(e, t, n = Hm) {
	let r = Xm(t, n);
	return {
		...e ?? {},
		[n]: r
	};
}
function $m() {
	return Math.random().toString(36).slice(2, 11);
}
function eh(e, t, n) {
	return {
		kind: "page",
		id: n?.repeatable ? $m() : e,
		componentKey: t,
		templateId: e,
		label: n?.label,
		repeatable: n?.repeatable,
		maxInstances: n?.maxInstances,
		...n
	};
}
function th(e, t, n) {
	let r = n?.repeatable ? $m() : e;
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
function nh(e, t) {
	return e < 0 ? t + e + 1 : e;
}
function rh(e, t, n) {
	for (let r of t) {
		let t = nh(r.start, n), i = nh(r.end, n);
		if (e >= t && e <= i) return !0;
	}
	return !1;
}
function ih(e, t, n = 2) {
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
function ah(e, t) {
	if (!t || t.mode === "all") return e;
	let n = Km(e), r = t.mode ?? "all", i = t.coverPageCount ?? 2, a = r === "custom" && t.ranges ? t.ranges : ih(r, n, i);
	if (a.length === 0) return [];
	let o = [];
	for (let t of e) if (Um(t)) {
		let e = t.pages.filter((e) => e.pageNum && rh(e.pageNum, a, n));
		e.length > 0 && o.push({
			...t,
			pages: e
		});
	} else t.pageNum && rh(t.pageNum, a, n) && o.push(t);
	return o;
}
function oh(e, t, n) {
	if (!n || n.mode === "all") return !0;
	let r = n.mode ?? "all", i = n.coverPageCount ?? 2, a = r === "custom" && n.ranges ? n.ranges : ih(r, t, i);
	return a.length !== 0 && rh(e, a, t);
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-utils.ts
function sh(e, t) {
	if (e?.integrations) return e.integrations[t];
}
function ch(e, t) {
	return t && Um(t) ? t.id : e?.id ?? null;
}
function lh(e, t, n) {
	let r = ch(t, n);
	return r ? {
		instanceId: r,
		integration: sh(e, r)
	} : {
		instanceId: null,
		integration: void 0
	};
}
function uh(e, t, n) {
	return lh(e, t, n).integration;
}
function dh(e, t) {
	if (!e) return null;
	let n = `integrations.${e}`;
	return t ? `${n}.${t}` : n;
}
function fh(e) {
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
function ph(e, t, n) {
	if (!t) return n;
	let r = t.split("."), i = { ...e }, a = i;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e];
		!(t in a) || typeof a[t] != "object" || a[t] === null ? a[t] = {} : a[t] = { ...a[t] }, a = a[t];
	}
	let o = r[r.length - 1];
	return a[o] = n, i;
}
function mh(e, t, n) {
	let r = fh(t);
	if (!r.isIntegrationPath || !r.instanceId) return e;
	let { instanceId: i, fieldPath: a } = r, o = ph(sh(e, i) || {}, a, n);
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
function hh(e, t) {
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
var gh = e.createContext(null);
function _h(e = Hm) {
	return [e];
}
function vh(e, t, n) {
	if (!t) return e;
	if (!e) return t;
	let r = { ...t };
	return n.forEach((t) => {
		e[t] !== void 0 && (r[t] = e[t]);
	}), r;
}
function yh({ payload: t, onPayloadChange: n, children: r, stateKey: i = Hm }) {
	let [a, o] = e.useState(t ?? {}), s = e.useRef(null), c = e.useRef(!1), l = e.useRef(null), u = e.useRef(0), d = e.useRef(!0), f = e.useCallback((e) => {
		try {
			return JSON.stringify(e);
		} catch {
			return String(e);
		}
	}, []), p = e.useMemo(() => _h(i), [i]), m = e.useCallback((e, t) => {
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
				s.current = t, o((e) => t ? vh(e, t, p) : e);
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
	}, [n]), _ = e.useCallback((e) => {
		c.current = !0, o((t) => {
			let n = typeof e == "function" ? e(t) : e, r = n;
			return n && typeof n == "object" && Object.keys(n).filter((e) => e.startsWith("integrations.") || e === "integrations").length > 0 && n.integrations && (r = n), l.current = r, u.current = Date.now(), queueMicrotask(() => h(r)), r;
		});
	}, [h]), v = e.useCallback((e, t, n) => {
		_((r) => ({
			...r ?? {},
			pages: {
				...r?.pages ?? {},
				[e]: {
					...r?.pages?.[e] ?? {},
					[t]: n
				}
			}
		}));
	}, [_]), y = e.useCallback((e, t) => {
		_((n) => {
			let r = n?.integrations ?? {}, i = r[e], a = typeof t == "function" ? t(i) : t;
			return {
				...n ?? {},
				integrations: {
					...r,
					[e]: a
				}
			};
		});
	}, [_]), b = e.useCallback((e, t, n) => {
		y(e, (e) => ({
			...e ?? {},
			[t]: n
		}));
	}, [y]), x = e.useCallback((e) => {
		_((t) => {
			if (!t?.integrations || !t.integrations[e]) return t;
			let { [e]: n, ...r } = t.integrations;
			return {
				...t,
				integrations: Object.keys(r).length > 0 ? r : void 0
			};
		});
	}, [_]), S = e.useCallback((e, t) => {
		_((n) => mh(n, e, t));
	}, [_]), C = e.useCallback((e, t) => {
		let n = t ?? i;
		_((t) => Qm(t, e, n));
	}, [_, i]), w = e.useCallback((e) => hh(a, e), [a]), T = e.useMemo(() => ({
		payload: a,
		setPayload: _,
		setPageOptionValue: v,
		setIntegrationPayload: y,
		setIntegrationPayloadValue: b,
		removeIntegrationPayload: x,
		updateIntegrationByDialogPath: S,
		mergePageEditorState: C,
		getPagePayload: w
	}), [
		a,
		_,
		v,
		y,
		b,
		x,
		S,
		C,
		w
	]);
	return /* @__PURE__ */ g(gh.Provider, {
		value: T,
		children: r
	});
}
function bh(e) {
	return e.defaultValue === void 0 ? e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "" : e.defaultValue;
}
function xh(e, t) {
	return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function Sh(e, t, n) {
	let r = e.field ?? e.id;
	return {
		...e,
		getValue: (n) => {
			let i = t?.pages?.[n.id]?.[r];
			return i === void 0 ? bh(e) : e.type === "toggle" ? !!i : i;
		},
		onChange: (t, i) => {
			n(t, r, xh(e, i));
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-fit-core.js
function Ch(e) {
	switch (e) {
		case "fit-width": return "width";
		case "fit-height": return "height";
		case "fit-page": return "both";
		default: return "none";
	}
}
function wh(e) {
	let t = e.filter(({ width: e, height: t }) => e > 0 && t > 0);
	return t.length ? {
		width: t.reduce((e, t) => e + t.width, 0),
		height: Math.max(...t.map((e) => e.height))
	} : null;
}
function Th(e, t) {
	if (e === "two_pages") return wh(t);
	let n = t.find(({ width: e, height: t }) => e > 0 && t > 0);
	return n ? {
		width: n.width,
		height: n.height
	} : null;
}
function Eh({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
	let r = [e, n - Math.max(t, 0)].filter((e) => e > 0);
	return r.length ? Math.min(...r) : 0;
}
function Dh({ paneWidth: e, paneHeight: t, paddingX: n = 0, paddingY: r = 0, chromeHeight: i = 0 }) {
	return {
		availableWidth: Math.max(e - n, 0),
		availableHeight: Math.max(t - r - i, 0)
	};
}
function Oh({ mode: e, contentWidth: t, contentHeight: n, availableWidth: r, availableHeight: i, minZoom: a, maxZoom: o }) {
	if (e === "none" || t <= 0 || n <= 0 || r <= 0 || i <= 0) return null;
	let s = r / t * 100, c = i / n * 100;
	return Math.min(Math.max(e === "width" ? s : e === "height" ? c : Math.min(s, c), a), o);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-focal-core.js
function kh(e, t, n) {
	return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? {
		clientX: t,
		clientY: n
	} : {
		clientX: e.left + e.width / 2,
		clientY: e.top + e.height / 2
	};
}
function Ah(e, t, n, r) {
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
function jh(e) {
	return {
		left: e.left,
		top: e.top,
		width: e.width,
		height: e.height
	};
}
function Mh(e, t, n) {
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
function Nh(e) {
	return e === "auto" || e === "scroll" || e === "overlay";
}
//#endregion
//#region src/uhuu/editor-shell/resizers/section-page-resizer.tsx
var Ph = 24, Fh = 64, Ih = 1e3, Lh = {
	width: "max-content",
	margin: "auto",
	padding: `0 ${Ph}px ${Fh}px`,
	overflowAnchor: "none"
};
function Rh(e) {
	let t = e, n = null, r = null;
	for (; t && t !== document.documentElement;) {
		let e = window.getComputedStyle(t);
		if (!n && Nh(e.overflowX) && (n = t), !r && Nh(e.overflowY) && (r = t), n && r) return {
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
function zh(e) {
	let t = Math.max(e.getBoundingClientRect().top, 0), n = 0, r = e.parentElement;
	for (; r && r !== document.documentElement;) {
		let e = window.getComputedStyle(r);
		e.display !== "contents" && (n += (Number.parseFloat(e.paddingBottom) || 0) + (Number.parseFloat(e.borderBottomWidth) || 0) + Math.max(Number.parseFloat(e.marginBottom) || 0, 0)), r = r.parentElement;
	}
	return t + n;
}
function Bh(e) {
	let t = e.querySelector("[data-section-content]"), n = t?.closest("[class*=\"group/section\"]");
	if (!t || !n) return 0;
	let r = t.getBoundingClientRect().height;
	return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
var Vh = r({
	zoom: 100,
	scaleValue: 1,
	hideUI: !1
});
function Hh({ children: e, layout: t = "spread", pageItemId: n }) {
	let { scaleValue: r } = c(Vh), i = p(null);
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
	}, [e, r]), /* @__PURE__ */ g("div", {
		ref: i,
		className: `two-pages-pair two-pages-pair--${t}`,
		"data-page-item-id": n,
		children: e
	});
}
function Uh(e) {
	let t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
	return t > 0 && n > 0 ? {
		width: t,
		height: n
	} : null;
}
function Wh(e, t) {
	let n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
	if (!n) return null;
	let r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
		let e = n.querySelector("[data-section-content]");
		return e ? [e] : [];
	})();
	return r.length ? Th(t, r.map(Uh).filter((e) => e !== null)) : null;
}
function Gh({ children: e, title: t, className: n = "", controls: r, origin: i = "center" }) {
	let { scaleValue: a, hideUI: o } = c(Vh), s = p(null), [u, d] = m(0), [f, h] = m(0);
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
	let v = u * a, y = Math.max(f * a, 150), { justify: b, origin: x } = {
		left: {
			justify: "justify-start",
			origin: "top left"
		},
		right: {
			justify: "justify-end",
			origin: "top right"
		},
		center: {
			justify: "justify-center",
			origin: "top center"
		}
	}[i];
	return o ? /* @__PURE__ */ g("div", {
		className: n,
		children: e
	}) : /* @__PURE__ */ _("div", {
		className: `group/section ${n}`,
		style: {
			width: `${y}px`,
			minWidth: "150px"
		},
		children: [/* @__PURE__ */ g("div", { children: r ?? /* @__PURE__ */ g("div", {
			className: "px-4 py-2 border-b border-gray-200",
			children: /* @__PURE__ */ _("div", {
				className: "text-sm font-medium text-gray-700",
				children: [t, " Controls"]
			})
		}) }), /* @__PURE__ */ g("div", {
			className: "pt-1",
			style: {
				height: v > 0 ? `${v + 32}px` : "auto",
				minHeight: "100px"
			},
			children: /* @__PURE__ */ g("div", {
				className: `flex items-start ${b}`,
				children: /* @__PURE__ */ g("div", {
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
function Kh({ children: e, className: t = "", defaultZoom: n = 100, minZoom: r = 25, maxZoom: i = 200, onAddPage: a, menuItems: o, hideUI: c, preview: u = "single_page", defaultZoomMode: d = "manual", scrollMode: f = "pane" }) {
	let h = yi(), v = c ?? h, { t: y } = gi(), [x, S] = m(n), [C, w] = m(() => Ch(d)), [T, E] = m(() => Ch(d) !== "none"), [D, O] = m(0), k = p(null), A = p(null), j = p(null), M = p(null), N = p(x);
	l(() => {
		N.current = x;
	}, [x]);
	let P = s(() => f === "pane" && A.current ? {
		x: A.current,
		y: A.current
	} : Rh(k.current), [f]), F = s((e, t, n) => {
		let a = Math.min(Math.max(e, r), i), o = M.current;
		if (!o) {
			S(a), w("none");
			return;
		}
		let s = P(), c = Array.from(o.querySelectorAll("[data-section-content]")), l = Mh(c.map((e) => jh(e.getBoundingClientRect())), t, n), u = l >= 0 ? c[l] : o, d = jh(u.getBoundingClientRect()), f = kh(d, t, n);
		b(() => {
			S(a), w("none");
		});
		let p = () => {
			let e = jh(u.getBoundingClientRect()), { deltaLeft: t, deltaTop: n } = Ah(d, e, f.clientX, f.clientY);
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
		let t = Wh(e, u);
		if (!t) return;
		let n = f === "pane" ? A.current : k.current;
		if (!n) return;
		let a = n.getBoundingClientRect(), o = n.ownerDocument.defaultView ?? window, s = o.visualViewport?.height ?? n.ownerDocument.documentElement.clientHeight ?? o.innerHeight, c = n.clientWidth || a.width, l = f === "pane" ? Eh({
			paneClientHeight: n.clientHeight || a.height,
			paneTop: a.top,
			viewportHeight: s
		}) : s - Math.max(a.top, 0), d = j.current ? window.getComputedStyle(j.current) : null, { availableWidth: p, availableHeight: m } = Dh({
			paneWidth: c,
			paneHeight: l,
			paddingX: d ? Number.parseFloat(d.paddingLeft) + Number.parseFloat(d.paddingRight) : 0,
			paddingY: d ? Number.parseFloat(d.paddingTop) + Number.parseFloat(d.paddingBottom) : 0,
			chromeHeight: Bh(e)
		}), h = Oh({
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
	]), ee = (e) => {
		w(e);
	};
	l(() => {
		if (!T) return;
		if (C === "none") {
			E(!1);
			return;
		}
		let e = window.setTimeout(() => E(!1), Ih);
		return () => window.clearTimeout(e);
	}, [T, C]);
	let te = () => {
		let e = I();
		F(x + 25, e.clientX, e.clientY);
	}, ne = () => {
		let e = I();
		F(x - 25, e.clientX, e.clientY);
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
		if (v || f !== "pane") return;
		let e = k.current;
		if (!e) return;
		let t = () => {
			let t = zh(e);
			O((e) => Math.abs(e - t) < .5 ? e : t);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), window.addEventListener("resize", t), window.visualViewport?.addEventListener("resize", t), () => {
			n.disconnect(), window.removeEventListener("resize", t), window.visualViewport?.removeEventListener("resize", t);
		};
	}, [v, f]), l(() => {
		if (v) return;
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
		v,
		i,
		r,
		f
	]);
	let R = x / 100;
	return v ? /* @__PURE__ */ g(Vh.Provider, {
		value: {
			zoom: 100,
			scaleValue: 1,
			hideUI: !0
		},
		children: /* @__PURE__ */ g("div", {
			className: t,
			children: e
		})
	}) : /* @__PURE__ */ g(Vh.Provider, {
		value: {
			zoom: x,
			scaleValue: R,
			hideUI: !1
		},
		children: /* @__PURE__ */ _("div", {
			ref: k,
			className: `flex flex-col flex-1 min-h-0 ${t}`,
			children: [/* @__PURE__ */ _("div", {
				"data-uhuu-editor": !0,
				className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm",
				children: [
					o,
					/* @__PURE__ */ g("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
					/* @__PURE__ */ _(tp, {
						modal: !1,
						children: [/* @__PURE__ */ g(np, {
							asChild: !0,
							children: /* @__PURE__ */ _(Di, {
								variant: "ghost",
								size: "sm",
								title: y("zoom.menu"),
								className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
								children: [
									Math.round(x),
									"%",
									/* @__PURE__ */ g(br, { className: "w-3 h-3 ml-1 opacity-60" })
								]
							})
						}), /* @__PURE__ */ _(op, {
							className: "w-52 p-1.5",
							align: "end",
							children: [
								/* @__PURE__ */ _(sp, {
									onClick: () => ee("width"),
									className: `cursor-pointer flex items-center ${C === "width" ? "bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ g(Nr, { className: "w-4 h-4 mr-2" }), /* @__PURE__ */ g("span", { children: y("zoom.fitWidth") })]
								}),
								/* @__PURE__ */ _(sp, {
									onClick: () => ee("height"),
									className: `cursor-pointer flex items-center ${C === "height" ? "bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ g(Pr, { className: "w-4 h-4 mr-2" }), /* @__PURE__ */ g("span", { children: y("zoom.fitHeight") })]
								}),
								/* @__PURE__ */ _(sp, {
									onClick: () => ee("both"),
									className: `cursor-pointer flex items-center ${C === "both" ? "bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ g(Dr, { className: "w-4 h-4 mr-2" }), /* @__PURE__ */ g("span", { children: y("zoom.fitPage") })]
								}),
								/* @__PURE__ */ g(dp, { className: "my-1.5" }),
								/* @__PURE__ */ _("div", {
									className: "flex items-center justify-center gap-2 px-3 py-2.5",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ g(Di, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), ne();
											},
											disabled: x <= r,
											className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
											title: y("zoom.zoomOut"),
											children: /* @__PURE__ */ g(Lr, { className: "w-4 h-4" })
										}),
										/* @__PURE__ */ _("div", {
											className: "relative",
											children: [/* @__PURE__ */ g("input", {
												type: "number",
												value: Math.round(x),
												onChange: (e) => {
													let t = Number.parseInt(e.target.value);
													if (!isNaN(t)) {
														let e = I();
														F(t, e.clientX, e.clientY);
													}
												},
												onFocus: (e) => e.target.select(),
												className: "w-20 pr-6 text-center text-sm text-gray-700 bg-white border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
												min: r,
												max: i
											}), /* @__PURE__ */ g("span", {
												className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none",
												children: "%"
											})]
										}),
										/* @__PURE__ */ g(Di, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), te();
											},
											disabled: x >= i,
											className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
											title: y("zoom.zoomIn"),
											children: /* @__PURE__ */ g(Ir, { className: "w-4 h-4" })
										})
									]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ g("div", {
				ref: A,
				className: f === "pane" ? "uhuu-zoom-pane" : void 0,
				style: f === "pane" ? {
					height: `calc(100dvh - ${D}px)`,
					maxHeight: "100%",
					overflow: "auto",
					overscrollBehavior: "contain"
				} : void 0,
				children: /* @__PURE__ */ g("div", {
					ref: j,
					className: "uhuu-zoom-pane-content",
					style: T ? {
						...Lh,
						visibility: "hidden"
					} : Lh,
					children: /* @__PURE__ */ g("div", {
						ref: M,
						className: u === "two_pages" ? "group_two_pages" : "flex flex-col items-center",
						children: e
					})
				})
			})]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dialog@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_c1edb718822a6de77ff35d62c5110ee0/node_modules/@radix-ui/react-dialog/dist/index.mjs
var qh = Object.defineProperty, Jh = (e, t) => qh(e, "name", {
	value: t,
	configurable: !0
}), Yh = "Dialog", [Xh, Zh] = /* @__PURE__ */ Hi(Yh), [Qh, $h] = Xh(Yh), eg = /* @__PURE__ */ Jh((t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), { nodes: u, registry: d } = bo(), [f, p] = $i({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Yh
	}), [m, h] = e.useState(0), [_, v] = e.useState(0);
	return /* @__PURE__ */ g(Qh, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: Lo(),
		titleId: Lo(),
		descriptionId: Lo(),
		titlePresent: m > 0,
		descriptionPresent: _ > 0,
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
}, "Dialog"), tg = "DialogTrigger", ng = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = $h(tg, n), a = q(t, i.triggerRef);
	return /* @__PURE__ */ g(J.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": xg(i.open),
		...r,
		ref: a,
		onClick: K(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), rg = "DialogPortal", [ig, ag] = Xh(rg, { forceMount: void 0 }), og = /* @__PURE__ */ Jh((t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = $h(rg, n);
	return /* @__PURE__ */ g(ig, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ g(Sl, {
			present: r || o.open,
			children: /* @__PURE__ */ g(vl, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
}, "DialogPortal"), sg = "DialogOverlay", cg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(e, t) {
	let n = ag(sg, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = $h(sg, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ g(Sl, {
		present: r || a.open,
		children: /* @__PURE__ */ g(ug, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), lg = /* @__PURE__ */ oa("DialogOverlay.RemoveScroll"), ug = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(t, n) {
	let { __scopeDialog: r, ...i } = t, a = $h(sg, r), o = q(n, Qa());
	return /* @__PURE__ */ g(xd, {
		as: lg,
		allowPinchZoom: !0,
		shards: e.useMemo(() => [a.contentRef, ...a.branchNodes.map((e) => ({ current: e }))], [a.contentRef, a.branchNodes]),
		children: /* @__PURE__ */ g(J.div, {
			"data-state": xg(a.open),
			...i,
			ref: o,
			style: {
				pointerEvents: "auto",
				...i.style
			}
		})
	});
}, "DialogOverlayImpl")), dg = "DialogContent", fg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(e, t) {
	let n = ag(dg, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = $h(dg, e.__scopeDialog);
	return /* @__PURE__ */ g(Sl, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ g(pg, {
			...i,
			ref: t
		}) : /* @__PURE__ */ g(mg, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), pg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(t, n) {
	let r = $h(dg, t.__scopeDialog), i = e.useRef(null), a = q(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return pu(e);
	}, []), /* @__PURE__ */ g(hg, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		onCloseAutoFocus: K(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: K(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: K(t.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), mg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(t, n) {
	let r = $h(dg, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ g(hg, {
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
}, "DialogContentNonModal")), hg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = $h(dg, n);
	return lo(), /* @__PURE__ */ g(yo, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ g(_o, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ g(Za, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? bg(o, l.descriptionId) : o,
				"data-state": xg(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), gg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = $h("DialogTitle", n), { setTitleCount: a } = i;
	return Wi(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ g(J.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), _g = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = $h("DialogDescription", n), { setDescriptionCount: a } = i;
	return Wi(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ g(J.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), vg = "DialogClose", yg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Jh(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = $h(vg, n);
	return /* @__PURE__ */ g(J.button, {
		type: "button",
		...r,
		ref: t,
		onClick: K(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function bg(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Jh(bg, "concatAriaDescribedby");
function xg(e) {
	return e ? "open" : "closed";
}
Jh(xg, "getState");
//#endregion
//#region src/uhuu/ui/sheet.tsx
var Sg = eg, Cg = og, wg = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(cg, {
	className: G("fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
wg.displayName = cg.displayName;
var Tg = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => {
	let { portalContainer: a } = zr(), o = gi().t("dialog.close");
	return /* @__PURE__ */ _(Cg, {
		container: a || void 0,
		children: [/* @__PURE__ */ g(wg, {}), /* @__PURE__ */ _(fg, {
			ref: i,
			className: G("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", e === "top" && "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", e === "bottom" && "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", e === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", t),
			...r,
			children: [n, /* @__PURE__ */ _(yg, {
				className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100",
				children: [/* @__PURE__ */ g(Fr, { className: "h-4 w-4" }), /* @__PURE__ */ g("span", {
					className: "sr-only",
					children: o
				})]
			})]
		})]
	});
});
Tg.displayName = fg.displayName;
var Eg = ({ className: e, ...t }) => /* @__PURE__ */ g("div", {
	className: G("flex flex-col space-y-2 text-center sm:text-left", e),
	...t
});
Eg.displayName = "SheetHeader";
var Dg = ({ className: e, ...t }) => /* @__PURE__ */ g("div", {
	className: G("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
Dg.displayName = "SheetFooter";
var Og = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(gg, {
	ref: n,
	className: G("text-lg font-medium text-gray-900", e),
	...t
}));
Og.displayName = gg.displayName;
var kg = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(_g, {
	ref: n,
	className: G("text-sm text-gray-500", e),
	...t
}));
kg.displayName = _g.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/default-render-thumbnail.tsx
function Ag(e) {
	let { pageComponents: t, payload: n, setup: r = {
		width: 210,
		height: 297
	}, thumbnailWidth: i = 200, thumbnailHeight: a, i18n: o } = e, { t: s, localize: c } = o, l = I.resolveDimensions(r), u = l.width, d = l.height, f = u / d, p = i, m = a ?? Math.round(p / f), h = u * 3.779527559, v = d * 3.779527559;
	return (e, r, i) => {
		let a = e.strictPosition, o = a === "start" || a === "end";
		if (e.kind === "group") {
			let r = e.firstPageId, l = e.firstPageComponentKey ?? r, u = hh(n, {
				id: r,
				componentKey: l
			}), d = e.firstPageComponent || (l ? t[l] : null), f = n?.integrations?.[e.id];
			return /* @__PURE__ */ _("div", {
				className: `relative bg-white border transition-all ${i ? "border-blue-400 shadow-2xl scale-105" : o ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.id,
				children: [
					d ? /* @__PURE__ */ g("div", {
						className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
						children: /* @__PURE__ */ g("div", {
							style: {
								transform: `scale(${Math.min(p / h, m / v)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ g("div", {
								className: "!shrink-0",
								style: {
									width: `${h}px`,
									height: `${v}px`,
									backgroundColor: "white",
									pointerEvents: "none"
								},
								children: /* @__PURE__ */ g(d, {
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
					}) : /* @__PURE__ */ g("div", {
						className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							className: "text-center p-4",
							children: [/* @__PURE__ */ g("div", {
								className: "text-sm font-medium text-gray-700",
								children: s("thumbnail.groupFallbackName", { id: e.id })
							}), /* @__PURE__ */ g("div", {
								className: "text-xs text-gray-500 mt-1",
								children: r || s("thumbnail.noPreview")
							})]
						})
					}),
					/* @__PURE__ */ g("div", {
						className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none",
						children: s("thumbnail.groupBadge", { count: e.pageCount })
					}),
					o && /* @__PURE__ */ _("div", {
						className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1",
						children: [/* @__PURE__ */ g(Er, { className: "size-3" }), /* @__PURE__ */ g("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
					}),
					/* @__PURE__ */ g("div", {
						className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none",
						children: /* @__PURE__ */ g("div", {
							className: "flex items-center justify-between gap-2 text-white",
							children: /* @__PURE__ */ g("div", {
								className: "flex-1 min-w-0",
								children: /* @__PURE__ */ g("div", {
									className: "text-sm font-medium truncate",
									children: c(e.label) || e.id
								})
							})
						})
					}),
					i && /* @__PURE__ */ g("div", {
						className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none",
						children: /* @__PURE__ */ g("div", {
							className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg",
							children: s("thumbnail.draggingGroup")
						})
					})
				]
			});
		}
		{
			let r = e.pageId, l = e.pageComponentKey ?? r, u = hh(n, {
				id: r,
				componentKey: l
			}), d = e.pageComponent || (l ? t[l] : null), f = r ? uh(n, { id: r }) : void 0;
			return /* @__PURE__ */ _("div", {
				className: `relative bg-white border transition-all ${i ? "border-blue-400 shadow-2xl scale-105" : o ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.pageId,
				children: [
					d ? /* @__PURE__ */ g("div", {
						className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
						children: /* @__PURE__ */ g("div", {
							className: "flex items-center justify-center pointer-events-none",
							style: {
								transform: `scale(${Math.min(p / h, m / v)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ g("div", {
								className: "!shrink-0",
								style: {
									width: `${h}px`,
									height: `${v}px`,
									backgroundColor: "white",
									pointerEvents: "none"
								},
								children: /* @__PURE__ */ g(d, {
									payload: n,
									pageId: r,
									templateId: l,
									pagePayload: u,
									componentKey: l,
									integration: f
								})
							})
						})
					}) : /* @__PURE__ */ g("div", {
						className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							className: "text-center p-4",
							children: [/* @__PURE__ */ g("div", {
								className: "text-sm font-medium text-gray-700",
								children: s("page.fallbackName", { number: e.pageNum })
							}), /* @__PURE__ */ g("div", {
								className: "text-xs text-gray-500 mt-1",
								children: r || s("thumbnail.noPreview")
							})]
						})
					}),
					o && /* @__PURE__ */ _("div", {
						className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1",
						children: [/* @__PURE__ */ g(Er, { className: "size-3" }), /* @__PURE__ */ g("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
					}),
					/* @__PURE__ */ g("div", {
						className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none",
						children: /* @__PURE__ */ g("div", {
							className: "flex items-center justify-between gap-2 text-white",
							children: /* @__PURE__ */ g("div", {
								className: "flex-1 min-w-0",
								children: /* @__PURE__ */ g("div", {
									className: "text-sm font-medium truncate",
									children: c(e.pageLabel) || s("page.fallbackName", { number: e.pageNum })
								})
							})
						})
					}),
					i && /* @__PURE__ */ g("div", {
						className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none",
						children: /* @__PURE__ */ g("div", {
							className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg",
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
function jg({ open: t, onOpenChange: n, availableItems: r, onSelectItem: i, pageComponents: a, payload: o, setup: s = {
	width: 210,
	height: 297
}, gridColsClass: c = "page-order-grid-cols" }) {
	let l = gi(), { t: u, localize: d } = l, [f, p] = e.useState(""), m = e.useMemo(() => {
		if (!f.trim()) return r;
		let e = f.toLowerCase();
		return r.filter((t) => (d(t.label) || "").toLowerCase().includes(e) || t.id.toLowerCase().includes(e));
	}, [
		r,
		f,
		d
	]), v = (e) => {
		n(!1), i(e);
	}, y = I.resolveDimensions(s), b = y.width / y.height, x = Math.round(200 / b), S = {
		width: "200px",
		height: `${x}px`
	}, C = e.useMemo(() => a ? Ag({
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
	return /* @__PURE__ */ g(Sg, {
		open: t,
		onOpenChange: n,
		children: /* @__PURE__ */ _(Tg, {
			side: "bottom",
			className: "h-[90vh] w-full max-w-none flex flex-col gap-0 bg-gray-50 p-0",
			"data-uhuu-editor": !0,
			children: [/* @__PURE__ */ g(Eg, {
				className: "border-b border-gray-200 p-4 bg-white",
				children: /* @__PURE__ */ _("div", {
					className: "flex items-end gap-3",
					children: [
						/* @__PURE__ */ g("div", {
							className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5",
							children: /* @__PURE__ */ g(Ar, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ _("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ g(Og, {
								className: "text-base font-medium text-gray-900 leading-tight",
								children: u("addDialog.title")
							}), /* @__PURE__ */ g(kg, {
								className: "text-xs text-gray-400 mt-0.5",
								children: u("addDialog.description")
							})]
						}),
						/* @__PURE__ */ _("div", {
							className: "mb-0.5 mr-8 flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-400 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200",
							children: [
								/* @__PURE__ */ g(jr, { className: "w-3.5 h-3.5 shrink-0" }),
								/* @__PURE__ */ g("label", {
									className: "sr-only",
									htmlFor: "uhuu-add-page-filter",
									children: u("addDialog.filterLabel")
								}),
								/* @__PURE__ */ g("input", {
									id: "uhuu-add-page-filter",
									type: "text",
									placeholder: u("addDialog.filterPlaceholder"),
									value: f,
									onChange: (e) => p(e.target.value),
									className: "w-24 border-0 bg-transparent text-sm text-gray-600 placeholder:text-gray-400 outline-none transition-all duration-150 focus:w-40"
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ g("div", {
				className: "min-h-0 flex-1 overflow-auto bg-gray-50 p-6",
				children: m.length === 0 ? /* @__PURE__ */ _("div", {
					className: "text-center py-16",
					children: [
						/* @__PURE__ */ g("div", {
							className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
							children: /* @__PURE__ */ g(Ar, { className: "w-8 h-8 text-gray-400" })
						}),
						/* @__PURE__ */ g("div", {
							className: "text-lg font-medium text-gray-900 mb-2",
							children: u("addDialog.emptyTitle")
						}),
						/* @__PURE__ */ g("p", {
							className: "text-gray-500 mb-4",
							children: f.trim() ? u("addDialog.emptyFiltered") : u("addDialog.emptyAdded")
						})
					]
				}) : /* @__PURE__ */ g("div", {
					className: c,
					children: m.map((e, t) => {
						let n = e.kind === "group", r = e.id, i = n ? d(e.label) || u("addDialog.groupFallbackName", { number: t + 1 }) : d(e.label) || u("addDialog.pageFallbackName", { id: e.id }), a = {
							payload: o,
							item: void 0,
							parent: void 0
						}, s = n ? w(e.pageComponentKeys, a).length : 1, c = !!C;
						return /* @__PURE__ */ _("div", {
							onClick: () => v(e),
							onKeyDown: (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), v(e));
							},
							role: "button",
							tabIndex: 0,
							"aria-label": u("addDialog.addItem", { name: i }),
							className: ["group relative block cursor-pointer border-0 bg-transparent p-0 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2", !c && "bg-white border-2 border-gray-200"].filter(Boolean).join(" "),
							style: S,
							children: [
								/* @__PURE__ */ g("div", {
									className: "w-full h-full relative",
									children: e.thumbnail ? /* @__PURE__ */ g("div", {
										className: "absolute inset-0 bg-gray-100 hover:bg-white",
										children: /* @__PURE__ */ g("img", {
											src: e.thumbnail,
											className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
											alt: i
										})
									}) : C ? /* @__PURE__ */ g("div", {
										className: "absolute inset-0 flex items-center pointer-events-none",
										children: C(T(e, t), t, !1)
									}) : /* @__PURE__ */ g(h, { children: n ? /* @__PURE__ */ _("div", {
										className: "flex h-full flex-col items-center justify-center p-4 text-center",
										children: [
											/* @__PURE__ */ g("div", {
												className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3",
												children: /* @__PURE__ */ g(Ar, { className: "w-8 h-8 text-blue-600" })
											}),
											/* @__PURE__ */ g("div", {
												className: "text-sm font-medium text-gray-700",
												children: i
											}),
											/* @__PURE__ */ g("div", {
												className: "text-xs text-gray-500 mt-1",
												children: u("page.count", { count: s })
											})
										]
									}) : /* @__PURE__ */ _("div", {
										className: "flex h-full flex-col items-center justify-center p-4 text-center",
										children: [
											/* @__PURE__ */ g("div", {
												className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3",
												children: /* @__PURE__ */ g(Ar, { className: "w-8 h-8 text-gray-400" })
											}),
											/* @__PURE__ */ g("div", {
												className: "text-sm font-medium text-gray-700",
												children: i
											}),
											/* @__PURE__ */ g("div", {
												className: "text-xs text-gray-500 mt-1",
												children: r
											})
										]
									}) })
								}),
								(!C || e?.thumbnail) && /* @__PURE__ */ _(h, { children: [n && /* @__PURE__ */ g("div", {
									className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none",
									children: u("thumbnail.groupBadge", { count: s })
								}), /* @__PURE__ */ g("div", {
									className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none",
									"data-item-id": r,
									children: /* @__PURE__ */ g("div", {
										className: "flex items-center justify-between gap-2 text-white",
										children: /* @__PURE__ */ g("div", {
											className: "flex-1 min-w-0",
											children: /* @__PURE__ */ g("div", {
												className: "text-sm font-medium truncate",
												children: i
											})
										})
									})
								})] }),
								/* @__PURE__ */ g("div", {
									className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10",
									children: /* @__PURE__ */ g(Ar, { className: "w-4 h-4 text-white" })
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
function Mg() {
	var e = [...arguments];
	return d(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var Ng = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Pg(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function Fg(e) {
	return "nodeType" in e;
}
function Ig(e) {
	return e ? Pg(e) ? e : Fg(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function Lg(e) {
	let { Document: t } = Ig(e);
	return e instanceof t;
}
function Rg(e) {
	return !Pg(e) && e instanceof Ig(e).HTMLElement;
}
function zg(e) {
	return e instanceof Ig(e).SVGElement;
}
function Bg(e) {
	return e ? Pg(e) ? e.document : Fg(e) ? Lg(e) ? e : Rg(e) || zg(e) ? e.ownerDocument : document : document : document;
}
var Vg = Ng ? u : l;
function Hg(e) {
	let t = p(e);
	return Vg(() => {
		t.current = e;
	}), s(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function Ug() {
	let e = p(null);
	return [s((t, n) => {
		e.current = setInterval(t, n);
	}, []), s(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function Wg(e, t) {
	t === void 0 && (t = [e]);
	let n = p(e);
	return Vg(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function Gg(e, t) {
	let n = p();
	return d(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function Kg(e) {
	let t = Hg(e), n = p(null);
	return [n, s((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function qg(e) {
	let t = p();
	return l(() => {
		t.current = e;
	}, [e]), t.current;
}
var Jg = {};
function Yg(e, t) {
	return d(() => {
		if (t) return t;
		let n = Jg[e] == null ? 0 : Jg[e] + 1;
		return Jg[e] = n, e + "-" + n;
	}, [e, t]);
}
function Xg(e) {
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
var Zg = /*#__PURE__*/ Xg(1), Qg = /*#__PURE__*/ Xg(-1);
function $g(e) {
	return "clientX" in e && "clientY" in e;
}
function e_(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = Ig(e.target);
	return t && e instanceof t;
}
function t_(e) {
	if (!e) return !1;
	let { TouchEvent: t } = Ig(e.target);
	return t && e instanceof t;
}
function n_(e) {
	if (t_(e)) {
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
	return $g(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var r_ = /*#__PURE__*/ Object.freeze({
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
		if (e) return [r_.Translate.toString(e), r_.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), i_ = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function a_(e) {
	return e.matches(i_) ? e : e.querySelector(i_);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.3.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var o_ = { display: "none" };
function s_(e) {
	let { id: n, value: r } = e;
	return t.createElement("div", {
		id: n,
		style: o_
	}, r);
}
function c_(e) {
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
function l_() {
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
var u_ = /*#__PURE__*/ r(null);
function d_(e) {
	let t = c(u_);
	l(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function f_() {
	let [e] = m(() => /* @__PURE__ */ new Set()), t = s((t) => (e.add(t), () => e.delete(t)), [e]);
	return [s((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var p_ = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, m_ = {
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
function h_(e) {
	let { announcements: n = m_, container: r, hiddenTextDescribedById: i, screenReaderInstructions: a = p_ } = e, { announce: o, announcement: s } = l_(), c = Yg("DndLiveRegion"), [u, f] = m(!1);
	if (l(() => {
		f(!0);
	}, []), d_(d(() => ({
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
	let p = t.createElement(t.Fragment, null, t.createElement(s_, {
		id: i,
		value: a.draggable
	}), t.createElement(c_, {
		id: c,
		announcement: s
	}));
	return r ? y(p, r) : p;
}
var g_;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(g_ ||= {});
function __() {}
function v_(e, t) {
	return d(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function y_() {
	var e = [...arguments];
	return d(() => [...e].filter((e) => e != null), [...e]);
}
var b_ = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function x_(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function S_(e, t) {
	let n = n_(e);
	if (!n) return "0 0";
	let r = {
		x: (n.x - t.left) / t.width * 100,
		y: (n.y - t.top) / t.height * 100
	};
	return r.x + "% " + r.y + "%";
}
function C_(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function w_(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function T_(e) {
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
function E_(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function D_(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var O_ = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = D_(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = x_(D_(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(C_);
}, k_ = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = T_(t), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = T_(r), o = i.reduce((e, t, r) => e + x_(n[r], t), 0), s = Number((o / 4).toFixed(4));
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: s
				}
			});
		}
	}
	return a.sort(C_);
};
function A_(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var j_ = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = A_(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(w_);
};
function M_(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function N_(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : b_;
}
function P_(e) {
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
var F_ = /*#__PURE__*/ P_(1);
function I_(e) {
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
function L_(e, t, n) {
	let r = I_(t);
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
var R_ = { ignoreTransform: !1 };
function z_(e, t) {
	t === void 0 && (t = R_);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = Ig(e).getComputedStyle(e);
		t && (n = L_(n, t, r));
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
function B_(e) {
	return z_(e, { ignoreTransform: !0 });
}
function V_(e) {
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
function H_(e, t) {
	return t === void 0 && (t = Ig(e).getComputedStyle(e)), t.position === "fixed";
}
function U_(e, t) {
	t === void 0 && (t = Ig(e).getComputedStyle(e));
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
function W_(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (Lg(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!Rg(i) || zg(i) || n.includes(i)) return n;
		let a = Ig(e).getComputedStyle(i);
		return i !== e && U_(i, a) && n.push(i), H_(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function G_(e) {
	let [t] = W_(e, 1);
	return t ?? null;
}
function K_(e) {
	return !Ng || !e ? null : Pg(e) ? e : Fg(e) ? Lg(e) || e === Bg(e).scrollingElement ? window : Rg(e) ? e : null : null;
}
function q_(e) {
	return Pg(e) ? e.scrollX : e.scrollLeft;
}
function J_(e) {
	return Pg(e) ? e.scrollY : e.scrollTop;
}
function Y_(e) {
	return {
		x: q_(e),
		y: J_(e)
	};
}
var X_;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(X_ ||= {});
function Z_(e) {
	return !Ng || !e ? !1 : e === document.scrollingElement;
}
function Q_(e) {
	let t = {
		x: 0,
		y: 0
	}, n = Z_(e) ? {
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
var $_ = {
	x: .2,
	y: .2
};
function ev(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = $_);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = Q_(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = X_.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = X_.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = X_.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = X_.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function tv(e) {
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
function nv(e) {
	return e.reduce((e, t) => Zg(e, Y_(t)), b_);
}
function rv(e) {
	return e.reduce((e, t) => e + q_(t), 0);
}
function iv(e) {
	return e.reduce((e, t) => e + J_(t), 0);
}
function av(e, t) {
	if (t === void 0 && (t = z_), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	G_(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var ov = [[
	"x",
	["left", "right"],
	rv
], [
	"y",
	["top", "bottom"],
	iv
]], sv = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = W_(t), r = nv(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of ov) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, cv = class {
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
function lv(e) {
	let { EventTarget: t } = Ig(e);
	return e instanceof t ? e : Bg(e);
}
function uv(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var dv;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(dv ||= {});
function fv(e) {
	e.preventDefault();
}
function pv(e) {
	e.stopPropagation();
}
var Q;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Q ||= {});
var mv = {
	start: [Q.Space, Q.Enter],
	cancel: [Q.Esc],
	end: [
		Q.Space,
		Q.Enter,
		Q.Tab
	]
}, hv = (e, t) => {
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
}, gv = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new cv(Bg(t)), this.windowListeners = new cv(Ig(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(dv.Resize, this.handleCancel), this.windowListeners.add(dv.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(dv.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && av(n), t(b_);
	}
	handleKeyDown(e) {
		if (e_(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = mv, coordinateGetter: a = hv, scrollBehavior: o = "smooth" } = r, { code: s } = e;
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
			} : b_;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = Qg(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = Q_(n), p = tv(n), m = {
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
				this.handleMove(e, Zg(Qg(u, this.referenceCoordinates), r));
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
gv.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = mv, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function _v(e) {
	return !!(e && "distance" in e);
}
function vv(e) {
	return !!(e && "delay" in e);
}
var yv = class {
	constructor(e, t, n) {
		n === void 0 && (n = lv(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = Bg(i), this.documentListeners = new cv(this.document), this.listeners = new cv(n), this.windowListeners = new cv(Ig(i)), this.initialCoordinates = n_(r) ?? b_, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(dv.Resize, this.handleCancel), this.windowListeners.add(dv.DragStart, fv), this.windowListeners.add(dv.VisibilityChange, this.handleCancel), this.windowListeners.add(dv.ContextMenu, fv), this.documentListeners.add(dv.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (vv(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (_v(t)) {
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
		e && (this.activated = !0, this.documentListeners.add(dv.Click, pv, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(dv.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = n_(e) ?? b_, s = Qg(n, o);
		if (!t && a) {
			if (_v(a)) {
				if (a.tolerance != null && uv(s, a.tolerance)) return this.handleCancel();
				if (uv(s, a.distance)) return this.handleStart();
			}
			if (vv(a) && uv(s, a.tolerance)) return this.handleCancel();
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
}, bv = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, xv = class extends yv {
	constructor(e) {
		let { event: t } = e, n = Bg(t.target);
		super(e, bv, n);
	}
};
xv.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var Sv = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, Cv;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(Cv ||= {});
var wv = class extends yv {
	constructor(e) {
		super(e, Sv, Bg(e.event.target));
	}
};
wv.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== Cv.RightClick && (r?.({ event: n }), !0);
	}
}];
var Tv = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, Ev = class extends yv {
	constructor(e) {
		super(e, Tv);
	}
	static setup() {
		return window.addEventListener(Tv.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(Tv.move.name, e);
		};
		function e() {}
	}
};
Ev.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var Dv;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Dv ||= {});
var Ov;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ov ||= {});
function kv(e) {
	let { acceleration: t, activator: n = Dv.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: c = Ov.TreeOrder, pointerCoordinates: u, scrollableAncestors: f, scrollableAncestorRects: m, delta: h, threshold: g } = e, _ = jv({
		delta: h,
		disabled: !a
	}), [v, y] = Ug(), b = p({
		x: 0,
		y: 0
	}), x = p({
		x: 0,
		y: 0
	}), S = d(() => {
		switch (n) {
			case Dv.Pointer: return u ? {
				top: u.y,
				bottom: u.y,
				left: u.x,
				right: u.x
			} : null;
			case Dv.DraggableRect: return i;
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
	}, []), T = d(() => c === Ov.TreeOrder ? [...f].reverse() : f, [c, f]);
	l(() => {
		if (!a || !f.length || !S) y();
		else {
			for (let e of T) {
				if (r?.(e) === !1) continue;
				let n = f.indexOf(e), i = m[n];
				if (!i) continue;
				let { direction: a, speed: s } = ev(e, i, S, t, g);
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
var Av = {
	x: {
		[X_.Backward]: !1,
		[X_.Forward]: !1
	},
	y: {
		[X_.Backward]: !1,
		[X_.Forward]: !1
	}
};
function jv(e) {
	let { delta: t, disabled: n } = e, r = qg(t);
	return Gg((e) => {
		if (n || !r || !e) return Av;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[X_.Backward]: e.x[X_.Backward] || i.x === -1,
				[X_.Forward]: e.x[X_.Forward] || i.x === 1
			},
			y: {
				[X_.Backward]: e.y[X_.Backward] || i.y === -1,
				[X_.Forward]: e.y[X_.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function Mv(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return Gg((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function Nv(e, t) {
	return d(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var Pv;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Pv ||= {});
var Fv;
(function(e) {
	e.Optimized = "optimized";
})(Fv ||= {});
var Iv = /*#__PURE__*/ new Map();
function Lv(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = m(null), { frequency: c, measure: u, strategy: d } = i, f = p(e), h = b(), g = Wg(h), _ = s(function(e) {
		e === void 0 && (e = []), !g.current && o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [g]), v = p(null), y = Gg((t) => {
		if (h && !n) return Iv;
		if (!t || t === Iv || f.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new sv(u(e), e) : null;
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
			case Pv.Always: return !1;
			case Pv.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function Rv(e, t) {
	return Gg((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function zv(e, t) {
	return Rv(e, t);
}
function Bv(e) {
	let { callback: t, disabled: n } = e, r = Hg(t), i = d(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function Vv(e) {
	let { callback: t, disabled: n } = e, r = Hg(t), i = d(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function Hv(e) {
	return new sv(z_(e), e);
}
function Uv(e, t, n) {
	t === void 0 && (t = Hv);
	let [r, i] = m(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = Bv({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = Vv({ callback: a });
	return Vg(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function Wv(e) {
	return N_(e, Rv(e));
}
var Gv = [];
function Kv(e) {
	let t = p(e), n = Gg((n) => e ? n && n !== Gv && e && t.current && e.parentNode === t.current.parentNode ? n : W_(e) : Gv, [e]);
	return l(() => {
		t.current = e;
	}, [e]), n;
}
function qv(e) {
	let [t, n] = m(null), r = p(e), i = s((e) => {
		let t = K_(e.target);
		t && n((e) => e ? (e.set(t, Y_(t)), new Map(e)) : null);
	}, []);
	return l(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = K_(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, Y_(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				K_(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), d(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => Zg(e, t), b_) : nv(e) : b_, [e, t]);
}
function Jv(e, t) {
	t === void 0 && (t = []);
	let n = p(null);
	return l(() => {
		n.current = null;
	}, t), l(() => {
		let t = e !== b_;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? Qg(e, n.current) : b_;
}
function Yv(e) {
	l(() => {
		if (!Ng) return;
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
function Xv(e, t) {
	return d(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function Zv(e) {
	return d(() => e ? V_(e) : null, [e]);
}
var Qv = [];
function $v(e, t) {
	t === void 0 && (t = z_);
	let [n] = e, r = Zv(n ? Ig(n) : null), [i, a] = m(Qv);
	function o() {
		a(() => e.length ? e.map((e) => Z_(e) ? r : new sv(t(e), e)) : Qv);
	}
	let s = Vv({ callback: o });
	return Vg(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function ey(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return Rg(t) ? t : e;
}
function ty(e) {
	let { measure: t } = e, [n, r] = m(null), i = Vv({ callback: s((e) => {
		for (let { target: n } of e) if (Rg(n)) {
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
	}, [t]) }), [a, o] = Kg(s((e) => {
		let n = ey(e);
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
var ny = [{
	sensor: xv,
	options: {}
}, {
	sensor: gv,
	options: {}
}], ry = { current: {} }, iy = {
	draggable: { measure: B_ },
	droppable: {
		measure: B_,
		strategy: Pv.WhileDragging,
		frequency: Fv.Optimized
	},
	dragOverlay: { measure: z_ }
}, ay = class extends Map {
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
}, oy = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new ay(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: __
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: iy,
	measureDroppableContainers: __,
	windowRect: null,
	measuringScheduled: !1
}, sy = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: __,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: __
}, cy = /*#__PURE__*/ r(sy), ly = /*#__PURE__*/ r(oy);
function uy() {
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
		droppable: { containers: new ay() }
	};
}
function dy(e, t) {
	switch (t.type) {
		case g_.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case g_.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case g_.DragEnd:
		case g_.DragCancel: return {
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
		case g_.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new ay(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case g_.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new ay(e.droppable.containers);
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
		case g_.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new ay(e.droppable.containers);
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
function fy(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = c(cy), a = qg(r), o = qg(n?.id);
	return l(() => {
		if (!t && !r && a && o != null) {
			if (!e_(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = a_(e);
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
function py(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function my(e) {
	return d(() => ({
		draggable: {
			...iy.draggable,
			...e?.draggable
		},
		droppable: {
			...iy.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...iy.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function hy(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = p(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	Vg(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = N_(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = G_(e);
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
var gy = /*#__PURE__*/ r({
	...b_,
	scaleX: 1,
	scaleY: 1
}), _y;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(_y ||= {});
var vy = /*#__PURE__*/ o(function(e) {
	let { id: n, accessibility: r, autoScroll: i = !0, children: a, sensors: o = ny, collisionDetection: c = j_, measuring: u, modifiers: h, ...g } = e, [_, v] = f(dy, void 0, uy), [y, b] = f_(), [S, C] = m(_y.Uninitialized), w = S === _y.Initialized, { draggable: { active: T, nodes: E, translate: D }, droppable: { containers: O } } = _, k = T == null ? null : E.get(T), A = p({
		initial: null,
		translated: null
	}), j = d(() => T == null ? null : {
		id: T,
		data: k?.data ?? ry,
		rect: A
	}, [T, k]), M = p(null), [N, P] = m(null), [F, I] = m(null), L = Wg(g, Object.values(g)), ee = Yg("DndDescribedBy", n), te = d(() => O.getEnabled(), [O]), ne = my(u), { droppableRects: R, measureDroppableContainers: z, measuringScheduled: re } = Lv(te, {
		dragging: w,
		dependencies: [D.x, D.y],
		config: ne.droppable
	}), ie = Mv(E, T), B = d(() => F ? n_(F) : null, [F]), ae = Fe(), oe = zv(ie, ne.draggable.measure);
	hy({
		activeNode: T == null ? null : E.get(T),
		config: ae.layoutShiftCompensation,
		initialRect: oe,
		measure: ne.draggable.measure
	});
	let V = Uv(ie, ne.draggable.measure, oe), se = Uv(ie ? ie.parentElement : null), ce = p({
		activatorEvent: null,
		active: null,
		activeNode: ie,
		collisionRect: null,
		collisions: null,
		droppableRects: R,
		draggableNodes: E,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers: O,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	}), le = O.getNodeFor(ce.current.over?.id), ue = ty({ measure: ne.dragOverlay.measure }), de = ue.nodeRef.current ?? ie, fe = w ? ue.rect ?? V : null, pe = !!(ue.nodeRef.current && ue.rect), me = Wv(pe ? null : V), he = Zv(de ? Ig(de) : null), ge = Kv(w ? le ?? ie : null), _e = $v(ge), ve = py(h, {
		transform: {
			x: D.x - me.x,
			y: D.y - me.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent: F,
		active: j,
		activeNodeRect: V,
		containerNodeRect: se,
		draggingNodeRect: fe,
		over: ce.current.over,
		overlayNodeRect: ue.rect,
		scrollableAncestors: ge,
		scrollableAncestorRects: _e,
		windowRect: he
	}), ye = B ? Zg(B, D) : null, be = qv(ge), xe = Jv(be), Se = Jv(be, [V]), Ce = Zg(ve, xe), we = fe ? F_(fe, ve) : null, Te = j && we ? c({
		active: j,
		collisionRect: we,
		droppableRects: R,
		droppableContainers: te,
		pointerCoordinates: ye
	}) : null, Ee = E_(Te, "id"), [De, Oe] = m(null), ke = M_(pe ? ve : Zg(ve, Se), De?.rect ?? null, V), Ae = p(null), je = s((e, t) => {
		let { sensor: n, options: r } = t;
		if (M.current == null) return;
		let i = E.get(M.current);
		if (!i) return;
		let a = e.nativeEvent, o = new n({
			active: M.current,
			activeNode: i,
			event: a,
			options: r,
			context: ce,
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
				x(() => {
					r?.(i), C(_y.Initializing), v({
						type: g_.DragStart,
						initialCoordinates: e,
						active: t
					}), y({
						type: "onDragStart",
						event: i
					}), P(Ae.current), I(a);
				});
			},
			onMove(e) {
				v({
					type: g_.DragMove,
					coordinates: e
				});
			},
			onEnd: s(g_.DragEnd),
			onCancel: s(g_.DragCancel)
		});
		Ae.current = o;
		function s(e) {
			return async function() {
				let { active: t, collisions: n, over: r, scrollAdjustedTranslate: i } = ce.current, o = null;
				if (t && i) {
					let { cancelDrop: s } = L.current;
					o = {
						activatorEvent: a,
						active: t,
						collisions: n,
						delta: i,
						over: r
					}, e === g_.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = g_.DragCancel);
				}
				M.current = null, x(() => {
					v({ type: e }), C(_y.Uninitialized), Oe(null), P(null), I(null), Ae.current = null;
					let t = e === g_.DragEnd ? "onDragEnd" : "onDragCancel";
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
	}, [E]), Me = Nv(o, s((e, t) => (n, r) => {
		let i = n.nativeEvent, a = E.get(r);
		if (M.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, M.current = r, je(n, t));
	}, [E, je]));
	Yv(o), Vg(() => {
		V && S === _y.Initializing && C(_y.Initialized);
	}, [V, S]), l(() => {
		let { onDragMove: e } = L.current, { active: t, activatorEvent: n, collisions: r, over: i } = ce.current;
		if (!t || !n) return;
		let a = {
			active: t,
			activatorEvent: n,
			collisions: r,
			delta: {
				x: Ce.x,
				y: Ce.y
			},
			over: i
		};
		x(() => {
			e?.(a), y({
				type: "onDragMove",
				event: a
			});
		});
	}, [Ce.x, Ce.y]), l(() => {
		let { active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: i } = ce.current;
		if (!e || M.current == null || !t || !i) return;
		let { onDragOver: a } = L.current, o = r.get(Ee), s = o && o.rect.current ? {
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
		x(() => {
			Oe(s), a?.(c), y({
				type: "onDragOver",
				event: c
			});
		});
	}, [Ee]), Vg(() => {
		ce.current = {
			activatorEvent: F,
			active: j,
			activeNode: ie,
			collisionRect: we,
			collisions: Te,
			droppableRects: R,
			draggableNodes: E,
			draggingNode: de,
			draggingNodeRect: fe,
			droppableContainers: O,
			over: De,
			scrollableAncestors: ge,
			scrollAdjustedTranslate: Ce
		}, A.current = {
			initial: fe,
			translated: we
		};
	}, [
		j,
		ie,
		Te,
		we,
		E,
		de,
		fe,
		R,
		O,
		De,
		ge,
		Ce
	]), kv({
		...ae,
		delta: D,
		draggingRect: we,
		pointerCoordinates: ye,
		scrollableAncestors: ge,
		scrollableAncestorRects: _e
	});
	let Ne = d(() => ({
		active: j,
		activeNode: ie,
		activeNodeRect: V,
		activatorEvent: F,
		collisions: Te,
		containerNodeRect: se,
		dragOverlay: ue,
		draggableNodes: E,
		droppableContainers: O,
		droppableRects: R,
		over: De,
		measureDroppableContainers: z,
		scrollableAncestors: ge,
		scrollableAncestorRects: _e,
		measuringConfiguration: ne,
		measuringScheduled: re,
		windowRect: he
	}), [
		j,
		ie,
		V,
		F,
		Te,
		se,
		ue,
		E,
		O,
		R,
		De,
		z,
		ge,
		_e,
		ne,
		re,
		he
	]), Pe = d(() => ({
		activatorEvent: F,
		activators: Me,
		active: j,
		activeNodeRect: V,
		ariaDescribedById: { draggable: ee },
		dispatch: v,
		draggableNodes: E,
		over: De,
		measureDroppableContainers: z
	}), [
		F,
		Me,
		j,
		V,
		v,
		ee,
		E,
		De,
		z
	]);
	return t.createElement(u_.Provider, { value: b }, t.createElement(cy.Provider, { value: Pe }, t.createElement(ly.Provider, { value: Ne }, t.createElement(gy.Provider, { value: ke }, a)), t.createElement(fy, { disabled: r?.restoreFocus === !1 })), t.createElement(h_, {
		...r,
		hiddenTextDescribedById: ee
	}));
	function Fe() {
		let e = N?.autoScrollEnabled === !1, t = typeof i == "object" ? i.enabled === !1 : i === !1, n = w && !e && !t;
		return typeof i == "object" ? {
			...i,
			enabled: n
		} : { enabled: n };
	}
}), yy = /*#__PURE__*/ r(null), by = "button", xy = "Draggable";
function Sy(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = Yg(xy), { activators: o, activatorEvent: s, active: l, activeNodeRect: u, ariaDescribedById: f, draggableNodes: p, over: m } = c(cy), { role: h = by, roleDescription: g = "draggable", tabIndex: _ = 0 } = i ?? {}, v = l?.id === t, y = c(v ? gy : yy), [b, x] = Kg(), [S, C] = Kg(), w = Xv(o, t), T = Wg(n);
	return Vg(() => (p.set(t, {
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
			"aria-pressed": v && h === by ? !0 : void 0,
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
function Cy() {
	return c(ly);
}
var wy = "Droppable", Ty = { timeout: 25 };
function Ey(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = Yg(wy), { active: o, dispatch: u, over: d, measureDroppableContainers: f } = c(cy), m = p({ disabled: n }), h = p(!1), g = p(null), _ = p(null), { disabled: v, updateMeasurementsFor: y, timeout: b } = {
		...Ty,
		...i
	}, x = Wg(y ?? r), S = Vv({
		callback: s(() => {
			h.current ? (_.current != null && clearTimeout(_.current), _.current = setTimeout(() => {
				f(Array.isArray(x.current) ? x.current : [x.current]), _.current = null;
			}, b)) : h.current = !0;
		}, [b]),
		disabled: v || !o
	}), [C, w] = Kg(s((e, t) => {
		S && (t && (S.unobserve(t), h.current = !1), e && S.observe(e));
	}, [S])), T = Wg(t);
	return l(() => {
		S && C.current && (S.disconnect(), h.current = !1, S.observe(C.current));
	}, [C, S]), l(() => (u({
		type: g_.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: C,
			rect: g,
			data: T
		}
	}), () => u({
		type: g_.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), l(() => {
		n !== m.current.disabled && (u({
			type: g_.SetDroppableDisabled,
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
function Dy(e) {
	let { animation: r, children: i } = e, [a, o] = m(null), [s, c] = m(null), l = qg(i);
	return !i && !a && l && o(l), Vg(() => {
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
var Oy = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function ky(e) {
	let { children: n } = e;
	return t.createElement(cy.Provider, { value: sy }, t.createElement(gy.Provider, { value: Oy }, n));
}
var Ay = {
	position: "fixed",
	touchAction: "none"
}, jy = (e) => e_(e) ? "transform 250ms ease" : void 0, My = /*#__PURE__*/ a((e, n) => {
	let { as: r, activatorEvent: i, adjustScale: a, children: o, className: s, rect: c, style: l, transform: u, transition: d = jy } = e;
	if (!c) return null;
	let f = a ? u : {
		...u,
		scaleX: 1,
		scaleY: 1
	}, p = {
		...Ay,
		width: c.width,
		height: c.height,
		top: c.top,
		left: c.left,
		transform: r_.Transform.toString(f),
		transformOrigin: a && i ? S_(i, c) : void 0,
		transition: typeof d == "function" ? d(i) : d,
		...l
	};
	return t.createElement(r, {
		className: s,
		style: p,
		ref: n
	}, o);
}), Ny = {
	duration: 250,
	easing: "ease",
	keyframes: (e) => {
		let { transform: { initial: t, final: n } } = e;
		return [{ transform: r_.Transform.toString(t) }, { transform: r_.Transform.toString(n) }];
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
function Py(e) {
	let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: i } = e;
	return Hg((e, a) => {
		if (t === null) return;
		let o = n.get(e);
		if (!o) return;
		let s = o.node.current;
		if (!s) return;
		let c = ey(a);
		if (!c) return;
		let { transform: l } = Ig(a).getComputedStyle(a), u = I_(l);
		if (!u) return;
		let d = typeof t == "function" ? t : Fy(t);
		return av(s, i.draggable.measure), d({
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
function Fy(e) {
	let { duration: t, easing: n, sideEffects: r, keyframes: i } = {
		...Ny,
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
var Iy = 0;
function Ly(e) {
	return d(() => {
		if (e != null) return Iy++, Iy;
	}, [e]);
}
var Ry = /*#__PURE__*/ t.memo((e) => {
	let { adjustScale: n = !1, children: r, dropAnimation: i, style: a, transition: o, modifiers: s, wrapperElement: l = "div", className: u, zIndex: d = 999 } = e, { activatorEvent: f, active: p, activeNodeRect: m, containerNodeRect: h, draggableNodes: g, droppableContainers: _, dragOverlay: v, over: y, measuringConfiguration: b, scrollableAncestors: x, scrollableAncestorRects: S, windowRect: C } = Cy(), w = c(gy), T = Ly(p?.id), E = py(s, {
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
	}), D = Rv(m), O = Py({
		config: i,
		draggableNodes: g,
		droppableContainers: _,
		measuringConfiguration: b
	}), k = D ? v.setRef : void 0;
	return t.createElement(ky, null, t.createElement(Dy, { animation: O }, p && T ? t.createElement(My, {
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
function zy(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function By(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function Vy(e) {
	return e !== null && e >= 0;
}
function Hy(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Uy(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var Wy = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = zy(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, Gy = "Sortable", Ky = /*#__PURE__*/ t.createContext({
	activeIndex: -1,
	containerId: Gy,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: Wy,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function qy(e) {
	let { children: n, id: r, items: i, strategy: a = Wy, disabled: o = !1 } = e, { active: s, dragOverlay: c, droppableRects: u, over: f, measureDroppableContainers: m } = Cy(), h = Yg(Gy, r), g = c.rect !== null, _ = d(() => i.map((e) => typeof e == "object" && "id" in e ? e.id : e), [i]), v = s != null, y = s ? _.indexOf(s.id) : -1, b = f ? _.indexOf(f.id) : -1, x = p(_), S = !Hy(_, x.current), C = b !== -1 && y === -1 || S, w = Uy(o);
	Vg(() => {
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
		sortedRects: By(_, u),
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
	return t.createElement(Ky.Provider, { value: T }, n);
}
var Jy = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return zy(n, r, i).indexOf(t);
}, Yy = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, Xy = {
	duration: 200,
	easing: "ease"
}, Zy = "transform", Qy = /*#__PURE__*/ r_.Transition.toString({
	property: Zy,
	duration: 0,
	easing: "linear"
}), $y = { roleDescription: "sortable" };
function eb(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = m(null), s = p(n);
	return Vg(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = z_(r.current, { ignoreTransform: !0 }), n = {
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
function tb(e) {
	let { animateLayoutChanges: t = Yy, attributes: n, disabled: r, data: i, getNewIndex: a = Jy, id: o, strategy: s, resizeObserverConfig: u, transition: f = Xy } = e, { items: m, containerId: h, activeIndex: g, disabled: _, disableTransforms: v, sortedRects: y, overIndex: b, useDragOverlay: x, strategy: S } = c(Ky), C = nb(r, _), w = m.indexOf(o), T = d(() => ({
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
	]), E = d(() => m.slice(m.indexOf(o)), [m, o]), { rect: D, node: O, isOver: k, setNodeRef: A } = Ey({
		id: o,
		data: T,
		disabled: C.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: E,
			...u
		}
	}), { active: j, activatorEvent: M, activeNodeRect: N, attributes: P, setNodeRef: F, listeners: I, isDragging: L, over: ee, setActivatorNodeRef: te, transform: ne } = Sy({
		id: o,
		data: T,
		attributes: {
			...$y,
			...n
		},
		disabled: C.draggable
	}), R = Mg(A, F), z = !!j, re = z && !v && Vy(g) && Vy(b), ie = !x && L, B = re ? (ie && re ? ne : null) ?? (s ?? S)({
		rects: y,
		activeNodeRect: N,
		activeIndex: g,
		overIndex: b,
		index: w
	}) : null, ae = Vy(g) && Vy(b) ? a({
		id: o,
		items: m,
		activeIndex: g,
		overIndex: b
	}) : w, oe = j?.id, V = p({
		activeId: oe,
		items: m,
		newIndex: ae,
		containerId: h
	}), se = m !== V.current.items, ce = t({
		active: j,
		containerId: h,
		isDragging: L,
		isSorting: z,
		id: o,
		index: w,
		items: m,
		newIndex: V.current.newIndex,
		previousItems: V.current.items,
		previousContainerId: V.current.containerId,
		transition: f,
		wasDragging: V.current.activeId != null
	}), le = eb({
		disabled: !ce,
		index: w,
		node: O,
		rect: D
	});
	return l(() => {
		z && V.current.newIndex !== ae && (V.current.newIndex = ae), h !== V.current.containerId && (V.current.containerId = h), m !== V.current.items && (V.current.items = m);
	}, [
		z,
		ae,
		h,
		m
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
		items: m,
		isOver: k,
		isSorting: z,
		isDragging: L,
		listeners: I,
		node: O,
		overIndex: b,
		over: ee,
		setNodeRef: R,
		setActivatorNodeRef: te,
		setDroppableNodeRef: A,
		setDraggableNodeRef: F,
		transform: le ?? B,
		transition: ue()
	};
	function ue() {
		if (le || se && V.current.newIndex === w) return Qy;
		if (!(ie && !e_(M) || !f) && (z || ce)) return r_.Transition.toString({
			...f,
			property: Zy
		});
	}
}
function nb(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
function rb(e) {
	if (!e) return !1;
	let t = e.data.current;
	return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
var ib = [
	Q.Down,
	Q.Right,
	Q.Up,
	Q.Left
], ab = (e, t) => {
	let { context: { active: n, collisionRect: r, droppableRects: i, droppableContainers: a, over: o, scrollableAncestors: s } } = t;
	if (ib.includes(e.code)) {
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
		let c = k_({
			active: n,
			collisionRect: r,
			droppableRects: i,
			droppableContainers: t,
			pointerCoordinates: null
		}), l = E_(c, "id");
		if (l === o?.id && c.length > 1 && (l = c[1].id), l != null) {
			let e = a.get(n.id), t = a.get(l), o = t ? i.get(t.id) : null, c = t?.node.current;
			if (c && o && e && t) {
				let n = W_(c).some((e, t) => s[t] !== e), i = ob(e, t), a = sb(e, t), l = n || !i ? {
					x: 0,
					y: 0
				} : {
					x: a ? r.width - o.width : 0,
					y: a ? r.height - o.height : 0
				}, u = {
					x: o.left,
					y: o.top
				};
				return l.x && l.y ? u : Qg(u, l);
			}
		}
	}
};
function ob(e, t) {
	return !rb(e) || !rb(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function sb(e, t) {
	return !rb(e) || !rb(t) || !ob(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
//#endregion
//#region src/uhuu/utility/drag-drop-grid.tsx
function cb({ item: e, index: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, disabled: a = !1 }) {
	let { attributes: o, listeners: s, setNodeRef: c, transform: l, transition: u, isDragging: d } = tb({
		id: i(e),
		disabled: a
	}), f = {
		transform: r_.Transform.toString(l),
		transition: u
	};
	return /* @__PURE__ */ _("div", {
		ref: c,
		style: f,
		className: `relative group/drag-item ${d ? "opacity-50" : ""} ${a ? "opacity-60" : ""}`,
		children: [n(e, t, d), !a && (r ? /* @__PURE__ */ g("div", {
			...o,
			...s,
			children: r(e, t)
		}) : /* @__PURE__ */ g("div", {
			...o,
			...s,
			className: "absolute inset-0 cursor-grab active:cursor-grabbing outline-none touch-none"
		}))]
	});
}
function lb({ item: e, index: t, renderItem: n }) {
	return /* @__PURE__ */ g("div", {
		className: "rotate-2",
		children: n(e, t, !0)
	});
}
function ub({ items: e, onChange: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, gridColsClass: a = "page-drag-drop-grid-cols", className: o = "", renderToolbar: s, renderEmptyState: c, showDebugInfo: u = !1, renderDragOverlay: d, isItemDisabled: f, canDropAt: p }) {
	let [h, v] = m(e);
	l(() => {
		v(e);
	}, [e]);
	let [y, b] = m(null), x = y_(v_(xv), v_(gv, { coordinateGetter: ab })), S = (e) => {
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
				let e = zy(h, o, s);
				v(e), t(e);
			}
			b(null);
		}
	}, w = h.find((e) => i(e) === y), T = w ? h.findIndex((e) => i(e) === y) : -1;
	return /* @__PURE__ */ _("div", {
		className: `w-full ${o}`,
		children: [
			s && /* @__PURE__ */ g("div", {
				className: "mb-6",
				children: s()
			}),
			h.length === 0 && c ? c() : /* @__PURE__ */ g("div", {
				className: "mb-6",
				children: /* @__PURE__ */ _(vy, {
					sensors: x,
					collisionDetection: O_,
					onDragStart: S,
					onDragEnd: C,
					children: [/* @__PURE__ */ g(qy, {
						items: h.map(i),
						strategy: Wy,
						children: /* @__PURE__ */ g("div", {
							className: a,
							children: h.map((e, t) => /* @__PURE__ */ g(cb, {
								item: e,
								index: t,
								renderItem: n,
								renderDragIndicator: r,
								keyExtractor: i,
								disabled: f ? f(e) : !1
							}, i(e)))
						})
					}), /* @__PURE__ */ g(Ry, { children: w ? d ? /* @__PURE__ */ g("div", {
						className: "rotate-2 shadow-lg",
						children: d(w, T)
					}) : /* @__PURE__ */ g(lb, {
						item: w,
						index: T,
						renderItem: n
					}) : null })]
				})
			}),
			u && /* @__PURE__ */ _("div", {
				className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs",
				children: [
					/* @__PURE__ */ g("div", {
						className: "font-medium mb-1",
						children: "Debug Info"
					}),
					/* @__PURE__ */ _("div", {
						className: "text-gray-600 text-xs",
						children: [
							"Items: ",
							h.length,
							" | Active: ",
							y || "none"
						]
					}),
					/* @__PURE__ */ _("div", {
						className: "text-xs text-gray-500 mt-1 break-all",
						children: ["Order: ", h.map((e, t) => `${t + 1}:${i(e).slice(0, 3)}`).join(" → ")]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/uhuu/ui/badge.tsx
var db = Ti("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-gray-900 text-white",
		secondary: "border-transparent bg-gray-100 text-gray-900",
		outline: "border-gray-300 text-gray-900 bg-white"
	} },
	defaultVariants: { variant: "default" }
});
function fb({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ g("div", {
		className: G(db({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-order-dialog.tsx
function pb({ page: e, index: t, isDragging: n }) {
	let { t: r, localize: i } = gi(), a = e.strictPosition, o = a === "start" || a === "end";
	return /* @__PURE__ */ _("div", {
		className: `flex items-center justify-center border relative rounded-lg bg-white overflow-hidden transition-all ${n ? "opacity-50 border-gray-400 shadow-xl scale-105" : o ? "border-gray-300 bg-gray-50" : "border-gray-200 group-hover/drag-item:border-gray-300 group-hover/drag-item:shadow-md"}`,
		children: [/* @__PURE__ */ g("div", {
			className: "flex items-center justify-center",
			style: {
				width: "200px",
				height: "280px"
			},
			children: e.content || /* @__PURE__ */ _("div", {
				className: "text-center p-4",
				children: [/* @__PURE__ */ g("div", {
					className: "text-sm font-medium text-gray-700",
					children: i(e.label) || r("page.fallbackName", { number: t + 1 })
				}), /* @__PURE__ */ g("div", {
					className: "text-xs text-gray-400 mt-1 font-mono",
					children: e.id
				})]
			})
		}), /* @__PURE__ */ g("div", {
			className: "absolute top-2 left-2 z-20",
			children: /* @__PURE__ */ g(fb, {
				variant: "secondary",
				className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${o ? "opacity-75" : ""}`,
				children: o ? /* @__PURE__ */ g(Er, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g("span", {
					className: "group-hover/drag-item:hidden",
					children: t + 1
				}), /* @__PURE__ */ g(Tr, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })] })
			})
		})]
	});
}
function mb({ open: t, onOpenChange: n, pages: r, onReorder: i, onRemove: a, renderThumbnail: o, pageComponents: s, payload: c, setup: l, title: u, description: d, gridColsClass: f = "page-order-grid-cols" }) {
	let p = gi(), { t: m, localize: h } = p, v = h(u) ?? m("reorderDialog.title"), y = h(d) ?? m("reorderDialog.description"), [b, x] = e.useState(r), [S, C] = e.useState(!1), w = (e) => e.id;
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
		b
	]);
	let T = (e) => {
		x(e), C(!0);
	}, E = () => {
		i(b), C(!1), n(!1);
	}, D = () => {
		x(r), C(!1), n(!1);
	}, O = e.useMemo(() => (!o || typeof o != "function") && s ? Ag({
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
		}, c = o && typeof o == "function" ? o(e, t, n) : O ? O(e, t, n) : /* @__PURE__ */ g(pb, {
			page: e,
			index: t,
			isDragging: n
		});
		return /* @__PURE__ */ _("div", {
			className: "relative inline-block align-top",
			children: [c, i && /* @__PURE__ */ _("button", {
				type: "button",
				title: m("reorderDialog.remove"),
				onClick: s,
				onPointerDown: (e) => e.stopPropagation(),
				className: "group/remove-btn absolute -top-3 -right-3 z-30 hidden h-6 w-6 items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md group-hover/drag-item:flex border border-gray-200",
				children: [/* @__PURE__ */ g(Tr, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }), /* @__PURE__ */ g(Ar, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })]
			})]
		});
	}, A = () => /* @__PURE__ */ _("div", {
		className: "text-center py-20",
		children: [
			/* @__PURE__ */ g("div", {
				className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3",
				children: /* @__PURE__ */ g(gr, { className: "w-6 h-6 text-gray-400" })
			}),
			/* @__PURE__ */ g("div", {
				className: "text-base font-medium text-gray-900 mb-1",
				children: m("reorderDialog.emptyTitle")
			}),
			/* @__PURE__ */ g("p", {
				className: "text-sm text-gray-500",
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
	return /* @__PURE__ */ g(Sg, {
		open: t,
		onOpenChange: (e) => {
			e || D();
		},
		children: /* @__PURE__ */ _(Tg, {
			side: "bottom",
			className: "h-[90vh] p-0 gap-0 w-full max-w-none flex flex-col [&>button]:hidden",
			onPointerDownOutside: (e) => {
				e.preventDefault();
			},
			onEscapeKeyDown: (e) => {
				e.preventDefault();
			},
			"data-uhuu-editor": !0,
			children: [
				/* @__PURE__ */ g(Eg, {
					className: "border-b border-gray-200 p-4",
					children: /* @__PURE__ */ _("div", {
						className: "flex items-end gap-3",
						children: [
							/* @__PURE__ */ g("div", {
								className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5",
								children: /* @__PURE__ */ g(gr, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ _("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ g(Og, {
									className: "text-base font-medium text-gray-900 leading-tight",
									children: v
								}), /* @__PURE__ */ g(kg, {
									className: "text-xs text-gray-400 mt-0.5",
									children: y
								})]
							}),
							/* @__PURE__ */ g(fb, {
								variant: "outline",
								className: "text-xs mb-0.5 mr-8",
								children: m("page.count", { count: b.length })
							})
						]
					})
				}),
				/* @__PURE__ */ g("div", {
					className: "flex-1 overflow-hidden flex flex-col",
					children: /* @__PURE__ */ g("div", {
						className: "flex-1 overflow-auto p-6 bg-gray-50",
						children: /* @__PURE__ */ g(ub, {
							items: b,
							onChange: T,
							renderItem: k,
							keyExtractor: w,
							renderEmptyState: A,
							gridColsClass: f,
							className: "pb-4",
							isItemDisabled: j,
							canDropAt: M
						})
					})
				}),
				/* @__PURE__ */ _(Dg, {
					className: "border-t border-gray-200 px-4 py-3 gap-3",
					children: [/* @__PURE__ */ g(Di, {
						variant: "outline",
						onClick: D,
						children: m("reorderDialog.cancel")
					}), /* @__PURE__ */ g(Di, {
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
function hb({ pageId: t, templateId: n, componentKey: r, component: i, payload: a, pagePayload: o, integration: s, page: c, parentGroup: l, setup: u, reference: d, overlay: f, className: p, pageNo: m = 0, totalPages: v, measurementPageNo: y, measurementTotalPages: b, dataBinding: x, flowPageIndex: S = 0, flowChunksByFlowId: C, measureFlow: w = !1, flowMeasurementKey: T, flowMeasurementVersion: E, onFlowMeasurement: D, renderVisible: O = !0, renderMode: k = "sheet", spread: A }) {
	let j = typeof f == "function" ? (e) => f({
		pageNo: e,
		pageId: t
	}) : () => f, M = r || n || t, N = [M ? `uhuu-page--${M}` : "", p].filter(Boolean).join(" "), P = (e = m, u = v) => i ? /* @__PURE__ */ g(i, {
		payload: a,
		pagePayload: o,
		integration: s,
		pageId: t,
		templateId: n ?? r ?? t,
		pageNum: e,
		totalPages: u,
		page: c,
		parentGroup: l,
		componentKey: r,
		dataBinding: x,
		spread: A
	}) : null, F = e.useMemo(() => ({
		mode: "visible",
		pageIndex: S,
		chunksByFlowId: C
	}), [S, C]), I = e.useCallback((e) => {
		T && D?.(T, e);
	}, [T, D]), L = e.useMemo(() => ({
		mode: "measure",
		pageIndex: 0,
		measurementVersion: E,
		registerMeasurement: I
	}), [E, I]);
	return k === "content" ? /* @__PURE__ */ _(h, { children: [d, /* @__PURE__ */ g(De.Provider, {
		value: F,
		children: P(m, v)
	})] }) : /* @__PURE__ */ _(h, { children: [w && D && T && /* @__PURE__ */ g("div", {
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
		children: /* @__PURE__ */ g(te, {
			setup: u,
			children: /* @__PURE__ */ g(ne, {
				className: N,
				pageNo: m,
				"data-page-key": M,
				children: /* @__PURE__ */ g(De.Provider, {
					value: L,
					children: P(y ?? m, b ?? v)
				})
			})
		})
	}), O && /* @__PURE__ */ g(te, {
		setup: u,
		children: /* @__PURE__ */ _(ne, {
			className: N,
			pageNo: m,
			overlay: ({ pageNo: e }) => j(e),
			"data-page-key": M,
			children: [d, /* @__PURE__ */ g(De.Provider, {
				value: F,
				children: P(m, v)
			})]
		})
	})] });
}
//#endregion
//#region src/uhuu/ui/select.tsx
var gb = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ g("select", {
	className: G("flex h-8 w-full rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50", e),
	ref: r,
	...n,
	children: t
}));
gb.displayName = "Select";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_9e907e973c095d314448b5bf7a7b557b/node_modules/@radix-ui/react-switch/dist/index.mjs
var _b = Object.defineProperty, vb = (e, t) => _b(e, "name", {
	value: t,
	configurable: !0
}), yb = "Switch", [bb, xb] = /* @__PURE__ */ Hi(yb), [Sb, Cb] = bb(yb);
function wb(t) {
	let { __scopeSwitch: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = $i({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: yb
	}), [h, _] = e.useState(null), [v, y] = e.useState(null), b = e.useRef(!1), [x, S] = e.useReducer((e) => e + 1, 0), C = {
		checked: p,
		setChecked: m,
		disabled: o,
		control: h,
		setControl: _,
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
	return /* @__PURE__ */ g(Sb, {
		scope: n,
		...C,
		children: Mb(f) ? f(C) : i
	});
}
vb(wb, "SwitchProvider");
var Tb = "SwitchTrigger", Eb = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ vb(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, form: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, onUserInteraction: m, isFormControl: h, bubbleInput: _ } = Cb(Tb, t), v = q(i, d), y = e.useRef(l);
	return e.useEffect(() => {
		let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ vb(() => f(y.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		a,
		o,
		f
	]), /* @__PURE__ */ g(J.button, {
		type: "button",
		role: "switch",
		"aria-checked": l,
		"aria-required": u,
		"data-state": Nb(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...r,
		ref: v,
		onClick: K(n, (e) => {
			m(), f((e) => !e), _ && h && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), Db = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ vb(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ g(wb, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(Eb, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ g(jb, { __scopeSwitch: n })] })
	});
}, "Switch")), Ob = "SwitchThumb", kb = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ vb(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = Cb(Ob, n);
	return /* @__PURE__ */ g(J.span, {
		"data-state": Nb(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), Ab = "SwitchBubbleInput", jb = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ vb(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, hasConsumerStoppedPropagationRef: o, userInteractionCount: s, checked: c, defaultChecked: l, required: u, disabled: d, name: f, value: p, form: m, bubbleInput: h, setBubbleInput: _ } = Cb(Ab, t), v = q(i, _), y = Zc(a), b = e.useRef(!1), x = e.useRef(c), S = e.useRef(s);
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
	return /* @__PURE__ */ g(J.input, {
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
		onClick: K(n, (e) => {
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
function Mb(e) {
	return typeof e == "function";
}
vb(Mb, "isFunction");
function Nb(e) {
	return e ? "checked" : "unchecked";
}
vb(Nb, "getState");
//#endregion
//#region src/uhuu/ui/switch.tsx
var Pb = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(Db, {
	ref: n,
	className: G("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200", e),
	...t,
	children: /* @__PURE__ */ g(kb, { className: G("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Pb.displayName = Db.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var Fb = Object.defineProperty, Ib = (e, t) => Fb(e, "name", {
	value: t,
	configurable: !0
});
function Lb(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
Ib(Lb, "clamp");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previous@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var Rb = Object.defineProperty, zb = (e, t) => Rb(e, "name", {
	value: t,
	configurable: !0
});
function Bb(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
zb(Bb, "usePrevious");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slider@1.5.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_764b979897bd8e11b24e0a133366e2c3/node_modules/@radix-ui/react-slider/dist/index.mjs
var Vb = Object.defineProperty, $ = (e, t) => Vb(e, "name", {
	value: t,
	configurable: !0
}), Hb = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, Ub = {
	LTR: "ltr",
	RTL: "rtl"
}, Wb = ["PageUp", "PageDown"], Gb = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], Kb = {
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
}, qb = "Slider", [Jb, Yb, Xb] = /* @__PURE__ */ Ta(qb), [Zb, Qb] = /* @__PURE__ */ Hi(qb, [Xb]), [$b, ex] = Zb(qb), tx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { name: r, min: i = 0, max: a = 100, step: o = 1, orientation: s = Hb.Horizontal, disabled: c = !1, minStepsBetweenThumbs: l = 0, preserveThumbOrder: u = !1, defaultValue: d = [i], value: f, onValueChange: p = /* @__PURE__ */ $(() => {}, "onValueChange"), onValueCommit: m = /* @__PURE__ */ $(() => {}, "onValueCommit"), inverted: h = !1, form: _, ...v } = t, y = e.useRef(/* @__PURE__ */ new Set()), b = e.useRef(0), x = e.useRef(!1), S = s === Hb.Horizontal ? ix : ax, [C, w] = e.useState(null), T = q(n, w), [E = [], D] = $i({
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
		let e = _ ? C?.ownerDocument.getElementById(_) : C?.closest("form");
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ $(() => D(k.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		C,
		_,
		D
	]);
	function A(e) {
		N(e, Cx(E, e));
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
		let r = Ox(o), s = Lb(kx(Math.round((e - i) / o) * o + i, r), [i, a]);
		D((e = []) => {
			let r = l * o, c = u ? Lb(s, [e[t - 1] === void 0 ? i : e[t - 1] + r, e[t + 1] === void 0 ? a : e[t + 1] - r]) : s, d = bx(e, c, t);
			if (Ex(d, r)) {
				b.current = u ? t : d.indexOf(c);
				let r = String(d) !== String(e);
				return r && n && m(d), r ? d : e;
			}
			return e;
		});
	}
	return $(N, "updateValues"), /* @__PURE__ */ g($b, {
		scope: t.__scopeSlider,
		name: r,
		disabled: c,
		min: i,
		max: a,
		valueIndexToChangeRef: b,
		thumbs: y.current,
		values: E,
		orientation: s,
		form: _,
		children: /* @__PURE__ */ g(Jb.Provider, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ g(Jb.Slot, {
				scope: t.__scopeSlider,
				children: /* @__PURE__ */ g(S, {
					"aria-disabled": c,
					"data-disabled": c ? "" : void 0,
					...v,
					ref: T,
					onPointerDown: K(v.onPointerDown, () => {
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
							let n = Wb.includes(e.key) || e.shiftKey && Gb.includes(e.key) ? 10 : 1, r = b.current, a = E[r];
							N(Ax(a, {
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
}, "Slider")), [nx, rx] = Zb(qb, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), ix = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, dir: a, inverted: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onStepKeyDown: u, ...d } = t, [f, p] = e.useState(null), m = q(n, p), h = e.useRef(void 0), _ = Ba(a), v = _ === Ub.LTR, y = v && !o || !v && o;
	function b(e) {
		let t = h.current || f.getBoundingClientRect(), n = Dx([0, t.width], y ? [r, i] : [i, r]);
		return h.current = t, n(e - t.left);
	}
	return $(b, "getValueFromPointer"), /* @__PURE__ */ g(nx, {
		scope: t.__scopeSlider,
		startEdge: y ? "left" : "right",
		endEdge: y ? "right" : "left",
		direction: y ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ g(ox, {
			dir: _,
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
				let t = Kb[y ? "from-left" : "from-right"].includes(e.key);
				u?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal")), ax = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = t, d = e.useRef(null), f = q(n, d), p = e.useRef(void 0), m = !a;
	function h(e) {
		let t = p.current || d.current.getBoundingClientRect(), n = Dx([0, t.height], m ? [i, r] : [r, i]);
		return p.current = t, n(e - t.top);
	}
	return $(h, "getValueFromPointer"), /* @__PURE__ */ g(nx, {
		scope: t.__scopeSlider,
		startEdge: m ? "bottom" : "top",
		endEdge: m ? "top" : "bottom",
		size: "height",
		direction: m ? 1 : -1,
		children: /* @__PURE__ */ g(ox, {
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
				let t = Kb[m ? "from-bottom" : "from-top"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical")), ox = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = ex(qb, n);
	return /* @__PURE__ */ g(J.span, {
		...l,
		ref: t,
		onKeyDown: K(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : Wb.concat(Gb).includes(e.key) && (c(e), e.preventDefault());
		}),
		onPointerDown: K(e.onPointerDown, (e) => {
			let t = e.target;
			t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus({
				preventScroll: !0,
				focusVisible: !1
			}) : r(e);
		}),
		onPointerMove: K(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && i(e);
		}),
		onPointerUp: K(e.onPointerUp, (e) => {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e));
		})
	});
}, "SliderImpl")), sx = "SliderTrack", cx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = ex(sx, n);
	return /* @__PURE__ */ g(J.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
}, "SliderTrack")), lx = "SliderRange", ux = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSlider: r, ...i } = t, a = ex(lx, r), o = rx(lx, r), s = q(n, e.useRef(null)), c = a.values.length, l = a.values.map((e) => xx(e, a.min, a.max)), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
	return /* @__PURE__ */ g(J.span, {
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
}, "SliderRange")), [dx, fx] = Zb("SliderThumb"), px = "SliderThumbProvider";
function mx(t) {
	let { __scopeSlider: n, name: r, children: i, internal_do_not_use_render: a } = t, o = ex(px, n), s = Yb(n), [c, l] = e.useState(null), u = e.useMemo(() => c ? s().findIndex((e) => e.ref.current === c) : -1, [s, c]), d = Zc(c), f = !c || !!o.form || !!c.closest("form"), p = o.values[u], m = r ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), h = p === void 0 ? 0 : xx(p, o.min, o.max);
	e.useEffect(() => {
		if (c) return o.thumbs.add(c), () => {
			o.thumbs.delete(c);
		};
	}, [c, o.thumbs]);
	let _ = {
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
	return /* @__PURE__ */ g(dx, {
		scope: n,
		..._,
		children: jx(a) ? a(_) : i
	});
}
$(mx, "SliderThumbProvider");
var hx = "SliderThumbTrigger", gx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = ex(hx, n), a = rx(hx, n), { index: o, value: s, percent: c, size: l, onThumbChange: u } = fx(hx, n), d = q(t, u), f = Sx(o, i.values.length), p = l?.[a.size], m = p ? wx(p, c, a.direction) : 0;
	return /* @__PURE__ */ g("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[a.startEdge]: `calc(${c}% + ${m}px)`
		},
		children: /* @__PURE__ */ g(Jb.ItemSlot, {
			scope: n,
			children: /* @__PURE__ */ g(J.span, {
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
				onFocus: K(e.onFocus, () => {
					i.valueIndexToChangeRef.current = o;
				})
			})
		})
	});
}, "SliderThumbTrigger")), _x = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, name: r, ...i } = e;
	return /* @__PURE__ */ g(mx, {
		__scopeSlider: n,
		name: r,
		internal_do_not_use_render: ({ index: e, isFormControl: r }) => /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(gx, {
			...i,
			ref: t,
			__scopeSlider: n
		}), r ? /* @__PURE__ */ g(yx, { __scopeSlider: n }, e) : null] })
	});
}, "SliderThumb")), vx = "SliderBubbleInput", yx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function({ __scopeSlider: t, ...n }, r) {
	let { value: i, name: a, form: o } = fx(vx, t), s = e.useRef(null), c = q(s, r), l = Bb(i);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (l !== i && n) {
			let t = new Event("input", { bubbles: !0 });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [l, i]), /* @__PURE__ */ g(J.input, {
		style: { display: "none" },
		name: a,
		form: o,
		...n,
		ref: c,
		defaultValue: i
	});
}, "SliderBubbleInput"));
function bx(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
$(bx, "getNextSortedValues");
function xx(e, t, n) {
	return Lb(100 / (n - t) * (e - t), [0, 100]);
}
$(xx, "convertValueToPercentage");
function Sx(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
$(Sx, "getLabel");
function Cx(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
$(Cx, "getClosestValueIndex");
function wx(e, t, n) {
	let r = e / 2;
	return (r - Dx([0, 50], [0, r])(t) * n) * n;
}
$(wx, "getThumbInBoundsOffset");
function Tx(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
$(Tx, "getStepsBetweenValues");
function Ex(e, t) {
	if (t > 0) {
		let n = Tx(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
$(Ex, "hasMinStepsBetweenValues");
function Dx(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
$(Dx, "linearScale");
function Ox(e) {
	if (!Number.isFinite(e)) return 0;
	let t = e.toString();
	if (t.includes("e")) {
		let [e, n] = t.split("e"), r = e.split(".")[1] || "", i = Number(n);
		return Math.max(0, r.length - i);
	}
	let n = t.split(".")[1];
	return n ? n.length : 0;
}
$(Ox, "getDecimalCount");
function kx(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
$(kx, "roundValue");
function Ax(e, { min: t, step: n, direction: r, multiplier: i }) {
	let a = Ox(n), o = (e - t) / n, s = Math.round(o), c = kx(s * n + t, a) === kx(e, a), l;
	return l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o), kx(l * n + t, a);
}
$(Ax, "getNextStepValue");
function jx(e) {
	return typeof e == "function";
}
$(jx, "isFunction");
//#endregion
//#region src/uhuu/ui/slider.tsx
var Mx = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(tx, {
	ref: n,
	className: G("relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50", e),
	...t,
	children: [/* @__PURE__ */ g(cx, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200",
		children: /* @__PURE__ */ g(ux, { className: "absolute h-full bg-gray-900" })
	}), /* @__PURE__ */ g(_x, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })]
}));
Mx.displayName = tx.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-label@2.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a0d6e2f71ba73dadad94263bc45ff639/node_modules/@radix-ui/react-label/dist/index.mjs
var Nx = Object.defineProperty, Px = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => Nx(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ g(J.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), Fx = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(Px, {
	ref: n,
	className: G("text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
	...t
}));
Fx.displayName = Px.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/page-options-renderer.tsx
function Ix(e, t) {
	let n = (e, t) => !e.appliesTo || (Array.isArray(e.appliesTo) ? e.appliesTo : [e.appliesTo]).some((e) => typeof e == "function" ? e(t) : e === t.id || e === t.templateId || t.componentKey === e);
	return e.filter((e) => {
		if (!n(e, t)) return !1;
		let r = e.getValue(t);
		return e.type === "select" || e.type === "color-series" ? r !== "" : !0;
	});
}
function Lx({ pageOptions: e, targetItem: t, onChange: n }) {
	let { localize: r } = gi(), i = Ix(e, t), a = (e) => {
		let i = e.getValue(t), a = r(e.label);
		switch (e.type) {
			case "select": return /* @__PURE__ */ _("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ g(Fx, {
					htmlFor: e.id,
					className: "text-xs font-medium text-gray-500",
					children: a
				}), /* @__PURE__ */ g(gb, {
					id: e.id,
					value: String(i),
					onChange: (r) => n(e, t, r.target.value),
					className: "w-full text-sm",
					children: e.options.map((e) => /* @__PURE__ */ g("option", {
						value: e.value,
						children: r(e.label)
					}, e.value))
				})]
			}, e.id);
			case "toggle": {
				let r = typeof i == "boolean" ? i : i === "true";
				return /* @__PURE__ */ _("div", {
					className: "flex items-center justify-between py-1.5",
					children: [/* @__PURE__ */ g(Fx, {
						htmlFor: e.id,
						className: "text-xs font-medium text-gray-500",
						children: a
					}), /* @__PURE__ */ g(Pb, {
						id: e.id,
						checked: r,
						onCheckedChange: (r) => n(e, t, String(r))
					})]
				}, e.id);
			}
			case "slider": {
				let r = typeof i == "number" ? i : Number(i) || e.min;
				return /* @__PURE__ */ _("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ _("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ g(Fx, {
							htmlFor: e.id,
							className: "text-xs font-medium text-gray-500",
							children: a
						}), /* @__PURE__ */ g("span", {
							className: "text-xs font-mono tabular-nums text-gray-700",
							children: r
						})]
					}), /* @__PURE__ */ g(Mx, {
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
				return /* @__PURE__ */ _("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ g(Fx, {
						className: "text-xs font-medium text-gray-500",
						children: a
					}), /* @__PURE__ */ _("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ g(Di, {
								variant: "outline",
								size: "sm",
								className: "h-8 w-8 shrink-0 p-0",
								onClick: () => {
									let i = Math.max(e.min, r - e.step);
									n(e, t, String(i));
								},
								disabled: r <= e.min,
								type: "button",
								children: /* @__PURE__ */ g(Or, { className: "h-3.5 w-3.5" })
							}),
							/* @__PURE__ */ g("div", {
								className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200",
								children: /* @__PURE__ */ g("span", {
									className: "text-sm font-mono tabular-nums font-medium text-gray-900",
									children: r
								})
							}),
							/* @__PURE__ */ g(Di, {
								variant: "outline",
								size: "sm",
								className: "h-8 w-8 shrink-0 p-0",
								onClick: () => {
									let i = Math.min(e.max, r + e.step);
									n(e, t, String(i));
								},
								disabled: r >= e.max,
								type: "button",
								children: /* @__PURE__ */ g(Ar, { className: "h-3.5 w-3.5" })
							})
						]
					})]
				}, e.id);
			}
			case "color-series": {
				let o = String(i);
				return /* @__PURE__ */ _("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ g(Fx, {
						className: "text-xs font-medium text-gray-500",
						children: a
					}), /* @__PURE__ */ g("div", {
						className: "flex flex-wrap gap-1.5",
						children: e.options.map((i) => {
							let a = o === i.value, s = r(i.label) ?? i.value;
							return /* @__PURE__ */ g("button", {
								onClick: () => n(e, t, i.value),
								className: `h-7 w-7 rounded-md border-2 transition-all flex items-center justify-center ${a ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"}`,
								style: { backgroundColor: i.hex || i.value },
								type: "button",
								title: `${s}${i.hex ? ` (${i.hex})` : ""}`,
								children: a && /* @__PURE__ */ g(yr, {
									className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
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
	return /* @__PURE__ */ g("div", {
		className: "space-y-3",
		children: i.map((e) => a(e))
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-options-dropdown.tsx
function Rx({ pageOptions: e, targetItem: t, onChange: n, title: r, triggerClassName: i }) {
	let { t: a } = gi(), o = r ?? a("page.optionsMenu");
	return !t || Ix(e, t).length === 0 ? null : /* @__PURE__ */ _(tp, {
		modal: !1,
		children: [/* @__PURE__ */ g(np, {
			asChild: !0,
			className: i || "page-options-trigger",
			children: /* @__PURE__ */ _(Di, {
				variant: "ghost",
				size: "sm",
				className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
				title: o,
				children: [/* @__PURE__ */ g(wr, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ g("span", {
					className: "sr-only",
					children: o
				})]
			})
		}), /* @__PURE__ */ g(op, {
			className: "min-w-48 p-3",
			align: "center",
			children: /* @__PURE__ */ g(Lx, {
				pageOptions: e,
				targetItem: t,
				onChange: n
			})
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-name-dropdown.tsx
function zx({ name: e, canRename: t, canMoveUp: n, canMoveDown: r, canAddPage: i, canDuplicate: a, canDelete: o, onRename: s, onMoveUp: c, onMoveDown: u, onAddPage: d, onDuplicate: f, onDelete: h }) {
	let { t: v } = gi(), [y, b] = m(!1), [x, S] = m(!1), [C, w] = m(e), T = p(null);
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
	return x ? /* @__PURE__ */ g("input", {
		ref: T,
		value: C,
		onChange: (e) => w(e.target.value),
		onKeyDown: (t) => {
			t.key === "Enter" && E(), t.key === "Escape" && (w(e), S(!1)), t.stopPropagation();
		},
		onBlur: E,
		className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
		"data-uhuu-editor": !0
	}) : t || D ? /* @__PURE__ */ _(tp, {
		open: y,
		onOpenChange: b,
		modal: !1,
		children: [/* @__PURE__ */ g(np, {
			asChild: !0,
			children: /* @__PURE__ */ _("button", {
				className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
				"data-uhuu-editor": !0,
				children: [/* @__PURE__ */ g("span", {
					className: "truncate max-w-[120px]",
					children: e
				}), /* @__PURE__ */ g(br, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })]
			})
		}), /* @__PURE__ */ _(op, {
			className: "min-w-44 p-1",
			align: "start",
			children: [
				t && /* @__PURE__ */ _(sp, {
					onSelect: (e) => {
						e.preventDefault(), b(!1), S(!0);
					},
					children: [/* @__PURE__ */ g(kr, { className: "w-3.5 h-3.5 mr-2" }), v("page.rename")]
				}),
				t && D && /* @__PURE__ */ g(dp, {}),
				n && /* @__PURE__ */ _(sp, {
					onClick: c,
					children: [/* @__PURE__ */ g(_r, { className: "w-3.5 h-3.5 mr-2" }), v("page.moveUp")]
				}),
				r && /* @__PURE__ */ _(sp, {
					onClick: u,
					children: [/* @__PURE__ */ g(hr, { className: "w-3.5 h-3.5 mr-2" }), v("page.moveDown")]
				}),
				i && (n || r) && /* @__PURE__ */ g(dp, {}),
				i && /* @__PURE__ */ _(sp, {
					onClick: d,
					children: [/* @__PURE__ */ g(Ar, { className: "w-3.5 h-3.5 mr-2" }), v("page.addPage")]
				}),
				a && /* @__PURE__ */ _(sp, {
					onClick: f,
					children: [/* @__PURE__ */ g(Cr, { className: "w-3.5 h-3.5 mr-2" }), v("page.duplicate")]
				}),
				o && /* @__PURE__ */ g(dp, {}),
				o && /* @__PURE__ */ _(sp, {
					onClick: h,
					className: "text-red-600 focus:text-red-700 focus:bg-red-50",
					children: [/* @__PURE__ */ g(Mr, { className: "w-3.5 h-3.5 mr-2" }), v("page.delete")]
				})
			]
		})]
	}) : /* @__PURE__ */ g("span", {
		className: "text-xs font-medium text-gray-600 truncate max-w-[120px]",
		children: e
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/cover-spread-layout.js
function Bx(e) {
	if (!e || typeof e != "object" || !("binding" in e)) return e;
	let { binding: t, ...n } = e;
	return n;
}
function Vx(e, t) {
	return !!k(e?.binding) && t?.mode === "cover";
}
function Hx({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
	let r = {
		active: !1,
		plan: null,
		setup: Bx(e),
		warnings: []
	};
	if (!Vx(e, t)) return r;
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
function Ux(e) {
	let { initialItems: t, availableItems: n = [], onItemsChange: r, onStateChange: i, pageComponents: a, payload: o, setup: u, stateKey: f = Hm, resolveNewItem: h, notifyError: g, pageFilter: _ } = e, [v, y] = m(t), [b, x] = m(!1), S = gi(), { t: C } = S, w = p(t);
	l(() => {
		try {
			JSON.stringify(w.current) !== JSON.stringify(t) && (w.current = t, y(t));
		} catch {
			w.current !== t && (w.current = t, y(t));
		}
	}, [t]);
	let T = c(gh), E = s((e) => {
		y(e);
		let t = Xm(e, f);
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
			e.set(n, (e.get(n) ?? 0) + 1), Um(t) && t.pages?.forEach((t) => {
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
	}), [n, D]), k = d(() => Km(v), [v]), A = s(async (e, t) => {
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
				return eh(t.templateId ?? t.id, t.componentKey ?? t.id, {
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
			return th(n, r(t.pageComponentKeys, i), {
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
		T
	]), j = s((e) => {
		let t = (e) => {
			g ? g(e) : alert(e);
		}, n = v.find((t) => t.id === e);
		if (n) {
			if (Km(v) <= 1) {
				t(C("notice.lastPage"));
				return;
			}
			if (T?.removeIntegrationPayload) {
				let e = n.id;
				T.payload?.integrations?.[e] !== void 0 && T.removeIntegrationPayload(e);
			}
			E(v.filter((t) => t.id !== e));
		} else for (let n of v) if (Um(n) && n.pages.some((t) => t.id === e)) {
			if (Km(v) <= 1) {
				t(C("notice.lastPage"));
				return;
			}
			if (n.pages.length === 1) {
				if (T?.removeIntegrationPayload) {
					let e = n.id;
					T.payload?.integrations?.[e] !== void 0 && T.removeIntegrationPayload(e);
				}
				E(v.filter((e) => e.id !== n.id));
			} else E(v.map((t) => t.id === n.id && Um(t) ? {
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
		E(v.map((n) => n.id === e ? (Um(n), {
			...n,
			...t
		}) : n));
	}, [v, E]), N = s((e) => {
		E(e);
	}, [E]), P = d(() => {
		let e = Gm(v);
		return _ ? ah(e, _) : e;
	}, [v, _]), F = s((e) => {
		let t = [];
		return P.forEach((n) => {
			Um(n) ? (n.pages ?? []).forEach((r) => {
				t.push(e(r, n));
			}) : t.push(e(n, n));
		}), t;
	}, [P]), I = d(() => qm(P), [P]), L = s((e) => {
		let t = Jm(e, v);
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
			if (a) return Ag({
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
function Wx({ items: e, reorderItems: t, availableItemsToAdd: n, setPendingInsertPosition: r, openAddDialog: i }) {
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
function Gx(e = [], t = {}) {
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
function Kx({ logicalPages: e, pageFilter: t, layoutKey: n = "" }) {
	let [r, i] = m({
		layoutKey: n,
		layouts: {}
	}), a = r.layoutKey === n ? r.layouts : {}, o = d(() => e.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|"), [e]), c = d(() => new Set(o ? o.split("|") : []), [o]), l = d(() => {
		let t = {};
		for (let n of e) {
			if (!n.hasFlow) continue;
			let e = a[n.flowKey];
			e && (t[n.flowKey] = e);
		}
		return t;
	}, [a, e]), u = s((e, t) => {
		c.has(e) && i((r) => {
			let i = r.layoutKey === n ? r.layouts : {}, a = {}, o = !1;
			for (let [e, t] of Object.entries(i)) c.has(e) ? a[e] = t : o = !0;
			let s = a[e] ?? {
				flows: {},
				signatures: {}
			}, l = s.signatures?.[t.flowId];
			return r.layoutKey === n && l === t.signature && !o ? r : {
				layoutKey: n,
				layouts: {
					...a,
					[e]: {
						flows: {
							...s.flows,
							[t.flowId]: t.chunks
						},
						signatures: {
							...s.signatures,
							[t.flowId]: t.signature
						}
					}
				}
			};
		});
	}, [c, n]), f = d(() => Gx(e, l), [e, l]), p = f.length;
	return {
		allVirtualPages: f,
		renderedVirtualPages: d(() => f.filter((e) => oh(e.pageNum, p, t)), [
			f,
			p,
			t
		]),
		virtualTotalPageCount: p,
		registerMeasurement: u
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/data-binding.ts
function qx(e, t) {
	return e ? t ? `${e}.${t}` : e : null;
}
function Jx(e, t, n) {
	return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function Yx({ payload: e, page: t, parentGroup: n, pagePayload: r, defaults: i }) {
	let a = lh(e, t, n), o = n && Um(n) ? n.id : void 0, s = `pages.${t.id}`, c = o ? `pages.${o}` : null;
	return {
		payload: e,
		pageId: t.id,
		pagePayload: r,
		parentGroupId: o,
		integration: {
			instanceId: a.instanceId,
			data: a.integration,
			path: (e) => dh(a.instanceId, e)
		},
		paths: {
			integration: (e) => dh(a.instanceId, e),
			page: (e) => qx(s, e),
			group: (e) => qx(c, e),
			document: (e) => e ?? null
		},
		defaults: { imageGalleryPath: Jx(e, a.integration, i) }
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-presets.ts
var Xx = (e, t, n = !1, r) => {
	let i = typeof e == "string" ? e : e.id, a = r?.[i], o = typeof e == "string" ? a?.componentKey ?? i : e.componentKey ?? a?.componentKey ?? e.id, s = t ?? i, c = (typeof e == "string" ? void 0 : e.repeatable) ?? a?.repeatable ?? !1, l = (typeof e == "string" ? void 0 : e.maxInstances) ?? a?.maxInstances ?? null, u = (typeof e == "string" ? void 0 : e.label) ?? a?.label, d = (typeof e == "string" ? void 0 : e.className) ?? a?.className, f = (typeof e == "string" ? void 0 : e.component) ?? a?.component, p = (typeof e == "string" ? void 0 : e.integration) ?? a?.integration, m = (typeof e == "string" ? void 0 : e.strictPosition) ?? a?.strictPosition, h = (typeof e == "string" ? void 0 : e.hasFlow) ?? a?.hasFlow;
	return n ? {
		kind: "page",
		id: i,
		componentKey: o,
		templateId: s,
		label: u,
		className: d,
		repeatable: c,
		maxInstances: l,
		integration: p,
		component: f,
		strictPosition: m,
		hasFlow: h,
		...typeof e == "string" ? {} : e
	} : eh(s, o, {
		label: u,
		className: d,
		repeatable: c,
		maxInstances: l,
		integration: p,
		component: f,
		strictPosition: m,
		hasFlow: h,
		...typeof e == "string" ? {} : e
	});
}, Zx = (e, t = !1, n, r) => {
	let i = {
		payload: n,
		item: void 0,
		parent: void 0
	}, a = $x(e.pageComponentKeys, i).map((e) => {
		let t = r?.[e], n = t?.dataKey, i = t?.hasFlow;
		return n || i ? {
			key: e,
			...n ? { dataKey: n } : {},
			...i ? { hasFlow: i } : {}
		} : e;
	});
	if (t) {
		let t = e.id;
		return {
			kind: "group",
			id: t,
			templateId: e.id,
			label: e.label,
			repeatable: e.repeatable ?? !1,
			maxInstances: e.maxInstances ?? null,
			integration: e.integration,
			strictPosition: e.strictPosition,
			pages: a.map((e, n) => {
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
	return th(e.id, a, {
		label: e.label,
		repeatable: e.repeatable ?? !1,
		maxInstances: e.maxInstances ?? null,
		integration: e.integration,
		strictPosition: e.strictPosition
	});
}, Qx = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
	...t,
	id: e
})) : [], $x = (e, t) => {
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
}, eS = (e) => {
	let { initial: t, groups: n, pageComponentKeys: r = [], pages: i = {}, pageComponents: a = {}, payload: o } = e, s = Qx(n), c = /* @__PURE__ */ new Map();
	s.forEach((e) => c.set(e.id, e));
	let l = r.length ? r : Object.keys(i), u = { ...a };
	Object.entries(i).forEach(([e, t]) => {
		t.component && (u[e] = t.component);
	});
	let d = t.map((e) => {
		if (typeof e == "string") {
			let t = c.get(e);
			return t ? Zx(t, !0, o, i) : Xx(e, void 0, !0, i);
		}
		return e.pageComponentKeys === void 0 ? Xx(e, void 0, !0, i) : Zx(e, !0, o, i);
	}), f = s.map((e) => ({
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
		initialItems: d,
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
		}), ...f],
		pageComponents: u
	};
}, tS = Object.defineProperty, nS = (e, t) => tS(e, "name", {
	value: t,
	configurable: !0
}), [rS, iS] = /* @__PURE__ */ Hi("AlertDialog", [Zh]), aS = Zh(), oS = /* @__PURE__ */ nS((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = aS(t);
	return /* @__PURE__ */ g(eg, {
		...r,
		...n,
		modal: !0
	});
}, "AlertDialog");
e.forwardRef(/* @__PURE__ */ nS(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = aS(n);
	return /* @__PURE__ */ g(ng, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTrigger"));
var sS = /* @__PURE__ */ nS((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = aS(t);
	return /* @__PURE__ */ g(og, {
		...r,
		...n
	});
}, "AlertDialogPortal"), cS = e.forwardRef(/* @__PURE__ */ nS(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = aS(n);
	return /* @__PURE__ */ g(cg, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogOverlay")), [lS, uS] = rS("AlertDialogContent"), dS = e.forwardRef(/* @__PURE__ */ nS(function(t, n) {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = aS(r), s = q(n, e.useRef(null)), c = e.useRef(null);
	return /* @__PURE__ */ g(lS, {
		scope: r,
		cancelRef: c,
		children: /* @__PURE__ */ g(fg, {
			role: "alertdialog",
			...o,
			...a,
			ref: s,
			onOpenAutoFocus: K(a.onOpenAutoFocus, (e) => {
				e.preventDefault(), c.current?.focus({ preventScroll: !0 });
			}),
			onPointerDownOutside: (e) => e.preventDefault(),
			onInteractOutside: (e) => e.preventDefault(),
			children: i
		})
	});
}, "AlertDialogContent")), fS = e.forwardRef(/* @__PURE__ */ nS(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = aS(n);
	return /* @__PURE__ */ g(gg, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTitle")), pS = e.forwardRef(/* @__PURE__ */ nS(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = aS(n);
	return /* @__PURE__ */ g(_g, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogDescription")), mS = e.forwardRef(/* @__PURE__ */ nS(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = aS(n);
	return /* @__PURE__ */ g(yg, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogAction")), hS = "AlertDialogCancel", gS = e.forwardRef(/* @__PURE__ */ nS(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = uS(hS, n), a = aS(n), o = q(t, i);
	return /* @__PURE__ */ g(yg, {
		...a,
		...r,
		ref: o
	});
}, "AlertDialogCancel")), _S = oS, vS = sS, yS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(cS, {
	ref: n,
	className: G("fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
yS.displayName = cS.displayName;
var bS = e.forwardRef(({ className: e, ...t }, n) => {
	let { portalContainer: r } = zr();
	return /* @__PURE__ */ _(vS, {
		container: r || void 0,
		children: [/* @__PURE__ */ g(yS, {}), /* @__PURE__ */ g(dS, {
			ref: n,
			"data-uhuu-editor": !0,
			className: G("fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md border border-gray-200 bg-white p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
			...t
		})]
	});
});
bS.displayName = dS.displayName;
var xS = ({ className: e, ...t }) => /* @__PURE__ */ g("div", {
	className: G("flex flex-col gap-2 text-left", e),
	...t
});
xS.displayName = "AlertDialogHeader";
var SS = ({ className: e, ...t }) => /* @__PURE__ */ g("div", {
	className: G("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
	...t
});
SS.displayName = "AlertDialogFooter";
var CS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(fS, {
	ref: n,
	className: G("text-base font-semibold text-gray-900", e),
	...t
}));
CS.displayName = fS.displayName;
var wS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(pS, {
	ref: n,
	className: G("text-sm text-gray-600", e),
	...t
}));
wS.displayName = pS.displayName;
var TS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(mS, {
	ref: n,
	className: G("inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800", e),
	...t
}));
TS.displayName = mS.displayName;
var ES = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(gS, {
	ref: n,
	className: G("inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50", e),
	...t
}));
ES.displayName = gS.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/dev-print-controls.tsx
var DS = "__edit__", OS = "__print__";
function kS({ checked: e, label: t, onSelect: n, keepOpen: r = !1 }) {
	return /* @__PURE__ */ _(sp, {
		onSelect: (e) => {
			r && e.preventDefault(), n();
		},
		className: "flex items-center gap-2",
		children: [e ? /* @__PURE__ */ g(yr, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ g("span", { className: "w-3 h-3" }), /* @__PURE__ */ g("span", {
			className: "flex-1 truncate",
			children: t
		})]
	});
}
function AS({ label: e, value: t }) {
	return /* @__PURE__ */ _(ip, {
		className: "flex items-center justify-between gap-4 text-xs",
		children: [/* @__PURE__ */ g("span", {
			className: "text-gray-700",
			children: e
		}), /* @__PURE__ */ _("span", {
			className: "flex items-center gap-1 text-gray-400",
			children: [t ? /* @__PURE__ */ g("span", {
				className: "max-w-[110px] truncate",
				children: t
			}) : null, /* @__PURE__ */ g(xr, { className: "w-3.5 h-3.5" })]
		})]
	});
}
function jS({ modes: e, selectedMode: t, onModeChange: n, interactive: r, onInteractiveChange: i, hasReferenceRenderer: a = !1, referenceOpacity: o = 50, onReferenceOpacityChange: s, brandKits: c, activeBrandKitId: l, onSelectBrandKit: u, onAddBrandKit: d }) {
	let f = e ? Object.keys(e) : [], p = [{
		value: DS,
		label: "Edit"
	}, ...f.length > 0 ? f.map((t) => ({
		value: t,
		label: e[t].label
	})) : [{
		value: OS,
		label: "Print"
	}]], m = r ? DS : t || f[0] || OS, v = p.find((e) => e.value === m)?.label ?? "Edit", y = (t) => {
		t === DS ? i(!0) : (i(!1), t !== OS && e && e[t] && n?.(t, e[t]));
	}, b = !!c && c.length > 0, x = c?.find((e) => e.id === l)?.name, S = () => {
		let e = window.prompt("Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:");
		e && e.trim() && d?.(e.trim());
	};
	return /* @__PURE__ */ _(tp, {
		modal: !1,
		children: [/* @__PURE__ */ g(np, {
			asChild: !0,
			children: /* @__PURE__ */ _(Di, {
				variant: "ghost",
				size: "sm",
				className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
				children: [/* @__PURE__ */ g(vr, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ g("span", {
					className: "text-[10px] uppercase tracking-wide",
					children: "Dev"
				})]
			})
		}), /* @__PURE__ */ _(op, {
			align: "end",
			className: "min-w-[200px]",
			children: [
				/* @__PURE__ */ _(rp, { children: [/* @__PURE__ */ g(AS, {
					label: "Print Preview",
					value: v
				}), /* @__PURE__ */ g(ap, {
					className: "min-w-[180px]",
					children: p.map((e) => /* @__PURE__ */ g(kS, {
						checked: m === e.value,
						label: e.label,
						onSelect: () => y(e.value)
					}, e.value))
				})] }),
				b && /* @__PURE__ */ _(rp, { children: [/* @__PURE__ */ g(AS, {
					label: "Brand Kit",
					value: x
				}), /* @__PURE__ */ _(ap, {
					className: "min-w-[200px]",
					children: [c.map((e) => /* @__PURE__ */ g(kS, {
						checked: l === e.id,
						label: e.name,
						keepOpen: !0,
						onSelect: () => u?.(e.id)
					}, e.id)), d && /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(dp, {}), /* @__PURE__ */ _(sp, {
						onSelect: (e) => {
							e.preventDefault(), S();
						},
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ g(Ar, { className: "w-3 h-3 text-gray-400" }), /* @__PURE__ */ g("span", {
							className: "flex-1",
							children: "Add published kit…"
						})]
					})] })]
				})] }),
				a && /* @__PURE__ */ _(h, { children: [
					/* @__PURE__ */ g(dp, {}),
					/* @__PURE__ */ g(up, {
						className: "text-xs text-gray-500",
						children: "Reference Overlay"
					}),
					/* @__PURE__ */ _("div", {
						className: "px-2 py-2",
						children: [
							/* @__PURE__ */ _("div", {
								className: "flex items-center justify-between text-xs text-gray-600",
								children: [/* @__PURE__ */ g("span", { children: "Opacity" }), /* @__PURE__ */ _("span", { children: [o, "%"] })]
							}),
							/* @__PURE__ */ g("div", {
								className: "pt-2",
								children: /* @__PURE__ */ g(Mx, {
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
							/* @__PURE__ */ _("div", {
								className: "pt-2 flex items-center justify-between text-xs text-gray-500",
								children: [/* @__PURE__ */ g("span", { children: "Hidden" }), /* @__PURE__ */ g("span", { children: "Solid" })]
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
var MS = {
	width: 210,
	height: 297
};
function NS(e, t) {
	return t ? `${t.id}/${e.id}` : e.id;
}
function PS({ label: e, onDone: t, onAddAnother: n }) {
	let { t: r } = gi();
	return e ? /* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
		children: /* @__PURE__ */ _("div", {
			className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ g("div", {
					className: "rounded-full bg-emerald-100 p-3 mb-4",
					children: /* @__PURE__ */ g(yr, {
						className: "h-6 w-6 text-emerald-600",
						strokeWidth: 2.5
					})
				}),
				/* @__PURE__ */ g("h2", {
					className: "text-base font-medium text-gray-900 mb-5",
					children: r("addDialog.added", { name: e })
				}),
				/* @__PURE__ */ _("div", {
					className: "flex gap-2 w-full",
					children: [/* @__PURE__ */ g(Di, {
						variant: "outline",
						size: "sm",
						onClick: n,
						className: "flex-1",
						children: r("addDialog.addAnother")
					}), /* @__PURE__ */ g(Di, {
						variant: "default",
						size: "sm",
						onClick: t,
						className: "flex-1",
						children: r("addDialog.done")
					})]
				})
			]
		})
	}) : null;
}
var FS = /* @__PURE__ */ new Set();
function IS({ initialItems: t = [], availableItems: n = [], pageComponents: r = {}, spineComponent: i, payload: a, pageFormat: o, pageOptions: l = [], notifyError: u, referenceRenderer: f, renderOverlay: v, renderPage: y, menuItems: b, gridColsClass: x, reorderTitle: S, reorderDescription: C, stateKey: w = Hm, onItemsChange: T, onStateChange: E, resolveNewItem: D, pageFilter: O, printConfigs: k, defaultZoomMode: A = "fit-page", brandKits: j, activeBrandKitId: M, onSelectBrandKit: N, onAddBrandKit: P }) {
	let F = o ?? MS, { interactive: I, setInteractive: L, enableDevTools: ee } = vi(), ne = yi(), { t: z, localize: re } = gi(), [ie, B] = m(null), [ae, oe] = m(null), [V, se] = m(void 0), [ce, le] = m(0), [ue, de] = m(0), fe = ie ?? O, pe = d(() => ae ? {
		...F,
		...ae
	} : F, [F, ae]), me = c(gh), he = me?.payload ?? a, [ge, _e] = m(!1), ve = !I && Vx(pe, fe), ye = pe?.preview ?? "single_page", be = ve ? "single_page" : ye, xe = d(() => {
		let e = Bx(pe);
		return ye === "two_pages" || ve ? {
			...e,
			preview: "single_page"
		} : e;
	}, [
		ye,
		ve,
		pe
	]), Se = d(() => Bx(F), [F]), Ce = d(() => Ym(t), [t]), we = d(() => l?.length ? l.map((e) => "getValue" in e ? e : me?.setPageOptionValue ? Sh(e, me.payload, me.setPageOptionValue) : ((R() || ee) && console.warn("PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."), null)).filter(Boolean) : [], [l, me]), [Te, Ee] = m(null), [De, Oe] = m({ mode: "end" }), [ke, Ae] = m(null), je = p(null), { items: Me, itemsWithPageNum: Ne, availableItemsToAdd: Pe, addItem: Fe, removeItem: Ie, reorderItems: Le, updateItemFields: Re, addDialogOpen: ze, setAddDialogOpen: Be, openAddDialog: Ve, itemsForReorder: He, handleReorder: Ue, defaultRenderThumbnail: We } = Ux({
		initialItems: Ce,
		availableItems: n,
		pageComponents: r,
		payload: he,
		setup: xe,
		stateKey: w,
		onItemsChange: T,
		onStateChange: E,
		resolveNewItem: D,
		notifyError: u
	}), Ge = d(() => {
		let e = [];
		for (let t of Ne) {
			let n = Um(t) ? t.pages ?? [] : [t];
			for (let r of n) {
				if (!r?.id) continue;
				let n = Um(t) ? t : void 0;
				e.push({
					...r,
					kind: "page",
					id: r.id,
					pageNum: r.pageNum ?? e.length + 1,
					basePageNum: r.pageNum ?? e.length + 1,
					parentGroup: n,
					flowKey: NS(r, n)
				});
			}
		}
		return e.sort((e, t) => (e.basePageNum ?? 0) - (t.basePageNum ?? 0));
	}, [Ne]), Ke = d(() => JSON.stringify({
		format: xe?.format,
		orientation: xe?.orientation,
		width: xe?.width,
		height: xe?.height,
		bleed: xe?.bleed,
		showBleed: xe?.showBleed,
		preview: xe?.preview,
		flowPages: Ge.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|")
	}), [xe, Ge]), qe = d(() => Km(Me), [Me]), { allVirtualPages: Je, renderedVirtualPages: Ye, virtualTotalPageCount: Xe, registerMeasurement: Ze } = Kx({
		logicalPages: Ge,
		pageFilter: fe,
		layoutKey: Ke
	}), Qe = d(() => new Set(Ye.map((e) => e.virtualPageId)), [Ye]), $e = d(() => Hx({
		pageFormat: ve ? pe : Bx(pe),
		pageFilter: fe,
		pages: Ye
	}), [
		ve,
		pe,
		fe,
		Ye
	]), et = $e.active ? $e.plan : null, tt = d(() => et ? {
		...xe,
		binding: $e.setup.binding
	} : xe, [
		et,
		xe,
		$e.setup
	]);
	e.useEffect(() => {
		if (R() && $e.warnings.length) for (let e of $e.warnings) FS.has(e) || (FS.add(e), console.warn(`[uhuu-components] PageEditor cover spread: ${e}`));
	}, [$e.warnings]);
	let nt = d(() => Je.filter((e) => e.hasFlow && e.virtualPageIndex === 0 && (y || !!et || !Qe.has(e.virtualPageId))), [
		Je,
		Qe,
		y,
		et
	]);
	e.useEffect(() => {
		if (!ke) return;
		let e = setTimeout(() => {
			document.querySelector(`[data-page-item-id="${ke}"]`)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 300);
		return () => clearTimeout(e);
	}, [ke]);
	let rt = Wx({
		items: Me,
		reorderItems: Le,
		availableItemsToAdd: Pe,
		setPendingInsertPosition: Oe,
		openAddDialog: Ve
	}), it = s(async (e) => {
		let t = await Fe(e, De);
		t.success && (Ae(t.insertedId), je.current && clearTimeout(je.current), je.current = setTimeout(() => Ae(null), 1200), Oe({ mode: "end" }), e.repeatable && e.integration && Ee(e));
	}, [Fe, De]), at = s(() => {
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
	}, []), ot = s(() => {
		Oe(at()), Ve();
	}, [at, Ve]), st = e.useCallback((e, t, n) => {
		if (!t) return;
		let r = e.applyPatch?.(n, t);
		r && Re(t.id, r), e.onChange?.(t.id, n, {
			item: t,
			updateItem: (e) => Re(t.id, e)
		});
	}, [Re]), ct = (e) => /* @__PURE__ */ _("div", {
		className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none",
		children: [/* @__PURE__ */ g("span", { children: "Page" }), /* @__PURE__ */ _("span", { children: [
			e.pageNo,
			" / ",
			e.total
		] })]
	}), lt = (e, t, n) => v ? v({
		pageNo: e,
		total: Xe,
		pageId: t,
		parent: n
	}) : ct({
		pageNo: e,
		total: Xe
	}), ut = (t, n = {}) => {
		let i = t.parentGroup;
		if (y && n.renderVisible !== !1 && n.renderMode !== "content") return y({
			page: t,
			parent: i
		});
		let a = t.componentKey ?? t.id, o = ee && f ? f(t) : null, s = ee && f ? e.isValidElement(o) ? e.cloneElement(o, { opacity: ue }) : o : null, c = t.templateId ?? a, l = r[a], u = me?.getPagePayload ? me.getPagePayload(t) : hh(he, {
			id: t.id,
			templateId: c,
			componentKey: a
		}), d = uh(he, t, i), p = Yx({
			payload: he,
			page: t,
			parentGroup: i,
			pagePayload: u
		});
		return /* @__PURE__ */ g(hb, {
			pageId: t.id,
			templateId: c,
			pageNo: t.pageNum,
			measurementPageNo: t.basePageNum,
			component: l,
			payload: he,
			pagePayload: u,
			integration: d,
			page: t,
			parentGroup: i,
			componentKey: a,
			setup: tt,
			reference: s,
			overlay: ({ pageNo: e }) => lt(e, t.id, i),
			className: t.className,
			dataBinding: p,
			totalPages: Xe,
			measurementTotalPages: qe,
			flowPageIndex: t.virtualPageIndex,
			flowChunksByFlowId: t.flowChunksByFlowId,
			measureFlow: n.measureFlow ?? (!!t.hasFlow && t.virtualPageIndex === 0),
			flowMeasurementKey: t.flowKey,
			flowMeasurementVersion: Ke,
			onFlowMeasurement: t.hasFlow ? Ze : void 0,
			renderVisible: n.renderVisible ?? !0,
			renderMode: n.renderMode,
			spread: n.spread
		}, `${n.renderVisible === !1 ? "measure-only" : "page"}-${t.virtualPageId}`);
	}, dt = (e) => {
		let t = e.componentKey ?? e.templateId ?? e.id;
		return [t ? `uhuu-page--${t}` : "", e.className].filter(Boolean).join(" ");
	}, ft = (e) => {
		if (!et) return null;
		let { binding: t, page: n } = et, [r, a] = e.panels, o = r.page, s = a.page, c = (r) => ({
			sheet: e.sheet,
			side: r,
			spine: t.spine,
			glue: t.glue,
			bleed: n.bleed
		}), l = `Cover sheet ${e.index + 1} · ${e.sheet} (pages ${o.pageNum} + ${s.pageNum})`;
		return /* @__PURE__ */ g("div", {
			"data-page-item-id": s.parentGroup?.id ?? s.id,
			children: /* @__PURE__ */ g(Gh, {
				title: l,
				controls: /* @__PURE__ */ _("div", {
					"data-uhuu-editor": !0,
					className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9",
					children: [/* @__PURE__ */ _("span", {
						className: "page-number",
						children: [
							o.pageNum,
							" + ",
							s.pageNum
						]
					}), /* @__PURE__ */ g("span", {
						className: "text-xs text-gray-500",
						children: l
					})]
				}),
				children: /* @__PURE__ */ g(te, {
					setup: tt,
					children: /* @__PURE__ */ g(Dt, {
						sheet: e.sheet,
						pageNo: [o.pageNum, s.pageNum],
						left: ut(o, {
							renderMode: "content",
							spread: c("left")
						}),
						right: ut(s, {
							renderMode: "content",
							spread: c("right")
						}),
						spine: i && e.sheet === "outer" ? /* @__PURE__ */ g(i, {
							payload: he,
							sheet: "outer",
							spine: t.spine,
							glue: t.glue,
							bleed: n.bleed,
							height: n.height,
							totalPages: Xe,
							pages: {
								left: o,
								right: s
							}
						}) : void 0,
						overlay: ({ pageNo: e, side: t }) => {
							let n = t === "left" ? o : s;
							return lt(e, n.id, n.parentGroup);
						},
						leftClassName: dt(o),
						rightClassName: dt(s),
						leftPageKey: o.componentKey ?? o.templateId ?? o.id,
						rightPageKey: s.componentKey ?? s.templateId ?? s.id
					})
				})
			})
		}, `cover-sheet-${e.sheet}`);
	}, pt = (e, t, n) => {
		let r = !!t && Um(t), i = r && t.pages[0]?.id === e.id;
		if (e.virtualPageIndex > 0) return /* @__PURE__ */ _("div", {
			"data-uhuu-editor": !0,
			className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9",
			children: [/* @__PURE__ */ g("span", {
				className: "page-number",
				children: e.pageNum
			}), /* @__PURE__ */ g("span", {
				className: "text-xs text-gray-500",
				children: z("page.continued", { name: re(e.label) || e.componentKey || e.id })
			})]
		});
		if (r && !i) return /* @__PURE__ */ g("div", {
			"data-uhuu-editor": !0,
			className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9",
			children: /* @__PURE__ */ _("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ g("span", {
						className: "page-number",
						children: e.pageNum
					}),
					e.label && /* @__PURE__ */ g("span", {
						className: "text-xs text-gray-500",
						children: re(e.label)
					}),
					/* @__PURE__ */ g("span", {
						className: "text-xs text-gray-400",
						children: "·"
					})
				]
			})
		});
		let a = r ? t : e, o = r ? re(t.label) || t.id : re(e.label) || z("page.fallbackName", { number: e.pageNum });
		return /* @__PURE__ */ _("div", {
			"data-uhuu-editor": !0,
			className: "pl-0 flex items-center h-9",
			children: [
				/* @__PURE__ */ g("span", {
					className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1",
					children: e.pageNum
				}),
				/* @__PURE__ */ g(zx, {
					name: o,
					canRename: !0,
					canMoveUp: !!n?.onMoveUp,
					canMoveDown: !!n?.onMoveDown,
					canAddPage: !!n?.onAddPage,
					canDuplicate: !!n?.onDuplicate,
					canDelete: qe > 1,
					onRename: (e) => Re(a.id, { label: e || void 0 }),
					onMoveUp: n?.onMoveUp,
					onMoveDown: n?.onMoveDown,
					onAddPage: n?.onAddPage,
					onDuplicate: n?.onDuplicate,
					onDelete: () => Ie(a.id)
				}),
				/* @__PURE__ */ g("span", {
					className: "pl-1",
					children: we.length > 0 && /* @__PURE__ */ g(Rx, {
						pageOptions: we,
						targetItem: a,
						onChange: st,
						title: z(r ? "page.groupOptions" : "page.options")
					})
				})
			]
		});
	}, mt = d(() => {
		if (be !== "two_pages") return [];
		let e = Ye;
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
	}, [be, Ye]), ht = /* @__PURE__ */ _("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ g(fb, {
				variant: "secondary",
				className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0",
				children: z("toolbar.pages", { count: Xe })
			}),
			ee && /* @__PURE__ */ g(jS, {
				modes: k,
				selectedMode: V,
				onModeChange: (e, t) => {
					se(e), B(t.filter ?? null), oe(t.pageFormat ?? null), le((e) => e + 1);
				},
				interactive: I,
				onInteractiveChange: (e) => {
					L(e), e && oe(null);
				},
				hasReferenceRenderer: !!f,
				referenceOpacity: ue,
				onReferenceOpacityChange: de,
				brandKits: j,
				activeBrandKitId: M,
				onSelectBrandKit: N,
				onAddBrandKit: P
			}),
			I && /* @__PURE__ */ _(h, { children: [Pe.length > 0 && /* @__PURE__ */ _(Di, {
				variant: "ghost",
				size: "sm",
				onClick: ot,
				title: z("toolbar.addHint"),
				className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
				children: [/* @__PURE__ */ g(Ar, { className: "w-3.5 h-3.5" }), z("toolbar.add")]
			}), /* @__PURE__ */ _(Di, {
				variant: "ghost",
				size: "sm",
				onClick: () => _e(!0),
				title: z("toolbar.reorderHint"),
				className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
				children: [/* @__PURE__ */ g(Sr, { className: "w-3.5 h-3.5" }), z("toolbar.reorder")]
			})] })
		]
	});
	return /* @__PURE__ */ _(h, { children: [
		nt.map((e) => ut(e, {
			renderVisible: !1,
			measureFlow: !0
		})),
		ee && !I && /* @__PURE__ */ _(Di, {
			onClick: () => {
				L(!0), oe(null);
			},
			"data-uhuu-editor": !0,
			size: "sm",
			className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
			title: "Back to Edit Mode",
			children: [/* @__PURE__ */ g(Fr, { className: "w-4 h-4" }), "Back to Editor"]
		}),
		/* @__PURE__ */ g(Kh, {
			defaultZoom: 80,
			defaultZoomMode: A,
			minZoom: 25,
			maxZoom: 200,
			menuItems: b ?? ht,
			onAddPage: ot,
			preview: be,
			children: et ? et.sheets.map(ft) : be === "two_pages" ? mt.map((e, t) => {
				let n = e.left ?? e.right, r = e.right ?? e.left, i = n?.parentGroup?.id ?? n?.id ?? null, a = r?.parentGroup?.id ?? r?.id ?? null, o = e.left?.parentGroup?.id ?? e.left?.id, s = e.right?.parentGroup?.id ?? e.right?.id, c = o === ke, l = s === ke, u = (e, t) => rt(e ? e.parentGroup ?? e : void 0, t);
				return /* @__PURE__ */ _(Hh, {
					layout: e.layout,
					pageItemId: a ?? void 0,
					children: [e.left && /* @__PURE__ */ g("div", {
						"data-page-item-id": e.left.virtualPageIndex === 0 ? o : void 0,
						className: c ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
						children: /* @__PURE__ */ g(Gh, {
							title: `Sheet ${e.left.pageNum}`,
							controls: pt(e.left, e.left.parentGroup, u(e.left, i)),
							origin: e.left.pageNum % 2 == 0 ? "right" : "left",
							children: ut(e.left)
						}, e.left.virtualPageId)
					}), e.right && /* @__PURE__ */ g("div", {
						"data-page-item-id": e.right.virtualPageIndex === 0 ? s : void 0,
						className: l ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
						children: /* @__PURE__ */ g(Gh, {
							title: `Sheet ${e.right.pageNum}`,
							controls: pt(e.right, e.right.parentGroup, u(e.right, a)),
							origin: e.right.pageNum % 2 == 0 ? "right" : "left",
							children: ut(e.right)
						}, e.right.virtualPageId)
					})]
				}, `pair-${t}`);
			}) : Ye.map((e) => {
				let t = e.parentGroup ?? e, n = e.parentGroup?.id ?? e.id, r = rt(t, n), i = e.parentGroup?.id ?? e.id, a = ke === i;
				return /* @__PURE__ */ g("div", {
					"data-page-item-id": e.virtualPageIndex === 0 ? i : void 0,
					className: a ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
					children: /* @__PURE__ */ g(Gh, {
						title: `Sheet ${e.pageNum}`,
						controls: pt(e, e.parentGroup, r),
						children: ut(e)
					})
				}, e.virtualPageId);
			})
		}, `dev-mode-${ce}-${V ?? "default"}`),
		I && !ne && /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(jg, {
			open: ze,
			onOpenChange: Be,
			availableItems: Pe,
			onSelectItem: it,
			pageComponents: r,
			payload: he,
			setup: Se,
			gridColsClass: x,
			"data-uhuu-editor": !0
		}), /* @__PURE__ */ g(mb, {
			open: ge,
			onOpenChange: _e,
			pages: He,
			onReorder: (e) => {
				Ue(e), _e(!1);
			},
			onRemove: (e) => Ie(e.id),
			pageComponents: r,
			payload: he,
			setup: Se,
			renderThumbnail: We,
			title: re(S) ?? z("reorderDialog.title"),
			description: re(C) ?? z("reorderDialog.description"),
			gridColsClass: x,
			"data-uhuu-editor": !0
		})] }),
		/* @__PURE__ */ g(PS, {
			label: Te ? re(Te.label) ?? Te.id : null,
			onDone: () => Ee(null),
			onAddAnother: () => {
				let e = Te;
				Ee(null), e && it(e);
			}
		})
	] });
}
function LS(e) {
	let { templateConfig: t, ...n } = e;
	return c(gh) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ g(IS, { ...n }) : /* @__PURE__ */ g(yh, {
		payload: e.payload,
		onPayloadChange: e.onPayloadChange,
		stateKey: e.stateKey,
		children: /* @__PURE__ */ g(IS, { ...n })
	});
}
function RS(t) {
	let n = c(gh), { t: r } = gi(), i = n?.payload ?? t.payload, a = e.useMemo(() => eS({
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
	}, []), d = e.useMemo(() => Zm(i), [i]), f = e.useMemo(() => {
		if (!d?.items) return a.initialItems;
		let e = t.templateConfig.groups ?? {}, n = Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
			id: e,
			...t
		})), r = new Map(n.map((e) => [e.id, e])), o = t.templateConfig.pages ?? {}, s = (e) => {
			let t = e?.componentKey ?? e?.templateId ?? e?.id;
			return !(o[t] ?? o[e?.templateId] ?? o[e?.id])?.hasFlow || e?.hasFlow ? e : {
				...e,
				hasFlow: !0
			};
		}, c = d.items.map((e) => {
			if (e.kind !== "group") return s(e);
			let t = e.templateId ?? e.id, n = r.get(t), a = n?.strictPosition !== void 0 && !e.strictPosition ? {
				...e,
				strictPosition: n.strictPosition
			} : e, c = {
				...a,
				pages: (a.pages ?? []).map(s)
			};
			if (!n || typeof n.pageComponentKeys != "function") return c;
			try {
				let e = n.pageComponentKeys({
					payload: i,
					item: void 0,
					parent: void 0
				});
				return Array.isArray(e) ? e.length === 0 ? {
					...c,
					pages: []
				} : {
					...c,
					pages: e.map((e, t) => {
						let n = o[e], r = n?.dataKey;
						return {
							id: `${c.id}__${r ?? e}__${t}`,
							componentKey: e,
							templateId: e,
							...r ? { dataKey: r } : {},
							...n?.hasFlow ? { hasFlow: !0 } : {}
						};
					})
				} : (console.error(`[PageEditor] pageComponentKeys for group ${a.id} must return an array, got:`, typeof e), a);
			} catch (e) {
				return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${c.id}:`, e), c;
			}
		}), l = new Set(a.initialItems.map((e) => e.id)), u = c.filter((e) => l.has(e.id)), f = Km(u), p = Km(a.initialItems);
		if (!Array.from(l).some((e) => !u.some((t) => t.id === e)) && f !== p) {
			let e = c.filter((e) => {
				if (e.kind !== "group") return !l.has(e.id);
				let t = e.templateId ?? e.id;
				return e.id !== t && !l.has(e.id);
			});
			if (e.length === 0) return a.initialItems;
			let t = [...a.initialItems, ...e], n = t.filter((e) => e.strictPosition === "start"), r = t.filter((e) => e.strictPosition === "end"), i = t.filter((e) => !e.strictPosition);
			return [
				...n,
				...i,
				...r
			];
		}
		return c;
	}, [
		d?.items,
		a.initialItems,
		i,
		t.templateConfig.groups,
		t.templateConfig.pages
	]);
	return /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(LS, {
		...t,
		payload: i,
		initialItems: f,
		availableItems: a.availableItems,
		pageComponents: a.pageComponents,
		spineComponent: o,
		notifyError: u
	}), /* @__PURE__ */ g(_S, {
		open: s.open,
		onOpenChange: (e) => {
			e || l({
				open: !1,
				message: ""
			});
		},
		children: /* @__PURE__ */ _(bS, { children: [/* @__PURE__ */ _(xS, { children: [/* @__PURE__ */ g(CS, { children: r("notice.cannotRemoveTitle") }), /* @__PURE__ */ g(wS, { children: s.message })] }), /* @__PURE__ */ g(SS, { children: /* @__PURE__ */ g(TS, {
			onClick: () => l({
				open: !1,
				message: ""
			}),
			children: r("notice.ok")
		}) })] })
	})] });
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-adapter.ts
function zS(e, t) {
	if (e && t) {
		if (e.includes("??")) {
			let n = e.split("??").map((e) => e.trim());
			for (let e of n) {
				let n = BS(t, e);
				if (n != null) return n;
			}
		} else return BS(t, e);
	}
}
function BS(e, t) {
	if (!t) return e;
	let n = t.split("."), r = e;
	for (let e of n) {
		if (r == null) return;
		r = r[e];
	}
	return r;
}
function VS(e, t, n) {
	let r = {};
	for (let [n, i] of Object.entries(e)) typeof i == "function" ? r[n] = i(t) : typeof i == "string" && (r[n] = zS(i.startsWith("integration.") ? i.slice(12) : i, t));
	return r;
}
function HS(e, t, n) {
	return e(t, n);
}
function US(e, t, n) {
	return typeof e == "function" ? HS(e, t, n) : VS(e, t, n);
}
function WS(e, t, n) {
	if (e?.defaults?.imageGalleryPath) return e.defaults.imageGalleryPath;
	if (n) {
		if (typeof n == "function") {
			let e = n(t);
			if (e) return e;
		} else if (typeof n == "string") return n;
	}
	return t?.media?.images ? "media.images" : t?.listing?.media?.images ? "listing.media.images" : t?.pba_listing?.media?.images ? "pba_listing.media.images" : t?.property?.media?.images ? "property.media.images" : null;
}
function GS(e, t, n = {}, r, i = null) {
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
function KS(t) {
	let { dataBinding: n, integration: r, resolver: i, galleryPath: a, defaults: o } = t, s = e.useMemo(() => US(i, r, n?.payload), [
		i,
		r,
		n?.payload
	]), c = e.useMemo(() => WS(n, r, a), [
		n,
		r,
		a
	]), l = e.useCallback((e, t = {}, r) => GS(n, e, t, r, c), [n, c]), u = e.useCallback((e, t = {}, n) => {
		let r = l(e, t, n);
		if (!r) return {};
		let i = Ue({ dialog: r }, { page: { paginationType: "static" } });
		if (i.onClick) {
			let e = i.onClick;
			i.onClick = (t) => {
				t.stopPropagation(), e(t);
			};
		}
		return i;
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
var qS = {
	Pagination: te,
	Sheet: ne,
	FlowArea: Ie,
	FlowPage: Le,
	Flow: Ve,
	FlowColumns: He,
	planFlowChunks: oe,
	planFlowColumnChunks: pe,
	createFlowPlanMetrics: ae,
	flowMeasure: me,
	FlowDocument: lt,
	markdownToFlowItems: wt,
	htmlToFlowItems: at,
	planCoverSpread: N,
	resolveSheetSize: j,
	CoverSpread: Dt
}, JS = {
	TemplateDataProvider: yh,
	PageEditor: RS,
	InteractiveModeProvider: Si,
	useInteractive: vi,
	useIntegrationAdapter: KS
};
//#endregion
export { lm as BRAND_KIT_PUBLIC_BASE_URL, Bm as BrandKitProvider, Je as Editable, JS as EditorShell, xp as ImageBlock, qS as Static, Cm as brandKitCollection, Tm as brandKitEnv, ym as brandKitLogo, Em as brandKitMapStyle, pm as brandKitSourceUrl, Ue as getDialogProps, Ap as imageUrl, mm as loadBrandKit, Vm as useBrandKit };

//# sourceMappingURL=uhuu-components.es.js.map