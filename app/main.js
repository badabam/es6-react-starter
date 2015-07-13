/**
 * main.js is webpack's entry point, meaning here you'll typically
 * require your most top-level React componnent and render it with
 * `React.render`.
 */
import React from 'react';
import App from './App';

// Use webpack's style loader to inject css.
require('./styles/app.css');

React.render(<App />, document.getElementById('root'));
