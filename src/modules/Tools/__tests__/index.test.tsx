import React, {PropsWithChildren} from 'react';
import Tools from '../index';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

const RouterWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return <Router>{children}</Router>;
};
test('renders Tools', () => {
    const {asFragment} = render(
        <RouterWrapper>
            <Tools/>
        </RouterWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
});
