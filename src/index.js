import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'de'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    });

const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading..</h3>
    </div>
);

root.render(
    <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter >
        </React.StrictMode>,
    </Suspense>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
