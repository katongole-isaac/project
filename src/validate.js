import * as yup from "yup";

let schema;

export const email = async (email) => {
  schema = yup.object().shape({
    email: yup.string().email().trim().required(),
  });

  return await schema.isValid(email);
};


export const password = async (password) => {
  schema = yup.object().shape({
    password: yup
      .string()
      .min(6)
      .max(40)
    //   .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) //? |(^[@_#&*.+=\d+\w\^\s]$) "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      .required(),
  });
  return await schema.isValid(password);
};

export const nameValidate = async (name) => {
  schema = yup.object().shape({
    name: yup
      .string()
      .min(3)
      .max(40)
      .trim()
      .matches(/^[a-zA-Z]+$/g)
      .required(),
  });
  return await schema.isValid(name);
};

export const locationValidate = async (location) => {
  schema = yup.object().shape({
    location: yup
      .string()
      .min(3)
      .max(40)
      .trim()
      .matches(/^[^\d \^\W]+$/g)
      .required(),
  });
  return await schema.isValid(location);
};

export const phoneValidate = async (phone) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
  schema = yup.object().shape({
    phone: yup.string().min(10).trim().required().matches(pattern), // regex expressions is required to validate +()
  });
  return await schema.isValid(phone);
};

export const passport = async (passport) => {
  schema = yup.object().shape({
    passport: yup.string().trim().min(9).max(15).required(),
  });
  return await schema.isValid(passport);
};

function validateLogin(user) {
  return schema.validate(user);
}
