import React, { useState } from 'react';

const TDEE = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [measurementSystem, setMeasurementSystem] = useState('metric');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [bmr, setBMR] = useState(0);
  const [tdee, setTDEE] = useState(0);

  const calculateTDEE = () => {
    const weightInKg = measurementSystem === 'metric' ? weight : weight / 2.205; // Convert weight to kg if in lbs
    const heightInCm = measurementSystem === 'metric' ? height : height * 2.54; // Convert height to cm if in inches

    const weightMultiplier = gender === 'male' ? 10 : 9.6;
    const heightMultiplier = gender === 'male' ? 6.25 : 4.35;
    const activityMultiplier = activityLevel;

    const bmr = (weightMultiplier * weightInKg) + (heightMultiplier * heightInCm) - (5 * age) + (gender === 'male' ? 5 : -161);
    const calculatedTDEE = bmr * activityMultiplier;
    setBMR(bmr);
    setTDEE(calculatedTDEE);
  };

  const generateReport = () => {
    const caloriesPerWeek = (tdee * 7).toFixed(0);

    const activityLevels = [
      { level: "BMR", multiplier: 1 },
      { level: "Sedentary", multiplier: 1.2 },
      { level: "Light Exercise", multiplier: 1.375 },
      { level: "Moderate Exercise", multiplier: 1.55 },
      { level: "Heavy Exercise", multiplier: 1.725 },
      { level: "Athlete", multiplier: 1.9 }
    ];

    return (
      <div>
        <h2 className="font-bold">Your Maintenance Calories</h2>
        <div>
          <p>BMR: {bmr.toFixed(0)} calories per day</p>
          <p>TDEE: {tdee.toFixed(0)} calories per day</p>
          <p>TDEE for week: {caloriesPerWeek} calories</p>
        </div>
        <table className="mt-4 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200">Activity Level</th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200">Calories per day</th>
            </tr>
          </thead>
          <tbody>
            {activityLevels.map(activity => (
              <tr key={activity.level}>
                <td className="border border-gray-300 px-4 py-2">{activity.level}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {(bmr * activity.multiplier).toFixed(0)} calories per day
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4"></div>
      </div>
    );
  };

  const handleMeasurementSystemChange = (e) => {
    const system = e.target.value;
    setMeasurementSystem(system);

    // Clear weight and height values when changing measurement system
    setWeight('');
    setHeight('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
               <div className="bg-green-100	 rounded-lg shadow-md p-6"> 

      <h1 className="text-3xl font-bold mb-4">TDEE Calculator</h1>
      <div className="mb-4">
        <label className="block mb-2">Choose the measurement system:</label>
        <select
          value={measurementSystem}
          onChange={handleMeasurementSystemChange}
          className="border border-gray-300 px-2 py-1"
        >
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Height ({measurementSystem === 'metric' ? 'cm' : 'inches'})</label>
        <input
          type="number"
          value={height}
          onChange={e => setHeight(e.target.value)}
          className="border border-gray-300 px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Weight ({measurementSystem === 'metric' ? 'kg' : 'lbs'})</label>
        <input
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
          className="border border-gray-300 px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Age</label>
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
          className="border border-gray-300 px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Gender</label>
        <select
          value={gender}
          onChange={e => setGender(e.target.value)}
          className="border border-gray-300 px-2 py-1"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button onClick={calculateTDEE} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Calculate
      </button>
      <div className="mt-4">
        {tdee > 0 && generateReport()}
      </div>
    </div>
    </div>
  );
};

export default TDEE;










/*
TDEE Calculator


add opting for metric and imperial    Weight  and Height

 
Male and Female

 Weight 


 Height

 Activity levels
 Sedentary — desk job and little to no exercise (multiply by 1.2)
 Lightly Active — light exercise/sports 1–3 days/week (multiply by 1.375)
 Moderately Active — moderate exercise/sports 3–5 days/week (multiply by 1.55)
 Very Active — hard exercise/sports 6–7 days/week (multiply by 1.725)
 Extremely Active — hard daily exercise/sports and physical job or training (multiply by 1.9)

 For example, if you are lightly active, your TDEE would be: TDEE = BMR x 1.375 = 1,185 x 1.375 = 1,631 calories






add Report tab named: Your Maintenance Calories
With the 
 
          TDEE                   (TDEE for week)
    Calories Per Day            Calories Per Week


    and table with all activitys 
    example 
 Basal Metabolic Rate 1,774 calories per day
Sedentary 2,129 calories per day
Light Exercise 2,439 calories per day
Moderate Exercise 2,749 calories per day
Heavy Exercise 3,060 calories per day
Athlete 3,370 calories per day

Ideal Weight: 69 - 72 kg
Your ideal body weight is estimated to be between 69 - 72 kg based on the various formulas listed 
below. These formulas are based on your height and represent averages so dont take them too 
seriously especially if you lift weights.
G.J. Hamwi Formula (1964) 72 kg
B.J. Devine Formula (1974) 70 kg
J.D. Robinson Formula (1983) 69 kg
D.R. Miller Formula (1983) 69 kg
BMI Score: 26.1
Your BMI is 26.1 , which means you are classified as Overweight
18.5 or less Underweight
18.5 – 24.99 Normal Weight
25 – 29.99 Overweight
30+      Obese






*/