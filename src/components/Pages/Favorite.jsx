
import { useState, useEffect } from 'react';
import  getCars  from '../services/apiCars';
import CarsList from 'components/CarsList/CarsList';


const Favorite = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const carsList = await getCars();
      setCars(carsList);
    };
    fetchData();
  }, []);

  return (
  <div>
    {cars ? <CarsList cars={cars} /> : <p>Loading...</p>}
    </div>
    );
};

export default Favorite;
