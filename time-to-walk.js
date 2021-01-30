function timeTowalk(steps, footPrint, speed) {
    let distanceInMeters = (steps * footPrint)
    let speedForMetersInseconds = speed / 3.6;
    let addedMinutes = Math.floor(distanceInMeters/500);
    let time = distanceInMeters / speedForMetersInseconds + addedMinutes * 60;
    let timeInHours = Math.floor(time / 3600);
    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = (time % 60).toFixed(0);
    return `${timeInHours < 10 ? 0 : ""}${timeInHours}:${timeInMinutes < 10 ? 0 : ""}${timeInMinutes}:${timeInSeconds < 10 ? 0 : ""}${timeInSeconds}`
}
console.log(timeTowalk(2564, 0.70, 5.5))