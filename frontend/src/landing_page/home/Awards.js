import React from 'react'

function Awards() {
  return (
    <div className="container mx-auto mt-10 px-5">
      <div className="flex flex-col md:flex-row items-center">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <img 
            src="media/images/largestBroker.svg" 
            alt="Largest Broker" 
            className="w-full max-w-xs md:max-w-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 p-5 mt-5 md:mt-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Largest stock broker in India
          </h1>
          <p className="my-5 text-center md:text-left">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="flex">
            <ul className="w-1/2 list-disc pl-5">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="w-1/2 list-disc pl-5">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <img 
              src="media/images/pressLogos.png" 
              alt="Press Logos" 
              className="w-11/12 max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards

