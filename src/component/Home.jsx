import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Home({q,Language}) {
let [news,setnews]=useState([]);
let [page,SetPage]=useState(1);
let [totalRes,setTotalRes]=useState(0);
const Key = import.meta.env.VITE_NEWS_API_KEY;
const firstPage=1;
const report=async()=>{
          try{
              const response= await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${Language}&page=${firstPage}&pageSize=18&apiKey=${Key}`);
              const data=await response.json();
              setTotalRes(data.totalResults)
              setnews(data.articles)
          }catch(error){  
            console.log("error is ",error);
          }}      
          
          const fetchData=async()=>{
            const nextPage=page+1;
          try{
              const response= await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${Language}&page=${nextPage}&pageSize=18&apikey=${Key}`);
              const data=await response.json();
              setTotalRes(data.totalResults)
              setnews(prev=>[...prev,...data.articles])
              SetPage(nextPage);
          }catch(error){  
            console.log("error is ",error);
          }}     
        
  
  useEffect(()=>{
    SetPage(firstPage)
      report()
     },[q,Language])
  useEffect(()=>{fetchData},[page])

     return(
    <>
      <div className='container-fluid mainConatiner'>
         <h5 className=' py-2 mt-1 text-center text-light heading' >{q}</h5>
        <InfiniteScroll
          dataLength={news&&news.length} 
          next={fetchData}
          hasMore={page<=4}
           loader={
            <div className='my-4 text-center'>
              <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div></div>
          }>
          <div className='row' style={{width:"100%"}}>
            {
              news&&news.map((item,indx)=> <NewsItem item={item} key={indx}/>)
            }
        </div>
        </InfiniteScroll>
      </div>
    </>
  )
  }
 

