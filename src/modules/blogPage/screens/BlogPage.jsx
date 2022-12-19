import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import NewestBlogCard from "../components/NewestBlogCard";
import PageTitle from "../../../globalComponents/PageTitle";
import { createAxiosInstance, FormatterService } from "../../../service";
import leafBgR from "../../../assests/images/global/leaf-bg-right.png";
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";
import LoadingSpinner from "../../../globalComponents/LoadingSpinner";
import { useNavigate } from "react-router-dom";


export default function BlogPage(props) {
  const [blogList, setBlogList] = useState([]);
   const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const response = await createAxiosInstance().get("api/blog");

      setBlogList(response.data.data);
    }
    fetchData();
  }, []);

  const [newest, setNewest] = useState({});
  const [subContent, setSubContent] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await createAxiosInstance().get("api/blog/6");
      let content = response.data.data;
      setNewest(content);
      setSubContent(content.Content[0].Paragraphs[0].Content);
    }
    fetchData();
  }, []);

  return (
    <>
      {blogList.length > 0 ? (
        <div>
          <div className=" px-[30px] lg:px-[50px] xl:px-[30px] 3xl:px-[70px]">
            <PageTitle title={props.title} />
            <NewestBlogCard
              id={newest.id}
              image={newest.TitleImage}
              date={newest.Date}
              content={newest.Description}
              title={newest.Title}
              content_={subContent}
            />
            <div className="flex flex-wrap mb-[50px]">
              {blogList.map((item, index) => {
                if (index == 0) {
                  return;
                }
                return (
                  <div onClick={()=>{
                      navigate(`/blogs/${item.id}`);
                  }} className="basis-full lg:basis-1/2 xl:basis-1/3">
                    <BlogCard
                      image={item.TitleImage}
                      date={item.Date}
                      title={item.Title}
                      content={item.Description}
                      key={item.id}
                    />
                  </div>
                );
              })}
            </div>

            <img
              src={leafBgR}
              alt=""
              className="fixed hidden sm:top-0 md:top-[70px] right-0 -z-10 sm:block sm:w-[450px] md:w-[300px] lg:w-[400px] 2xl:w-[700px]"
            />
            <img
              src={leafBgL}
              alt=""
              className="fixed hidden top-[10px] md:top-[100px] left-0 -z-10 sm:block sm:w-[450px] md:w-[300px] lg:w-[350px] 2xl:w-[700px]"
            />
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
