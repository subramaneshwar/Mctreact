
import { createStore } from "redux";
import reducers from "./reducer";
// import { configureStore } from "@reduxjs/toolkit";
// import countslice from "./sliceaction";


// const store = configureStore({
//     reducer:{
//         item:countslice,
//     }
// })
// export default store
const store = createStore(reducers);

export default store;
