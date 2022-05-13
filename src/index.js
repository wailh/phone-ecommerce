import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';
import {ProductProvider} from './components/context.jsx'
import AuthProvider from './components/Authentication/firebase/firebaseContext';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';
import './index.css';

Sentry.init({
  dsn: "https://20e5eb5020a74f529b47c7ef5ce6a2d2@o1085011.ingest.sentry.io/6116525",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
ReactDOM.render(
    <ProductProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ProductProvider>
  ,
  document.getElementById('root')
);

