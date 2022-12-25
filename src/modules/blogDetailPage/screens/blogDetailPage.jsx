import React from "react";
import image39 from "../../../assests/images/blogDetailPage/image39.png";
import image38 from "../../../assests/images/blogDetailPage/image38.png";
import image37 from "../../../assests/images/blogDetailPage/image37.png";
import AppButton from "../../../globalComponents/AppButton";
import HttpService, {
  createAxiosInstance,
  FormatterService,
} from "../../../service";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../blogDetailPage/components/Item";
import LoadingSpinner from "../../../globalComponents/LoadingSpinner";
function BlogDetailPage() {
  const [dtInfo, setDtInfo] = useState({});
  const [blogIndex, setblogIndex] = useState([]);
  let { blogId } = useParams();
  //fetchData

  useEffect(() => {
    async function fetchData() {
      const response = await createAxiosInstance().get(`api/blog/${blogId}`);
    //const response = await axios.get(HttpService.appUrl + `api/blog/${blogId}`);
      setDtInfo(response.data.data);
      console.log("thongtinBlog", response.data.data);
    }
    fetchData();
  }, []);
  return dtInfo.Content ? (
    <div>
      <div className="flex">
        <img
          src={dtInfo.TitleImage}
          alt="Ảnh blog"
          className="w-full mx-auto md:w-[100%] md:h-[400px] md:object-cover"
        />
      </div>
      <div className="m-[20px] md:mx-[200px] md:my-[50px]">
        <p className="text-b7 lg:text-b3 text-orange">{dtInfo.Title}</p>
        <p className="mt-[20px] text-b10 lg:text-b7 text-grey100 leading-relaxed tracking-wide">
          {dtInfo.Description}
        </p>
        <div>
          {dtInfo.Content?.map((item, index) => {
            return <Item itemInfo={item} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
export default BlogDetailPage;
