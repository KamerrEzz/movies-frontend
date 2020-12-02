import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../assets/style/App.scss";

const Home = ({mylist, trends, originals}) => {
  return (
    <>
      <Search />

      {mylist.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{mylist.map((item) => (
							<CarouselItem key={item.id} {...item} isList />
						))}
					</Carousel>
				</Categories>
			)}

      <Categories title="trends">
        <Carousel>
          {trends?.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>

      <Categories title="originals">
        <Carousel>
          {originals?.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);
