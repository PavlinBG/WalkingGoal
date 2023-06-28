import React from 'react';
 

 
   
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
              <p><strong>Distance:</strong> {program.distance}</p>
              <p><strong>Duration:</strong> {program.duration}</p>
              <p><strong>Progression:</strong> {program.progression}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingProgramsPage;
