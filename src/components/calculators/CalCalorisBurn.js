import React, { useState } from 'react';

const CalCalorisBurn = () => {
  const [selectedSystem, setSelectedSystem] = useState('metric');
  const [weight, setWeight] = useState('');
  const [walkDistance, setWalkDistance] = useState('');
  const [walkingSurfaceGrade, setWalkingSurfaceGrade] = useState('');
  const [walkTimeHours, setWalkTimeHours] = useState('');
  const [walkTimeMinutes, setWalkTimeMinutes] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleSystemChange = (e) => {
    setSelectedSystem(e.target.value);
  };

  const handleSurfaceGradeChange = (e) => {
    setWalkingSurfaceGrade(e.target.value);
  };

   const calculateCaloriesBurned = () => {
    const weightInKgs = selectedSystem === 'metric' ? weight : weight * 0.453592;

  const hoursToMinutes = parseInt(walkTimeHours) || 0;
const minsToHours = (parseInt(walkTimeMinutes) || 0) / 60;
const totalWalkTime = hoursToMinutes + minsToHours || 1;

    let calorieBurn = 0;

    // Calculations based on walking surface grade
    const walkingSpeedKph = walkDistance / (totalWalkTime || 1);

    if (walkingSurfaceGrade === '-0.05') {
      calorieBurn =
        (0.0251 * Math.pow(walkingSpeedKph, 3) - 0.2157 * Math.pow(walkingSpeedKph, 2) + 0.7888 * walkingSpeedKph + 1.2957) *
        weightInKgs *
        totalWalkTime;
    } else if (walkingSurfaceGrade === '-0.04') {
      calorieBurn =
        (0.0244 * Math.pow(walkingSpeedKph, 3) - 0.2079 * Math.pow(walkingSpeedKph, 2) + 0.8053 * walkingSpeedKph + 1.3281) *
        weightInKgs *
        totalWalkTime;
    } else if (walkingSurfaceGrade === '-0.03') {
      calorieBurn =
        (0.0237 * Math.pow(walkingSpeedKph, 3) - 0.2 * Math.pow(walkingSpeedKph, 2) + 0.8217 * walkingSpeedKph + 1.3605) *
        weightInKgs *
        totalWalkTime;
    } else if (walkingSurfaceGrade === '-0.02') {
      calorieBurn =
        (0.023 * Math.pow(walkingSpeedKph, 3) - 0.1922 * Math.pow(walkingSpeedKph, 2) + 0.8382 * walkingSpeedKph + 1.3929) *
        weightInKgs *
        totalWalkTime;
    } else if (walkingSurfaceGrade === '-0.01') {
      calorieBurn =
        (0.0222 * Math.pow(walkingSpeedKph, 3) - 0.1844 * Math.pow(walkingSpeedKph, 2) + 0.8546 * walkingSpeedKph + 1.4253) *
        weightInKgs *
        totalWalkTime;
    } else if (walkingSurfaceGrade === '0') {
      calorieBurn =
        (0.0215 * Math.pow(walkingSpeedKph, 3) - 0.1765 * Math.pow(walkingSpeedKph, 2) + 0.871 * walkingSpeedKph + 1.4577) *
        weightInKgs *
        totalWalkTime;
    } else if (parseFloat(walkingSurfaceGrade) >= 0.06 && parseFloat(walkingSurfaceGrade) <= 0.15) {
      calorieBurn =
        (0.1 * walkingSpeedKph + 1.8 * walkingSpeedKph * parseFloat(walkingSurfaceGrade) + 3.5) *
        weightInKgs *
        totalWalkTime *
        60 *
        5 /
        1000;
    }

    setCaloriesBurned(calorieBurn.toFixed(2));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">TDEE Calculator</h1>
      <div className="mb-4"> 
    <div className="w-full md:w-1/2 mt-8 md:mt-0">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mr-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Calculate Calories Burned While Walking</h2>
            <label className="block">
              Select System:
              <select
                value={selectedSystem}
                onChange={handleSystemChange}
                className="border border-gray-300 rounded px-4 py-2"
              >
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
              </select>
            </label>

            {selectedSystem === 'metric' ? (
              <div>
                <label className="block mt-4">Weight (kg):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-2"
                />
              </div>
            ) : (
              <div>
                <label className="block mt-4">Weight (lb):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-2"
                />
              </div>
            )}

            <label className="block mt-4">Walk Distance (km):</label>
            <input
              type="number"
              value={walkDistance}
              onChange={(e) => setWalkDistance(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 mb-2"
            />

            <label className="block mt-4">Walking Surface Grade:</label>
            <select
              value={walkingSurfaceGrade}
              onChange={handleSurfaceGradeChange}
              className="border border-gray-300 rounded px-4 py-2"
            >
              <option value="-0.05">5% Decline</option>
              <option value="-0.04">4% Decline</option>
              <option value="-0.03">3% Decline</option>
              <option value="-0.02">2% Decline</option>
              <option value="-0.01">1% Decline</option>
              <option value="0">Level</option>
              <option value="0.01">1% Incline</option>
              <option value="0.02">2% Incline</option>
              <option value="0.03">3% Incline</option>
              <option value="0.04">4% Incline</option>
              <option value="0.05">5% Incline</option>
              <option value="0.06">6% Incline</option>
              <option value="0.07">7% Incline</option>
              <option value="0.08">8% Incline</option>
              <option value="0.09">9% Incline</option>
              <option value="0.10">10% Incline</option>
              <option value="0.11">11% Incline</option>
              <option value="0.12">12% Incline</option>
              <option value="0.13">13% Incline</option>
              <option value="0.14">14% Incline</option>
              <option value="0.15">15% Incline</option>
            </select>

            <label className="block mt-4">Walk Time (hours and minutes):</label>
            <div className="flex">
              <input
                type="number"
                value={walkTimeHours}
                onChange={(e) => setWalkTimeHours(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 mr-2 w-1/2"
              />
              <input
                type="number"
                value={walkTimeMinutes}
                onChange={(e) => setWalkTimeMinutes(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-1/2"
              />
            </div>

            <button
              onClick={calculateCaloriesBurned}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Calculate Calories Burned
            </button>

            {caloriesBurned !== '' && (
              <p className="mt-4">Calories Burned: {caloriesBurned} kcal</p>
            )}
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CalCalorisBurn;

/*


h2 Calculate Calories Burned While Walking


select system 
selectedSystem =
 
if metric

else impearl


Weight
          kilograms and Pounds

 Walk Distance   
              kms   and Miles 
              
Walking Surface Grade          

5% Decline
4% Declin
3% Decline
2% Decline
1% Decline
Level
1% Incline
2% Incline
3% Incline
4% Incline
5% Incline
6% Incline
7% Incline
8% Incline
9% Incline
10% Incline
11% Incline
12% Incline
13% Incline
14% Incline
15% Incline
 

Walk Time
Two boxes ( Housers amd seconds )

Button Calculate calorie Burn

addzzz







Calculator Formulas
For -5% grade:
CB = [0.0251 x KPH3 - 0.2157 x KPH2 + 0.7888 x KPH + 1.2957] x WKG x T
For -4% grade:
CB = [0.0244 x KPH3 - 0.2079 x KPH2 + 0.8053 x KPH + 1.3281] x WKG x T
For -3% grade:
CB = [0.0237 x KPH3 - 0.2000 x KPH2 + 0.8217 x KPH + 1.3605] x WKG x T
For -2% grade:
CB = [0.0230 x KPH3 - 0.1922 x KPH2 + 0.8382 x KPH + 1.3929] x WKG x T
For -1% grade:
CB = [0.0222 x KPH3 - 0.1844 x KPH2 + 0.8546 x KPH + 1.4253] x WKG x T
For 0% grade:
CB = [0.0215 x KPH3 - 0.1765 x KPH2 + 0.8710 x KPH + 1.4577] x WKG x T
For +1% grade:
CB = [0.0171 x KPH3 - 0.1062 x KPH2 + 0.6080 x KPH + 1.8600] x WKG x T
For +2% grade:
CB = [0.0184 x KPH3 - 0.1134 x KPH2 + 0.6566 x KPH + 1.9200] x WKG x T
For +3% grade:
CB = [0.0196 x KPH3 - 0.1205 x KPH2 + 0.7053 x KPH + 1.9800] x WKG x T
For +4% grade:
CB = [0.0208 x KPH3 - 0.1277 x KPH2 + 0.7539 x KPH + 2.0400] x WKG x T
For +5% grade:
CB = [0.0221 x KPH3 - 0.1349 x KPH2 + 0.8025 x KPH + 2.1000] x WKG x T
where

CB = Calorie burn (in calories)

KPH = Walking speed (in kilometres per hour)

WKG = Weight (in kilograms)

T = Time (in hours)
For +6% to 15% grade:
CB = [0.1 x MPM + 1.8 x MPM x FG + 3.5] x WKG x T x 60 x 5 / 1000
where

CB = Calorie burn (in calories)

MPM = Walking speed (in meters per minute)

FG = Walking surface grade (expressed as a fraction, i.e. 6% = .06)

WKG = Weight (in kilograms)

T = Time (in hours)

The units for the constant 3.5 are milliliters of oxygen per kilogram per minute.

The units for the constant 60 are minutes per hour.

The units for the constant 5 are calories per liter of oxygen

The units for the constant 1000 are milliliters of oxygen per liter of oxygen.





*/