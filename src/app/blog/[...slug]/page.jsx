"use client"
import DetailedArticle from '@/app/components/DetailedArticle'
import RecommendedStories from '@/app/components/RecommendedStories'
import Comments from '@/app/components/Comments'

import { useRouter } from 'next/navigation'
import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import CompanyWidget from '@/app/components/CompanyWidget'

import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineRead } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";

const Detail = ({ params }) => {
    const [data,setData] = useState(null);
    const [fincode, setFincode] = useState(0);
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [articleDetails,setArticleDetails] = useState(null);

    const toggleState = () => {
      console.log(isCommentOpen)
      setIsCommentOpen(!isCommentOpen);
    };
  
    const handleFincode = (res) => {
      setFincode(res.value);
    };

    const handleCommentToggle = (res) => {
      setIsCommentOpen(res);
    };

    const getArticleDetails = (res) => {
      setArticleDetails(res);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('https://transcriptanalyser.com/gislanding/article-home', {
            fincode
          });
  
          console.log("Json dataa: ",response.data);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  
    }, [fincode]); 
    const router = useRouter()
    console.log(data)
    // To fetch the params
    console.log(params.slug[0]) // Note type
    console.log(params.slug[1]) // Note id
    console.log("Article Details--->",articleDetails);
  return (
    <div className='bg-stone-100'>
      <CompanyWidget featuredCompanies={data?.logo_list} />
      <div className='flex flex-col'>
        <div className='mt-2 mb-1 md:pl-10 py-4 text-red-700 text-4xl font-semibold'>
                Market Stories
        </div>
        <hr className="border-gray-600 mb-6 mx-10" />

        <div className="md:grid md:grid-cols-12">
          <div className="md:col-span-8 text-3xl mx-auto">
            {articleDetails?.article_detail.Title}
          </div>
        </div>
        


        <div className='md:grid md:grid-cols-12 gap-2 invisible md:visible bg-stone-100'>
          <div className='md:col-span-8 text-3xl font-bold text-left my-2 ml-12'>                
                <hr className="border-gray-600 mt-4" />
                <div className="flex flex-row mx-auto justify-center ">
                  <div className='text-left my-auto flex flex-row'>
                      <div className="flex text-xs mt-3 md:text-sm md:mt-3 text-blue-600">
                        {articleDetails?.article_detail.NoteDate}
                      </div>
                      <AiOutlineRead className="flex-1 mt-2 ml-6 text-black w-6 h-6" />
                        <p className="flex text-sm ml-4">{articleDetails?.article_detail.TimeToRead} min read</p>
                  </div>
                  <div className='text-center my-auto flex flex-row ml-20'>
                      <AiOutlineEye className="flex-1 text-black w-12 h-12" />
                        <p className="flex-1 mt-3 text-md ml-2">{articleDetails?.article_detail.views}</p>
                        <button onClick={toggleState}
                        > 
                          <BiComment className="flex-1 mt-3 text-black w-6 h-6" />
                          <p className="flex-1 mt-3 text-md ml-2">{articleDetails?.article_detail.comment_views}</p>
                        </button>
                  </div>
                  <div className='text-right my-auto ml-20'>
                    <div className={`ml-4 text-sm mx-auto px-4 mr-2 md:py-1 rounded-full text-white
                      ${
                        articleDetails?.article_detail.note_type === 'Article' ? 'bg-red-500' : 'bg-yellow-500'
                    }
                    `}>
                    {articleDetails?.article_detail.note_type}
                    </div>  
                  </div>
                </div>
                <hr className="border-gray-600 mb-4" />
          </div>
            
          <div className='md:col-span-8 mx-2' >
            <DetailedArticle note_id={params.slug[1]} note_type={params.slug[0]} sendData={getArticleDetails}/>
          </div>

          <div className=' md:col-span-4 mx-2'>
              {isCommentOpen ? (
                <div className="">
                  <Comments sendData={handleCommentToggle} note_id={articleDetails?.article_detail.note_id} note_type={articleDetails?.article_detail.note_type} />
                </div>
              )
               : (
                <div className="">
                  <RecommendedStories reco_list={data?.reco_list} />
                </div>
               )}
              

              
           
          </div>
          
        </div> 
       

        
      </div>
      </div>
  )
}

export default Detail