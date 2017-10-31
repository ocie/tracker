const updateCoords = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return Object.assign(
                {
                    lat: action.lat,
                    lon: action.lon
                },
                state)
        default:
            return state
    }
}

export default updateCoords