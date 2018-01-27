import React from 'react';
import ReactDOM from 'react-dom';
import { createUser, signIn } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

window.createUser = createUser;
window.signIn = signIn;
