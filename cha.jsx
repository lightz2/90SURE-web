import react, { useState } from 'react';

function FootballPredictions() {
    const [predictions, setPredictions] = useState([]);

    const submitPrediction = (e) => {
        e.preventDefault();
        const prediction = e.target.prediction.value;
        setPredictions([...predictions, prediction]);
        e.target.prediction.value = '';
    };


    return(
        <div>
            <h1>Football Predictions</h1>
            <form onSubmit={submitPrediction}>
                <input type="text" name="prediction" placeholder="Enter your prediction" />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {predictions.map((prediction, index) => (<li key={index}>{prediction}</li>
                ))}
            </ul>
        </div>
    );
}ReactDOM.render(<FootballPredictions />, document.getElementById('root'));