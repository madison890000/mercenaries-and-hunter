import React from 'react';
import Times from '../index';
import renderer from 'react-test-renderer';

test('renders Times', () => {
    const start = new Date('2012-01-01');
    const end = new Date('2012-08-01');
    const TimesDom = renderer.create(<Times start={start} end={end} />).toJSON();
    expect(TimesDom).toMatchSnapshot();
});

test('renders Times with no end', () => {
    const start = new Date('2012-01-01');
    const TimesDom = renderer.create(<Times start={start} />).toJSON();
    expect(TimesDom).toMatchSnapshot();
});
