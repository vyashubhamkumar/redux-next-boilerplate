import { STORE_LOADED } from "./types";

export const storeLoaded = () => (dispatch) => {
    console.log("STORE LOADED");
    dispatch({
        type: STORE_LOADED,
    });
};