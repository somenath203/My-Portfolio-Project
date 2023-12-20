import { useEffect, useState } from 'react';
import { message } from 'antd';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import DefaultLayout from '../components/DefaultLayout';


const FrontendDevelopmentSkills = () => {

    const frontendNames = [
        {
            id: 1,
            name: 'ReactJS',
            progressPercent: 86
        },
        {
            id: 2,
            name: 'NextJS',
            progressPercent: 77
        },
        {
            id: 3,
            name: 'TailwindCSS',
            progressPercent: 83
        },
        {
            id: 4,
            name: 'antd',
            progressPercent: 65
        },
        {
            id: 5,
            name: 'MaterialUI',
            progressPercent: 57
        },
        {
            id: 6,
            name: 'ChakraUI',
            progressPercent: 59
        },
        {
            id: 7,
            name: 'Streamlit',
            progressPercent: 56
        },
        {
            id: 8,
            name: 'Gradio',
            progressPercent: 55
        },
    ];

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-base lg:text-2xl text-center tracking-wider text-green-800 dark:text-white">Loading my Frontend Development Skills...</p>
                </div>
            </>
        )
    };

    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my Frontend Development Skills are fetched successfully');

        }, 2500);


    }, []);

    return (
        <DefaultLayout>

        {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
  
          <div className='w-10/12'>
  
            <p className='mt-24 text-3xl lg:text-4xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>Frontend Development Skills</p>
  
            <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14 pb-10'>
  
              {frontendNames.map((frontend) => (
                <div key={frontend.id}>
                  <p className='font-bold text-green-600 dark:text-green-100 text-2xl mb-3'>{frontend.name}</p>
                  <Progress percent={frontend.progressPercent} status="success" />
                </div>
              ))}
  
            </div>
  
          </div>
  
        </div>}
  
      </DefaultLayout>
    )
};

export default FrontendDevelopmentSkills;