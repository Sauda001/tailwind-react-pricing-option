import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import Navbar from './assets/components/Navbar/Navbar'
import PricingOptions from './assets/components/PricingOptions/PricingOptions'
import ResultChart from './assets/components/ResultChart/ResultChart'
import axios from 'axios'
import MarksCharts from './assets/components/MarksCharts/MarksCharts'

const pricingPromise = fetch('pricingData.json').then(res=>res.json());
const marksPromise = axios.get('marksData.json');

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

          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <MarksCharts marksPromise={marksPromise}></MarksCharts>
          </Suspense>

          <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
