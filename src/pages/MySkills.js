/* eslint-disable react/jsx-no-target-blank */
import { NavLink } from 'react-router-dom';

import DefaultLayout from './../components/DefaultLayout';


const mySkillsLists = [
    {
        id: 1,
        skillName: 'Programming Languages',
        skillDescription: 'Click below to checkout my skills in programming languages.',
        skillPageLink: '/programming-languages-skills',
    },
    {
        id: 2,
        skillName: 'Frontend Development',
        skillDescription: 'Click below to checkout my skills in frontend development.',
        skillPageLink: '/frontend-development-skills',
    },
    {
        id: 3,
        skillName: 'Backend Development',
        skillDescription: 'Click below to checkout my skills in backend development.',
        skillPageLink: '/backend-development-skills',
    },
    {
        id: 4,
        skillName: 'Machine Learning',
        skillDescription: 'Click below to checkout my skills in machine learning.',
        skillPageLink: '/machine-learning-skills',
    }
];

const MySkills = () => {
    return (
        <DefaultLayout>

            <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-4xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>My Skills</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {mySkillsLists.map((mySkill) => (
                            <div className="p-12 bg-slate-50 border-4 border-green-500 text-center rounded-xl shadow-xl dark:bg-slate-800" key={mySkill.id}>

                                <p className="mb-10 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{mySkill.skillName}</p>

                                <p className="text-xl font-nunito font-bold text-green-800 dark:text-green-200 mb-10">{mySkill.skillDescription}</p>

                                <div className="w-full flex justify-center items-center">
                                    <NavLink to={mySkill.skillPageLink}>
                                        <button className="py-4 px-7 text-white text-xl tracking-wider bg-green-600 rounded-xl shadow-xl transition-all duration-500 hover:bg-green-700">CLICK HERE</button>
                                    </NavLink>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </DefaultLayout>
    )
};


export default MySkills;
