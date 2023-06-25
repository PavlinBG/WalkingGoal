import React, { useRef } from 'react';
//import ChartComponent from './ChartComponent';

function PrintableTable({ walkingGoals }) {
  return (
    <div className="overflow-x-auto">
      <table className="center">
        <thead>
          <tr>
            <th className="px-4 py-2">Monday</th>
            <th className="px-4 py-2">Tuesday</th>
            <th className="px-4 py-2">Wednesday</th>
            <th className="px-4 py-2">Thursday</th>
            <th className="px-4 py-2">Friday</th>
            <th className="px-4 py-2">Saturday</th>
            <th className="px-4 py-2">Sunday</th>
          </tr>
        </thead>
        <tbody>
          {walkingGoals.map((goal, index) => {
            if (index % 7 === 0) {
              return (
                <tr key={index}>
                  {walkingGoals.slice(index, index + 7).map((weeklyGoal, i) => (
                    <td key={i} className="border px-4 py-2">
                      <div>Day {index + i + 1}:</div>
                      <fieldset>
                        <p>Walking Goal: {weeklyGoal.steps} Steps</p>
                        <p>
                          <input type="checkbox" id="Done" name="Done" />
                        </p>
                      </fieldset>
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
    </div>
  );
}

function WalkReport({ report, walkingGoals }) {
  const printableRef = useRef(null);

  const handlePrint = () => {
    if (printableRef.current) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Print</title>');
      printWindow.document.write('<style>@media print { table { table-layout: auto !important; } }</style>');
      printWindow.document.write('<link rel="stylesheet" type="text/css" href="style.css">');
      printWindow.document.write('</head><body>');
      printWindow.document.write('<h2 class="text-2xl font-bold mb-4">Walking Weight Loss Report</h2>');
      printWindow.document.write(printableRef.current.outerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="report">
      <h2 className="text-2xl font-bold mb-4">Walking Weight Loss Report</h2>
      <pre className="whitespace-pre-wrap">{report}</pre>

      <div ref={printableRef}>
        <PrintableTable walkingGoals={walkingGoals} />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handlePrint}
      >
        Print
      </button>
    </div>
  );
}

export default WalkReport;
