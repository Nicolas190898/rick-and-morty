import styles from './Form.module.css'
import validate from './validate';
import { useState } from 'react';
const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value
      })
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        type="email"
        placeholder="Escribe tu email"
        value={userData.email}
        onChange={handleChange}
        className={errors.email && styles.warning}
      />
      <p className={styles.danger}>{errors.email}</p>
      <br />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        type="password"
        placeholder="Escribe tu contraseña"
        value={userData.password}
        onChange={handleChange}
        className={errors.password && styles.warning}
      />
      <p className={styles.danger}>{errors.password}</p>
      <br />
      <button>Submit</button>
    </form>
  );
}
export default Form;