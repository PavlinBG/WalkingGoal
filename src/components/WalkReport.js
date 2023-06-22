import React, { useRef } from 'react';

function PrintableTable({ walkingGoals }) {
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
        {walkingGoals.map((goal, index) => {
          if (index % 7 === 0) {
            return (
                 
              <tr key={index}>
                {walkingGoals.slice(index, index + 7).map((weeklyGoal, i) => (
                   <td key={i}>
                    Day {index + i + 1}:<fieldset>  <p>Walking Goal: {weeklyGoal.steps} Steps</p> <p> <input type="checkbox" id="Done" name="Done"></input> </p></fieldset>
                  </td>
                   
                ))}
              </tr>
               
            );
          } else {
            return null; // Skip rendering for other days within the week
          }
        })}
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
      <h2>Walking Weight Loss Report</h2>
      <pre>{report}</pre>

      <div ref={printableRef}>
        <PrintableTable walkingGoals={walkingGoals} />
      </div>

      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default WalkReport;
