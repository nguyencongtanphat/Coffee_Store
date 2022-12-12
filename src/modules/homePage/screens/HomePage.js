import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import NewProduct from '../components/NewProduct'
import BlogSlider from '../components/BlogSlider'
import BestSeller from '../components/BestSeller'
import HttpService, { createAxiosInstance } from "../../../service";
import axios from "axios";

function HomePage() {
  const [bestSellerArray,setBestSellerArray] = useState([])

  async function FetchData() {
    const response = await createAxiosInstance().get('api/menu/products')
    console.log("response:", response)
    setBestSellerArray(response.data.data.slice(0,4))
  }

  useEffect(() => {
    FetchData()
  },[])

  // FETCH DATA BLOG LIST
  const [blogList, setBlogList] = useState([])
  // useEffect(() => {
  //     async function fetchData() {
  //         const response = await createAxiosInstance().get('/blog');
  //         setBlogList(response.data.data)    
  //     }
  //     fetchData();
  //   }, []);
    
  return (
    <div>
      <Banner />
      <BestSeller bestSeller={bestSellerArray} />
      <NewProduct />
      <BlogSlider props={blogList}/>
    </div>
  );
}

export default HomePage