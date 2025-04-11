import React, { useEffect, useState } from "react";
import Halmet from "../components/Halmet/Halmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../UI/ProductsList";
import products from "../assets/data/products";

const Home = () => {
  const [data, setData] = useState(products);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filterProduct = () =>
      products.filter((item) => item.category === "chair");
    setData(filterProduct);
  }, []);

  return (
    <Halmet title={"home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  libero porro labore ullam veniam rem. Et, fugiat nihil
                  accusamus.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="tranding__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Tranding Products</h2>
            </Col>
          </Row>
        </Container>
      </section>

      <ProductsList data= {data}/>
    </Halmet>
  );
};

export default Home;
