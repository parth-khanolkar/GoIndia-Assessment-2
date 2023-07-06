"use client"
import DetailedArticle from '@/app/components/DetailedArticle'
import RecommendedStories from '@/app/components/RecommendedStories'
import { useRouter } from 'next/navigation'
import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import CompanyWidget from '@/app/components/CompanyWidget'

const Detail = ({ params }) => {
    const [data,setData] = useState(null);
    const [fincode, setFincode] = useState(0);
  
    const handleFincode = (res) => {
      setFincode(res.value);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('https://transcriptanalyser.com/gislanding/article-home', {
            fincode
          });
  
          console.log("Json data: ",response.data);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  
    }, [fincode]); 
    const router = useRouter()
    console.log(params.slug[0])
    console.log(params.slug[1])
  return (
    <div className='bg-stone-100'>
      <CompanyWidget featuredCompanies={data?.logo_list} />
      <div>
        <div className='mt-2 mb-1 md:pl-10 py-4 text-red-700 text-4xl font-semibold'>
                Market Stories
        </div>
        <hr className="border-gray-600 mb-6 mx-10" />

        <div className='md:grid md:grid-cols-12 gap-2 invisible md:visible bg-stone-100'>
          <div className='md:col-span-8 mx-2' >
            <DetailedArticle note_id={params.slug[1]} note_type={params.slug[0]}/>
          </div>
          <div className='md:col-span-4 mx-2'>
              <RecommendedStories reco_list={data?.reco_list} />
            </div>
        </div> 
       

        
      </div>
      </div>
  )
}

export default Detail