import { SkiService } from './ski-service.js'


export class Algorithm {


  shouldWeSki(body) {
    let ski
    let snowfall_cm = parseInt(body.data.weather[0].hourly[0].snowfall_cm)
    if (snowfall_cm >= 2.0){
      ski = true
    }
    return ski
  }

}
