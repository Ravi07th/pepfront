

import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';

const components = [
  'Button',
  'Card',
  'Header',
  'Footer',
  'Badge',
  'Avatar',
  'Modal',
  'Form',
  'Navbar',
];

const componentDetails: Record<string, React.ReactNode> = {
  Button: <Button/>,
  Card: <Card/>
//   Card: 'Cards are used to group related data.',
//   Header: 'Headers appear at the top of pages.',
//   Footer: 'Footers appear at the bottom with links and copyright.',
//   Badge: 'Badges show count or status.',
//   Avatar: 'Avatars are used for user pictures.',
//   Modal: 'Modals show content in overlays.',
//   Form: 'Forms collect user input.',
//   Navbar: 'Navbars provide top-level navigation.',
};

 function UiHome() {
  const [selectedComponent, setSelectedComponent] = useState('Button');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredComponents = components.filter(c =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-4 text-lg overflow-y-auto">
        <input
          type="text"
          placeholder="Search component..."
          className="w-full mb-4 px-3 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className='space-y-1'>
          {filteredComponents.map((component) => (
            <li
              key={component}
              onClick={() => setSelectedComponent(component)}
              className={`p-1 cursor-pointer rounded hover:bg-gray-700 ${
                selectedComponent === component ? 'bg-gray-700' : ''
              }`}
            >
              {component}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-800 p-8 overflow-y-auto">
        <h1 className="text-4xl text-blue-500 font-bold mb-4">{selectedComponent}</h1>
        <p>{componentDetails[selectedComponent]}</p>
      </div>
    </div>
  );
}

export default UiHome;
