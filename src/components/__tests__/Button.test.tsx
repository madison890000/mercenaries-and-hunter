import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

test('renders Button', () => {
    const DividerDom = renderer.create(
        <Button>
            Test Button
        </Button>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
