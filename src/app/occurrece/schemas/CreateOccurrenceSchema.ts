import * as yup from "yup"

const makeCreateOccurrenceSchema = () => {
    return yup.object().shape({
        title: yup.string().required(),
        content: yup.string().required(),
        kind: yup.string().required()
    })
}

export { makeCreateOccurrenceSchema }