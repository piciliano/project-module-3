import * as yup from "yup";

const makeCreatePatientSchema = () => {
  return yup.object().shape({
    name: yup.string().required(),
    birthdate: yup.date().required(),
    contact: yup.string().required(),
    demands: yup.string().required(),
    personalAnnotations: yup.string().required(),
  });
};

export { makeCreatePatientSchema }
