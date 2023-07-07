import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineRead } from "react-icons/ai";
import { TiLocationArrowOutline } from "react-icons/ti";
import { IoIosArrowDropdown, IoMdCloseCircleOutline } from "react-icons/io";

const Comments = ({ sendData,note_id,note_type }) => {
    const [comments,setComments] = useState(null);
    const [comment,setComment] = useState(null);
    const [change, setChange] = useState(0);

    const handleClick = () => {
        sendData(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted',comment);
        try {
            const response = await axios.post('https://transcriptanalyser.com/gislanding/add-comment', {
              note_id,
              note_type,
              user_id: 231,
              comment
            });
    
            console.log("Comments data: ",response.data);
            setChange(change + 1 );
            console.log("Chnage ", change);
          } catch (error) {
            console.error(error);
          }
          setComment('');
        };
    

    

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
    
      }, [change]);

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
                    <form className="relative flex-1 ml-2" onSubmit={handleSubmit}>
                        <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your thoughts"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center mr-2 pointer-events-none" >
                        <TiLocationArrowOutline className="text-xl text-gray-400" />
                        </button>
                        
                    </form>
                   
                </div>

            </div>

            <div className='flex flex-row mt-4 text-black text-lg font-semibold'>
                Recents  <IoIosArrowDropdown className='mt-1 ml-2' />
            </div>
            <hr className="border-gray-600 mt-2 mb-4" />

            <div className="flex flex-col px-4 w-full rounded-lg overflow-y-auto h">
               


                {comments?.map((item, index) => (

                    // <div key={index} className="flex flex-row items-center w-full rounded-lg border border-gray-300 px-2 py-4 pr-10 my-1">
                        
                    //     <div className="flex-1 ml-2">
                    //         <div
                    //         className="w-full px-4 py-2 "
                    //         >
                    //             {item.Name}
                    //         </div>    
                    //     </div>
                    //     <div className="flex-1 ml-2">
                    //             {item.DateInserted} 
                    //     </div>
                    //     <div>
                    //         {item.comment}
                    //     </div>
                        
                    // </div>
                    <div key={index} className="flex flex-col w-full rounded-lg border border-gray-300 px-2 py-4 pr-10 my-1">
                    <div className="flex flex-row items-center">
                        <div className="flex-1 ml-2 flex items-center">
                        <Image
                            src="/images/avatar1.jpg"
                            alt="Avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="w-full px-4 py-2">{item.Name}</div>
                        </div>
                        <div className="flex-1 ml-2">{item.DateInserted}</div>
                    </div>
                    <div>{item.comment}</div>
                    </div>


                    
                ))}
               
               
           
           </div>

        </div>

        


    </div>
  )
}

export default Comments
