import React from "react";
import Header from "../components/Header";

const Home = () => (
  <>
    <Header />
    <div className="container text-center my-3">
      <h2 className="display-5 fw-bold mb-4">Welcome to Our Store!</h2>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <img
            src="images/ecommerce.jpeg"
            alt="E-commerce banner"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "550px", width: "80%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  </>
);

export default Home;
