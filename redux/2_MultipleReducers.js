import * as redux from "redux"
import { legacy_createStore as createStore } from "redux"

// Actions

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake () {
    return {
        type: BUY_CAKE
    }
}

function buyIcrecream () {
    return {
        type: BUY_ICECREAM
    }
}

// Reducers

const initalCakeState = {
    numOfCakes: 10
}

const initalIcecreamState = {
    numOfIcecreams: 20
}

const cakeReducer = (state = initalCakeState, action ) => {
    if(action.type===BUY_CAKE){
        return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
    }
    else{
        return state;
    }
}

const iceCreamReducer = (state = initalIcecreamState, action ) => {
    if(action.type===BUY_ICECREAM){
        return {
            ...state,
            numOfIcecreams: state.numOfIcecreams-1
        }
    }
    else{
        return state;
    }
}

// Store

const rootReducer = redux.combineReducers({cakeReducer, iceCreamReducer});
const store = createStore(rootReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=> console.log("Updated State", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcrecream());
store.dispatch(buyIcrecream());
unsubscribe();