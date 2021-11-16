import { GET_BERITA } from 'actions'

export const getAllBerita = (dataList) => {
    return {
        type: GET_BERITA,
        dataList
    };
};