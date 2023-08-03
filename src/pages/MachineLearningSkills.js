import { useEffect, useState } from 'react';
import { message } from 'antd';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import DefaultLayout from '../components/DefaultLayout';


const MachineLearningSkills = () => {

  const machineLearningNames = [
    {
      id: 1,
      name: 'Numpy',
      progressPercent: 55
    },
    {
      id: 2,
      name: 'Pandas',
      progressPercent: 63
    },
    {
      id: 3,
      name: 'Matplotlib',
      progressPercent: 54
    },
    {
      id: 4,
      name: 'Seaborn',
      progressPercent: 53
    },
    {
      id: 5,
      name: 'Scikit-learn',
      progressPercent: 65
    },
  ];

  const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

  const LoadingSpinner = () => {
    return (
      <>
        <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
          <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
          <p className="text-base lg:text-2xl text-center tracking-wider text-green-800 dark:text-white">Loading my Machine Learning Skills...</p>
        </div>
      </>
    )
  };

  useEffect(() => {

    setOpeningScreenLoading(true);

    setTimeout(() => {

      setOpeningScreenLoading(false);

      message.success('all of my Machine Learning Skills are fetched successfully');

    }, 2500);


  }, []);

  return (
    <DefaultLayout>

      {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

        <div className='w-10/12'>

          <p className='mt-24 text-3xl lg:text-4xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>Machine Learning Skills</p>

          <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14 pb-10'>

            {machineLearningNames.map((ml) => (
              <div key={ml.id}>
                <p className='font-bold text-green-600 dark:text-green-100 text-2xl mb-3'>{ml.name}</p>
                <Progress percent={ml.progressPercent} status="success" />
              </div>
            ))}

          </div>

        </div>

      </div>}

    </DefaultLayout>
  )
};

export default MachineLearningSkills;