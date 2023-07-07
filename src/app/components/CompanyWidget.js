import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';


const CompanyWidget = ({featuredCompanies=[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const widgetRef = useRef(null)

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    const handleScrollClick = (type) => {
        if (type === "left") {

            // widgetRef.current
            // slide to left
            if (widgetRef.current) {
                widgetRef.current.scrollLeft -= 100; // Adjust the scroll distance as needed
              }
        } else {
            
            // widgetRef.current
            // slide to right
            if (widgetRef.current) {
                widgetRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
              }
        }
    }

    // console.log("Featured Compannies: ", featuredCompanies);
  return (
    <div>
   <div className='text-red-700 text-lg font-semibold pl-4'>
    FEATURED COMPANIES
    </div>
    
    <div className='relative'>
        <div ref={widgetRef} className=" border h-17 flex flex-row bg-sky-100 overflow-x-scroll w-[100vw] mx-4 ">
            <div
            onClick={() => handleScrollClick("left")}
            className='absolute left-0 top-0 bottom-0 flex items-center bg-sky-400 '>
                <AiFillCaretLeft/>
            </div>

            {featuredCompanies?.map((item, index) => (
                <div key={index} className='min-w-[120px] '>
                    <img
                        src={item?.ImageURL}
                        
                        className='h-16 min-w-[120px] object-contain'   
                        alt={item?.CompanyName}
                    />
                </div>
            ))}
            <div
            onClick={() => handleScrollClick("right")}
            className='absolute right-0 top-0 bottom-0 flex items-center bg-sky-400'>
                <AiFillCaretRight/>
            </div>
    </div>
    </div>
    

    </div>
  )
}

export default CompanyWidget
