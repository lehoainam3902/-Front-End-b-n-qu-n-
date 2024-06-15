import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { getCategories } from "../../State/Category/Action";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((store) => store);
  const [selectedCategory, setSelectedCategory] = useState("Filter");
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (selectedCategory !== "Filter") {
      const data = {
        category: selectedCategory,
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 100000000,
        minDiscount: 0,
        sort: "price-low",
        pageNumber: 0,
        pageSize: 10,
        stock: "",
      };
      dispatch(findProducts(data));
    }
  }, [selectedCategory, dispatch]);

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products" />
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="Filter">Filter</MenuItem>
          {categories?.categories?.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={`/images/product/${item.imageUrl}`}></Avatar>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.title}
                  </TableCell>

                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleProductDelete(item.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductsTable;
