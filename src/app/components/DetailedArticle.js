import React,{ useEffect, useState } from 'react'
import axios from 'axios';

const DetailedArticle = ({ note_id,note_type }) => {
    
    const [data,setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('https://transcriptanalyser.com/gislanding/article-detail', {
              note_id,
              note_type
            });
    
            console.log("Detailed data: ",response.data);
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    
      }, []);

  return (
    <div>
        <div className='flex flex-col '>
            <div className='text-3xl text-center '>
                {data?.article_detail.Title}
            </div>
            {/* RENDERING GIVEN HTML  */}
            <div dangerouslySetInnerHTML={{__html:data?.article_detail.Desciption}} className='overflow-y-auto h-[70vh]'/>
        </div>
    </div>
  )
}

export default DetailedArticle
