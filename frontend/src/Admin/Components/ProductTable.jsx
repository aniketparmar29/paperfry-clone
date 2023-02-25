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
  image,
  name,
  brand,
  category,
  price,
  inventory,
  availability,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id)).then(() => dispatch(getProduct()));
  };

  return (
    <TableContainer width={"80%"}>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Price</Th>
            <Th>Brand</Th>
            <Th>Category</Th>
            <Th>Inventory</Th>
            <Th>Availability</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <img src={image} alt="" />
            </Td>
            <Td>{name}</Td>
            <Td>₹ {price}</Td>
            <Td>{brand}</Td>
            <Td>{category}</Td>
            <Td>{inventory}</Td>
            <Td>
              {availability ? (
                <h3 style={{ color: "green" }}>Available</h3>
              ) : (
                <h3 style={{ color: "red" }}>Out of Stock</h3>
              )}
            </Td>
            <Td>
              <button
                id="edit"
                onClick={() => navigate(`/admin/editproduct/${id}`)}
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
