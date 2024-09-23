import React from 'react';

import { ReactNode } from 'react';
import { getStore } from './helpers/getStore';
import { setStore } from './helpers/setStore';
import { uniqueKey } from './helpers/references';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const store = getStore();

  console.log('[INFO] Settings storage listener');
  window.onstorage = (event) => {
    console.log('storage', event);
  };

  console.log('store >>> ', store);
  if (!store) {
    setStore({});
  }
  return <div>{children}</div>;
};

export default Provider;
