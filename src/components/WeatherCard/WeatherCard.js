import React from 'react';
import styles from './WeatherCard.module.css';

const WeatherCard = ({ weatherData }) => {
    const {
        place,
        country,
        localTime,
        condition,
        temperature,
        humidity,
        windSpeed,
        feelsLike,
        imageUrl
    } = weatherData;

    return (
        <div className={styles.weatherCard}>
            <img src={imageUrl} alt={place} />
            <h2 className={styles.place}>
                {place}, {country}
            </h2>
            <div className={styles.details}>
                <div>
                    <p>Local Time:</p>
                    <p>{localTime}</p>
                </div>
                <div>
                    <p>Condition:</p>
                    <p>{condition}</p>
                </div>
                <div>
                    <p>Temperature:</p>
                    <p>{temperature}°C</p>
                </div>
                <div>
                    <p>Feels Like:</p>
                    <p>{feelsLike}°C</p>
                </div>
                <div>
                    <p>Humidity:</p>
                    <p>{humidity}%</p>
                </div>
                <div>
                    <p>Wind Speed:</p>
                    <p>{windSpeed} kmph</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
