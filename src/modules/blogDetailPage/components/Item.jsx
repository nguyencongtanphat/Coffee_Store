import React from 'react';
import { useParams } from 'react-router-dom';

function Item({ itemInfo }) {
    return (
        <div>
            <p className="text-b10 md:text-b7 text-orange leading-relaxed mt-[10px]">{itemInfo.Title}</p>
            <div>
                {
                    itemInfo.Paragraphs?.map((param, index) => {
                        if (index === itemInfo.ImagePosition) {
                            return <div>
                                <div className="flex justify-center">
                                    {itemInfo.Image != null && <img
                                        src={itemInfo.Image}
                                        alt="Ảnh content 3"
                                        className="w-[283px] h-auto md:w-[400px] md:h-auto lg:w-[450px] lg:h-auto my-[10px] md:my-[20px]"
                                    />}
                                </div>
                                <p className="text-b13 md:text-b11  text-grey100 text-center">{itemInfo.ImageCaption}</p>
                                <p className="text-b11 md:text-b8 text-grey100 mt-[10px] leading-relaxed tracking-wide">
                                    {param["Content"]}
                                </p>
                            </div>
                        }
                        return <div>
                            <p className="text-b11 md:text-b8 text-grey100 mt-[10px] leading-relaxed tracking-wide">
                                {param["Content"]}
                            </p>
                        </div>

                    })
                }
            </div>
        </div>
    );
}
export default Item;