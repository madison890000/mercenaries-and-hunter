import React from 'react';
import Divider from '../index';
import renderer from 'react-test-renderer';

test('renders Divider', () => {
    const DividerDom = renderer.create(<Divider title="test Divider"/>).toJSON();
    expect(DividerDom).toMatchSnapshot();
});


test('renders Divider -> variant dash', () => {
    const DividerDom = renderer.create(<Divider variant="dash" title="test Divider"/>).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('renders Divider -> variant v', () => {
    const DividerDom = renderer.create(<Divider variant="v" title="test Divider"/>).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
