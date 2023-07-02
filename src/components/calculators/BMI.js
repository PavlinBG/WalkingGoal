import React, { useState } from 'react';

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
    <div className="mx-auto px-4 py-8">
         
       <div className="container mx-auto px-4 py-8">
       <div className="bg-green-100	 rounded-lg shadow-md p-6"> 
        <div className="w-full md:w-1/2 md:mr-4">
          <h4 className="text-4xl md:text-6xl font-bold mb-4">BMI Max Index Calculator</h4>
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

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">BMI Classification</h4>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-green-100 dark:text-green-100">
              <thead className="text-xs text-white uppercase bg-green-500 dark:text-white">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Classification
                  </th>
                  <th scope="col" className="px-4 py-3">
                    BMI (kg/m²)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-500 border-b border-green-400">
                  <td className="px-4 py-3 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Underweight
                  </td>
                  <td className="px-4 py-3">&lt;18.50</td>
                </tr>
                <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Severe thinness
                </td>
                <td class="px-6 py-4">
                    &lt;16.00
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Moderate thinness
                </td>
                <td class="px-6 py-4">
                    16.00-16.99
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Mild thinness
                </td>
                <td class="px-6 py-4">
                    17.00 - 18.49
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Normal range
                </td>
                <td class="px-6 py-4">
                    18.50-24.99
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Overweight
                </td>
                <td class="px-6 py-4">
                    &gt;30.00
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Pre-obese
                </td>
                <td class="px-6 py-4">
                    25.00 - 29.99
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Obese
                </td>
                <td class="px-6 py-4">
                    &gt;30.00
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Obese class I
                </td>
                <td class="px-6 py-4">
                    30.00 - 34.99
                </td>
            </tr>
            <tr class="bg-green-500 border-b border-green-400">
                <td class="px-6 py-4 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Obese class II
                </td>
                <td class="px-6 py-4">
                    35.00 - 39.99
                </td>
            </tr>
                <tr className="bg-green-500 border-b border-green-400">
                  <td className="px-4 py-3 font-medium text-green-50 whitespace-nowrap dark:text-green-100">
                    Obese class III
                  </td>
                  <td className="px-4 py-3">&gt;40.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BMI;
