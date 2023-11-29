import { ActionTypes } from "../ActionTypes";

const initialState ={
    isLoading:false,
    isError:false,
    baskets:[],
}



const basketReducer = (state= initialState, {type, payload}) => {

    switch(type){

        case ActionTypes.SET_BASKET_LOADING:
            return {...state, isLoading: true}
        case ActionTypes.SET_BASKET_ERROR:
            return {...state,isLoading:false, isError:true}
        case ActionTypes.SET_BASKET:
            return{...state, isLoading:false, isError:false, baskets:payload}
        case ActionTypes.ADD_TO_BASKET:
            return{...state, baskets: state.baskets.concat(payload)}
        case ActionTypes.UPDATE_ITEM:
            const newBasket = state.baskets.map((item) => {
                if((item.id === payload)) {
                    return {...item, adet: item.adet+1}
                }else{
                    return item;
                }
            })
            return {...state, baskets: newBasket}
        
        case ActionTypes.REMOVE_ITEM: 
        const filtered = state.baskets.filter((i) => i.id !== payload);
        return{...state,baskets:filtered}
        
        default:
        return state;
    }

}

export default basketReducer;