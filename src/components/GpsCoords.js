import React from 'react'
import { Button } from 'react-bootstrap'

const GpsCoords = ({lat, lon, onClick}) => {
    const latMag = Math.abs(lat) || 0
    const lonMag = Math.abs(lon) || 0
    const latSuffix = lat > 0 ? "N" : "S"
    const lonSuffix = lon > 0 ? "E" : "W"

    return (
        <div>
            <p>lat: {latMag} {latSuffix}</p>
            <p>lon: {lonMag} {lonSuffix}</p>
            <Button onClick = {onClick} >update</Button>
        </div>
    )
}

export default GpsCoords