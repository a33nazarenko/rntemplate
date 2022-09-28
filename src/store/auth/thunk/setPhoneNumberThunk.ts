import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootStore } from '../../rootStore';
import { setPhoneNumberAction } from '../actions';
import { AuthType } from '../types';

export const setPhoneNumberThunk = (phoneNumber: string): ThunkAction<void, RootStore, unknown, Action<AuthType>> => async (dispatch: ThunkDispatch<{}, {}, AuthType>) => {
        try {
            // request for APi if its needed

            // dispatch action for set value to store
            await dispatch(setPhoneNumberAction(phoneNumber));
        } catch (error) {
            console.error(error)
        }
}