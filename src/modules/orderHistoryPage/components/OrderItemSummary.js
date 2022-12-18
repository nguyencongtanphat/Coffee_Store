import React from 'react'

// Summary of ordered item
const OrderItemSummary = (props) => {
    return (
        <div className="flex items-center w-48 lg:w-72 justify-between text-grey200">
            <p className="text-b13 md:text-b9">
                {props.name}
            </p>
            <p className="text-b13 md:text-b9">
                x{props.quantity}
            </p>
        </div>
    )
}

export default OrderItemSummary
