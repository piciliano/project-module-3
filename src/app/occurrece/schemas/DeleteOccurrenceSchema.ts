import * as yup from "yup";

const makeDeleteOccurrenceSchema = () => {
  return yup.object().shape({
    id: yup.string().required(),
  });
};

export { makeDeleteOccurrenceSchema };