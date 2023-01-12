import { ADD_TO_CART, DELETE_FROM_CART, CHECK_TO_PAY, CHECK_OR_UNCHECK_ALL, SET_PLATE_NUM_FROM_CART} from "./action";

const initialState = {
    items : []
}

export function cartReducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            const addItems = [...state.items]
            addItems.push(action.payload)
            return {items : addItems}
        case DELETE_FROM_CART:
            const deleteItems = [...state.items]
            deleteItems.splice(action.payload,1)
            return {items : deleteItems}
        case CHECK_TO_PAY:
            const checkedItems = [...state.items]
            checkedItems[action.payload.index] = action.payload.data 
            return {items : checkedItems}
        case CHECK_OR_UNCHECK_ALL:
            const unifyCheck = [...state.items]
            unifyCheck.forEach(item=>item.check = action.payload)
            return {items : unifyCheck}
        case SET_PLATE_NUM_FROM_CART:
            const setPlateNumFromCart = [...state.items]
            setPlateNumFromCart[action.payload.index].plateNum =  action.payload.plateNum
            return {items : setPlateNumFromCart}
        default:
            return state
    }
}