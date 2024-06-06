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
import SpamSMSImg from './../assets/spamsmsimg.png';
import SuicideDepressionImg from './../assets/suicidedepressionimg.png';
import AirQualityPic from './../assets/airqualitypic.png';
import SkinLesionPic from './../assets/skinlesionimg.png';
import ClusterNewsPic from './../assets/clusternewspic.png';
import SummarizeText from './../assets/textsummarizerimg.png';
import CNNWithMNISTPic from './../assets/cnnmnistprojectpic.png';
import CNNwithCIFARTEN from './../assets/cifartenprojectimg.png';
import BrainTumorPic from './../assets/braintumorpic.png';
import ForecastInClothingLSTM from './../assets/forecastclothfuturelstmpic.png';
import RemoveNoiseFromImg from './../assets/reducenoiseprojectimg.png';
import MulticlassBrainTumorImg from './../assets/multiclassbraintumorprojectimage.png';
import SatelliteImageClassificationProjImg from './../assets/satelliteimgclassifyprojectimg.png';
import LanguageIdentifierProjImg from './../assets/languageidentifierprojectimg.png';
import MalariaImgCellClassifyProjImg from './../assets/malariacellclassification.png';
import NamedEntityRecognizerImg from './../assets/namedentityrecognizerpic.png';
import TomatoLeafImg from './../assets/tomatoleafprojectpic.png';
import ToxicCommentClassificationProjImg from './../assets/toxiccommentclassificationproj.png';


