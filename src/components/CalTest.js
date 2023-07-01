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
  
  const [setReset] = useState(false);
  const [showWalkProgram, setShowWalkProgram] = useState(false);

  const handleGenerateWalkingProgram = () => {
    setShowWalkProgram(true);
  };

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

  function CalculateSteps() {
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

 
    
  }

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

  return (
    <div className="container mx-auto p-4">
     <div className="container mx-auto p-4">
  <div className="bg-green-200 p-6 rounded-lg">
    <h3 className="text-4xl font-bold mb-4">Walking Calculator</h3>
    <p className="text-lg mb-4">
      The Walking Calculator is a practical tool designed to assist individuals in setting and achieving their walking goals. Whether you're looking to improve your fitness, manage your weight, or simply incorporate more physical activity into your daily routine, this calculator can provide you with personalized walking recommendations.
    </p>

    <p className="text-lg mb-4">
      Once the calculator generates your walking goals, it presents them to you in an easily digestible format. These goals serve as milestones to track your progress and keep you motivated on your fitness journey. Additionally, the Walking Calculator provides a comprehensive report summarizing your walking program, including details about your goals and other relevant information.
    </p>

    <p className="text-lg mb-4">
      Whether you're a beginner or an experienced walker, the Walking Calculator is a valuable tool to guide you towards a healthier lifestyle. By incorporating regular walking into your routine, you can enjoy numerous benefits, such as improved cardiovascular health, increased calorie burn, stress reduction, and enhanced overall well-being.
    </p>

    <p className="text-lg">
      Ready to take the first step towards your fitness goals? Let the Walking Calculator assist you in formulating a personalized walking program that fits your needs and helps you achieve the results you desire. Start using the Walking Calculator today and embark on a rewarding journey towards a healthier, more active lifestyle.
    </p>
  </div>
</div>

      <div className="border border-blue-700  bg-blue-500		 rounded p-4 mb-4">
        <div className="mb-4">
          <label className="block mb-2">Measurement System:</label>
          <select
            className="w-32 p-2 bg-blue-900 text-white rounded border border-white"
            value={measurementSystem}
            onChange={handleMeasurementSystemChange}
          >
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Biological Sex:</label>
          <select
            className="w-32 p-2 bg-blue-900 text-white rounded border border-white"
            value={biologicalSex}
            onChange={handleBiologicalSexChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Height:</label>
          {measurementSystem === 'metric' ? (
            <>
              <pre className="text-gray-500">cm</pre>
              <input
                type="number"
                className="w-32 p-2 bg-blue-900 text-white rounded border border-white"
                placeholder="cm"
                value={height}
                onChange={handleHeightChange}
              />
            </>
          ) : (
            <>
              <pre className="text-gray-500">ft</pre>
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="w-20 p-2 bg-blue-900 text-white rounded border border-white"
                  placeholder="Feet"
                  value={feet}
                  onChange={handleFeetChange}
                />
                <input
                  type="number"
                  className="w-20 p-2 bg-blue-900 text-white rounded border border-white"
                  placeholder="Inches"
                  value={inches}
                  onChange={handleInchesChange}
                />
              </div>
            </>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Weight:</label>
          <input
            type="number"
            className="w-32 p-2 bg-blue-900 text-white rounded border border-white"
            value={weight}
            onChange={handleWeightChange}
          />
          <pre className="text-gray-500">{measurementSystem === 'metric' ? 'kg' : 'lbs'}</pre>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Goal Weight:</label>
          <input
            type="number"
            className="w-32 p-2 bg-blue-900 text-white rounded border border-white"
            value={goalWeight}
            onChange={handleGoalWeightChange}
          />
          <pre className="text-gray-500">{measurementSystem === 'metric' ? 'kg' : 'lbs'}</pre>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Goal Duration (in months):</label>
          <input
            type="number"
            className="w-32 p-2 bg-blue-900 text-white rounded border border-white"
            value={goalDuration}
            onChange={handleGoalDurationChange}
          />
          <pre className="text-gray-500">months</pre>
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={()=>{
            CalculateSteps()
            generateReport();
          }}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Walking Goal
        </button>
        <button
  onClick={() => {
    CalculateSteps();
    handleGenerateWalkingProgram();
  }}
  className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
>
  Make Walking Program
</button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      {showWalkProgram && (
        <div>
          <WalkProgram walkingGoals={walkingGoals} />
        </div>
      )}
      <div className="result">
        {report && <WalkReport report={report} walkingGoals={walkingGoals} />}
        <p>Walking Duration: {walkingDuration} minutes</p>
        <p>Steps to Walk: {stepsToWalk} steps</p>
      </div>
    </div>
  );
}

export default CalTest;
