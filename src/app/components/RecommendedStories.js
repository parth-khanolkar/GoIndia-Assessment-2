import React from 'react'
import Image from 'next/image';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineRead } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";



const RecommendedStories = ({reco_list =[]}) => {

    // console.log("Reco List __>",reco_list);

  return (
    <div className='pl-3 pr-1'>
      
        <div className=' text-red-700 text-xl font-semibold'>
            RECOMMENDED STORIES
        </div>
        <div className="overflow-y-auto flex flex-col h-[70vh] mt-6 pr-4">
            {/* Recent {reco_list?.map((item, index) => (
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


                
            <div className="flex flex-col px-4 w-full h-48 rounded-lg ">
                <div className="flex w-12/12 h-48 z-10 rounded-md">
                    <Image
                        width={600}
                        height={300}
                        src='/images/NSE.jpg'
                        className="w-full rounded-xl"
                        alt='Recommended image' />  
                </div>
                
                  
                <div className="flex rounded-xl z-5 -mt-4 bg-white px-2 py-4 text-xl">
                            <AiOutlineEye className="flex-1 mt-4 text-black text-xl" />
                            <p className="flex-1 mt-3 text-lg mr-4 ml-1">5161</p>
                            <BiComment className="flex-1 mt-4 text-black text-xl" />
                            <p className="flex-1 mt-3 text-md mr-4 ml-1">123</p>
                            <BiShareAlt className="flex-1 mt-3 text-black text-2xl" /> 
                            <div className="ml-4 text-sm mx-auto px-4 mr-2 mt-3 md:py-1 rounded-full bg-yellow-500 text-white">
                            Article
                        </div>  
                </div>

                    
                 

             
            </div>

            <div className="flex flex-col px-4 w-full h-48 rounded-lg ">
                <div className="flex w-12/12 h-48 z-10 rounded-md">
                    <Image
                        width={600}
                        height={300}
                        src='/images/NSE.jpg'
                        className="w-full rounded-xl"
                        alt='Recommended image' />  
                </div>
                
                  
                <div className="flex rounded-xl z-5 -mt-4 bg-white px-2 py-4 text-xl">
                            <AiOutlineEye className="flex-1 mt-4 text-black text-xl" />
                            <p className="flex-1 mt-3 text-lg mr-4 ml-1">5161</p>
                            <BiComment className="flex-1 mt-4 text-black text-xl" />
                            <p className="flex-1 mt-3 text-md mr-4 ml-1">123</p>
                            <BiShareAlt className="flex-1 mt-3 text-black text-2xl" /> 
                            <div className="ml-4 text-sm mx-auto px-4 mr-2 mt-3 md:py-1 rounded-full bg-yellow-500 text-white">
                            Article
                        </div>  
                </div>

                    
                 

             
            </div>


               

      

          
        </div>

    </div>
  )
}

export default RecommendedStories
