import { Analytics } from '@vercel/analytics/react';

import MHCarousel from './components/MHCarousel'
import Header from './components/Header'
import Services from './components/Services'
import Doctors from './components/Doctors'
import FAQ from './components/FAQ'
import Address from './components/Address'
import Constants from './constants'

export default function Home() {
  return (<>
    <Analytics/>
    <Header/>
    <MHCarousel></MHCarousel>
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900" style={{"color": `${Constants.themeColor}`}}>&quot;Goal of our treatment is to adhere to natural process until there is an absolute requirement of scientific intervention&quot;</p>
      </blockquote>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"/>
      <Services></Services>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"/>

      <Doctors></Doctors>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"/>
      <FAQ></FAQ>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"/>
      <Address></Address>
      {/* <Testimonials></Testimonials> */}
    </main>
    </>
  )
}
