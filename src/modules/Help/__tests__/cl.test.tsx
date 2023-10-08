import React, {PropsWithChildren} from 'react';
import renderer from 'react-test-renderer';
import CL from "../cl";
import {BrowserRouter as Router} from "react-router-dom";

const RouterWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return <Router>{children}</Router>;
};
test('renders CL', () => {
    const WithPaddingLayoutDom = renderer.create(
        <RouterWrapper>
            <CL/>
        </RouterWrapper>
    ).toJSON();
    expect(WithPaddingLayoutDom).toMatchSnapshot();
});
