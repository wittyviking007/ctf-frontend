import React, { useState , useRef } from 'react';
import styles from './Input.module.css';
import axios from 'axios';

const Input = ({ onAdd , prevList }) => {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const inputRef = useRef(null);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            inputRef.current.click();
        }
    };

    const [details,setDetails] = useState([]);
    
    const handleAddClick = async () => {
        if (text.trim() !== '') {
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: { q: text },
                headers: {
                    'X-RapidAPI-Key': '60dfd9ca2dmshf0a93586ad28cddp145be0jsn1f9e2838ed55',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                console.log(response.data);
                const newObject = {
                    place: response.data['location']['name'],
                    country: response.data['location']['country'],
                    localTime: response.data['location']['localtime'],
                    condition: response.data['current']['condition']['text'],
                    temperature: response.data['current']['temp_c'],
                    humidity: response.data['current']['humidity'],
                    windSpeed: response.data['current']['wind_kph'],
                    feelsLike: response.data['current']['feelslike_c'],
                    imageUrl: response.data['current']['condition']['icon'],
                };
                setDetails([...details, newObject]);
                if (!prevList.includes(newObject.place)) {
                    onAdd(newObject);
                }
                setText('');
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                className={styles.input}
                placeholder="Enter your text"
                value={text}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button 
            onClick={handleAddClick}
            ref={inputRef}
            >Add</button>
        </div>
    );
};

export default Input;
