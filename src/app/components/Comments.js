import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineRead } from "react-icons/ai";
import { TiLocationArrowOutline } from "react-icons/ti";
import { IoIosArrowDropdown, IoMdCloseCircleOutline } from "react-icons/io";

const Comments = ({ sendData,note_id,note_type }) => {
    const [comments,setComments] = useState(null);

    const handleClick = () => {
        sendData(false);
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('https://transcriptanalyser.com/gislanding/article-comment', {
              note_id,
              note_type
            });
    
            console.log("Comments data: ",response.data);
            setComments(response.data?.key);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    
      }, []);

  return (
    <div className=' bg-white p-4 mr-6'>
      
        
        <div className='text-black text-lg font-semibold flex flex-row items-center'>
            <span className="flex-grow">Comments</span> 
            <button onClick={handleClick} className='w-8 h-8 justify-end'>
                <IoMdCloseCircleOutline />
            </button>
        </div>

        <hr className="border-gray-600 my-2" />
        <div className="overflow-y-auto flex flex-col h-[70vh] mt-6 pr-4 bg-white">
             
            <div className="flex flex-col px-4 w-full rounded-lg ">
               
                <div className="flex items-center">
                    <Image
                        // src="/path/to/avatar.png"
                        src='/images/avatar1.jpg'
                        alt="Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="relative flex-1 ml-2">
                        <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your thoughts"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center mr-2 pointer-events-none">
                        <TiLocationArrowOutline className="text-xl text-gray-400" />
                        </div>
                        
                    </div>
                   
                </div>

            </div>

            <div className='flex flex-row mt-4 text-black text-lg font-semibold'>
                Recents  <IoIosArrowDropdown className='mt-1 ml-2' />
            </div>
            <hr className="border-gray-600 mt-2 mb-4" />

            <div className="flex flex-col px-4 w-full rounded-lg overflow-y-auto h">
               
               <div className="flex flex-row items-center w-full rounded-lg border border-gray-300 px-2 py-4 pr-10 my-1">
                   
                   <div className="flex-1 ml-2">
                       <div
                       className="w-full px-4 py-2 "
                       >
                        Adam hughes
                       </div>    
                   </div>
                   <div className="flex-1 ml-2">
                         Helkloimo 
                   </div>
                  
               </div>
               <div className="flex flex-row items-center w-full rounded-lg border border-gray-300 px-2 py-4 pr-10 my-1">
                   <Image
                       // src="/path/to/avatar.png"
                       src='/images/avatar1.jpg'
                       alt="Avatar"
                       width={36}
                       height={36}
                       className="rounded-full"
                   />
                   <div className="flex-1 ml-2">
                       <div
                       className="w-full px-4 py-2 "
                       >
                        Adam hughes
                       </div>    
                   </div>
                   <div className="flex-1 ml-2">
                         Helkloimo 
                   </div>
                  
               </div>
               
           
           </div>

        </div>

        


    </div>
  )
}

export default Comments
