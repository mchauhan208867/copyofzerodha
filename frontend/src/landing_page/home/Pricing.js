import React from "react";

function Pricing() {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row items-start gap-x-10">

        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Unbeatable pricing</h1>
          <p className="text-gray-600 mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            See Pricing <i className="fa fa-long-arrow-right" />
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-col md:flex-row justify-center gap-5">

            {/* Card 1 */}
            <div className="flex-1 text-center border rounded p-5">
              <h1 className="text-4xl font-bold mb-3">₹0</h1>
              <p className="text-gray-600">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 text-center border rounded p-5">
              <h1 className="text-4xl font-bold mb-3">₹20</h1>
              <p className="text-gray-600">Intraday and F&O</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

