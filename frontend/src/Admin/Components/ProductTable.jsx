import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { AiOutlineClose, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getProduct,
} from "../../Redux/Admin/AdminProduct/action";

const ProductTable = ({
  images,
  title,
  brand,
  category,
  mrp,
  discount,
  in_stock,
  _id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(_id)).then(() => dispatch(getProduct()));
  };

  return (
    <TableContainer width={"60%"}>
      <Table variant="striped" cellSpacing={"100px"}>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Price</Th>
            <Th>Brand</Th>
            <Th>Category</Th>
            <Th>Discount</Th>
            <Th>Availability</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <div
                style={{
                  width: "100%",
                }}
              >
                <img src={images[0]} alt="" width="100%" />
              </div>
            </Td>
            <Td>{title}</Td>
            <Td>₹ {mrp}</Td>
            <Td>{brand}</Td>
            <Td>{category}</Td>
            <Td>{discount}</Td>
            <Td>
              {in_stock ? (
                <h3 style={{ color: "green" }}>Available</h3>
              ) : (
                <h3 style={{ color: "red" }}>Out of Stock</h3>
              )}
            </Td>
            <Td>
              <button
                id="edit"
                onClick={() => navigate(`/admin/editproduct/${_id}`)}
              >
                <AiFillEdit />
              </button>
              <button id="close" onClick={handleDelete}>
                <AiOutlineClose />
              </button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
