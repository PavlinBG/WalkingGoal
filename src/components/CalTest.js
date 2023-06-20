import React, { useState } from 'react';

function App() {
  const [measurementSystem, setMeasurementSystem] = useState('metric');
  const [biologicalSex, setBiologicalSex] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [goalWeight, setGoalWeight] = useState(0);
  const [goalDuration, setGoalDuration] = useState(0);
  const [walkingDuration, setWalkingDuration] = useState(0);
  const [stepsToWalk, setStepsToWalk] = useState(0);

  const handleMeasurementSystemChange = (e) => {
    setMeasurementSystem(e.target.value);
  };

  const handleBiologicalSexChange = (e) => {
    setBiologicalSex(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleFeetChange = (e) => {
    setFeet(e.target.value);
  };

  const handleInchesChange = (e) => {
    setInches(e.target.value);
  };

  const handleGoalWeightChange = (e) => {
    setGoalWeight(e.target.value);
  };

  const handleGoalDurationChange = (e) => {
    setGoalDuration(e.target.value);
  };

  const calculateWalkingDurationAndSteps = () => {
    const weightInKg = measurementSystem === 'imperial' ? (feet * 12 + inches) * 0.0254 : weight;
    const goalWeightInKg = measurementSystem === 'imperial' ? goalWeight * 0.453592 : goalWeight;
    const caloriesPerMinute = 4.9; // Calories burned per minute at a moderate walking pace
    const caloriesPerKg = 7500; // Calories burned per kg of body fat

    const totalCaloriesToBurn = (weightInKg - goalWeightInKg) * caloriesPerKg;
    const walkingDurationInMinutes = totalCaloriesToBurn / caloriesPerMinute;
    const averageStepsPerMinute = 120; // Average number of steps per minute while walking
    const totalStepsToWalk = walkingDurationInMinutes * averageStepsPerMinute;

    setWalkingDuration(walkingDurationInMinutes.toFixed(2));
    setStepsToWalk(totalStepsToWalk.toFixed(0));
  };

  const generateReport = () => {
    const report = `Walking Weight Loss Report
    ------------------------------
    Measurement System: ${measurementSystem}
    Biological Sex: ${biologicalSex}
    Height: ${measurementSystem === 'metric' ? height + ' cm' : feet + ' ft ' + inches + ' in'}
    Weight: ${weight} ${measurementSystem === 'metric' ? 'kg' : 'lbs'}
    Goal Weight: ${goalWeight} ${measurementSystem === 'metric' ? 'kg' : 'lbs'}
    Goal Duration: ${goalDuration} months
    Walking Duration: ${walkingDuration} minutes
    Steps to Walk: ${stepsToWalk} steps`;

    console.log(report); // Modify this line to display the report in a desired way (e.g., render it in a separate component)
  };

  return (
    <div>
      <div className="input-group">
        <label>Measurement System:</label>
        <select value={measurementSystem} onChange={handleMeasurementSystemChange}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
      <div className="input-group">
        <label>Biological Sex:</label>
        <select value={biologicalSex} onChange={handleBiologicalSexChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="input-group">
        <label>Height:</label>
        {measurementSystem === 'metric' ? (
          <input type="number" placeholder="cm" value={height} onChange={handleHeightChange} />
        ) : (
          <>
            <input type="number" placeholder="Feet" value={feet} onChange={handleFeetChange} />
            <input type="number" placeholder="Inches" value={inches} onChange={handleInchesChange} />
          </>
        )}
      </div>
      <div className="input-group">
        <label>Weight:</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div className="input-group">
        <label>Goal Weight:</label>
        <input type="number" value={goalWeight} onChange={handleGoalWeightChange} />
      </div>
      <div className="input-group">
        <label>Goal Duration (in months):</label>
        <input type="number" value={goalDuration} onChange={handleGoalDurationChange} />
      </div>
      <div className="input-group">
        <button onClick={calculateWalkingDurationAndSteps}>Calculate Walking Duration and Steps</button>
        <button onClick={generateReport}>Generate Report</button>
      </div>
      <div className="result">
        <p>Walking Duration: {walkingDuration} minutes</p>
        <p>Steps to Walk: {stepsToWalk} steps</p>
      </div>
    </div>
  );
}

export default App;
