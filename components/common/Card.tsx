import React from "react";
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({title, image, description}) => {
    return (
        <div className="border rounded-md shadow-md p-4">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{title}</h3>
            <p className="tex-sm text-gray-600">{description}</p>
        </div>
    )
}
export default Card;