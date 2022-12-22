import React from 'react'
import { useNavigate } from "react-router-dom";
export default function NewestBlogCard(props){
    const navigate = useNavigate();
    console.log("newsId,", props.id)
    return (
        <div onClick={()=>{
              navigate(`/blogs/${props.id}`);
        }} className='hidden lg:flex lg:flex-wrap xl:flex-nowrap px-[28px] 2xl:px-[82px] 3xl:px-0 my-[70px] lg:mb-[10px] 3xl:mb-[50px]'>
                <a href="#" className='basis-1/3 lg:basis-full xl:basis-1/2 no-underline' >
                    <img src={props.image} className=" rounded-3xl lg:w-[850px] xl:w-[525px] 1.5xl:w-[700px] 3xl:w-[850px] block mx-auto 3xl:ml-[42px]" />
                </a>
                <a href="#" className='basis-2/3 ml-[70px] xl:ml-[15px] 2xl:ml-[45px] lg:basis-full xl:basis-1/2 3xl:px-[20px] mr-[70px] xl:mr-[10px] no-underline'>
                    <p className="text-grey100 py-3 ">{props.date}</p>
                    <p className="text-b5 text-orange pt-1.5 pb-3 3xl:pt-3 3xl:pb-5 uppercase">{props.title}</p>
                    <p className="text-b11 text-grey100 leading-10 xl:leading-8 2xl:leading-10 " >{props.content}</p>
                    <p className="text-b11 text-grey100 leading-10 xl:leading-8 2xl:leading-10 " >{props.content_}</p>
                </a>
        </div>
    )
}