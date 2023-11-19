import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Form } from './FormMovie.styled';

export const FormMovie = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      value: '',
    },
    onSubmit: values => {
      onSubmit(values.value);
      formik.resetForm();
    },
    validationSchema: yup.object().shape({
      value: yup.string().required('Please enter the name of the movie'),
    }),
  });

  const { handleSubmit, handleChange, handleBlur, values } = formik;

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="value"
          value={values.value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter search movies"
        />
      </label>
      <button type="submit">Search</button>
      {formik.submitCount > 0 && formik.errors.value && (
        <Text>{formik.errors.value}</Text>
      )}
    </Form>
  );
};
