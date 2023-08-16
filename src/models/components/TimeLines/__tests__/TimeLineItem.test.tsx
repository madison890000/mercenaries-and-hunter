import React from 'react';
import TimeLineItem, { getBaseRectFull } from '../TimeLineItem';
import renderer from 'react-test-renderer';
import { ScreenDevice } from '../../../utils/device';

test('renders TimeLineItem with no end', () => {
    const TimeLineItemDom = renderer.create(<TimeLineItem start={new Date('2022-05-01')} periodColor={'#FF6666'} />).toJSON();
    expect(TimeLineItemDom).toMatchSnapshot();
});

test('renders TimeLineItem with  end', () => {
    const TimeLineItemDom = renderer.create(<TimeLineItem start={new Date('2022-05-01')} end={new Date('2022-10-01')} periodColor={'#FF6666'} />).toJSON();
    expect(TimeLineItemDom).toMatchSnapshot();
});

describe(' TimeLineItem -> getBaseRectFull ', () => {
    expect(getBaseRectFull(ScreenDevice.PC)).toEqual(8);
    expect(getBaseRectFull(ScreenDevice.Mobile)).toEqual(4);
    expect(getBaseRectFull(ScreenDevice.A4)).toEqual(6);
});
