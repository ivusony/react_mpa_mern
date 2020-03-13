import React from 'react';
import ReactDOM from 'react-dom';
import SSR from '../components/pages/ssr/Ssr';




ReactDOM.hydrate(<SSR/>, document.querySelector('#root'));


