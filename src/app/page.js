"use client"

import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import CompanyWidget from './components/CompanyWidget'
import axios from 'axios';
import DropdownBar from './components/DropDownBar';
import LatestStories from './components/LatestStories';
import RecommendedStories from './components/RecommendedStories';

export default function Home() {
  const [data,setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://transcriptanalyser.com/gislanding/article-home', {
          fincode: 0
        });

        console.log("Json data: ",response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, []); 
  
  return (
    <>
    <div className='bg-stone-100'>
      <CompanyWidget featuredCompanies={data?.logo_list} />
      <div>
        <div className='my-2 md:pl-20 py-4 text-red-700 text-3xl'>
                Market Stories
        </div>
        <div>
        <div className='flex justify-center lg:flex-none lg:justify-start lg: ml-14 mb-4'>
          <DropdownBar />
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
