import { ActionTypes } from "../constants/constants";

const initialState = {
    numberOfCakes: 10
}
const cakeReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.BUY_CAKE: return {
            ...state, numberOfCakes: state.numberOfCakes-1
        }
        default: return state;
    }
}
export default cakeReducer;