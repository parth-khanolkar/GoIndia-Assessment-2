import React,{ useEffect, useState } from 'react'
import axios from 'axios';

import Image from 'next/image';
import Link from "next/link"

import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineRead } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";

const DetailedArticle = ({ note_id,note_type,sendData }) => {
    
    const [data,setData] = useState(null);
    const parentFunction = (data) => {
      sendData(data);
    }
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('https://transcriptanalyser.com/gislanding/article-detail', {
              note_id,
              note_type
            });
    
            console.log("Detailed data: ",response.data);
            setData(response.data);
            parentFunction(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    
      }, []);
      console.log("Detailed data: ",data);
  return (
    <div>
      
        <div className='flex flex-col '>
            
            {/* RENDERING GIVEN HTML  */}
            <div dangerouslySetInnerHTML={{__html:data?.article_detail.Desciption}} className='overflow-y-auto h-[70vh]'/>
        </div>
 
    </div>
  )
}

export default DetailedArticle
