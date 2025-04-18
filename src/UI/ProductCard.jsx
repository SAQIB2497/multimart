import React from "react";
import { motion } from "framer-motion";
import "../styles/product_card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
  return (
    <Col lg="3" md="4" className='mb-4'>
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.8 }}
            src={item.imgUrl}
            alt="productImg"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
        </div>
        <span>{item.category}</span>
        <div className="product__card-bottom d-flex align-items-center justify-content-between">
          <span className="price">${item.price}</span>
          <motion.span whileHover={{scale: 1.2}}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
