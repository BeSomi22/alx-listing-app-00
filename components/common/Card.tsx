// import React from "react";
// import { CardProps } from '../../interfaces';

// const Card: React.FC<CardProps> = ({title, image, description}) => {
//     return (
//         <div className="border rounded-md shadow-md p-4">
//             <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
//             <h3 className="text-lg font-bold mt-2">{title}</h3>
//             <p className="tex-sm text-gray-600">{description}</p>
//         </div>
//     )
// }
// export default Card;
import {PropertyProps} from '@/interfaces';
import Image from 'next/image';

const Card:React.FC<PropertyProps> = ({name, address, price, rating, category, image}) =>{
    return(
        <div className='w-full sm:w-[48%] md:w-[30%] bg-white rounded-xl overflow-hidden shadow-md'>
             <div className="relative h-48 w-full">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <button className='bg-white/3 px-5 py-1 text-sm'></button>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p><span>{address.state}</span><span>{address.city}</span><span>{address.country}</span></p>
        <p className="text-gray-600">{price}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
        </div>
    )
}