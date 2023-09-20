import React, { useState, useEffect } from "react";
import { getCars } from "../services/apiCars";
import CarsList from "../../components/CarsList/CarsList";
import FormFilter from "../../components/FormFilters/FormFilters";

const Cars = () => {
  const [cars, setCars] = useState(null);
  const [selectedCar, setSelectedCar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const carsList = await getCars();
      setCars(carsList);
    };

    fetchData();
  }, []);

  const filteredCars = selectedCar
    ? cars.filter((car) => car.brand === selectedCar)
    : cars;

  return (
    <div>
      <FormFilter selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
      {filteredCars ? <CarsList cars={filteredCars} /> : <p>Loading...</p>}
      <button>Load more</button>
    </div>
  );
};

export default Cars;
