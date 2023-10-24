import axios from 'axios';
import { useCallback } from 'react';

const MainComponent = () => {
    const getAllNumbers = useCallback(() => {

    });
    return (
        <div>
            <button onClick={getAllNumbers}>Get all numbers</button>
        </div>
    );
};

export default MainComponent;
