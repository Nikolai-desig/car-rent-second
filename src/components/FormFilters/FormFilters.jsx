import { Form, Formik, Field } from 'formik';
import carBrands from './carBrands';
import rentPrice from './rentPrice';
import css from './FormFilter.module.css';

const FormFilter = ({ setSelectedCar }) => {
  return (
    <Formik
      initialValues={{
        selectedCar: '',
      }}
      onSubmit={values => {
        console.log(values.selectedCar);
      }}
    >
      <Form className={css.forms}>
        <div className={css.form}>
          <h5 className={css.title}>Car brand</h5>
          <Field
            name="selectedCar"
            as="select"
            className={css.select__field}
            // onChange={(e) => {
            //   const selectedValue = e.target.value;
            //   setSelectedCar(selectedValue);
            // }}
          >
            <option value="">Chose car</option>
            {carBrands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>
        <div className={css.form}>
          <h5 className={css.title}>Price/ 1 hour</h5>
          <Field name="selectedPrice" as="select" className={css.select__field}>
            <option value="">To $</option>
            {rentPrice.map(price => (
              <option key={price} value={price}>
                To {price}$
              </option>
            ))}
          </Field>
        </div>
        <div className={css.form}>
          <h5 className={css.title}>Car mileage / km</h5>
          <div className={css.from__to}>
            <div>
              <Field
                type="text"
                id="from"
                name="from"
                placeholder="From"
                className={`${css.select__field} ${css.select__field1}`}
              >
              </Field>
            </div>
            <div>
              <Field
                type="text"
                id="to"
                name="to"
                placeholder="To"
                className={`${css.select__field} ${css.select__field2}`}
              >

              </Field>
            </div>
          </div>
        </div>
        <button type="submit" className={css.button__form}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FormFilter;
