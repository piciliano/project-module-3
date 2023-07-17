import * as yup from "yup"

const makeCreateOccurrenceSchema = () => {
    return yup.object().shape({
        name: yup.string().required(),
        content: yup.string().required(),
        kind: yup.string().required()
    })
}

export { makeCreateOccurrenceSchema }