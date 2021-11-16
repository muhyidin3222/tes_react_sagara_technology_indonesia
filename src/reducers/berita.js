import {
    GET_BERITA
} from "actions";

export default (
    state = {
        dataList: []
    },
    action
) => {
    switch (action.type) {
        case GET_BERITA:
            return {
                ...state,
                dataList: action.dataList
            };
        default:
            return state;
    }
};