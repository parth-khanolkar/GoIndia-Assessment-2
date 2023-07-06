"use client"

import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import CompanyWidget from './components/CompanyWidget'
import axios from 'axios';
import DropdownBar from './components/DropDownBar';

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
  console.log("REco:",data?.reco_list)
  
  return (
    <>
      <CompanyWidget featuredCompanies={data?.logo_list} />
      <DropdownBar dropDownItems={data?.dropdown_list} />
      {/* RECO LIST
      <div>
        {Array.isArray(data?.reco_list) && data.reco_list.map((item) => (
          <div key={item.note_id}>
            <h3>{item.Title}</h3>
            <p>{item.ShortDesc}</p>
          </div>
        ))}
      </div> */}

    </>
  )
}
