import React from 'react'
import PageTitle from '../../../globalComponents/PageTitle'
import ProductCard from '../../../globalComponents/ProductCard'

const BestSeller = (props) => {
    return (
        <div className=" bg-no-repeat bg-[position:bottom_left,bottom_right] py-10
            lg:bg-[url(/src/assests/images/global/leaf-bg-left.png),_url(/src/assests/images/global/leaf-bg-right.png)]
        ">
            <PageTitle title="Best Seller" className="mx-28" />
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4">
                {
                    props.bestSeller.map(item => <ProductCard avtSrc={item.Image}
                        name={item.Name}
                        category={item.category.Name}
                        price={item.SPrice}
                        id={item.id}
            />
                    )
                }
            </div>
        </div>
    )
}

export default BestSeller
