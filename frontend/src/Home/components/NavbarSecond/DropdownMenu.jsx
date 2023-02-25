import React from "react";
import "./Dropdown.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="tabbarParent">
        <div
          className="mainDiv">
          <div className="category">
            <p className="categoryP"  onMouseOver={() => {setNav(!nav) }}> Furniture</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Sofas & Recliners</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Cabinetry</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Beds</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Mattresses</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Furnishings</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Decor</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Lighting</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Appliances</p>
          </div>
          <div className="category">
            <p  onMouseOver={() => {setNav(!nav) }}>Modular</p>
          </div>
        </div>
      </div>
      {nav ? (
        <div className="subCategory">
          <div className="uldiv">
            <p>Sofa</p>
            <Link to="/productlist">
              <ul>
                <li>3-Seater sofas</li>
                <li>2-Seater Sofas</li>
                <li>1-seater Sofas</li>
                <li>Sofa Sets</li>
                <li>Sectional Sofas</li>
                <li>Recliners</li>
                <li>Chaise Loungers</li>
                <li>Sofa Cum beds</li>
                <li>Futons</li>
              </ul>
            </Link>
          </div>
          <div className="uldiv">
            <p>Seating</p>
            <ul>
              <li>Settees</li>
              <li>Benches</li>
              <li>Chaise Loungers</li>
              <li>Recamiers</li>
              <li>Ottamans</li>
              <li>Pouffes</li>
              <li>Foot Stools</li>
              <li>Swings</li>
              <li>Hammocks</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Chairs</p>
            <ul>
              <li>Arm Chairs</li>
              <li>Rocking Chairs</li>
              <li>Lounge Chairs</li>
              <li>Cafe Chairs</li>
              <li>Iconic Chairs</li>
              <li>Slippers Chairs</li>
              <li>Barrels Chairs</li>
              <li>Folding Chairs</li>
              <li>Plastic Chairs</li>
              <li>Wings Chairs</li>
              <li>Office chairs</li>
              <li>Patio Chairs</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Tables</p>
            <ul>
              <li>Coffee Tables</li>
              <li>Coffee Tables Sets</li>
              <li>End Tables</li>
              <li>Nest Tables</li>
              <li>Console Tables</li>
              <li>Portable Tables</li>
              <li>Study Tables</li>
              <li>Dressing Tables</li>
              <li>Office Tables</li>
              <li>Patio Tables</li>
              <li>Patio sets</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Tables</p>
            <ul>
              <li>Coffee Tables</li>
              <li>Coffee Tables Sets</li>
              <li>End Tables</li>
              <li>Nest Tables</li>
              <li>Console Tables</li>
              <li>Portable Tables</li>
              <li>Study Tables</li>
              <li>Dressing Tables</li>
              <li>Office Tables</li>
              <li>Patio Tables</li>
              <li>Patio sets</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Cabinatory</p>
            <ul>
              <li>Shoe racks</li>
              <li>Entertainment units</li>
              <li>Cabinet & sideboards</li>
              <li>Chest of drawers</li>
              <li>Book Shelves</li>
              <li>Book Shelves</li>
              <li>Book cases</li>
              <li>Trunks</li>
              <li>Wardrobes</li>
              <li>Modular wardrobes</li>
              <li>Plastics cabinets</li>
              <li>Office cabinets</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Beds</p>
            <ul>
              <li>Settees</li>
              <li>Benches</li>
              <li>Chaise Loungers</li>
              <li>Recamiers</li>
              <li>Ottamans</li>
              <li>Pouffes</li>
              <li>Foot Stools</li>
              <li>Swings</li>
              <li>Hammocks</li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DropdownMenu;