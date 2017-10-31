export const updateLocation = (lat, lon) => {
    return {
        type: 'UPDATE_LOCATION',
        lat,
        lon
    }
}