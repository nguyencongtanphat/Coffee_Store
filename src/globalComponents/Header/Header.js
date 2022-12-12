import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import InfoContactBar from './InfoContactBar'
const Header = () => {
    const [isScroll,setIsScroll] = useState(true)
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            setIsScroll(false)
        } 
        prevScrollpos = currentScrollPos;
    }
    return (
        <div className={`bg-white sticky z-10 ${isScroll ? 'top-0' : '-top-5 lg:-top-10'}`}
            style={{
                transition: 'top 0.3s'
            }}
        >
            <InfoContactBar/>
            <NavigationBar />
        </div>
    )
}

export default Header
