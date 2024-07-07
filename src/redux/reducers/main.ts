import { combineReducers } from "redux";
import { cartreducer } from "./reducer";

const rootred=combineReducers({
    cart:cartreducer
});

export type RootState = ReturnType<typeof rootred>;
export default rootred;