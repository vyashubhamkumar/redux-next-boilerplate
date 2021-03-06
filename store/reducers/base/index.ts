import { Action } from "redux";
import { STORE_LOADED } from "./types";

export interface BaseInitialState {
    storeLoaded: boolean;
}

export const initialState: BaseInitialState = {
    storeLoaded: false,
};

const counterReducer = (state: BaseInitialState = initialState, action: Action) => {
    switch(action.type) {

        case STORE_LOADED: {
            return {
                ...state,
                storeLoaded: true,
            }
        }

        default: return state;
    }
};

export default counterReducer;
