import { faArrowDownWideShort, faArrowUpShortWide, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const SortDropdown = (props) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [isIconUp, setIsIconUp] = useState(false)
    const [selectedValue, setSelectedValue] = useState(<div className="flex" id="selected">
        <FontAwesomeIcon icon={faArrowDownWideShort} size="xl" color="orange" className="mt-3" />
        <p className="ml-2 mt-4 text-grey200"
        >Giá giảm dần</p>
    </div>)
    const [choosenElement, setChoosenElement] = useState()

    function PriceDown(a, b) {
        return b.SPrice - a.SPrice
    }

    function PriceUp(a, b) {
        return a.SPrice - b.SPrice
    }

    return (
        <div className={`flex flex-col bg-grey rounded-xl h-12 cursor-pointer mr-3
        ${isDropdownOpen ? 'rounded-none rounded-t-xl' : 'rounded-xl'} md:w-72 `} >
            <div className={`${isDropdownOpen ? 'mb-1' : 'mb-0'}`}>
            <div className="hidden md:flex px-3" onClick={() => {
                setDropdownOpen(!isDropdownOpen)
                setChoosenElement(document.getElementById("selected"))
            }}>
                {selectedValue}
                {
                    isDropdownOpen
                        ? <FontAwesomeIcon icon={faSortUp} size="2x" color="orange" className="hidden lg:block ml-24 mt-4" />
                        : <FontAwesomeIcon icon={faSortDown} size="2x" color="orange" className="hidden lg:block ml-24 mt-1" />
                }
            </div>
            <div className="flex md:hidden px-3" onClick={() => {
                setIsIconUp(!isIconUp)
                props.handleFilter(props.data.reverse())
            }}>
                <p className="mx-1 mt-4 text-grey200"
                >Giá</p>
                <FontAwesomeIcon icon={isIconUp ? faArrowUpShortWide : faArrowDownWideShort} size="xl" color="orange" className="mt-3" />
            </div>
            </div>
            {
                isDropdownOpen && (
                    <div className="z-10 bg-grey rounded-b-xl">
                        <div className="flex pl-3 hover:bg-grey300" onClick={(e) => {
                            choosenElement.innerHTML = e.currentTarget.innerHTML
                            setDropdownOpen(!isDropdownOpen)
                            props.handleFilter(props.data.sort(PriceDown))
                        }}>
                            <FontAwesomeIcon icon={faArrowDownWideShort} size="xl" color="orange" className="mt-3" />
                            <p className="ml-2 my-4 text-grey200"
                            >Giá giảm dần</p>
                        </div>
                        <div className="flex pl-3 hover:bg-grey300" onClick={(e) => {
                            choosenElement.innerHTML = e.currentTarget.innerHTML
                            setDropdownOpen(!isDropdownOpen)
                            props.handleFilter(props.data.sort(PriceUp))
                        }}>
                            <FontAwesomeIcon icon={faArrowUpShortWide} size="xl" color="orange" className="mt-3" />
                            <p className="ml-2 my-4 text-grey200"
                            >Giá tăng dần</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SortDropdown