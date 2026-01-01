import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({fun,searchFun}) {
  let inputSearch=useRef();
  const inputFun=(e)=>{
      e.preventDefault();
      let data=inputSearch.current.value;
      searchFun(data);
      inputSearch.current.value="";
  }
  return (
       <nav className="navbar navbar-expand-lg bg-primary backColor">
              <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/All" onClick={()=>{searchFun("");}}>News</Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active text-light" aria-current="page" to="/All">
                        All Categories
                      </Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/Education" onClick={()=>{searchFun("");}}> Education </Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/Entertainment" onClick={()=>{searchFun("");}}> Entertainment </Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/Sports" onClick={()=>{searchFun("");}}> Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/Science" onClick={()=>{searchFun("");}}> Science</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/Health" onClick={()=>{searchFun("");}}> Health </Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/Technology" onClick={()=>{searchFun("");}}> Technology </Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/Politics" onClick={()=>{searchFun("");}}> Politics </Link></li>

                    
                    <li className="nav-item dropdown">
                      <button className="nav-link dropdown-toggle text-light" role="button"data-bs-toggle="dropdown"aria-expanded="false"> Dropdown</button>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/Bollywood" onClick={()=>{searchFun("");}}> Bollywood </Link> </li>
                        <li><Link className="dropdown-item" to="/Hollywood" onClick={()=>{searchFun("");}}>Hollywood </Link> </li>
                        <li><Link className="dropdown-item" to="/Jokes" onClick={()=>{searchFun("");}}>Jokes </Link> </li>
                        <li><Link className="dropdown-item" to="/Crime" onClick={()=>{searchFun("");}}>Crime </Link> </li>
                      </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                      <button className="nav-link dropdown-toggle text-light" role="button"data-bs-toggle="dropdown"aria-expanded="false">Language</button>
                      <ul className="dropdown-menu">
                        <li onClick={()=>{fun("hi")}}><button className="dropdown-item" >Hindi</button> </li>
                        <li onClick={()=>{fun("en")}}><button className="dropdown-item" >English</button> </li>
                      </ul>
                    </li>
                  </ul> 
                  <form className="d-flex" role="search" onSubmit={inputFun}>
                    <input className="form-control me-2" type="search" required placeholder="Search" ref={inputSearch}/>
                    <button className="btn btn-outline-light " type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
       </nav>
  )
}
