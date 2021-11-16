import { combineReducers } from 'redux'

import global from './global'
import berita from './berita'
import user from './user'

export default combineReducers({
    global,
    berita,
    user
})