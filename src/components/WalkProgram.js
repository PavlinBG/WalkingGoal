import React, { useRef } from 'react';

function PrintGoalTable({ walkingGoals }) {
  const generateWalkingProgram = () => {
    const program = [];
     

    for (let i = 0; i < walkingGoals.length /8 ; i++) {
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

  const walkingProgram = generateWalkingProgram();

  return (
    <table>
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        {walkingProgram.map((weeklyProgram, index) => (
          <tr key={index}>
            {weeklyProgram.map((dayGoal, i) => (
              <td key={i}>
                Day {index * 7 + i + 1}:
                <fieldset>
                  <p>Walking Goal: {dayGoal.steps} Steps</p>
                  <p>
                    <input type="checkbox" id="Done" name="Done" />
                  </p>
                </fieldset>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function WalkReport({ report, walkingGoals }) {
  const printableRef = useRef(null);

  const handlePrint = () => {
    if (printableRef.current) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Print</title></head><body>');
      printWindow.document.write(printableRef.current.outerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
      
    }
  };

  return (
    <div className="report">
       
      <div ref={printableRef}>
        <PrintGoalTable walkingGoals={walkingGoals} />
      </div>
      

      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default WalkReport;
