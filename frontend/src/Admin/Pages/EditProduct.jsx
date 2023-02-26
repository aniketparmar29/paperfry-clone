import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../Images/logo.png";
import "../Style.css";
import {
  getProduct,
  updateProduct,
} from "../../Redux/Admin/AdminProduct/action";
import Sidebar from "../Components/Sidebar";

const EditProduct = () => {
  const { _id } = useParams();
  const product = useSelector((store) => store.AdminProduct.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState({
    images: [],
    title: "",
    brand: "",
    category: "",
    mrp: "",
    discount: "",
  });

  let name, value;
  const getProductValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCurrentProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(_id, currentProduct)).then(() =>
      navigate("/admin/product")
    );
  };

  useEffect(() => {
    if (product.length === 0) {
      dispatch(getProduct());
    }
  }, [dispatch, product.length]);

  useEffect(() => {
    if (_id) {
      const mall = product.find((item) => item._id == _id);
      mall && setCurrentProduct(mall);
    }
  }, [_id, product]);

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
          <h2>Update Product</h2>
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
              value={currentProduct.images[0]}
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
              value={currentProduct.title}
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
              value={currentProduct.brand}
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
              value={currentProduct.category}
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
              value={currentProduct.mrp}
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
              value={currentProduct.discount}
              onChange={getProductValue}
            />
          </div>
          <div>
            <label>Availability</label>
            <select
              className="form_input"
              onChange={(e) => {
                const newAvailability =
                  e.target.value === "true" ? true : false;
                setCurrentProduct({
                  ...currentProduct,
                  in_stock: newAvailability,
                });
              }}
              value={currentProduct.in_stock}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <input type="submit" id="form_button" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
