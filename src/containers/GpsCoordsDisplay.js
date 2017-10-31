import { connect } from 'react-redux'

import GpsCoords from '../components/GpsCoords'
import { updateLocation } from '../actions'

const mapStateToProps = state => {
    return {
        lat: state.updateCoords.lat,
        lon: state.updateCoords.lon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    position => dispatch(updateLocation(position.coords.latitude,position.coords.longitude))
                )
            }
        }
    }
}

const GpsCoordsDisplay = connect(
    mapStateToProps,
    mapDispatchToProps
)(GpsCoords)

export default GpsCoordsDisplay