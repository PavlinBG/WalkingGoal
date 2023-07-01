import React, { useState } from 'react';

const FastingWalkCal = () => {
  const [measurementSystem, setMeasurementSystem] = useState('metric');
  const [fastingDays, setFastingDays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);

  const handleSystemChange = (event) => {
    setMeasurementSystem(event.target.value);
  };

  const handleFastingDayChange = (event, day) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setFastingDays((prevFastingDays) => [...prevFastingDays, day]);
    } else {
      setFastingDays((prevFastingDays) =>
        prevFastingDays.filter((prevDay) => prevDay !== day)
      );
    }
  };

  const calculateWalkingAndFasting = () => {
    // Constants for walking caloric loss
    const walkingSpeed = measurementSystem === 'metric' ? 5 : 3.1; // km/h or mph
    const walkingDuration = 1; // hour
    const walkingCaloriesPerHour = 300; // calories per hour
  
    // Constants for fasting
    const fastingDuration = fastingDays.length * 24; // hours
  
    // Calculate walking caloric loss
    const walkingDistance = walkingSpeed * walkingDuration;
    const walkingCalories = walkingCaloriesPerHour * walkingDuration;
  
    // Display the results
    console.log('Walking Distance: ' + walkingDistance + ' ' + (measurementSystem === 'metric' ? 'km' : 'mi'));
    console.log('Walking Calories: ' + walkingCalories + ' calories');
    console.log('Fasting Duration: ' + fastingDuration + ' hours');
  };

  const BMI = () => {
    const [weightMetric, setWeightMetric] = useState('');
    const [heightMetric, setHeightMetric] = useState('');
    const [weightImperial, setWeightImperial] = useState('');
    const [heightImperial, setHeightImperial] = useState('');
    const [selectedSystem, setSelectedSystem] = useState('metric');
    const [bmiResult, setBmiResult] = useState('');

    const calculateBMI = () => {
      if (selectedSystem === 'metric') {
        const weight = parseFloat(weightMetric);
        const height = parseFloat(heightMetric) / 100; // Convert cm to meters
        const bmi = weight / (height * height);
        setBmiResult(`Your Metric BMI is: ${bmi.toFixed(2)}`);
      } else {
        const weight = parseFloat(weightImperial);
        const height = parseFloat(heightImperial);
        const bmi = (703 * weight) / (height * height);
        setBmiResult(`Your Imperial BMI is: ${bmi.toFixed(2)}`);
      }
    };

    const handleSystemChange = (event) => {
      setSelectedSystem(event.target.value);
      setBmiResult('');
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mr-4">
            <h4 className="text-4xl md:text-6xl font-bold mb-4">BMI Calculator</h4>
            <p className="text-gray-700 mb-2">Choose the measurement system:</p>
            <div className="mb-4">
              <label className="block">
                System:
                <select
                  value={selectedSystem}
                  onChange={handleSystemChange}
                  className="border border-gray-300 rounded px-4 py-2"
                >
                  <option value="metric">Metric</option>
                  <option value="imperial">Imperial</option>
                </select>
              </label>
            </div>
            {selectedSystem === 'metric' ? (
              <div>
                <label className="block mt-2">Weight (kg):</label>
                <input
                  type="number"
                  value={weightMetric}
                  onChange={(e) => setWeightMetric(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-2"
                />
                <label className="block mt-2">Height (cm):</label>
                <input
                  type="number"
                  value={heightMetric}
                  onChange={(e) => setHeightMetric(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-2"
                />
              </div>
            ) : (
              <div>
                <label className="block mt-2">Weight (lb):</label>
                <input
                  type="number"
                  value={weightImperial}
                  onChange={(e) => setWeightImperial(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-2"
                />
                <label className="block mt-2">Height (in):</label>
                <input
                  type="number"
                  value={heightImperial}
                  onChange={(e) => setHeightImperial(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-2"
                />
              </div>
            )}
            <button
              onClick={calculateBMI}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Calculate BMI
            </button>
            {bmiResult && <p className="mt-4">{bmiResult}</p>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* BMI component */}
      <BMI />
      
      {/* Measurement System */}
      <label>
        Measurement System:
        <select value={measurementSystem} onChange={handleSystemChange}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </label>
      
      {/* Fasting Days */}
      <div>
        Fasting Days:
        <label>
          <input type="checkbox" onChange={(e) => handleFastingDayChange(e, 'Monday')} />
          Monday
        </label>
        <label>
          <input type="checkbox" onChange={(e) => handleFastingDayChange(e, 'Tuesday')} />
          Tuesday
        </label>
        <label>
          <input type="checkbox" onChange={(e) => handleFastingDayChange(e, 'Wednesday')} />
          Wednesday
        </label>
        <label>
          <input type="checkbox" onChange={(e) => handleFastingDayChange(e, 'Thursday')} />
          Thursday
        </label>
        <label>
          <input type="checkbox" onChange={(e) => handleFastingDayChange(e, 'Friday')} />
          Friday
        </label>
        <label>
          <input type="checkbox" onChange={(e) => handleFastingDayChange(e, 'Saturday')} />
          Saturday
        </label>
        <label>
          <input type="checkbox" onChange={(e) => handleFastingDayChange(e, 'Sunday')} />
          Sunday
        </label>
      </div>

      {/* Calculate button */}
      <button onClick={calculateWalkingAndFasting}>Calculate</button>
    </div>
  );
};

export default FastingWalkCal;
