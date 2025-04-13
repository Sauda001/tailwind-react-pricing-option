import { BookCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({features}) => {
    return (
        <p className='flex mt-4'><BookCheck className='mr-4'></BookCheck>{features}</p>
    );
};

export default PricingFeatures;