import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const filterList = () => {
    console.log(resList);
    const data = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(data);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(resData);
    setFilterRestaurant(resData);
  };

  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onInput={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => filterList()}>Search</button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((res) => (
          <Link to={`/restaurants/${res.info.id}`}>
            <RestaurantCard key={res.info.id} resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
