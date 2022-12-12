import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150){
      setVisible(true)
    } 
    else if (scrolled <= 150){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className={`fixed ${visible ? 'inline' : 'hidden'} z-20 right-24 top-3/4 bg-orange rounded-full w-14 h-14 cursor-pointer`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} size="2x" color="white" className="py-3 px-4"/>
    </div>
  )
}

export default ScrollTopButton
