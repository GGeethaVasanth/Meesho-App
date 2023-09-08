import React from 'react'
import "../Component/style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="meeshoLogo">
        <img
          src="https://www.juniper.net/content/dam/www/assets/images/us/en/customers/case-studies/logos/2023/meesho.png/jcr:content/renditions/cq5dam.web.1280.1280.png"
          alt="messhoLogo"
        />
      </div>
      {/* search box */}
      <div className="searchBox">
        <div className="searchLogo">
          <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" />
        </div>
        <input
          type="text"
          placeholder="Try Saree, Kurti or Search by Product Code"
          className="inputSearch"
        />
      </div>
      {/* Right Side Items */}
      <div className="navRight">
        <div className="downloadContainer">
          <div className="mobileIcon">
            <img src="https://cdn-icons-png.flaticon.com/256/65/65680.png"/>
          </div>
          <p>Download App</p>
        </div>
        <div className="becomeSupplierContainer">
          <p>Become a Supplier</p>
        </div>
        <div className="profileAndCart">
          <div className="profileContainer">
            <div className="profileIcon">
              <img src="https://cdn-icons-png.flaticon.com/512/14/14964.png"/>
            </div>
            <p>Profile</p>
          </div>
          <div className="cartContainer">
            <div className="cartIcon">
              <img
                src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
                alt=""
              />
            </div>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar