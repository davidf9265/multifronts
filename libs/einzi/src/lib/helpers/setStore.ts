import { uniqueKey } from './references';

export const setStore = (store: unknown) => {
    // TODO: find a way to conenct the environment to the store
    let storeToSave = store;
    if (typeof storeToSave !== 'string') {
        storeToSave = JSON.stringify(storeToSave);
    }
    const setStoreToLocalStorage = localStorage.setItem(
        uniqueKey,
        storeToSave as string
    );
    return setStoreToLocalStorage;
};
