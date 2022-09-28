export interface AuthStore {
    phoneNumber: string;
    firstName: string;
    lastName: string;
}

export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';

interface TestSetPhoneNumberAction {
    type: typeof SET_PHONE_NUMBER;
    payload: string;
}

export type AuthType = TestSetPhoneNumberAction;