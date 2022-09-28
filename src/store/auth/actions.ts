import { SET_PHONE_NUMBER, AuthType } from "./types";

export const setPhoneNumberAction = (payload: string): AuthType => {
    return {
        type: SET_PHONE_NUMBER,
        payload
    }
}