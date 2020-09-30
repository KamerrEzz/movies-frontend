import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import useInitalState from "../hooks/UseInitialState";

const API = "http://localhost:3000/initialState"

import "../assets/style/App.scss";

const App = () => {
  const inistalState = useInitalState(API)
  return (
    <div className="App">
      <Header />
      <Search />

      {
        (inistalState.length,
        length > 0 && (
          <Categories title="Mi Lista">
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        ))
      }

      <Categories title="trends">
        <Carousel>
          {inistalState.trends?.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>

      <Categories title="originals">
        <Carousel>
          {inistalState.originals?.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
