import { initialState } from "./store";
import { SET_PHONE_NUMBER, AuthStore, AuthType } from "./types";

export const authReducer = (state: AuthStore = initialState, action: AuthType): AuthStore => {
    switch(action.type) {
        case SET_PHONE_NUMBER: {
            return {
                ...state,
                phoneNumber: action.payload
            }
        }
        default: return state;
    }
}