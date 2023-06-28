import React from 'react';


function WalkProgram({ walkingGoals }) {
  const generateWalkingProgram = (walkingGoals) => {
    const program = [];

    for (let i = 0; i < walkingGoals.length / 8; i++) {
      const weeklyProgram = [];

      // Monday: Recovery Walk (Walk less than Sunday)
      weeklyProgram.push({ day: 'Monday', steps: walkingGoals[i].steps * 0.9 });

      // Tuesday: Normal Walk
      weeklyProgram.push({ day: 'Tuesday', steps: walkingGoals[i].steps });

      // Wednesday: Interval Walk (gradually increasing the distance each week)
      weeklyProgram.push({ day: 'Wednesday', steps: walkingGoals[i].steps * 0.95 });

      // Thursday: Easy Walk
      weeklyProgram.push({ day: 'Thursday', steps: walkingGoals[i].steps * 0.85 });

      // Friday: Tempo Walk
      weeklyProgram.push({ day: 'Friday', steps: walkingGoals[i].steps * 1.05 });

      // Saturday: Walk (gradually increasing the distance each week)
      weeklyProgram.push({ day: 'Saturday', steps: walkingGoals[i].steps * 0.95 });

      // Sunday: Long Walk (slow and easy-paced run to promote recovery)
      weeklyProgram.push({ day: 'Sunday', steps: walkingGoals[i].steps * 1.3 });

      program.push(weeklyProgram);
    }

    return program;
  };

  const walkingProgram = generateWalkingProgram(walkingGoals);
  

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2">Monday</th>
            <th className="py-2">Tuesday</th>
            <th className="py-2">Wednesday</th>
            <th className="py-2">Thursday</th>
            <th className="py-2">Friday</th>
            <th className="py-2">Saturday</th>
            <th className="py-2">Sunday</th>
          </tr>
        </thead>
        <tbody>

          {walkingProgram && walkingProgram.map((weeklyProgram, index) => (
            <tr key={index}>
              {weeklyProgram.map((dayGoal, i) => (
                <td key={i} className="p-4 border">
                  <div className="flex flex-col">
                    <span className="mb-2">Day {index * 7 + i + 1}:</span>
                    <p className="mb-2">Walking Goal: {dayGoal.steps} Steps</p>
                    <label htmlFor={`day-${index}-${i}`}>
                      <input type="checkbox" id={`day-${index}-${i}`} name={`day-${index}-${i}`} />
                      Done
                    </label>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default WalkProgram;
