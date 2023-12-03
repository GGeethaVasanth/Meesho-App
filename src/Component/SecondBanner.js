import React from 'react'
import "../Component/style.css"
import "bootstrap/dist/css/bootstrap.min.css"


function SecondBanner() {
  return (
    // <!--Top Categories to choose from-->
    <div className="topCategoriesFrom">
        <div className="topCategoriesHeading">
            {/* <span className="horizontalLine"></span> */}
            <h1 className='text-center'>Top Categories to choose from</h1>
            {/* <span className="horizontalLine"></span> */}
        </div>
      

        <div className="topCategoreisImage">
            <img src="https://images.meesho.com/images/marketing/1678691686252_400.webp" alt="image1"/>
            <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp" alt="image2" />
            <img src="https://images.meesho.com/images/marketing/1678691712594_300.webp" alt="image3" />
        </div>
        </div>
    
  )
}

export default SecondBanner