import {
    LOADING_GLOBAL
} from "actions";

export default (
    state = {
        loadingGlobal: false,
        user: {}
    },
    action
) => {
    switch (action.type) {
        case LOADING_GLOBAL:
            return {
                ...state,
                loadingGlobal: action.loadingGlobal
            };
        default:
            return state;
    }
};