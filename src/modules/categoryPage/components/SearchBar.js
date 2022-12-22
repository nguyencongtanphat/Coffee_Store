import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const SearchBar = (props) => {
    const [stringToSearch,setString] = useState('')
    const [resource,setResource] = useState(props.data)

    // Get data 
    useEffect(() => {
        setResource(props.data)
    },[props.data])

    // Event control
    window.addEventListener('keydown',(event) => {
        if (event.code === 'Enter'){
            props.handleFilter(resource.filter(product => product.Name.toLocaleLowerCase('VN').includes(stringToSearch.toLocaleLowerCase('VN'))))
        }
    })

    return (
        <div className="flex bg-grey rounded-xl border-none ml-2 w-60 md:w-72 h-12">
            <input className="bg-grey rounded-xl border-none w-60 md:w-72 h-11 text-b11 ml-4 text-grey100 focus:outline-none"
                type="text"
                placeholder="Tìm theo tên..."
                value={stringToSearch}
                onChange={(e) => setString(e.target.value)}
            />
            <button className="border-none bg-grey rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-grey300"
                onClick={() => {
                    props.handleFilter(resource.filter(product => product.Name.toLocaleLowerCase('VN').includes(stringToSearch.toLocaleLowerCase('VN'))))
                    setString('')
                }}
            >
                <FontAwesomeIcon icon={faSearch} size="xl" color="orange"
                    className="mx-4 my-3"
                />
            </button>
        </div>
    )
}

export default SearchBar