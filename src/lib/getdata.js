import data from '@/../public/data.json'

export const getData = () => {
    return data
}
export const getSingleData = (id) => {
    console.log(typeof id)
    return data.filter(product => product.id == id)
}
 