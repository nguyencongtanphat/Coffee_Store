import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
const BlogSummary = (props) => {
   const navigate = useNavigate();
  
  return (
    <div className={`w-60 lg:w-96 pb-8 cursor-pointer ${props.className}`} onClick={()=>{
      console.log("click", props.id)
      navigate(`/blogs/${props.id}}`);
    }}>
    
        <img src={props.avtSrc} alt="This is the avatar of a blog" className="w-56 h-[115px] object-cover lg:w-96 lg:h-[199px] my-2 rounded-3xl" />
        <p className="text-white text-b13 lg:text-b11 my-2"
        >{props.updateDate}</p>
        <p className="text-beige text-b9 lg:text-b7 my-4"
        >{props.title}</p>
        <p className="text-b13 text-grey400 lg:text-b11 my-4 leading-relaxed"
        >{props.summaryContent}</p>
    </div>
  )
}

BlogSummary.propTypes = {
  avtSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  updateDate: PropTypes.string.isRequired,
  summaryContent: PropTypes.string.isRequired
}

BlogSummary.defaultProps = {
  avtSrc: '',
  title: 'Default blog title',
  updateDate: '01/01/1900',
  summaryContent: 'This is the summary of a blog',
}

export default BlogSummary
