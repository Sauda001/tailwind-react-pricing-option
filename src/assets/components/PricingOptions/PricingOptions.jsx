import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    
    return (
        <div className='md:mx-15'>
            <h2 className='text-3xl my-4'>Get Our Membership using raw jsx</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }

                {/* Using daisyUI */}
                
                {
                    pricingData.map(pricing=><DaisyPricing
                    key={pricing.id} pricing={pricing}
                    ></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;