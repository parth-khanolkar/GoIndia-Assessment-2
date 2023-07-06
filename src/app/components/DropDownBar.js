import React, { useState } from 'react';

const DropdownBar = ({ dropDownItems = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    console.log("Selected Item--->", item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown relative z-30">
      <button
        className="dropdown-toggle py-2 px-4 bg-gray-200 text-gray-700 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? `${selectedItem.label}` : 'Select Company'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu absolute left-0 w-full bg-white mt-2 shadow-lg rounded-md">
          {dropDownItems.map((item, index) => (
            <li
              key={index}
              className="dropdown-item py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownBar;
