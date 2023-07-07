import React from 'react'

import Image from 'next/image';
import Link from "next/link"

import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineRead } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";

const LatestStories = ({ latest_list=[] }) => {

    const handleClick = (data) => {
        console.log("Selected Soty ----->", data);
    }

  return (
    <div className='pl-16 pr-3 '>
     
    <div className=' text-red-700 text-xl font-semibold'>
        LATEST STORIES
    </div>
    
    <div className='overflow-y-auto h-[70vh] pr-4 scrollbar '>
        {latest_list?.map((item, index) => (
            <Link href={`/blog/${item?.note_type}/${item?.note_id}`} key={index}>
                <div className="flex flex-col md:flex-row bg-white mt-5 w-full rounded-xl overflow-hidden cursor-pointer" 
                // onClick={handleClick(index)}
                >
                <div className="flex flex-col md:flex-row items-start px-4 py-6">
                    <div className="md:w-2/3">
                    <div className="flex items-center justify-between">
                        <p className="text-md md:text-xl font-semibold text-gray-900 mt-3">
                        {item?.Title}
                        </p>
                    </div>
                    <p className="mt-3 text-gray-700 text-md">
                        {item?.ShortDesc}
                    </p>
                    <div className="mt-4 grid grid-cols-12 items-center">
                        <div className="col-span-2 text-xs mt-3 md:text-sm md:mt-3 text-blue-600">
                        {item?.NoteDate}
                        </div>
                        <div className="flex col-span-4 flex-row text-xl">
                            <AiOutlineRead className="flex-1 mt-4  text-black text-xl" />
                            <p className="flex-1 mt-3 -ml-10 text-lg">{item?.TimeToRead} min read</p>
                        </div>
                        <div className="flex col-span-3 text-xl">
                            <AiOutlineEye className="flex-1 mt-4 text-black text-xl" />
                            <p className="flex-1 mt-3 text-lg ml-2">{item?.views}</p>
                            <BiComment className="flex-1 mt-4 text-black text-xl" />
                            <p className="flex-1 mt-3 text-md ml-2">{item?.comment_views}</p>
                        </div>
                        <div className="flex col-span-1 flex-row text-xl">
                            <BiShareAlt className="flex-1 mt-3 text-black text-2xl" />   
                        </div>
                        <div 
                            className={`inline-block col-span-2 text-sm mx-auto px-4 mt-3 md:py-1 rounded-full text-white 
                            ${
                                item?.note_type === 'Article' ? 'bg-red-500' : 'bg-yellow-500'
                            }
                            `}
                        >
                            {item?.note_type}
                        </div>
                    </div>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0 md:pl-4">
                    <Image
                        src={item?.img_url}
                        width={600}
                        height={600}
                        alt="Picture of the author"
                        className="rounded"
                    />
                    </div>
                </div>
                </div>                
            </Link>
        ))}



        {/* {latest_list?.map((item, index) => (
            <div key={index}>
                <div className="flex flex-col md:flex-row bg-white mt-5 w-full rounded-lg overflow-hidden  cursor-pointer" 
                // onClick={handleClick(index)}
                >
                <div className="flex flex-col md:flex-row items-start px-4 py-6">
                    <div className="md:w-2/3">
                    <div className="flex items-center justify-between">
                        <p className="text-md md:text-lg font-semibold text-gray-900 mt-3">
                        {item?.Title}
                        </p>
                    </div>
                    <p className="mt-3 text-gray-700 text-md">
                        {item?.ShortDesc}
                    </p>
                    <div className="mt-4 grid grid-cols-12 items-center">
                        <div className="col-span-2 text-xs mt-3 md:text-sm md:-mt-6 text-blue-600">
                        {item?.NoteDate}
                        </div>
                        <div className="flex col-span-2 flex-row text-xl">
                        <AiOutlineHeart className="flex-1 mt-1 text-red-600 text-xl" />
                        <p className="flex-1 text-lg"> // </p>
                        </div>
                        <div className="flex col-span-2 text-xl">
                        <AiOutlineEye className="flex-1 mt-1 text-black text-xl" />
                        <p className="flex-1 text-lg">{item?.views}</p>
                        </div>
                        <div className="flex col-span-2 flex-row text-xl">
                        <BiComment className="flex-1 mt-1 text-black text-xl" />
                        <p className="flex-1 text-md">{item?.comment_views}</p>
                        </div>
                        <div className="flex col-span-2 flex-row text-xl">
                        <BiShareAlt className="flex-1 mt-1 text-black text-xl" />
                        </div>
                        <div className="inline-block col-span-2 text-sm ml-4 md:py-1 px-2.5 rounded-full bg-yellow-500 text-white">
                        {item?.note_type}
                        </div>
                    </div>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0 md:pl-4">
                    <Image
                        src={item?.img_url}
                        width={600}
                        height={400}
                        alt="Picture of the author"
                        className="rounded"
                    />
                    </div>
                </div>
                </div>                
            </div>
        ))} */}


      {/* <div className="flex flex-col md:flex-row bg-white mt-5 w-full rounded-lg overflow-hidden  cursor-pointer">
      <div className="flex flex-col md:flex-row items-start px-4 py-6">
          <div className="md:w-2/3">
          <div className="flex items-center justify-between">
              <p className="text-md md:text-lg font-semibold text-gray-900 mt-3">
              Richard Adams
              </p>
          </div>
          <p className="mt-3 text-gray-700 text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat quam nulla praesentium tempora corporis dicta, similique suscipit nihil accusamus?
          </p>
          <div className="mt-4 grid grid-cols-12 items-center">
              <div className="col-span-2 text-xs mt-3 md:text-sm md:-mt-6 text-blue-600">
              22h ago
              </div>
              <div className="flex col-span-2 flex-row text-xl">
              <AiOutlineHeart className="flex-1 mt-1 text-red-600 text-xl" />
              <p className="flex-1 text-lg">2k</p>
              </div>
              <div className="flex col-span-2 text-xl">
              <AiOutlineEye className="flex-1 mt-1 text-black text-xl" />
              <p className="flex-1 text-lg">2k</p>
              </div>
              <div className="flex col-span-2 flex-row text-xl">
              <BiComment className="flex-1 mt-1 text-black text-xl" />
              <p className="flex-1 text-md">2k</p>
              </div>
              <div className="flex col-span-2 flex-row text-xl">
              <BiShareAlt className="flex-1 mt-1 text-black text-xl" />
              </div>
              <div className="inline-block col-span-2 text-sm ml-4 md:py-1 px-2.5 rounded-full bg-yellow-500 text-white">
              Sector 3
              </div>
          </div>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0 md:pl-4">
          <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/4b/BSE_building_at_Dalal_Street.JPG"
              width={600}
              height={400}
              alt="Picture of the author"
              className="rounded"
          />
          </div>
      </div>
      </div> */}
    </div>



    </div>
  )
}

export default LatestStories
