import React from 'react';
import {Provider} from 'react-redux';
import {MainLayout} from './components/MainLayout/MainLayout';
import {store} from './store/rootStore';

export default function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}
