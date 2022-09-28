import {RootStore} from '../rootStore';

export const selectAuth = (store: RootStore) => store.auth;
export const selectPhoneNumber = (store: RootStore) => selectAuth(store).phoneNumber;