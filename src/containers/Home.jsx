import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import useInitalState from "../hooks/UseInitialState";

const API = "http://localhost:3000/initialState"

import "../assets/style/App.scss";

const Home = () => {
  const inistalState = useInitalState(API)
  return (
    <>
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

    </>
  );
};

export default Home;
