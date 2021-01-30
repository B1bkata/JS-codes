function withinSpeedLimit(speed, area) {
    let speedLimit = 0
    if (area == 'motorway') {
        speedLimit = 130
    } else if (area == 'interstate') {
        speedLimit = 90
    }else if (area == 'city'){
        speedLimit = 50
    }else if (area == 'residential'){
        speedLimit = 20
    }
    if (speedLimit >= speed){
        return `Driving ${speed} km/h in a ${speedLimit} zone`
    }else {
        let speeding = speed - speedLimit
        let status = ""
        if (speeding <= 20) {
            status = 'speeding'
        }else if(speeding > 20 && speeding <= 40){
            status = 'excessive speeding'
        }else {
            status = 'reckless driving'
        } 
        return `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
}

console.log(withinSpeedLimit(120, 'interstate'))