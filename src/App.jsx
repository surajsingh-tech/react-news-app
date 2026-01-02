import React, { useRef, useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import {
  BrowserRouter,
  Route,
  Routes,
  UNSAFE_createBrowserHistory,
} from "react-router-dom";
export default function App() {
  let [lang,setLang]=useState('en');
  let [search,setSearch]=useState('');
  const searchFun=(searchProp)=>{
      setSearch(searchProp)
  }
  const langFun=(langProp)=>{
      setLang(langProp);
  }
  return ( 
    <>
      <BrowserRouter>
        <Navbar fun={langFun} searchFun={searchFun}/>
          <Routes>
            <Route path="/" element={<Home q={search?search.toUpperCase():"All"} Language={lang} />} />
            <Route path="/All" element={<Home q={search?search.toUpperCase():"All Categories"} Language={"en"} />} />
            <Route path="/Education" element={<Home q={search?search.toUpperCase():"Education"} Language={lang} />} />
            <Route path="/Entertainment" element={<Home q={search?search.toUpperCase():"Entertainment"} Language={lang} />} />
            <Route path="/Sports" element={<Home q={search?search.toUpperCase():"Sports"} Language={lang} />} />
            <Route path="/Science" element={<Home q={search?search.toUpperCase():"Science"} Language={lang} />} />
            <Route path="/Health" element={<Home q={search?search.toUpperCase():"Health"} Language={lang} />} />
            <Route path="/Technology" element={<Home q={search?search.toUpperCase():"Technology"} Language={lang} />} />
            <Route path="/Politics" element={<Home q={search?search.toUpperCase():"Politics"} Language={lang} />} />         
            <Route path="/Jokes" element={<Home q={search?search.toUpperCase():"Jokes"} Language={lang} />} />
            <Route path="/Hollywood" element={<Home q={search?search.toUpperCase():"Hollywood"} Language={lang} />} />
            <Route path="/Crime" element={<Home q={search?search.toUpperCase():"Crime"} Language={lang} />} />
            <Route path="/Bollywood" element={<Home q={search?search.toUpperCase():"Bollywood"} Language={lang} />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
