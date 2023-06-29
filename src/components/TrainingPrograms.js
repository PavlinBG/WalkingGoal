import React from 'react';
import BMI from './calculators/BMI';
 
const TrainingProgramsPage = () => {
  // Sample data for training programs
  const trainingPrograms = [
    {
      title: 'Beginner Program',
      description: 'A program designed for beginners to start their walking journey.',
      distance: '2 miles',
      duration: '30 minutes',
      progression: 'Increase distance by 0.5 miles every week.',
    },
    {
      title: 'Intermediate Program',
      description: 'A program for those who have some walking experience and want to challenge themselves.',
      distance: '4 miles',
      duration: '1 hour',
      progression: 'Increase duration by 10 minutes every week.',
    },
    {
      title: 'Weight Loss Program',
      description: 'A program focused on weight loss with a combination of walking and other exercises.',
      distance: '3 miles',
      duration: '45 minutes',
      progression: 'Increase distance by 0.5 miles every week and duration by 5 minutes every week.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Training Programs</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainingPrograms.map((program, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">{program.title}</h2>
            <p className="text-gray-500 mb-4">{program.description}</p>
            <div className="text-sm">
              <p>
                <strong>Distance:</strong> {program.distance}
              </p>
              <p>
                <strong>Duration:</strong> {program.duration}
              </p>
              <p>
                <strong>Progression:</strong> {program.progression}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-10 padding">
        <h2 className="text-6xl font-bold mb-4">BMI Chart</h2>
        <p className="text-gray-700">
          BMI charts are helpful as they give you a visual illustration of your BMI in relation to the general population
          and show you your weight category. A BMI graph, table, or chart is also excellent to use as a BMI checker if
          you’re trying to lose weight and want to monitor your progress.
        </p>

        <p>Here is an example of a BMI table.</p>

        {/* Include the BMI calculator */}
        <BMI />

        <img
          role="presentation"
          className="object-cover w-full rounded dark:bg-gray-500"
          src="https://www.ramsayhealth.co.uk/-/media/ramsay/weight-loss-surgery/bmi-chart.jpg?la=en&hash=147823603B29EB44FB7EBEE627CEF9E384993240"
        />

        <h2 className="text-4xl font-bold mt-8">BMI Calculator</h2>
        <p className="text-gray-700">Calculate your BMI using either the metric or imperial system:</p>
      </div>
     </div>
  );
};

export default TrainingProgramsPage;
