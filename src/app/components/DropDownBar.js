import React, { useState } from 'react';
import MdArrowDropDown from 'react-icons/md'

const DropdownBar = ({ dropDownItems = [],sendData }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    sendData(item);
  };

  return (
    <div className="dropdown relative z-30 ">
      <button
        className="dropdown-toggle py-2 px-4 bg-gray-200 text-gray-700 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? `${selectedItem.label}` : 'Select Company'}
      {/* <MdArrowDropDown/> */}
      </button>
      <div className="">
        {isOpen && (
          <ul className="dropdown-menu absolute overflow-y-auto max-h-[40vh]  left-0 w-full bg-white mt-2 shadow-lg rounded-md">
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
    </div>

   

  );
};

export default DropdownBar;
