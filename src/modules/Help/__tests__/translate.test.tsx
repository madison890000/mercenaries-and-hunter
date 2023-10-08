import React, {PropsWithChildren} from 'react';
import renderer from 'react-test-renderer';
import Translate from "../translate";
import {BrowserRouter as Router} from "react-router-dom";

const RouterWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return <Router>{children}</Router>;
};

test('renders Translate', () => {
    const WithPaddingLayoutDom = renderer.create(
        <RouterWrapper>
            <Translate/>
        </RouterWrapper>
    ).toJSON();
    expect(WithPaddingLayoutDom).toMatchSnapshot();
});
