import React from 'react'
import Image from 'next/image';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineRead } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";



const RecommendedStories = ({reco_list =[]}) => {

    // console.log("Reco List __>",reco_list);

  return (
    <div className='pl-1 pr-1'>
      
        <div className=' text-red-700 text-xl font-semibold'>
            RECOMMENDED STORIES
        </div>
        <div className="overflow-y-auto flex flex-col h-[70vh] mt-6 pr-4">
            {reco_list?.map((item, index) => (
                <div key={index} className='pr-8 m-2'>
                    
                    <div className="flex flex-col  w-full h-48 rounded-lg mb-16 mx-4  bg-white">
                        <div className="flex w-12/12 h-48  rounded-md">
                            <Image
                                width={600}
                                height={300}
                                src={item?.img_url}
                                className="w-full rounded-xl"
                                alt='Recommended image' />  
                        </div>
                        <div className='flex rounded-xl  -mt-10 p-2 bg-black bg-opacity-40  z-10 '>
                            <div className='text-black line-clamp-2 truncate'> 
                            {item?.ShortDesc}
                            </div>
                        </div>
                        
                        <div className="flex rounded-xl z-5  bg-white px-2 py-4 text-xl">
                                    <AiOutlineEye className="flex-1 mt-4 text-black text-xl" />
                                    <p className="flex-1 mt-3 text-lg mr-4 ml-1">{item?.views}</p>
                                    <BiComment className="flex-1 mt-4 text-black text-xl" />
                                    <p className="flex-1 mt-3 text-md mr-4 ml-1">{item?.comment_views}</p>
                                    <BiShareAlt className="flex-1 mt-3 text-black text-2xl" /> 
                                    <div className={`ml-4 text-sm mx-auto px-4 mr-2 mt-3 md:py-1 rounded-full text-white
                                        ${
                                            item?.note_type === 'Article' ? 'bg-red-500' : 'bg-yellow-500'
                                        }
                                    `}>
                                    {item?.note_type}
                                </div>  
                        </div>             
                        </div>
                </div>
            ))}

          
        </div>

    </div>
  )
}

export default RecommendedStories
