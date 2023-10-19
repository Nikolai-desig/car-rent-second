import css from './CarsList.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { nanoid } from 'nanoid';
// import { AiFillHeart } from 'react-icons/ai';

const CarsList = ({ cars }) => {
  return (
    <ul className={css.cars__list}>
      {cars.map(car => (
        <li key={nanoid()} className={css.car__box}>
          <img src={car.img} alt={car.model} className={css.car__img} />
          <AiOutlineHeart className={css.icon}/>
          <div className={css.title}>
            <div className={css.title__model}>
              {car.make}
              <p className={css.model}>{car.model},</p>
              <p>{car.year}</p>
            </div>
            <p>{car.rentalPrice}</p>
          </div>
          <div className={css.short__info}>
            <p>
              {car.address.split(', ')[1]} | {car.address.split(', ')[2]} |{' '}
              {car.rentalCompany} | {car.type} | {car.make} | {car.id} |{' '}
              {car.accessories[0]}
            </p>
          </div>
          <button className={css.moreBtn}>leran more</button>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
