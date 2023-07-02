import { Link } from 'react-router-dom';

const Tools = () => {
  // Sample data for tools
  const tools = [
    {
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index (BMI) based on your weight and height. Visit Pincher Insider for more information.',
      link: '/BMI',
      thumbnail: 'https://static.vecteezy.com/system/resources/previews/010/952/601/non_2x/body-mass-index-classification-of-bmi-illustration-vector.jpg',
    },
    {
      title: 'TDEE Calculator',
      description: 'Calculate your Total Daily Energy Expenditure (TDEE) to determine your daily calorie needs. Visit Pincher Insider for more information.',
      link: '/TDEE',
      thumbnail: 'https://img.freepik.com/free-vector/flat-design-metabolism-illustration_23-2150093697.jpg?w=740&t=st=1688233459~exp=1688234059~hmac=537c31e93685ace0cb4dd470e0b674b2c6c0addac752a6892a081c722beafe43',
    },
    {
      title: 'Walking Calorie Burn',
      description: 'Estimate the number of calories burned during a walking session based on distance and duration. Visit Pincher Insider for more information.',
      link: '/CalorieBurn',
      thumbnail: 'https://media.istockphoto.com/id/814632144/vector/walking-man-vector-icon-people-walk-sign-illustration.jpg?s=612x612&w=0&k=20&c=gjmcfmuCTCdvC-uQD7lOEaU3WAIqefiDRdMR_NYaxs4=',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <Link key={index} to={tool.link}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-4">{tool.title}</h2>
                <p className="text-lg mb-4">{tool.description}</p>
              </div>
              <img src={tool.thumbnail} alt={tool.title} className="w-full h-auto mt-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tools;
