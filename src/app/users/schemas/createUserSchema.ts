import * as yup from "yup"

const makeCreateUserSchema = () => {
    return yup.object().shape({
        name: yup.string().required("nome nao informado!"),
        email: yup.string().required("email nao informado"),
        password: yup.string().required("senha nao informada"),
    })
}
export { makeCreateUserSchema }