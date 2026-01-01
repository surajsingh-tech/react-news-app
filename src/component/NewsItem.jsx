import React from 'react'
export default function NewsItem({item}) {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-xs-6 col-12 ' >
     <div className="card" style={{height:"100%", marginTop:"5px"}}>
              <img src={item.urlToImage?item.urlToImage:"/image/noimage.jpeg"} className="card-img-top" alt='NO Image'/>
              <div style={{display:"flex", justifyContent:'space-evenly',alignItems:"center", marginTop:"5px"}}>
                <p className='source'>{item.source.name?item.source.name:""}</p>
                <p className=''>{new Date(item.publishedAt?item.publishedAt:'').toLocaleDateString()}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title" >{item.title?item.title:"..."}</h5>
                <p className="card-text" >
                 {item.description&&item.description.slice(0,100)}
                </p>
                <a href={item.url&&item.url} className="btn btn-primary">
                  Read more...
                </a>
              </div>
      </div>
      </div>
  )
}
