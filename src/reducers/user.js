import {
    COOKIED_DELETED,
    THEME,
    INNER_WIDTH
} from "actions";

export default (
    state = {
        collapsed: window.innerWidth < 900 ? true : false,
        innerWidth: window.innerWidth,
        cookieDeleted: false,
        theme: 'light'
    },
    action
) => {
    switch (action.type) {
        case COOKIED_DELETED:
            return {
                ...state,
                cookieDeleted: action.cookieDeleted
            };
        case THEME:
            return {
                ...state,
                theme: action.theme
            };
        case INNER_WIDTH:
            return {
                ...state,
                innerWidth: action.innerWidth
            };
        default:
            return state;
    }
};