import React from 'react';
import renderer from 'react-test-renderer';
import WithPaddingLayout from "../WithPaddingLayout";

test('renders WithPaddingLayout', () => {
    const WithPaddingLayoutDom = renderer.create(
        <WithPaddingLayout>
            Test Content
        </WithPaddingLayout>
    ).toJSON();
    expect(WithPaddingLayoutDom).toMatchSnapshot();
});
