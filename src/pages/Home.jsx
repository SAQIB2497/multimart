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
import CounterImg from "../assets/images/counter-timer-img.png";
import Clock from "../UI/Clock";

const Home = () => {
  const [trandingProducts, setTrandingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProductss] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrandingProducts = () =>
      products.filter((item) => item.category === "chair");

    const filteredBestSalesProducts = () =>
      products.filter((item) => item.category === "sofa");

    setTrandingProducts(filteredTrandingProducts);
    setBestSalesProductss(filteredBestSalesProducts);
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
          <ProductsList data={trandingProducts} />
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
          </Row>
          <ProductsList data={bestSalesProducts} />
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
            <div className="clock_top-content">
              <h2 className="text-white fs-6 mb-2">Limited Offer</h2>
              <h3 className="text-white fs-5 mb-3">Quality ArmChair</h3>
            </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2}} className="buy__btn store__btn">
                <Link to="/shop">visit store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img src={CounterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Halmet>
  );
};

export default Home;
