import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "reactstrap";

const ProductsList = ({ data }) => {
  return (
    <Container>
      <Row>
        {data?.map((item) => (
          <ProductCard item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
