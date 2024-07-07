const INIT_STATE={
    cart:[]
};

export const cartreducer=(state=INIT_STATE,action)=>
{
    switch(action.type){
        case"ADD_CART":
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }
        default:
            return state
    }

}   