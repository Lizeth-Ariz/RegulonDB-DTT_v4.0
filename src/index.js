import React from 'react';
import ReactDOM from 'react-dom';
import DTT from "./dtt"
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/react-hooks';
import Client from './webServices/apollo_client'; 

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <DTT />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
