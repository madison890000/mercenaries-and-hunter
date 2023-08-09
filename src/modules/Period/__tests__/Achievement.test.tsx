import React from 'react';
import Achievement from '../../../components/Achievement/Achievement';
import renderer from 'react-test-renderer';

test('renders Achievement', () => {
    const title = 'test Achievement';
    const categories = ['test category 1', 'Engineering'];
    const AchievementDom = renderer.create(<Achievement title={title} categories={categories} />).toJSON();
    expect(AchievementDom).toMatchSnapshot();
});
