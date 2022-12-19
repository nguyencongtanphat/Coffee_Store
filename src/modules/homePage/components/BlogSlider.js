
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSummary from "../../../globalComponents/BlogSummary";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import "./slider_style.css";

function formatSubString(content, num) {
  let strArr = content.split(" ");
  let subStr = "";
  for (let i = 0; i < num && i < strArr.length; i++) {
    subStr += strArr[i] + " ";
  }
  return subStr + "...";
}

const BlogSlider = ({ props }) => {
  if (props.length !== 0) {
    return (
      <div
        className="
        bg-no-repeat bg-cover
        bg-[url('/src/assests/images/home/blogs/blogpart_background_portrait.png')]
        lg:bg-[url('/src/assests/images/home/blogs/blogpart_background.png')]
        py-10
      "
      >
        <p className="text-b10 text-beige text-center py-4 lg:text-b3">
          CHUYỆN NHÀ
        </p>
        <Swiper
          className="w-64 pb-8 lg:hidden"
          autoplay={{
            delay: 3000,
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
        >
          {props.map((item, index) => {
            if (index === 0 || index > 3) {
              return;
            }

            return (
              <SwiperSlide>
                <BlogSummary
                  id={item.id}
                  avtSrc={item.TitleImage}
                  updateDate={item.Date}
                  title={item.Title}
                  summaryContent={formatSubString(item.Description, 30)}
                  className="mb-8 ml-5"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="hidden lg:flex justify-around">
          {props.map((item, index) => {
            if (index == 0 || index > 3) {
              return;
            }
            return (
              <BlogSummary
                id={item.id}
                avtSrc={item.TitleImage}
                updateDate={item.Date}
                title={item.Title}
                summaryContent={formatSubString(item.Description, 30)}
                className="mb-8"
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default BlogSlider;
