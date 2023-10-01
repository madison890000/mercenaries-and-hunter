import React from 'react';
import SendStatus from '../SendStatus';
import renderer from 'react-test-renderer';
import {SendType} from "../../types";

test('SendStatus -> Send', () => {
    const DividerDom = renderer.create(
        <SendStatus value={SendType.SEND} />
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('SendStatus -> OFFER', () => {
    const DividerDom = renderer.create(
        <SendStatus value={SendType.OFFER} />
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('SendStatus -> FINAL_INTERVIEWING', () => {
    const DividerDom = renderer.create(
        <SendStatus value={SendType.FINAL_INTERVIEWING} />
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('SendStatus -> REJECTED', () => {
    const DividerDom = renderer.create(
        <SendStatus value={SendType.REJECTED} />
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('SendStatus -> MIDDLE_INTERVIEWING', () => {
    const DividerDom = renderer.create(
        <SendStatus value={SendType.MIDDLE_INTERVIEWING} />
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('SendStatus -> START_INTERVIEWING', () => {
    const DividerDom = renderer.create(
        <SendStatus value={SendType.START_INTERVIEWING} />
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});
