import { TriangleAlertIcon } from "lucide-react";
import { useState } from "react";
import SwitchCode from "./SwitchCode";
import { gradientButton, normalButton } from "@/data/UiMaterialConstants";
export default function Button() {


    const normalTailwind = `
        <button className="bg-gray-200 text-black py-1 px-4 border-1 border-gray-200 rounded hover:cursor-default">Default</button>
        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Rounded</button>
        <button className="text-white bg-blue-500 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-4  py-2 text-center" disabled>Disabled </button>
        <button className="bg-blue-600 text-white  px-4 py-2">Primary</button>
        <button className="bg-yellow-400 text-white px-4 py-2">Secondary</button>
        <button className="bg-red-600 text-white px-4 py-2">Danger</button>
    `;

    const gradientTailwind = `
        <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Green to Teal</button>
        <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Indigo to Blue</button>
        <button className="bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Rose to Fuchsia</button>
        <button className="bg-gradient-to-r from-emerald-400 to-lime-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Emerald to Lime</button>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Purple to Pink</button>
        <button className="bg-gradient-to-r from-gray-600 to-black text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Gray to Black</button>
        <button className="bg-gradient-to-r from-sky-400 to-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Sky to Indigo</button>
        <button className="bg-gradient-to-r from-amber-400 to-red-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Amber to Red</button>
        <button className="bg-gradient-to-r from-yellow-300 to-lime-400 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Yellow to Lime</button>
        <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Teal to Cyan</button>
        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Red to Orange</button>
        <button className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Slate to Gray</button>
        <button className="bg-gradient-to-r from-violet-400 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Violet to Purple</button>
    `;

    const outlinedTailwind = `
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">Red</button>
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition">Green</button>
        <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">Yellow</button>
        <button className="border border-lime-500 text-lime-500 px-4 py-2 rounded hover:bg-lime-500 hover:text-black transition">Lime</button>
        <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition">Teal</button>
        <button className="border border-emerald-500 text-emerald-500 px-4 py-2 rounded hover:bg-emerald-500 hover:text-white transition">Emerald</button>
        <button className="border border-slate-500 text-slate-500 px-4 py-2 rounded hover:bg-slate-500 hover:text-white transition">Slate</button>
        <button className="border border-violet-500 text-violet-500 px-4 py-2 rounded hover:bg-violet-500 hover:text-white transition">Violet</button>
        <button className="border border-fuchsia-500 text-fuchsia-500 px-4 py-2 rounded hover:bg-fuchsia-500 hover:text-white transition"> Fuchsia</button>
        <button className="border border-amber-500 text-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-black transition">Amber</button>
        <button className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition"> Black</button>
    `;

    const shadowTailwind = `
        <button className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:shadow-lg transition">Red</button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded shadow-lg hover:shadow-xl transition">Yellow</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded shadow hover:shadow-2xl transition">Purple</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded shadow-md hover:shadow-xl transition">Pink</button>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded shadow-lg hover:shadow-2xl transition">Cyan</button>
        <button className="bg-lime-500 text-black px-4 py-2 rounded shadow hover:shadow-xl transition">Lime</button>
        <button className="bg-teal-500 text-white px-4 py-2 rounded shadow hover:shadow-lg transition">Teal</button>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded shadow-lg hover:shadow-2xl transition">Emerald</button>
        <button className="bg-slate-500 text-white px-4 py-2 rounded shadow-md hover:shadow-xl transition">Slate</button>
        <button className="bg-black text-white px-4 py-2 rounded shadow-lg hover:shadow-2xl transition">Black</button>
        <button className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-lg shadow-[0_8px_24px_rgba(56,189,248,0.4)] hover:shadow-[0_10px_32px_rgba(56,189,248,0.6)] transition">Sky Gradient</button>
        <button className="bg-gradient-to-r from-green-400 to-emerald-600 text-white px-6 py-2 rounded-full shadow-[0_8px_24px_rgba(52,211,153,0.5)] hover:shadow-[0_10px_30px_rgba(5,150,105,0.6)] transition">Green Pulse</button>
        <button className="bg-gradient-to-tr from-yellow-400 to-pink-500 text-white px-6 py-2 rounded shadow-[0_4px_20px_rgba(251,191,36,0.5)] hover:shadow-[0_6px_30px_rgba(236,72,153,0.6)] transition">Sunset Glow</button>
        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-xl shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_28px_rgba(126,34,206,0.5)] transition">Violet Flash</button>
        <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-2 rounded-lg shadow-[0_4px_30px_rgba(251,191,36,0.4)] hover:shadow-[0_4px_40px_rgba(249,115,22,0.5)] transition">Amber Blaze</button>
        <button className="bg-gradient-to-br from-rose-500 to-red-600 text-white px-6 py-2 rounded-lg shadow-[0_6px_24px_rgba(244,63,94,0.4)] hover:shadow-[0_8px_32px_rgba(220,38,38,0.5)] transition">Rose Burn</button>
        <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-lg shadow-[0_5px_25px_rgba(6,182,212,0.5)] hover:shadow-[0_7px_32px_rgba(13,148,136,0.6)] transition">Cyan Stream</button>
        <button className="bg-gradient-to-l from-lime-400 to-green-500 text-black px-6 py-2 rounded-full shadow-[0_4px_25px_rgba(132,204,22,0.4)] hover:shadow-[0_6px_30px_rgba(34,197,94,0.5)] transition">Lime Mint</button>
        <button className="bg-gradient-to-tr from-neutral-700 to-gray-900 text-white px-6 py-2 rounded shadow-[0_0_20px_rgba(55,65,81,0.5)] hover:shadow-[0_0_30px_rgba(31,41,55,0.6)] transition">Dark Metal</button>
        <button className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white px-6 py-2 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition">Indigo Glow</button>
    
    `;

    const loadingTailwind = `
        <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">
            <svg className="w-5 h-5 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Please wait
        </button>
        <button className="flex items-center gap-2 px-5 py-2 bg-gray-800 border border-white text-white rounded-lg">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing
        </button>
        <button className="p-2 rounded-full bg-indigo-600">
            <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white rounded">
            Submit
            <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed" disabled>
            <svg className="w-4 h-4 animate-spin text-gray-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading...
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg">
            Saving
            <span className="flex space-x-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-150" />
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-300" />
            </span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg">
            <span className="relative w-4 h-4">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
            </span>
            Connecting...
        </button>
    `;

const socialMediaTailwind = `
        <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
            </svg>
            Sign in with Facebook
        </button>
        <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
            </svg>
            Sign in with Twitter
        </button>
        <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
            </svg>
            Sign in with Github
        </button>
        <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
            </svg>
            Sign in with Google
        </button>
        <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            Sign in with Apple
        </button>

        <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:shadow-md transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-5 h-5" />
            Google
        </button>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" className="w-5 h-5" />
            Facebook
        </button>

        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5" />
            GitHub
        </button>

        <button className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" className="w-5 h-5" />
            Twitter
        </button>

        <button className="flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded hover:bg-[#004182] transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-5 h-5" />
            LinkedIn
        </button>

        <button className="flex items-center gap-2 bg-[#FF0000] text-white px-4 py-2 rounded hover:bg-[#cc0000] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.101C19.723 3.5 12 3.5 12 3.5s-7.723 0-9.408.585A2.97 2.97 0 0 0 .502 6.186C0 7.871 0 12 0 12s0 4.129.502 5.814a2.97 2.97 0 0 0 2.09 2.101C4.277 20.5 12 20.5 12 20.5s7.723 0 9.408-.585a2.97 2.97 0 0 0 2.09-2.101C24 16.129 24 12 24 12s0-4.129-.502-5.814ZM9.75 15.5v-7l6.5 3.5-6.5 3.5Z" />
            </svg>
            YouTube
        </button>


        <button className="flex items-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded hover:bg-[#006da3] transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" className="w-5 h-5" />
            Telegram
        </button>

        <button className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#1da851] transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" />
            WhatsApp
        </button>

        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-5 h-5" />
            Git
        </button>

        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="w-5 h-5" />
            Linux
        </button>
    
    `;

    const specialTailwind = `
    
    `;

    const iconTailwind = `
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.75L12 3l9 6.75v10.5A1.75 1.75 0 0119.25 22H4.75A1.75 1.75 0 013 20.25V9.75z" />
            </svg>
            Home
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Search
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
            Settings
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            Alerts
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Item
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M9 6V4h6v2" />
            </svg>
            Delete
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
            Edit
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Lock
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 16l4-4-4-4" />
                <path d="M7 12h14" />
                <path d="M3 21V3" />
            </svg>
            Logout
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
            </svg>
            Profile
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            Bookmark
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Calendar
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Chat
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-800 rounded hover:bg-blue-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Info
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Warning
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
            View
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.99 10.99 0 0112 20C5 20 1 12 1 12a22.3 22.3 0 014.73-6.73m2.18-1.82A10.94 10.94 0 0112 4c7 0 11 8 11 8a21.91 21.91 0 01-2.39 3.76" />
                <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
            Hide
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded hover:bg-sky-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 115.82 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Help
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-800 rounded hover:bg-lime-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92V21a2 2 0 01-2.18 2 19.88 19.88 0 01-8.63-3.07A19.88 19.88 0 013.07 8.81 2 2 0 015 6.63h4.09a2 2 0 012 1.72c.12.82.37 1.61.73 2.36a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.75 6.75l1.27-1.27a2 2 0 012.11-.45c.75.36 1.54.61 2.36.73a2 2 0 011.72 2z" />
            </svg>
            Call
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded hover:bg-amber-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
            </svg>
            Cart
        </button>

    `;


    return (
        <>
        
            <h1 className="text-3xl mb-4 ">Tailwind CSS Buttons - Flowbite</h1>
            <p className="text-md  text-gray-400 ">A button is a key interactive element in any user interface. 
                It allows users to perform actions like submitting a form, navigating to another page, 
                opening a modal, or triggering a function. Buttons come in various types such as primary,
                 secondary, outline, ghost, and icon buttons — each used for different purposes based on design importance. 
                 They can include text, icons, or both, and should be clearly styled for accessibility and responsiveness. Buttons often use states like hover, active, and disabled to improve user experience and give visual feedback.

            </p>
            <div className=" mt-5 mb-2">
                <h1 className="text-4xl font-bold text-green-500">Normal Button</h1>
                <p className="text-lg color-gray-600 text-gray-400">Normal Tailwind CSS buttons use utilities like bg, text, px, and rounded for basic styling. They're simple, responsive, and easy to customize with hover and transition effects. </p>
            </div>
            <div className=" overflow-x-auto border-white border rounded-lg p-4">
                <div className="space-y-4 mb-5">
                    <div className="flex space-x-6 flex-row items-center">
                        <button className="bg-gray-200 text-black py-1 px-4 border-1 border-gray-200 rounded hover:cursor-default">Default</button>
                        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Rounded</button>
                        <button className="text-white bg-blue-500 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-4  py-2 text-center" disabled>Disabled </button>
                        <button className="bg-blue-600 text-white  px-4 py-2">Primary</button>
                        <button className="bg-yellow-400 text-white px-4 py-2">Secondary</button>
                        <button className="bg-red-600 text-white px-4 py-2">Danger</button>
                    </div>
                </div>
                <SwitchCode tailwindCode={normalTailwind} uiMaterialCode={normalButton} />
            </div>

            <div className=" mt-5 mb-2">
                <h1 className="text-4xl font-bold text-green-500">Gradient Button</h1>
                <p className="text-lg color-gray-600 text-gray-400">Normal Tailwind CSS buttons use utilities like bg, text, px, and rounded for basic styling. They're simple, responsive, and easy to customize with hover and transition effects. </p>
            </div>

            <div className=" overflow-x-auto border-white border rounded-lg p-4">
                <div className="space-y-4 mb-5">
                    <div className="flex space-x-6 flex-row items-center">

                        <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Green to Teal</button>

                        <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Indigo to Blue</button>
                        <button className="bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Rose to Fuchsia</button>
                        <button className="bg-gradient-to-r from-emerald-400 to-lime-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Emerald to Lime</button>

                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Purple to Pink</button><br />

                        <button className="bg-gradient-to-r from-gray-600 to-black text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Gray to Black</button>

                        <button className="bg-gradient-to-r from-sky-400 to-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Sky to Indigo</button>


                    </div>
                    <div className="flex space-x-6 flex-row items-center">
                        <button className="bg-gradient-to-r from-amber-400 to-red-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Amber to Red</button>
                        <button className="bg-gradient-to-r from-yellow-300 to-lime-400 text-black px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Yellow to Lime</button>

                        <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Teal to Cyan</button>

                        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Red to Orange</button>

                        <button className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Slate to Gray</button>

                        <button className="bg-gradient-to-r from-violet-400 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">Violet to Purple</button>
                    </div>
                </div>
                <SwitchCode tailwindCode={gradientTailwind} uiMaterialCode={gradientButton} />
            </div>

            <div className=" mt-5 mb-2">
                <h1 className="text-4xl font-bold text-green-500">Outline Button</h1>
                <p className="text-lg color-gray-600 text-gray-400">Normal Tailwind CSS buttons use utilities like bg, text, px, and rounded for basic styling. They're simple, responsive, and easy to customize with hover and transition effects. </p>
            </div>
            <div className=" overflow-x-auto border-white border rounded-lg p-4">
                <div className="space-y-4 mb-5">
                    <div className="flex space-x-6 ml-2 flex-row items-center">
                        <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"> Red</button>
                        <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition"> Green</button>
                        <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition"> Yellow</button>
                        <button className="border border-lime-500 text-lime-500 px-4 py-2 rounded hover:bg-lime-500 hover:text-black transition"> Lime</button>
                        <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition"> Teal</button>
                        <button className="border border-emerald-500 text-emerald-500 px-4 py-2 rounded hover:bg-emerald-500 hover:text-white transition"> Emerald</button>
                        <button className="border border-slate-500 text-slate-500 px-4 py-2 rounded hover:bg-slate-500 hover:text-white transition"> Slate</button>
                        <button className="border border-violet-500 text-violet-500 px-4 py-2 rounded hover:bg-violet-500 hover:text-white transition"> Violet</button>
                        <button className="border border-fuchsia-500 text-fuchsia-500 px-4 py-2 rounded hover:bg-fuchsia-500 hover:text-white transition"> Fuchsia</button>
                        <button className="border border-amber-500 text-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-black transition"> Amber</button>
                        <button className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition"> Black</button>
                    </div>
                </div>
                <SwitchCode tailwindCode={outlinedTailwind} uiMaterialCode={gradientButton} />
            </div>

            <div className=" mt-5 mb-2">
                <h1 className="text-4xl font-bold text-green-500">Shadow Button</h1>
                <p className="text-lg color-gray-600 text-gray-400">Normal Tailwind CSS buttons use utilities like bg, text, px, and rounded for basic styling. They're simple, responsive, and easy to customize with hover and transition effects. </p>
            </div>
            <div className=" overflow-x-auto border-white border rounded-lg p-4">
                <div className="space-y-4 mb-5">
                    <div className="flex space-x-6 ml-2 flex-row items-center">
                        <button className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:shadow-lg transition">Red</button>
                        <button className="bg-yellow-500 text-black px-4 py-2 rounded shadow-lg hover:shadow-xl transition">Yellow</button>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded shadow hover:shadow-2xl transition">Purple</button>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded shadow-md hover:shadow-xl transition">Pink</button>
                        <button className="bg-cyan-500 text-white px-4 py-2 rounded shadow-lg hover:shadow-2xl transition">Cyan</button>
                        <button className="bg-lime-500 text-black px-4 py-2 rounded shadow hover:shadow-xl transition">Lime</button>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded shadow hover:shadow-lg transition">Teal</button>
                        <button className="bg-emerald-500 text-white px-4 py-2 rounded shadow-lg hover:shadow-2xl transition">Emerald</button>
                        <button className="bg-slate-500 text-white px-4 py-2 rounded shadow-md hover:shadow-xl transition">Slate</button>
                        <button className="bg-black text-white px-4 py-2 rounded shadow-lg hover:shadow-2xl transition">Black</button>
                        <button className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-lg shadow-[0_8px_24px_rgba(56,189,248,0.4)] hover:shadow-[0_10px_32px_rgba(56,189,248,0.6)] transition">Sky Gradient</button>


                    </div>
                    <div className="flex space-x-6 ml-2 flex-row items-center">

                        <button className="bg-gradient-to-r from-green-400 to-emerald-600 text-white px-6 py-2 rounded-full shadow-[0_8px_24px_rgba(52,211,153,0.5)] hover:shadow-[0_10px_30px_rgba(5,150,105,0.6)] transition">Green Pulse</button>
                        <button className="bg-gradient-to-tr from-yellow-400 to-pink-500 text-white px-6 py-2 rounded shadow-[0_4px_20px_rgba(251,191,36,0.5)] hover:shadow-[0_6px_30px_rgba(236,72,153,0.6)] transition">Sunset Glow</button>

                        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-xl shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_28px_rgba(126,34,206,0.5)] transition">Violet Flash</button>

                        <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-2 rounded-lg shadow-[0_4px_30px_rgba(251,191,36,0.4)] hover:shadow-[0_4px_40px_rgba(249,115,22,0.5)] transition">Amber Blaze</button>

                        <button className="bg-gradient-to-br from-rose-500 to-red-600 text-white px-6 py-2 rounded-lg shadow-[0_6px_24px_rgba(244,63,94,0.4)] hover:shadow-[0_8px_32px_rgba(220,38,38,0.5)] transition">Rose Burn</button>

                        <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-lg shadow-[0_5px_25px_rgba(6,182,212,0.5)] hover:shadow-[0_7px_32px_rgba(13,148,136,0.6)] transition">Cyan Stream</button>

                        <button className="bg-gradient-to-l from-lime-400 to-green-500 text-black px-6 py-2 rounded-full shadow-[0_4px_25px_rgba(132,204,22,0.4)] hover:shadow-[0_6px_30px_rgba(34,197,94,0.5)] transition">Lime Mint</button>


                    </div>
                    <div className="flex space-x-6 ml-2 flex-row items-center">
                        <button className="bg-gradient-to-tr from-neutral-700 to-gray-900 text-white px-6 py-2 rounded shadow-[0_0_20px_rgba(55,65,81,0.5)] hover:shadow-[0_0_30px_rgba(31,41,55,0.6)] transition">Dark Metal</button>

                        <button className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white px-6 py-2 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition">Indigo Glow</button>
                    </div>
                </div>
                <SwitchCode tailwindCode={shadowTailwind} uiMaterialCode={gradientButton} />
            </div>

            <div className=" mt-5 mb-2">
                <h1 className="text-4xl font-bold text-green-500">Social Media Button</h1>
                <p className="text-lg color-gray-600 text-gray-400">Normal Tailwind CSS buttons use utilities like bg, text, px, and rounded for basic styling. They're simple, responsive, and easy to customize with hover and transition effects. </p>
            </div>
            <div className=" overflow-x-auto border-white border rounded-lg p-4">
                <div className="space-y-4 mb-5">
                    <div className="flex space-x-6 ml-2 flex-row items-center">
                        <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Facebook
                        </button>
                        <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Twitter
                        </button>
                        <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Github
                        </button>
                        <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Google
                        </button>
                        <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                            <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            Sign in with Apple
                        </button>
                    </div>  <div className="flex space-x-6 ml-2 flex-row items-center">
                        <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:shadow-md transition">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-5 h-5" />
                            Google
                        </button>

                        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" className="w-5 h-5" />
                            Facebook
                        </button>

                        <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5" />
                            GitHub
                        </button>

                        <button className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" className="w-5 h-5" />
                            Twitter
                        </button>

                        <button className="flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded hover:bg-[#004182] transition">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-5 h-5" />
                            LinkedIn
                        </button>

                        <button className="flex items-center gap-2 bg-[#FF0000] text-white px-4 py-2 rounded hover:bg-[#cc0000] transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.101C19.723 3.5 12 3.5 12 3.5s-7.723 0-9.408.585A2.97 2.97 0 0 0 .502 6.186C0 7.871 0 12 0 12s0 4.129.502 5.814a2.97 2.97 0 0 0 2.09 2.101C4.277 20.5 12 20.5 12 20.5s7.723 0 9.408-.585a2.97 2.97 0 0 0 2.09-2.101C24 16.129 24 12 24 12s0-4.129-.502-5.814ZM9.75 15.5v-7l6.5 3.5-6.5 3.5Z" />
                            </svg>
                            YouTube
                        </button>


                        <button className="flex items-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded hover:bg-[#006da3] transition">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" className="w-5 h-5" />
                            Telegram
                        </button>

                        <button className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#1da851] transition">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" />
                            WhatsApp
                        </button>
                    </div>  <div className="flex space-x-6 ml-2 flex-row items-center">
                        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-5 h-5" />
                            Git
                        </button>

                        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="w-5 h-5" />
                            Linux
                        </button>
                    </div>

                </div>
                <SwitchCode tailwindCode={socialMediaTailwind} uiMaterialCode={gradientButton} />
            </div>

            <div className=" mt-5 mb-2">
                <h1 className="text-4xl font-bold text-green-500">Icon Button</h1>
                <p className="text-lg color-gray-600 text-gray-400">Normal Tailwind CSS buttons use utilities like bg, text, px, and rounded for basic styling. They're simple, responsive, and easy to customize with hover and transition effects. </p>
            </div>
            <div className=" overflow-x-auto border-white border rounded-lg p-4">
                <div className="space-y-4 mb-5">
                    <div className="flex space-x-6 ml-2 flex-row items-center">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-200">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9.75L12 3l9 6.75v10.5A1.75 1.75 0 0119.25 22H4.75A1.75 1.75 0 013 20.25V9.75z" />
                            </svg>
                            Home
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-200">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            Search
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                            </svg>
                            Settings
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 01-3.46 0" />
                            </svg>
                            Alerts
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Add Item
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6l-1 14H6L5 6" />
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                                <path d="M9 6V4h6v2" />
                            </svg>
                            Delete
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                            </svg>
                            Edit
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0110 0v4" />
                            </svg>
                            Lock
                        </button>
                    </div><div className="flex space-x-6 ml-2 flex-row items-center">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 16l4-4-4-4" />
                                <path d="M7 12h14" />
                                <path d="M3 21V3" />
                            </svg>
                            Logout
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                            Upload
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
                            </svg>
                            Profile
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                            </svg>
                            Bookmark
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Calendar
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                            </svg>
                            Chat
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Send
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-800 rounded hover:bg-blue-100">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            Info
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            Warning
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            View
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.94 17.94A10.99 10.99 0 0112 20C5 20 1 12 1 12a22.3 22.3 0 014.73-6.73m2.18-1.82A10.94 10.94 0 0112 4c7 0 11 8 11 8a21.91 21.91 0 01-2.39 3.76" />
                                <line x1="1" y1="1" x2="23" y2="23" />
                            </svg>
                            Hide
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded hover:bg-sky-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 115.82 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            Help
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-800 rounded hover:bg-lime-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92V21a2 2 0 01-2.18 2 19.88 19.88 0 01-8.63-3.07A19.88 19.88 0 013.07 8.81 2 2 0 015 6.63h4.09a2 2 0 012 1.72c.12.82.37 1.61.73 2.36a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.75 6.75l1.27-1.27a2 2 0 012.11-.45c.75.36 1.54.61 2.36.73a2 2 0 011.72 2z" />
                            </svg>
                            Call
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded hover:bg-amber-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
                            </svg>
                            Cart
                        </button>
                    </div>
                </div>
                <SwitchCode tailwindCode={iconTailwind} uiMaterialCode={normalButton} />
            </div>







        </>
    )
}