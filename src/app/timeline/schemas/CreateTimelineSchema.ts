import * as yup from "yup";

const makeCreateTimelineSchema = () => {
  return yup.object().shape({
    name: yup.string().required("O nome da timeline é obrigatório."),
  });
};

export { makeCreateTimelineSchema };
