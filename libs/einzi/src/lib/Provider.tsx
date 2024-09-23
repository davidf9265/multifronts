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

  window.addEventListener('storage', function (event) {
    console.log('event >>> ', event);
    if (event.key === uniqueKey) {
      console.log('localStorage changed:', event.newValue);
    }
  });

  console.log('store >>> ', store);
  if (!store) {
    setStore({});
  }
  return <div>{children}</div>;
};

export default Provider;
