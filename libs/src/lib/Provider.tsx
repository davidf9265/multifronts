import React from 'react';

import { ReactNode } from 'react';

interface ProviderProps {
    children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
    console.log('shit this works');
    return <div>{children}</div>;
};

export default Provider;
