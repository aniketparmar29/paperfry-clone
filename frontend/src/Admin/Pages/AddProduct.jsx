import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import logo from "../Images/logo.png";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Admin/AdminProduct/action";
import Sidebar from "../Components/Sidebar";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    images: [],
    title: "",
    brand: "",
    category: "",
    mrp: "",
    discount: "",
    in_stock: true,
  });

  let name, value;
  const getProductValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (product.images,
      product.title,
      product.brand,
      product.category,
      product.mrp,
      product.discount)
    ) {
      dispatch(addProduct(product));
      alert("New Product added");
      setProduct("");
    } else {
      alert("Please fill all the details");
    }
  };

  return (
    <div>
      <Sidebar />
      <div id="form">
        <Flex onClick={() => navigate("/admin/product")} cursor="pointer">
          <button>
            <AiOutlineArrowLeft />
          </button>
          <Text>Back to Product page</Text>
        </Flex>
        <div id="form_logo">
          <img src={logo} alt="" width={"70%"} />
          <h2>Add Product</h2>
        </div>
        <form onSubmit={handleSubmit} id="product_form">
          <div>
            <label>Image URL</label>
            <br />
            <input
              className="form_input"
              type="url"
              placeholder="Image.url"
              name="images"
              value={product.images}
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
              name="title"
              value={product.title}
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
              name="mrp"
              value={product.mrp}
              onChange={getProductValue}
            />
          </div>
          <div>
            <label>Discount</label>
            <br />
            <input
              className="form_input"
              type="text"
              placeholder="Discount"
              name="discount"
              value={product.discount}
              onChange={getProductValue}
            />
          </div>
          <input type="submit" id="form_button" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
