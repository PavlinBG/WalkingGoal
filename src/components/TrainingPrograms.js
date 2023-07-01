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
    {
        title: 'Advanced Program',
        description: 'A challenging program for experienced walkers looking to improve their endurance and speed.',
        distance: '6 miles',
        duration: '1.5 hours',
        progression: 'Increase distance by 1 mile every week and duration by 15 minutes every week.',
      },
      {
        title: 'Interval Training Program',
        description: 'A program that incorporates intervals of high-intensity walking to improve cardiovascular fitness.',
        distance: '3 miles',
        duration: '45 minutes',
        progression: 'Increase the duration of high-intensity intervals by 1 minute every week.',
      },
      {
        title: 'Hiking Program',
        description: 'A program designed for those who enjoy hiking and want to incorporate walking as a regular exercise.',
        distance: 'Varies (based on hiking trail)',
        duration: 'Varies (based on hiking trail)',
        progression: 'Gradually increase the difficulty of hiking trails.',
      },
      {
        title: 'Recovery Program',
        description: 'A program focused on active recovery for individuals who want to maintain their fitness level without overexertion.',
        distance: '1-2 miles',
        duration: '20-30 minutes',
        progression: 'Maintain the same distance and duration throughout the program.',
      },
      {
        title: 'Cardiovascular Health Program',
        description: 'A program focused on improving cardiovascular health through consistent walking.',
        distance: '5 miles',
        duration: '1.5 hours',
        progression: 'Increase distance by 0.5 miles every week.',
      },
      {
        title: 'Stress Relief Program',
        description: 'A program designed to help reduce stress and promote mental well-being through regular walking.',
        distance: '3 miles',
        duration: '45 minutes',
        progression: 'Increase duration by 5 minutes every week.',
      },
      {
        title: 'Senior Fitness Program',
        description: 'A program designed specifically for seniors to improve strength, balance, and overall fitness through walking.',
        distance: '1 mile',
        duration: '20 minutes',
        progression: 'Gradually increase distance by 0.1 mile every week.',
      },
      {
        title: 'Family Fun Program',
        description: 'A program that encourages families to walk together for fitness and quality time.',
        distance: '2 miles',
        duration: '30 minutes',
        progression: 'Increase distance or duration based on the familys comfort and availability.',
      },
      {
        title: 'Event Preparation Program',
        description: 'A program for individuals preparing for a walking event, such as a charity walk or marathon.',
        distance: 'Varies (based on event distance)',
        duration: 'Varies (based on event duration)',
        progression: 'Follow a training plan specific to the event, gradually increasing distance and duration.',
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
      
     </div>







  );
};

export default TrainingProgramsPage;
