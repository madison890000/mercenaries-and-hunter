import React, {PropsWithChildren} from 'react';
import Menus from '../index';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

const RouterWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return <Router>{children}</Router>;
};
test('renders Menus', () => {
    const {asFragment} = render(
        <RouterWrapper>
            <Menus/>
        </RouterWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
});
