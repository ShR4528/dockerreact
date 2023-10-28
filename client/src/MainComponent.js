import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';

const MainComponent = () => {
    const [values, setValues] = useState([]);
    const [value, setValue] = useState('');

    const getAllNumbers = useCallback(async () => {
        // ngnix to redirect to the right request
        const values = await axios.get('/api/values/all');
        setValues(values);
        console.log(getAllNumbers);

    }, []);
    const saveNumber = useCallback(
        async event => {
            event.preventDefault();

            await axios.post("/api/values", {
                value
            });

            setValue("");
            getAllNumbers();
        },
        [value, getAllNumbers]
    );
    useEffect(() => {
        getAllNumbers();
    }, []);



    return (
        <div>
            <button onClick={getAllNumbers}>Get all numbers</button><br />
            <span className='title'>Values</span>
            <div className='values'>
                {
                    values.map((value) => <div className='value'>{value}</div>)
                }
            </div>
            <form className='form' onSubmit={saveNumber}>
                <label>Enter your value:</label>
                <input
                    value={value}
                    onChange={event => {
                        setValue(event.target.value);
                    }}
                />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default MainComponent;
