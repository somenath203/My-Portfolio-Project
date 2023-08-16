/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import TitanicProjPic from './../assets/titanic_proj.png';
import HousePredictorPic from './../assets/housepredictorpic.png';
import StudentSuccessDropoutPredictorPic from './../assets/studentsuccessdropoutpredictor.png';
import CreditCardFraudDetectImg from './../assets/creditcardfrauddetectimg.png';
import SpamEmailDetectImg from './../assets/spamemailpredictionimg.png';
import RockVSMineImg from './../assets/rockvsminepredcitionpic.png';
import LoanStatusImg from './../assets/loanstatuspredictionpic.png';
import GoldPriceImg from './../assets/goldpricepredimg.png';
import ParkinsnImg from './../assets/parkinsondiseasepredpic.png';


const AllMlProjects = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center tracking-wider text-green-800 dark:text-white">Loading Machine Learning Projects...</p>
                </div>
            </>
        )
    };

    const mlProjectLists = [
        {
            id: 1,
            projectName: 'Titanic Survival Project',
            projectDescription: 'This is a project which predicts weather a particular person would survive the Titanic Disaster or not if he/she was present in Titanic at that point of time.',
            projectPic: TitanicProjPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, ChakraUI, FastAPI, Pandas, Seaborn, Scikit-learn',
            projectLivePreviewLink: 'https://titanic-survival-project-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Titanic-Survival-Project-Frontend'
        },
        {
            id: 2,
            projectName: 'House Price Predictor',
            projectDescription: 'This is a project which predicts the price of a new house on the basis of Boston House Dataset.',
            projectPic: HousePredictorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Streamlit, Pandas, Numpy, Scikit-learn',
            projectLivePreviewLink: 'https://share.streamlit.io/somenath203/a.i.-powered-boston-house-price-predictor-website/main/boston_house_web_app.py',
            projectGithubLink: 'https://github.com/somenath203/A.I.-Powered-Boston-House-Price-Predictor-Website'
        },
        {
            id: 3,
            projectName: 'Student Academic Success Dropout Predictor',
            projectDescription: 'This is a project which predicts whether a particular student would dropout or succeed in academics in the future.',
            projectPic: StudentSuccessDropoutPredictorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS, antd, ExpressJS, MongoDB, FastAPI, Pandas, Numpy, Seaborn, Scikit-learn',
            projectLivePreviewLink: 'https://predict-students-dropout-and-academic-success-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Predict-students-dropout-and-academic-success-frontend'
        },
        {
            id: 4,
            projectName: 'Credit Card Fraud Detection',
            projectDescription: 'This is a machine-learning model built with the help of Logistic Regression which helps in detecting fraudulent credit card transactions so that customers are not charged for the items that they did not purchase.',
            projectPic: CreditCardFraudDetectImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Numpy, Pandas, Scikit-learn',
            projectLivePreviewLink: 'https://github.com/somenath203/Credit-Card-Fraud-Detection/blob/main/credit_card_fraud_detection.ipynb',
            projectGithubLink: 'https://github.com/somenath203/Credit-Card-Fraud-Detection'
        },
        {
            id: 5,
            projectName: 'Spam Email Detection',
            projectDescription: 'This is a machine-learning model built with the help of Logistic Regression which helps in detecting whether a particular email is spam or not.',
            projectPic: SpamEmailDetectImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Numpy, Pandas, Scikit-learn',
            projectLivePreviewLink: 'https://github.com/somenath203/Spam-Email-Detection/blob/main/spam_email_detection.ipynb',
            projectGithubLink: 'https://github.com/somenath203/Spam-Email-Detection'
        },
        {
            id: 6,
            projectName: 'Sonar Rock VS Mine Prediction',
            projectDescription: 'This is a machine-learning model that helps a submarine predict whether the thing beneath it is a rock or a naval mine. Here, the prediction is made based on the data received from sonar signals that bounce back to the submarine after interacting with the underwater object.',
            projectPic: RockVSMineImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Numpy, Pandas, Scikit-learn',
            projectLivePreviewLink: 'https://github.com/somenath203/Sonar-Rock-VS-Mine-Prediction/blob/main/sonar_rock_vs_mine_prediction.ipynb',
            projectGithubLink: 'https://github.com/somenath203/Sonar-Rock-VS-Mine-Prediction'
        },
        {
            id: 7,
            projectName: 'Loan Status Prediction',
            projectDescription: 'This is a project created with the help of NextJS, fastAPI and Random forest classifier Model which enables bank employees predict whether an applicant is eligible for receiving loan or not.',
            projectPic: LoanStatusImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'NextJS, TailwindCSS, antd, FastAPI, Numpy, Pandas, Seaborn, Scikit-learn',
            projectLivePreviewLink: 'https://loan-status-prediction-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Loan-Status-Prediction-Frontend'
        },
        {
            id: 8,
            projectName: 'Gold Price Prediction',
            projectDescription: 'This is a project created with the help of ReactJS, fastAPI and Random forest Regressor Model which predicts the price of gold based on certain input.',
            projectPic: GoldPriceImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'ReactJS, antd, FastAPI, Pandas, Matplotlib, Seaborn, Scikit-learn',
            projectLivePreviewLink: 'https://gold-price-detection.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Gold-Price-Prediction'
        },
        {
            id: 9,
            projectName: 'Parkinson\'s Disease Prediction',
            projectDescription: 'This is a project created with the help of ReactJS, fastAPI and Support Vector Classifier Model which predicts whether a person is having Parkinson\'s Disease or not.',
            projectPic: ParkinsnImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'ReactJS, FastAPI, Numpy, Pandas, Scikit-learn',
            projectLivePreviewLink: 'https://parkinson-disease-predictor.vercel.app/',
            projectGithubLink: 'https://github.com/vishal815/Parkinsons-Disease-Detection'
        }
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my ml projects are fetched successfully');

        }, 2500);


    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-4xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>Ml Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {mlProjectLists.map((mlProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-indigo-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-indigo-500" key={mlProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{mlProject.projectName}</p>

                                <img src={mlProject.projectPic} alt={mlProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${mlProject.heightOfImg} ${mlProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-blue-800 dark:text-blue-200 mb-7">{mlProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold text-blue-700 dark:text-blue-400 mb-12">Tech Stack: {mlProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={mlProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-indigo-400 rounded-xl shadow-xl transition-all duration-500 hover:bg-indigo-700">Live Preview</button>
                                    </a>

                                    <a href={mlProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-indigo-900 dark:text-indigo-300 hover:text-indigo-700"></i>
                                        </button>
                                    </a>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>}
        </DefaultLayout>
    )
};

export default AllMlProjects;