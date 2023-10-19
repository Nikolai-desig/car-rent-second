import React, { useState, useEffect } from 'react';
import getCars from '../services/apiCars';
import CarsList from '../../components/CarsList/CarsList';
import FormFilter from '../../components/FormFilters/FormFilters';
import Button from 'components/Button/Button';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  // const carsPerPage = 8;

  useEffect(() => {
    const loadCars = async () => {
      try {
        const cars = await getCars(page);
        if (cars.length > 0) {
          setCars(prevCars => [...prevCars, ...cars]);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadCars();
  }, [page]);

  const handleLoadMore = () => {
    setPage(pageP => pageP + 1);
  };

  return (
    <div>
      <FormFilter />
      {!cars || cars.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <CarsList cars={cars} />
      )}
      <Button onLoadMore={handleLoadMore} />
    </div>
  );
};

export default Cars;

// const filteredCars = selectedCar
//   ? cars.filter((car) => car.brand === selectedCar)
//   : cars;
