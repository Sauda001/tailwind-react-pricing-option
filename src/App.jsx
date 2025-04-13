import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import Navbar from './assets/components/Navbar/Navbar'
import PricingOptions from './assets/components/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res=>res.json());

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          </Suspense>
      </main>
    </>
  )
}

export default App
