import React from 'react';
import Like from '../Like';
import renderer from 'react-test-renderer';

test('Like -> 0 star', () => {
    const DividerDom = renderer.create(
        <Like value={0}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('Like -> 1 star', () => {
    const DividerDom = renderer.create(
        <Like value={1}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
test('Like -> 2 star', () => {
    const DividerDom = renderer.create(
        <Like value={2}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
test('Like -> 3 star', () => {
    const DividerDom = renderer.create(
        <Like value={3}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
test('Like -> 4 star', () => {
    const DividerDom = renderer.create(
        <Like value={4}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
test('Like -> 5 star', () => {
    const DividerDom = renderer.create(
        <Like value={5}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
