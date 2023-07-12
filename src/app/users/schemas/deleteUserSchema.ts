import * as yup from "yup"

const makeDeleteUserSchema = () => {
    return yup.object().shape({
        id: yup.string().required()
    })
}
export { makeDeleteUserSchema }