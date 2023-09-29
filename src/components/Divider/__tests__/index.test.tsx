import React from 'react';
import Divider from '../index';
import renderer from 'react-test-renderer';

test('renders Divider', () => {
    const DividerDom = renderer.create(<Divider title="test Divider"/>).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
