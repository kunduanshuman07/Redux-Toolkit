import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {buyCake} from "../redux/cakes/cakeSlice";
const CakeContainer = () => {
    const dispatch = useDispatch();
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);

    const handleBuyCake = () => {
        dispatch(buyCake());
    }
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: "10px auto" }}>Number of Cakes: {numOfCakes}</h1>
            <button style={{ margin: "10px auto" }} onClick={handleBuyCake}>Buy Cake</button>
        </div>
    )
}

export default CakeContainer