import React from 'react'

function FirstBanner() {
  return (
    <div className="FirstBannerContainer">
        <div className="LowestPriceText">
        <h1>Lowest Prices <br/>Best Quality Shopping</h1>
        <div className="lowestPriceContainer">
            <div className="freeDelivery">
            <div className="lowestPrice_Icon">
                <img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" className="freeDelivery-Icon" />
            </div>
            <p>Free <br/>Delivery</p>
        </div>

        
            <div className="cashOnDelivery">
            <div className="lowestPrice_Icon">
                <img src="https://images.meesho.com/images/pow/cod_jamun.svg" />
            </div>
            <p>Cash On <br/>Delivery</p>
        </div>
        <div className="easyReturn">
            <div className="lowestPrice_Icon">
                <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" />
            </div>
            <p>Easy <br/>Return</p>
        </div>
        </div>
        <div className="downloadMeeshoApp">
            <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" className="playstoreLogo" />
            <p>Download the Meesho App</p>
        </div>

        </div>
        <div className="LowestPriceImage">
            <img src="https://images.meesho.com/images/marketing/1687149525469_512.webp" alt="" />
        </div>
    </div>
  )
}

export default FirstBanner