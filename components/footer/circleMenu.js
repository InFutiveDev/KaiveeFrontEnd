import Link from 'next/link';
import { useState } from 'react';

const CircleMenuSidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`bg-purple-900 min-h-screen flex items-center justify-center ${isActive ? 'active' : ''}`}>
      <button
        className="fixed top-6 left-6 bg-purple-600 p-2 rounded-lg text-white"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
      <ul className="bg-purple-600 p-4 rounded-full w-72 h-72 relative transform scale-20 transition-transform">
        {Array.from({ length: 6 }).map((_, index) => (
          <li
            key={index}
            className={`absolute w-36 h-36 origin-bottom-right hidden rotate-${index * 60} skew-30 ${
              index % 2 === 0 ? 'bg-purple-800' : 'bg-purple-600'
            }`}
          >
              <a className="block w-72 h-72 rounded-full text-center bg-purple-600 text-white text-4xl leading-72">
                <i className="fa fa-home"></i>
              </a>
          </li>
        ))}
        <li className="w-20 h-20 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="block w-20 h-20 text-4xl text-gray-300 text-center leading-20">
              <i className="fa fa-times"></i>
            </a>
        </li>
      </ul>
    </div>
  );
};

export default CircleMenuSidebar;
