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
              src="https://img.freepik.com/free-vector/workers-running-target-with-bar-chart-background_1262-19383.jpg?w=900&t=st=1688247064~exp=1688247664~hmac=855265976679c2d77b51a6d083e7ebe2e2c3e57877810b89f6fd07fa9919f15f"
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
              href="/Tools"
              className="max-w-full group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-90 dark:bg-gray-500"
                src="https://img.freepik.com/free-vector/couple-walking-together-concept-illustration_114360-12860.jpg?w=740&t=st=1687964515~exp=1687965115~hmac=604e5f3af61e1cd0b377b94cd2b193a6012bf94d0d19f3a2ecca09df040e9bb9"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                The Benefits of Walking: How a Simple Stroll Can Improve Your Health
                </h3>
                <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                <p>
                Discover the numerous health benefits of walking and how it can improve your physical and mental well-being. From boosting cardiovascular fitness to reducing stress levels, find out why taking a daily walk is an excellent way to enhance your overall health.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="/Tools"
              className="max-w-full group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-90 dark:bg-gray-500"
                src="https://img.freepik.com/free-vector/journey-concept-illustration_114360-3445.jpg?w=740&t=st=1687964875~exp=1687965475~hmac=a21d083895d0f57411461bc6eec85e885dd0556ab27599cc0dfbdfbd50d12d37"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                 Walking for Weight Loss: Shedding Pounds One Step at a Time
                </h3>
                <span className="text-xs dark:text-gray-400">January 22, 2021</span>
                <p>
                Discover how walking can be an effective tool for weight loss and maintaining a healthy body. Learn practical tips, such as setting goals, monitoring progress, and incorporating interval training, to maximize your calorie burn and achieve sustainable weight loss through walking.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="/Tools"
              className="max-w-full group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-90 dark:bg-gray-500"
                src="https://img.freepik.com/free-vector/passing-by-concept-illustration_114360-249.jpg?w=740&t=st=1687965361~exp=1687965961~hmac=dd4e6780bc62c1881f12ddacbc3593491da6f7b42437ae102d18b2c268a92b05"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Walking for All Ages: How Walking Can Benefit Every Generation
                </h3>
                <span className="text-xs dark:text-gray-400">January 23, 2021</span>
                <p>
                Description: Discover why walking is a fantastic activity for people of all ages, from children to seniors. Learn about the unique benefits for each generation, including improved cognitive function in children, increased bone density in adults, and enhanced balance and mobility for older individuals.
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

       
    </div>
  );
};

export default Home;
