import React from 'react';
import PricingFeatures from './PricingFeatures';
import { Key } from 'lucide-react';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {name, price, description, features} = pricing;
    
    return (
        <div className='border-white rounded-2xl bg-pink-950 p-10'>
            {/* card header  */}
            <div className=''>
            <h1 className='text-3xl'>{name}</h1>
            <h3 className='text-xl'>{price}</h3>
            </div>
            {/* card body */}
            <div className='bg-pink-900 rounded-2xl p-3 my-2'>
            <h4>{description}</h4>
            {
                features.map((features,index) =>
                     <PricingFeatures Key={index} features={features}></PricingFeatures>)
            }
            </div>
        </div>
    );
};

export default PricingCard;