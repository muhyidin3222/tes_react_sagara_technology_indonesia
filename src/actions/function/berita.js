import { message } from 'antd'
import { getBeritaS } from 'services/berita';
import { getAllBerita, setLoadingGlobal } from 'actions'

export const getBerita = ({ total_items, page }) => async dispatch => {
    dispatch(setLoadingGlobal(true))
    try {
        const response = await getBeritaS({ total_items, page })
        dispatch(setLoadingGlobal(false))
        dispatch(getAllBerita(response.data))
        message.success(`Successfully Get Data`);
    } catch (error) {
        dispatch(setLoadingGlobal(false))
        message.error('Get Data Error!')
    }
};