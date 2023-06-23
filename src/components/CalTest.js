import React, { useState } from 'react';
import WalkReport from './WalkReport';
import WalkProgram from './WalkProgram';

function CalTest() {
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
  const [walkingGoals, setWalkingGoals] = useState([]);
  const [report, setReport] = useState('');
  const [reset, setReset] = useState(false);
  const [showWalkProgram, setShowWalkProgram] = useState(false);

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
    const duration = parseInt(e.target.value);
    setGoalDuration(duration);
  };

  const generateWalkingGoal = () => {
    const weightInKg = measurementSystem === 'imperial' ? weight * 0.453592 : weight;
    const goalWeightInKg = measurementSystem === 'imperial' ? goalWeight * 0.453592 : goalWeight;
    const caloriesPerMinute = 4.9;
    const caloriesPerKg = 7500;

    const totalCaloriesToBurn = (weightInKg - goalWeightInKg) * caloriesPerKg;
    const walkingDurationInMinutes = totalCaloriesToBurn / caloriesPerMinute;
    const averageStepsPerMinute = 120;
    const totalStepsToWalk = walkingDurationInMinutes * averageStepsPerMinute;

    setWalkingDuration(walkingDurationInMinutes.toFixed(2));
    setStepsToWalk(totalStepsToWalk.toFixed(0));

    const goalDurationInDays = goalDuration * 30; // Assuming 1 month = 30 days
    const stepsPerDay = Math.round(totalStepsToWalk / goalDurationInDays);

    const generatedWalkingGoals = [];

    for (let i = 0; i < goalDurationInDays; i++) {
      generatedWalkingGoals.push({
        day: `Day ${i + 1}`,
        steps: stepsPerDay,
      });
    }

    setWalkingGoals(generatedWalkingGoals);

    generateReport();
  };

  const generateReport = () => {
    const reportText = `Walking Weight Loss Report
      ------------------------------
      Measurement System: ${measurementSystem}
      Biological Sex: ${biologicalSex}
      Height: ${measurementSystem === 'metric' ? height + ' cm' : feet + ' ft ' + inches + ' in'}
      Weight: ${weight} ${measurementSystem === 'metric' ? 'kg' : 'lbs'}
      Goal Weight: ${goalWeight} ${measurementSystem === 'metric' ? 'kg' : 'lbs'}
      Goal Duration: ${goalDuration} months
      Walking Duration: ${walkingDuration} minutes
      Steps to Walk: ${stepsToWalk} steps`;

    setReport(reportText);
  };

  const handleReset = () => {
    setMeasurementSystem('metric');
    setBiologicalSex('');
    setHeight(0);
    setWeight(0);
    setFeet(0);
    setInches(0);
    setGoalWeight(0);
    setGoalDuration(0);
    setWalkingDuration(0);
    setStepsToWalk(0);
    setWalkingGoals([]);
    setReport('');
    setReset(true); // Set the reset state to true
  };

  const handleGenerateWalkingProgram = () => {
    setShowWalkProgram(true);
  };

  return (
    <div className="container">
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
        {measurementSystem === 'metric' ? <span>cm</span> : <span>ft</span>}
      </div>
      <div className="input-group">
        <label>Weight:</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
        {measurementSystem === 'metric' ? <span> kg </span> : <span>lbs</span>}
      </div>
      <div className="input-group">
        <label>Goal Weight:</label>
        <input type="number" value={goalWeight} onChange={handleGoalWeightChange} />
        {measurementSystem === 'metric' ? <span>kg</span> : <span>lbs</span>}
      </div>
      <div className="input-group">
        <label>Goal Duration (in months):</label>
        <input type="number" value={goalDuration} onChange={handleGoalDurationChange} />
        <span>months</span>
      </div>
      <div className="input-group">
        <button onClick={generateWalkingGoal} className="generate-btn">Generate Walking Goal</button>
        <button onClick={handleGenerateWalkingProgram} className="generate-btn">Make Walking Program</button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
      {showWalkProgram && <WalkProgram walkingGoals={walkingGoals} />}
      <div className="result">
        {report && <WalkReport report={report} walkingGoals={walkingGoals} />}
        <p>Walking Duration: {walkingDuration} minutes</p>
        <p>Steps to Walk: {stepsToWalk} steps</p>
      </div>
    </div>
  );
}

export default CalTest;
