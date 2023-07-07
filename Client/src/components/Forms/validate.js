const regexEmail = /^(?!.*\s)(?=.*@)[A-Za-z0-9._%+-]{1,35}@[\w.-]+\.[A-Za-z]{2,4}$/;
const passwordRegex = new RegExp('[0-9]');
export default function validate(input) {
  const errors = {}
  if (!regexEmail.test(input.email)) {
    errors.email = 'Debe ser un correo electronico valido'
  }
  if (input.email.length > 35) {
    errors.email= 'Máximo 35 caracteres'
  }
  if (!passwordRegex.test(input.password)) {
    errors.password = "Al menos un numero";
  } 
    if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "tiene que tener una longitud entre 6 y 10 caracteres";
    }
  return errors;
}
 