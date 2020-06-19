import React from 'react'
import GaugeChart from 'react-gauge-chart'
import './WeatherWidget.css'

const chartStyle = {
  height: 250,
}

const WeatherWidget = props => {
  return (
    <div className="WeatherWidget">
    <GaugeChart id="gauge-chart1"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={['#5BE12C', '#F5CD19', '#EA4228']}
        percent={props.wind}
        arcPadding={0.02}
        formatTextValue={value => value + " m/s"}
        style={chartStyle}
      />
      <div className="Coverage">
        {
          (props.conditions === "clear") ?
             <img src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png" alt=""/>
             :
             <img src="https://cdn4.iconfinder.com/data/icons/weather-flat-icons-1/100/thunder_storm_2-512.png" alt=""/>
        }
      </div>
    </div>
  );
}

export default WeatherWidget;
