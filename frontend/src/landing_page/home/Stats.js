import React from "react";

function Stats() {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Trust with confidence
          </h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Customer-first always
              </h2>
              <p className="text-gray-600">
                That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
                worth of equity investments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                No spam or gimmicks
              </h2>
              <p className="text-gray-600">
                No gimmicks, spam, "gamification", or annoying push notifications.
                High quality apps that you use at your pace, the way you like.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                The Zerodha universe
              </h2>
              <p className="text-gray-600">
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech
                startups offer you tailored services specific to your needs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Do better with money
              </h2>
              <p className="text-gray-600">
                With initiatives like Nudge and Kill Switch, we don't just facilitate
                transactions, but actively help you do better with your money.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 p-5 flex flex-col items-center">
          <img 
            src="media/images/ecosystem.png" 
            alt="Ecosystem" 
            className="w-full max-w-md"
          />

          <div className="flex flex-col md:flex-row gap-5 mt-5 text-center">
            <a 
              href="#" 
              className="text-blue-600 hover:underline flex items-center justify-center gap-2"
            >
              Explore our products <i className="fa fa-long-arrow-right" />
            </a>

            <a 
              href="#" 
              className="text-blue-600 hover:underline flex items-center justify-center gap-2"
            >
              Try Kite demo <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
