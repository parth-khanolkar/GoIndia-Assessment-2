import React, { useState } from 'react'
import Image from 'next/image'


const CompanyWidget = ({featuredCompanies=[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    console.log("Featured Compannies: ", featuredCompanies);
  return (
    <>
   <div className='text-red-700 text-lg font-semibold pl-4'>
    FEATURED COMPANIES
</div>
<div className="w-full border h-17 flex flex-row bg-sky-100">
    {featuredCompanies?.map((item, index) => (
        <div key={index} className='flex-1'>
            <Image
                src={item?.ImageURL}
                width={120}
                height={35}
                className='h-16'
                alt={item?.CompanyName}
            />
        </div>
    ))}
</div>

    </>
  )
}

export default CompanyWidget
