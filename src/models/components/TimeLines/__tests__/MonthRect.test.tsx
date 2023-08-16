import React from 'react';
import MonthRect from '../MonthRect';
import renderer from 'react-test-renderer';

test('renders MonthRect index 1', () => {
    const MonthRectDom = renderer.create(<MonthRect gap={2} color="red" index={1} width={20} />).toJSON();
    expect(MonthRectDom).toMatchSnapshot();
});

test('renders MonthRect index 2', () => {
    const MonthRectDom = renderer.create(<MonthRect gap={2} color="red" index={2} width={20} />).toJSON();
    expect(MonthRectDom).toMatchSnapshot();
});

test('renders MonthRect gap 4', () => {
    const MonthRectDom = renderer.create(<MonthRect gap={4} color="red" index={2} width={20} />).toJSON();
    expect(MonthRectDom).toMatchSnapshot();
});
test('renders MonthRect width 30', () => {
    const MonthRectDom = renderer.create(<MonthRect gap={4} color="red" index={2} width={30} />).toJSON();
    expect(MonthRectDom).toMatchSnapshot();
});

test('renders MonthRect color green', () => {
    const MonthRectDom = renderer.create(<MonthRect gap={4} color="green" index={2} width={30} />).toJSON();
    expect(MonthRectDom).toMatchSnapshot();
});
