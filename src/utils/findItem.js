const findItemIn = (arr,item) => {
    return arr.some(({ _id }) => _id === item._id)
}


export {findItemIn}