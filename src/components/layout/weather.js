import {useEffect, useState} from "react";
import apiKeys from "./apikey";

const Weather = () => {
    const [state, setState] = useState({
        lat: undefined,
        lon: undefined,
        errorMessage: undefined,
        temperatureC: undefined,
        temperatureF: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: "CLEAR_DAY",
        sunrise: undefined,
        sunset: undefined,
        errorMsg: undefined,
    });
    const [isLoading, setIsLoading] = useState(true);
    const getPosition = (options) => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };

    const getWeather = async (lat, lon) => {
        const api_call = await fetch(
            `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKeys.key}&units=metric`
        );
        const data = await api_call.json();
        setState({
            ...state,
            lat: lat,
            lon: lon,
            city: data.name,
            temperatureC: Math.round(data.main.temp),
            temperatureF: Math.round(data.main.temp * 1.8 + 32),
            humidity: data.main.humidity,
            main: data.main,
            status: data.weather[0],
            country: data.sys.country
        });
    };
    if (navigator.geolocation && isLoading) {
        getPosition()
            .then((position) => {
                getWeather(position.coords.latitude, position.coords.longitude).then();
                setIsLoading(false);
            })
            .catch(() => {
                alert(
                    "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
                );
            });
    }
    return (
        (state.temperatureC ? <span className="left-topbar-item flex-wr-s-c">
			<span> {state.city}, {state.country} | {state.temperatureC}°C, cảm giác như {state.main.feels_like}°C</span>
        </span> : <span className="left-topbar-item flex-wr-s-c">Loading...</span>)
    )
}

export default Weather