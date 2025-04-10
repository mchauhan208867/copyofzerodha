import React from 'react'
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
      <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and
        more</p>
        <div className="d-flex justify-content-center mb-5">
  <button
    className="btn btn-primary p-2 fs-5"
    onClick={() => navigate("/signup")}
  >
    SignUp
  </button>
</div>


      </div>
      
    </div>
  )
}

export default Hero
