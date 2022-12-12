import { string } from 'prop-types'
import React from 'react'

function formatSubString(content, num){
    let strArr = content.split(' ')
    let subStr = ""
    for (let i = 0; i < num && i<strArr.length ; i++){
        subStr += strArr[i] + ' '
    }
    return subStr + '...'
}

export default function BlogCard(props){
    return (
        <div className="max-w-[300px] sm:max-w-[500px] lg:max-w-[425px] xl:max-w-[300px] 2xl:max-w-[350px] 3xl:max-w-[500px] 1.5xl:max-w-[400px] mx-auto xl:mb-[40px] mt-[30px]">
            <a href="#" className="no-underline">
                <img src={props.image} alt="Chuyện nhà" className='w-[300px] sm:w-[500px] lg:w-[425px] xl:w-[300px] 2xl:w-[350px] 3xl:w-[500px] 1.5xl:w-[400px] 3xl:pb-[15px] h-auto lg:h-[307px] xl:h-[189px] 2xl:h-[215px] 3xl:h-[345px] 1.5xl:h-[266px] rounded-3xl block mx-auto  '/>
                <p className="text-b13 sm:text-grey100 py-2 3xl:py-2.5 block mx-auto">{props.date}</p>
                <p className="text-b12 sm:text-b5 text-orange py-2.5 3xl:py-3.5 uppercase block mx-auto">{props.title}</p>
                <p className="text-b13 sm:text-b11 text-grey100 leading-9 block mx-auto">
                    {formatSubString(props.content, 42)}
                </p>
            </a>
        </div>
    )
}