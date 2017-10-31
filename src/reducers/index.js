import { combineReducers } from 'redux'

import updateCoords from './updateCoords'

const trackerApp = combineReducers({
    updateCoords
})

export default trackerApp