import React from 'react'
import Image from 'next/image';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";



const RecommendedStories = ({reco_list =[]}) => {

    // console.log("Reco List __>",reco_list);

  return (
    <div className='pl-3 pr-1'>
      Recommended Stories
        <div className="overflow-y-auto h-[70vh] pr-4">
        {/* {reco_list?.map((item, index) => (
            <div key={index}>
                <div className="flex  md:flex-row bg-white mt-5 w-full rounded-lg overflow-hidden shadow-2xl cursor-pointer" >
                    <div className=" md:flex-row  ">
                        <Image
                            src={item?.img_url}
                            width={200}
                            height={200}
                            alt="Picture of the author"
                            className='p-4 w-full h-full rounded'
                        />
                    </div>
                </div>
            </div>
        ))} */}
            <div className="flex  md:flex-row bg-white mt-5 w-full rounded-lg overflow-hidden shadow-2xl cursor-pointer" >
            <div className=" md:flex-row  ">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4b/BSE_building_at_Dalal_Street.JPG"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className='p-4 w-full h-full rounded'
                />
            </div>
            </div>
        </div>

    </div>
  )
}

export default RecommendedStories
