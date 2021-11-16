import { LOADING_GLOBAL } from 'actions'

export const setLoadingGlobal = (loadingGlobal) => {
    return {
        type: LOADING_GLOBAL,
        loadingGlobal
    };
};