import React, { useEffect, useState } from "react";
import PageTitle from "../../../globalComponents/PageTitle";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../../../globalComponents/ProductCard";
import { createAxiosInstance } from "../../../service";
import LoadingSpinner from "../../../globalComponents/LoadingSpinner";
import sad_face from '../../../assests/images/error/sad_face.png'
const CategoryPage = (props) => {
    const [productsByCategory, setProductsByCategory] = useState([])
    const [filterProducts, setFilteredProducts] = useState([])
    function ComparePrice(a, b) {
        return b.SPrice - a.SPrice
    }
    async function FetchData() {
        
        const response = await createAxiosInstance().get(
          `api/menu/categories/${props.type}`
        );
        setProductsByCategory(response.data.data.sort(ComparePrice));
        setFilteredProducts(response.data.data.sort(ComparePrice));
    }


    function FilterProducts(filteredProducts) {
        setFilteredProducts(filteredProducts)
    }

    useEffect(() => {
        FetchData()
    }, [props.type])


    return (
        <>
            {productsByCategory.length > 0 ? (
                <div className="
            bg-no-repeat bg-[position:bottom_left,bottom_right]
            lg:bg-[url(/src/assests/images/global/leaf-bg-left.png),_url(/src/assests/images/global/leaf-bg-right.png)]
        ">
                    <PageTitle title={props.title} />
                    <div className="flex flex-row-reverse justify-between md:justify-around lg:flex-row lg:my-8">
                        <SortDropdown handleFilter={FilterProducts} data={[...filterProducts]} />
                        <SearchBar handleFilter={FilterProducts} data={productsByCategory} />
                    </div>
                    {
                        filterProducts.length > 0 ? (
                            <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4">

                                {filterProducts.map(item => <ProductCard
                                    avtSrc={item.Image}
                                    name={item.Name}
                                    category={item.category.Name}
                                    price={item.SPrice}
                                    id={item.id}
                                />)}
                            </div>
                        ) : (
                            <div className="my-20 text-center">
                                <img
                                    src={sad_face}
                                    alt="Sad Face"
                                    className="w-60 h-60 mx-auto"
                                />
                                <p className="text-center text-grey100 text-b1 mt-8 mx-auto w-[58rem]"
                                >Tiếc quá! Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa</p>
                            </div>
                        )
                    }
                </div>
            ) : (
                <LoadingSpinner />
            )
            }
        </>
    );
};

export default CategoryPage;