const AllMlProjects = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center tracking-wider text-green-800 dark:text-white">Loading Machine and Deep Learning Projects...</p>
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
        },
        {
            id: 10,
            projectName: 'Spam SMS Prediction',
            projectDescription: 'This is a project created with the help of NextJS, TailwindCSS, fastAPI and Multinomial Naive Bayes Classifier Model which predicts whether a SMS is spam or not.',
            projectPic: SpamSMSImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'NextJS, TailwindCSS, FastAPI, Numpy, Pandas, Matplotlib, Seaborn, NLTK, Scikit-learn',
            projectLivePreviewLink: 'https://spam-sms-predictor-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Spam-SMS-Predictor-Frontend'
        },
        {
            id: 11,
            projectName: 'Suicide Depression Predictor',
            projectDescription: 'The Suicide Depression Predictor is a healthcare project that uses machine learning to predict the risk of suicide and depression in individuals.',
            projectPic: SuicideDepressionImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'ReactJS, TailwindCSS, FastAPI, Numpy, Pandas, Matplotlib, Seaborn, NLTK, Scikit-learn',
            projectLivePreviewLink: 'https://suicidal-thought-and-depression-predictor-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Suicide-Depression-Predictor'
        },
        {
            id: 12,
            projectName: 'Air Quality Predictor',
            projectDescription: 'Air Quality Predictor is a machine learning project designed to help predict the quality of the air based on four parameters: year, month, day, and hour of the measurement.',
            projectPic: AirQualityPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'ReactJS, TailwindCSS, FastAPI, Pandas, Matplotlib, Seaborn, Scikit-learn',
            projectLivePreviewLink: 'https://air-quality-predictor.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Air-Quality-Predictor'
        },
        {
            id: 13,
            projectName: 'Skin Lesion Segmentation OpenCV',
            projectDescription: 'This repository contains the code for segmenting skin lesions images using OpenCV. Skin lesion segmentation is one of the first steps towards automatic Computer-Aided Diagnosis of skin cancer.',
            projectPic: SkinLesionPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Numpy, Matplotlib, OpenCV',
            projectLivePreviewLink: 'https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV/blob/main/skin_lesion_segmentation_multiple_image_computer_vision_project.ipynb',
            projectGithubLink: 'https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV'
        },
        {
            id: 14,
            projectName: 'Clustering News Unsupervised Machine Learning',
            projectDescription: 'This is a machine learning project which uses unsupervised machine learning algorithms such as k-means, k-medoids and agglomerative hierarchical clustering to group news articles into clusters based on their respective types.',
            projectPic: ClusterNewsPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Numpy, Pandas, Matplotlib, NLTK, Scikit-learn, FastAPI',
            projectLivePreviewLink: 'https://fake-news-pred.onrender.com/docs',
            projectGithubLink: 'https://github.com/somenath203/Clustering-News-Unsupervised-Machine-Learning'
        },
        {
            id: 15,
            projectName: 'Text Summarizer using Transformers',
            projectDescription: 'This is a application which is created with the help of Gradio whose work is to summarize text articles with the help of \'Summarization Pipeline\' provided by Transformer.',
            projectPic: SummarizeText,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Transformers, Gradio',
            projectLivePreviewLink: 'https://som11-text-summary-using-gradio-and-transformer.hf.space/',
            projectGithubLink: 'https://github.com/somenath203/Text-Summarizer-using-Transformers-and-Gradio'
        },
        {
            id: 16,
            projectName: 'CNN with MNIST Dataset',
            projectDescription: 'This is a project which is created with the help of Tensorflow and Convolutional Neural Network (CNN) that classifies handwritten digits from the MNIST dataset.',
            projectPic: CNNWithMNISTPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, Sequential, CNN',
            projectLivePreviewLink: 'https://github.com/somenath203/CNN-with-MNIST-Dataset/blob/main/cnn_on_mnist.ipynb',
            projectGithubLink: 'https://github.com/somenath203/CNN-with-MNIST-Dataset'
        },
        {
            id: 17,
            projectName: 'CNN with CIFAR-10 Dataset',
            projectDescription: 'This is a project that utilizes Convolutional Neural Network (CNN) to classify images from the CIFAR-10 dataset, which comprises 60,000 32x32 color images across 10 different classes, including airplanes, cars, birds, cats, deer, dogs, frogs, horses, ships, and trucks.',
            projectPic: CNNwithCIFARTEN,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, Sequential, CNN',
            projectLivePreviewLink: 'https://github.com/somenath203/CNN_With_CIFAR_10_Dataset/blob/main/CNN_with_CIFAR_10_Dataset.ipynb',
            projectGithubLink: 'https://github.com/somenath203/CNN_With_CIFAR_10_Dataset'
        },
        {
            id: 18,
            projectName: 'Binaryclass Brain Tumor Classification using CNN',
            projectDescription: 'This is a project which uses Tensorflow, Convolutional Neural Network (CNN), and Streamlit to analyze MRI images of Brain and detect the presence or absence of Tumors.',
            projectPic: BrainTumorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, Sequential, CNN, Streamlit',
            projectLivePreviewLink: 'https://som11-brain-tumor-classification-using-cnn.hf.space',
            projectGithubLink: 'https://github.com/somenath203/Brain-Tumor-Classification-using-CNN'
        },
        {
            id: 19,
            projectName: 'Predicting Future Retail Sales of Clothing Stores using LSTM',
            projectDescription: 'This is a project which uses Tensorflow and Long Short Term Memory(LSTM), a type of Recurrent Neural Network(RNN), to forecast the future retail sales of clothing and clothing accessory stores.',
            projectPic: ForecastInClothingLSTM,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, Sequential, LSTM',
            projectLivePreviewLink: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM/blob/main/Predicting%20Future%20Retail%20Sales%20of%20Clothing%20using%20LSTM.ipynb',
            projectGithubLink: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM'
        },
        {
            id: 20,
            projectName: 'Removing Noise from MNIST handwritten digit images using Autoencoder',
            projectDescription: 'This project demonstrates how to use autoencoder a type of neural network, to remove noise from images of handwritten digits of the MNIST dataset.',
            projectPic: RemoveNoiseFromImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, Sequential, Autoencoder',
            projectLivePreviewLink: 'https://github.com/somenath203/Removing-Noise-from-MNIST-handwritten-digit-images-using-Autoencoder/blob/main/removing_noise_from_MNIST_handwritten_digit_images_using_autoencoder.ipynb',
            projectGithubLink: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM'
        },
        {
            id: 21,
            projectName: 'Multiclass Brain Tumor Classification using TensorFlow',
            projectDescription: 'This is a project which uses deep learning algorithm to classify the type of tumor present in the brain MRI image. The model is only able to detect three type of tumors as of now i.e. glioma, meningioma and pituitary.',
            projectPic: MulticlassBrainTumorImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, CNN, Transfer learning, Ensemble Learning, NextJS, FastAPI',
            projectLivePreviewLink: 'https://multiclass-brain-tumor-classification.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Binaryclass-Brain-Tumor-Classification-using-CNN'
        },
        {
            id: 22,
            projectName: 'Satellite Image Classifier',
            projectDescription: "The aim of this project is to classify satellite images into their respective categories i.e. 'Cloudy', 'Desert', 'Green Area' and 'Water' using Convolutional Neural Networks (CNNs) implemented with TensorFlow.",
            projectPic: SatelliteImageClassificationProjImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, CNN, Transfer learning, Gradio',
            projectLivePreviewLink: 'https://som11-satellite-image-classification.hf.space',
            projectGithubLink: 'https://github.com/somenath203/satellite-image-classification-using-tensorflow'
        },
        {
            id: 23,
            projectName: 'Language Identifier',
            projectDescription: "This is a deep learning project created with the help of Tensorflow that predicts the language of a given text snippet.",
            projectPic: LanguageIdentifierProjImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, Transfer learning, Ensemble Learning, Gradio',
            projectLivePreviewLink: 'https://som11-language-predictor.hf.space',
            projectGithubLink: 'https://github.com/somenath203/Language-Identifier-using-Tensorflow'
        },
        {
            id: 24,
            projectName: 'Malaria Image Cell Classification using TensorFlow',
            projectDescription: "This is a deep learning project created with the help of Tensorflow that predicts the language of a given text snippet.",
            projectPic: MalariaImgCellClassifyProjImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, CNN, Transfer learning, Ensemble Learning, NextJS, ExpressJS, Razorpay',
            projectLivePreviewLink: 'https://malaria-cell-classifier.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/malaria-cell-image-classification'
        },
        {
            id: 25,
            projectName: 'Named Entity Recognizer',
            projectDescription: "This project is designed to help you extract and categorize named entities from text using state-of-the-art NLP models like dslim/bert-base-NER and Spacy's en_core_web_sm model.",
            projectPic: NamedEntityRecognizerImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Transformers, Spacy, Streamlit',
            projectLivePreviewLink: 'https://som11-named-entity-recognition.hf.space/',
            projectGithubLink: 'https://github.com/somenath203/Named-Entity-Recognizer'
        },
        {
            id: 26,
            projectName: 'Tomato Leaf Disease Classification',
            projectDescription: "In this project, deep learning techniques are used to detect and classify diseases in tomato leaves. This project is designed to help farmers know more about the health of their crops, providing valuable insights for effective crop management.",
            projectPic: TomatoLeafImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Tensorflow, Transfer Learning, Ensemble Learning, ReactJS, TailwindCSS, Transfer Learning, ExpressJS, FastAPI',
            projectLivePreviewLink: 'https://healthy-tomato.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/tomato-disease-classification-ten-classes'
        },
        {
            id: 27,
            projectName: 'Toxic Comment Classifier',
            projectDescription: "This is a project which categorizes a particular toxic comment entered by the user into mainly 6 categories and those are: toxic, severe_toxic, obscene, threat, insult and identity_hate.",
            projectPic: ToxicCommentClassificationProjImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Flutter, FastAPI, Toxic-Bert HuggingFace Model',
            projectLivePreviewLink: 'https://github.com/somenath203/Toxic-Comment-Classifier?tab=readme-ov-file#demo-video-of-the-project',
            projectGithubLink: 'https://github.com/somenath203/Toxic-Comment-Classifier'
        },
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my ml and dl projects are fetched successfully');

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
