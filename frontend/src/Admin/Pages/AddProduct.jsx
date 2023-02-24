import React, { useState } from "react";
import "../Style.css";
import logo from "../Images/logo.png";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    brand: "",
    category: "",
    price: "",
    inventory: "",
  });

  let name, value;

  const getProductValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div id="form">
      <img src={logo} alt="" width={"50%"} />
      <h2 id="add_product">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL</label>
          <br />
          <input
            className="form_input"
            type="url"
            placeholder="Image.url"
            name="image"
            value={product.image}
            onChange={getProductValue}
          />
        </div>
        <div>
          <label>Title</label>
          <br />
          <input
            className="form_input"
            type="text"
            placeholder="Title"
            name="name"
            value={product.name}
            onChange={getProductValue}
          />
        </div>
        <div>
          <label>Brand</label>
          <br />
          <input
            className="form_input"
            type="text"
            placeholder="Brand"
            name="brand"
            value={product.brand}
            onChange={getProductValue}
          />
        </div>
        <div>
          <label>Category</label>
          <br />
          <input
            className="form_input"
            type="text"
            placeholder="Category"
            name="category"
            value={product.category}
            onChange={getProductValue}
          />
        </div>
        <div>
          <label>Price</label>
          <br />
          <input
            className="form_input"
            type="number"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={getProductValue}
          />
        </div>
        <div>
          <label>Inventory</label>
          <br />
          <input
            className="form_input"
            type="text"
            placeholder="Inventory"
            name="inventory"
            value={product.inventory}
            onChange={getProductValue}
          />
        </div>
        <input type="submit" id="" />
      </form>
    </div>
  );
};

export default AddProduct;
