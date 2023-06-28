import React, { useEffect, useState } from 'react'
import "../../App.css"
import Newsitem from './Newsitem';

const News = ({category}) => {


    const [article,setarticle ] = useState([]);
    
    const [loading,setloading] = useState(false);


    const  fetchnews = async ()=>{
        setloading(true)
        const res= await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=c1820724600d4057966057d4b4cdd1cc`)
        const data = await res.json();
        // console.log(data);
        setarticle(data.articles);
        // console.log("fetchnews");
        // console.log(data.articles);
        setloading(false);
    }

    
    useEffect( ()=>{
        fetchnews();
    },[category])
     
 
     
  return (  
            loading ? 
            (
                <div className='flex w-screen h-screen items-center justify-center'>
                <div className='spinner'></div>

                </div>
            )    
            : (
                <Newsitem article={article}/>
            )
  )
                
            }      
               

export default News;