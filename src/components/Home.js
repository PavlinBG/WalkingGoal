import React from 'react';

const Home = () => {
  return (
    <div className="bg-lime-600 min-h-screen">
      <section className="dark:bg-gray-800 dark:text-gray-200">
        <div className="container max-w-6xl rounded-lg p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="/Walking-Calculator"
            className="block max-w-full rounded-lg group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              src="https://img.freepik.com/free-vector/flat-woman-using-smartphone-with-pedometer-counting-steps_88138-943.jpg?w=996&t=st=1687963452~exp=1687964052~hmac=777f4f541a81ad96410253e7248a56108583cf00cd9bc012eb8746b5fb96ddf4"
              alt="Walking goals"
              className="object-cover w-full h-100 rounded sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl rounded-lg font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Set Walking Goals.
              </h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p>
              The Walking Calculator is a practical tool designed to assist individuals in setting and achieving their walking goals.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-full group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://img.freepik.com/free-vector/couple-walking-together-concept-illustration_114360-12860.jpg?w=740&t=st=1687964515~exp=1687965115~hmac=604e5f3af61e1cd0b377b94cd2b193a6012bf94d0d19f3a2ecca09df040e9bb9"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.
                  At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-full group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://img.freepik.com/free-vector/journey-concept-illustration_114360-3445.jpg?w=740&t=st=1687964875~exp=1687965475~hmac=a21d083895d0f57411461bc6eec85e885dd0556ab27599cc0dfbdfbd50d12d37"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">January 22, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.
                  At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-full group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://img.freepik.com/free-vector/passing-by-concept-illustration_114360-249.jpg?w=740&t=st=1687965361~exp=1687965961~hmac=dd4e6780bc62c1881f12ddacbc3593491da6f7b42437ae102d18b2c268a92b05"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">January 23, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.
                  At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Set Your Goal</h2>
            <img src="/img/Walking_Goal_480x360.jpg" alt="img/Walking_Goal_480x360.jpg" />
            <p className="text-gray-700">
              Set a walking goal for yourself and track your progress. Whether it's a certain number of steps or a specific
              distance, we'll help you stay motivated.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Goal</h2>
            <p className="text-gray-700">
              Use our calculator to determine how many steps or how much distance you need to cover to achieve your goal.
              Stay motivated and keep walking!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Stay Motivated</h2>
            <p className="text-gray-700">
              Find inspiration and motivation from our community of walkers. Share your progress, read success stories, and
              keep pushing forward!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
