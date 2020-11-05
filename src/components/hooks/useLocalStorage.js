import { useState } from 'react';

export const useLocalStorage = (key, initalValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {
        // get from local storage by key
        const item = window.localStorage.getItem(key);

        // parse and return stored json or, if undefined, return intialValue
        return item ? JSON.parse(item) : initalValue
    });

    const setValue = value => {
        // save state
        setStoredValue(value);

        // save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue]
}