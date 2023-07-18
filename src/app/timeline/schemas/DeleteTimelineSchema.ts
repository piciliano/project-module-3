import * as yup from "yup";

const makeDeleteTimelineSchema = () => {
  return yup.object().shape({
    id: yup.string().required(),
  });
};

export { makeDeleteTimelineSchema };