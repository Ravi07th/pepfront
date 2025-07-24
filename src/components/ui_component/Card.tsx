import React from "react";
import SwitchCode from "./SwitchCode";
const IMAGE = "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80";

const commonCard = `
    <div className="bg-white w-1/4 p-6 text-black rounded shadow">
        <h2 className="font-bold text-xl mb-2">Default Card</h2>
        <p className="text-gray-700">Some quick demo text to build on the card title.</p>
      </div>
      {/* 2 */}
      <div className="bg-white w-1/4 p-6 rounded-lg border shadow">
        <h4 className="font-semibold text-lg mb-1">Card with Button</h4>
        <p className="mb-4">Description about the action on this card.</p>
        <button className="bg-blue-600 text-white rounded px-4 py-2">Action</button>
      </div>
      {/* 3 */}
      <div className="bg-white w-1/4 rounded-lg shadow border flex flex-col">
        <div className="p-4 border-b">
          <span className="text-slate-400 text-xs">HEADER</span>
        </div>
        <div className="p-4 flex-1">
          <h4 className="mb-2 font-bold">Header & Footer Card</h4>
          <p className="text-gray-500">Show extra structure.</p>
        </div>
        <div className="p-4 border-t">
          <button className="text-xs rounded bg-slate-700 text-white px-3 py-2">Action</button>
        </div>
      </div>
`
export default function Card() {
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
            <div className="flex flex-wrap w-full gap-6 text-black  overflow-x-auto border-white border rounded-lg p-4">
                {/* 1 */}
                <div className="bg-white w-1/4 p-6 text-black rounded shadow">
                    <h2 className="font-bold text-xl mb-2">Default Card</h2>
                    <p className="text-gray-700">Some quick demo text to build on the card title.</p>
                </div>
                {/* 2 */}
                <div className="bg-white w-1/4 p-6 rounded-lg border shadow">
                    <h4 className="font-semibold text-lg mb-1">Card with Button</h4>
                    <p className="mb-4">Description about the action on this card.</p>
                    <button className="bg-blue-600 text-white rounded px-4 py-2">Action</button>
                </div>
                {/* 3 */}
                <div className="bg-white w-1/4 rounded-lg shadow border flex flex-col">
                    <div className="p-4 border-b">
                        <span className="text-slate-400 text-xs">HEADER</span>
                    </div>
                    <div className="p-4 flex-1">
                        <h4 className="mb-2 font-bold">Header & Footer Card</h4>
                        <p className="text-gray-500">Show extra structure.</p>
                    </div>
                    <div className="p-4 border-t">
                        <button className="text-xs rounded bg-slate-700 text-white px-3 py-2">Action</button>
                    </div>
                </div>
                <SwitchCode tailwindCode={commonCard} uiMaterialCode={''} />
            </div>

            <div className=" mt-5 mb-2">
                <h1 className="text-4xl font-bold text-green-500">Card With Image</h1>
                <p className="text-lg color-gray-600 text-gray-400">Normal Tailwind CSS buttons use utilities like bg, text, px, and rounded for basic styling. They're simple, responsive, and easy to customize with hover and transition effects. </p>
            </div>

            <div className="flex flex-wrap w-full gap-6 text-black  overflow-x-auto border-white border rounded-lg p-4">
                {/* 1 */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img className="w-full h-36 object-cover" src={IMAGE} alt="" />
                    <div className="p-4">
                        <h5 className="text-lg font-bold mb-2">Card with Image</h5>
                        <p>Supporting text below image.</p>
                    </div>
                </div>

                <div className="bg-white flex flex-col md:flex-row rounded shadow overflow-hidden">
                    <img className="w-full md:w-48 h-36 object-cover" src={IMAGE} alt="horizontal" />
                    <div className="p-4">
                        <h4 className="font-medium text-lg">Horizontal Card</h4>
                        <p className="text-gray-600">Horizontal layout content.</p>
                    </div>
                </div>

                <SwitchCode tailwindCode={commonCard} uiMaterialCode={''} />

            </div>
        </>

    );
}

