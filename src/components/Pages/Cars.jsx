import React, { useState, useEffect } from "react";
import  getCars  from "../services/apiCars";
import CarsList from "../../components/CarsList/CarsList";
import FormFilter from "../../components/FormFilters/FormFilters";
import Button from "components/Button/Button";

const Cars = () => {
  const [cars, setCars] = useState(null);
  const [page, setPage] = useState(1);
  const carsPerPage = 8;

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await getCars(page, carsPerPage);
        setCars(response)
      } catch (error) {
        console.error("Error:", error);
      }
    };

    loadCars();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <FormFilter />
      {cars ? <CarsList cars={cars} /> : <p>Loading...</p>}
      <Button onLoadMore={handleLoadMore}/>
      {/* {!noMoreCars ? (
        <button onClick={handleLoadMore}>Load more</button>
      ) : (
        <div>Watched all</div>
      )} */}
    </div>
  );
};

export default Cars;

  // const filteredCars = selectedCar
  //   ? cars.filter((car) => car.brand === selectedCar)
  //   : cars;

