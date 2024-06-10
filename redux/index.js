// Redux
import * as redux from "redux";
import { legacy_createStore as creatStore } from 'redux';

// Action

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE
    }
}

// Reducer

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    if(action.type===BUY_CAKE){
        return {
            ... state,
            numOfCakes: state.numOfCakes-1
        }
    }
    else{
        return state
    }
}


// Store

const store = creatStore(reducer);
console.log("Initial State",store.getState());
const unsubscribe = store.subscribe(()=>
    console.log("Updated State", store.getState())
)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();