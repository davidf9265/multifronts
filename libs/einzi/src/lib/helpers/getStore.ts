import { uniqueKey } from './references';

export const getStore = () => {
    // TODO: find a way to conenct the environment to the store
    const getStoreFromLocalStorage = localStorage.getItem(uniqueKey);
    return getStoreFromLocalStorage;
};
