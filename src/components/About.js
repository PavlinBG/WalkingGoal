import React from 'react';
  import FastingWalkCal from './calculators/FastingWalkCal';


const About= () => {
 return(
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">About</h1>
       <FastingWalkCal />
  </div>
  );
};

export default About;
