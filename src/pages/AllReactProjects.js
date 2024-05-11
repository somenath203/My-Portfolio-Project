/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import LoremIpsumGeneratorPic from './../assets/loremipsumgeneratorpic.png';
import ColorsGeneratorPic from './../assets/colorsgenerator.png';
import GroceryPic from './../assets/grocerybud.png';
import GenerateImgPic from './../assets/generateimageproj.png';
import KeywordExtractorPic from './../assets/keywordextractorimg.png';
import TextSentimentAnalyzerPic from './../assets/textsentimentanalyzerpic.png';
import MiniDictionaryImage from './../assets/minidictionaryimage.png';
import WeatherImage from './../assets/weatherapimage.png';
import CurrencyConverterImage from './../assets/currencyconverterimg.png';
import QrCodeProjImage from './../assets/playwithqrcode.png';
import ImageTextExtractorImage from './../assets/imagetextextractorimage.png';


const AllReactProjects = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center tracking-wider text-green-800 dark:text-white">Loading React and NextJS Projects...</p>
                </div>
            </>
        )
    };

    const reactProjectLists = [
        {
            id: 1,
            projectName: 'Lorem Ipsum Generator',
            projectDescription: 'This is a project created with the help of ReactJS and TailwindCSS where a user can generate lorem ipsum text.',
            projectPic: LoremIpsumGeneratorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS',
            projectLivePreviewLink: 'https://generate-lorem-ipsum-11.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/React-Lorem-Ipsum-Generator'
        },
        {
            id: 2,
            projectName: 'Color Generator',
            projectDescription: 'This is a project where the user will be able to generate various tints and shades of a particular color by writing the hex code of that color in the input box.',
            projectPic: ColorsGeneratorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React',
            projectLivePreviewLink: 'https://62b72a3ff57baf0f4ffb805a--mycolors-generator.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/React-Colors-Generator'
        },
        {
            id: 3,
            projectName: 'Grocery Bud',
            projectDescription: 'This is a simple react CRUD application where the user will be able to add, update and delete groceries.',
            projectPic: GroceryPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React',
            projectLivePreviewLink: 'https://grocery-bud-lemon.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Grocery-Bud'
        },
        {
            id: 4,
            projectName: 'Image Generator',
            projectDescription: 'This is a project where the user will be able to generate image of anything by just typing the text in the input field.',
            projectPic: GenerateImgPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS, Chakra-UI, ExpressJS, OpenAI',
            projectLivePreviewLink: 'https://image-generator-frontend-two.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Image-Generator-Frontend'
        },
        {
            id: 5,
            projectName: 'Keyword Extractor',
            projectDescription: 'This is a webaite which helps a user extract keywords from a particular article or paragraph.',
            projectPic: KeywordExtractorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, Chakra-UI, OpenAI',
            projectLivePreviewLink: 'https://keyword-extractor-sandy.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Keyword-Extractor'
        },
        {
            id: 6,
            projectName: 'Text Sentiment Analyzer',
            projectDescription: 'This is a project where a user will be able to check the sentiment of a particular test i.e. whether the sentiment of the particular text is positive, negative or neutral.',
            projectPic: TextSentimentAnalyzerPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, Chakra-UI, TailwindCSS, OpenAI',
            projectLivePreviewLink: 'https://text-sentiment-analyzer-pi.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Text-Sentiment-Analyzer'
        },
        {
            id: 7,
            projectName: 'Mini Dictionary',
            projectDescription: 'This is an application created with the help of FreeDictionaryAPI where the user can get the meaning of any word by just entering that particular word in the input field and pressing the submit button.',
            projectPic: MiniDictionaryImage,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, Material UI, TailwindCSS, FreeDictionaryAPI',
            projectLivePreviewLink: 'https://mini-dictionary.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Mini-Dictionary'
        },
        {
            id: 8,
            projectName: 'Weather Checker',
            projectDescription: 'This is a project created with the help of OpenWeatherAPI where a user can get the temperature and humidity of any city in the world.',
            projectPic: WeatherImage,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS, ExpressJS, OpenWeatherAPI',
            projectLivePreviewLink: 'https://weather-app-frontend-nine.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Weather-App-Frontend'
        },
        {
            id: 9,
            projectName: 'Currency Converter',
            projectDescription: 'This is an application which is designed to provide a fast and reliable way to convert currencies using real-time exchange rates.',
            projectPic: CurrencyConverterImage,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'ViteJS, TailwindCSS, Frankfurter API',
            projectLivePreviewLink: 'https://currency-converter-nine-kappa.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Currency-Converter'
        },
        {
            id: 10,
            projectName: 'Play With QRCode',
            projectDescription: 'This is a website developed with the help of NextJS, tailwindCSS and ShadcnUI that lets user generate and scan QRCodes.',
            projectPic: QrCodeProjImage,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'NextJS, TailwindCSS, ShadcnUI',
            projectLivePreviewLink: 'https://play-with-qr-code.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Play-With-QRCode'
        },
        {
            id: 11,
            projectName: 'Image Text Extractor',
            projectDescription: 'This is a web app that lets users extract text from any image and also the user has the option to copy the extracted text in the clipboard as well.',
            projectPic: ImageTextExtractorImage,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'NextJS, TailwindCSS, daisyUI, FastAPI, pytesseract',
            projectLivePreviewLink: 'https://image-text-generator.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Image-Text-Extractor'
        },
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my react and nextjs projects are fetched successfully');

        }, 2500);


    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-3xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>React Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {reactProjectLists.map((reactProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-indigo-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-indigo-500" key={reactProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{reactProject.projectName}</p>

                                <img src={reactProject.projectPic} alt={reactProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${reactProject.heightOfImg} ${reactProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-indigo-800 dark:text-indigo-200 mb-7">{reactProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold text-indigo-500 dark:text-indigo-400 mb-12">Tech Stack: {reactProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={reactProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-indigo-600 rounded-xl shadow-xl transition-all duration-500 hover:bg-indigo-400">Live Preview</button>
                                    </a>

                                    <a href={reactProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-indigo-900 dark:text-indigo-400 hover:text-indigo-700"></i>
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

export default AllReactProjects;
