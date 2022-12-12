import React from 'react'
import newproduct from '../../../assests/images/home/new_product/newproduct.png'
import newproduct_desktop from '../../../assests/images/home/new_product/newproduct_desktop.png'
import AppButton from '../../../globalComponents/AppButton'
const NewProduct = () => {
    return (
        <div
            className=" lg:flex justify-center
            bg-no-repeat bg-cover
            py-10
            bg-[url('/src/assests/images/home/new_product/newproduct_background_portrait.png')]
            lg:bg-[url('/src/assests/images/home/new_product/newproduct_background.png')]"
        >
            <img src={newproduct} alt='new product' className="py-8 ml-10 lg:hidden"
            />
            <img src={newproduct_desktop} alt='new product' className="py-8 ml-10 hidden lg:block"
            />
            <div className="lg:flex flex-col aligns-start justify-center pb-8 lg:w-2/5" >
                <p className="text-center text-brown text-b10 lg:text-justify lg:text-b3"
                >Sản phẩm mới</p>
                <p className="text-center text-brown text-b2 font-MsMadi lg:text-justify"
                >Cloudy Poodle</p>
                <p className="text-grey100 text-b13 mx-8 lg:mx-0 lg:text-b8 lg:my-8"
                >Thức uống "đánh thức" năng lượng ngày mới hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê
                    nhưng muốn khám phá thêm nhiều hương vị mới.</p>
                <AppButton className="mt-4 mx-7 bg-brown rounded-2xl text-white w-80 lg:w-72 lg:py-4 lg:mx-0 cursor-pointer" text="Thử ngay" />
            </div>
        </div>
    )
}

export default NewProduct
