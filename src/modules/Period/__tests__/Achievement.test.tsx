import React from 'react';
import Achievement from '../../../components/Achievement/Achievement';
import renderer from 'react-test-renderer';
import StringWithID from '../../../models/StringWithID';

test('renders Achievement', () => {
    const title = 'test Achievement';
    const categories = [new StringWithID('test category 1'), new StringWithID('Engineering')];
    const AchievementDom = renderer.create(<Achievement title={title} categories={categories} />).toJSON();
    expect(AchievementDom).toMatchSnapshot();
});
