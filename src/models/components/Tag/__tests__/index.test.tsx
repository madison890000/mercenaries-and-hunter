import React from 'react';
import Tag from '../index';
import renderer from 'react-test-renderer';

test('renders Tag', () => {
    const TagDom = renderer.create(<Tag>React</Tag>).toJSON();
    expect(TagDom).toMatchSnapshot();
});
test('renders Tag filled', () => {
    const TagDom = renderer.create(<Tag type="filled">React</Tag>).toJSON();
    expect(TagDom).toMatchSnapshot();
});
test('renders Tag less', () => {
    const TagDom = renderer.create(<Tag type="less">React</Tag>).toJSON();
    expect(TagDom).toMatchSnapshot();
});

test('renders Tag default', () => {
    const TagDom = renderer.create(<Tag>React</Tag>).toJSON();
    expect(TagDom).toMatchSnapshot();
});
