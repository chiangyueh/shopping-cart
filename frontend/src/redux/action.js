export const ADD_TO_CART = 'ADDTOCART';
export const DELETE_FROM_CART = "DELETEFROMCART"
export const CHECK_TO_PAY = "CHECKTOPAY"
export const CHECK_OR_UNCHECK_ALL = "CHECKORUNCHECKALL"
export const SET_PLATE_NUM_FROM_CART = "SETPLATENUMFROMCART"

export const addItemAction = (payload) => ({
    type : ADD_TO_CART,
    payload
})

export const deleteItemAction = (payload) => ({
    type : DELETE_FROM_CART,
    payload
})

export const checkToPay = (payload) => ({
    type : CHECK_TO_PAY,
    payload
})

export const checkOrUncheckAll = (payload) => ({
    type : CHECK_OR_UNCHECK_ALL,
    payload
})

export const setPlateNumFromCart = (payload) => ({
    type : SET_PLATE_NUM_FROM_CART,
    payload
})