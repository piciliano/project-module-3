import * as yup from "yup"

const makeDeletePatientSchema = () => {
    return yup.object().shape({
        id: yup.string().required()
    })
}
export { makeDeletePatientSchema }
