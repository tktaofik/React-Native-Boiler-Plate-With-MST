import React from 'react';
import { Provider } from 'react-redux';
import { asReduxStore, connectReduxDevtools } from 'mst-middlewares';
import { ItemList } from './stores/sampleStore'
import Navigation from './navigation';

const storeState = ItemList.create({
  items: [
    {
      name: 'Chronicles of Narnia Box Set - C.S. Lewis',
      price: 28.73,
    },
  ],
});

window.sampleStore = storeState;

const store = asReduxStore(storeState);
connectReduxDevtools(require('remotedev'), storeState);

export default () => (<Provider store={store}><Navigation/></Provider>);
