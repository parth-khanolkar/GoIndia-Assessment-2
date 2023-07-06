"use client"

import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import CompanyWidget from './components/CompanyWidget'
import axios from 'axios';
import DropdownBar from './components/DropDownBar';
import LatestStories from './components/LatestStories';
import RecommendedStories from './components/RecommendedStories';
import DetailedArticle from './components/DetailedArticle';

export default function Home() {
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
  
  return (
    <>
    <div className='bg-stone-100'>
      <CompanyWidget featuredCompanies={data?.logo_list} />
      <div>
        <div className='mt-2 mb-1 md:pl-10 py-4 text-red-700 text-4xl font-semibold'>
                Market Stories
        </div>
        <hr className="border-gray-600 mb-6 mx-10" />

        <div>
          <div className='flex justify-center lg:flex-none lg:justify-start lg: ml-14 mb-4'>
            <DropdownBar dropDownItems={data?.dropdown_list} 
            sendData={handleFincode}
            />
          </div>
          <div className='md:grid md:grid-cols-12 gap-2 invisible md:visible bg-stone-100'>
            <div className='md:col-span-8 mx-2' >
              <LatestStories latest_list={data?.latest_list} />
            </div>
            <div className='md:col-span-4 mx-2'>
              <RecommendedStories reco_list={data?.reco_list}/>
            </div>
          </div>
        </div>

        
      </div>

    </div>
    </>
  )
}
