import React from 'react';
import ShowTime from '../ShowTime';
import renderer from 'react-test-renderer';
import {ONE_DAY, ONE_HOUR, ONE_MIN, ONE_MONTH, SEVEN_DAY} from "../../constants/date";

const FAKE_NOW = 1696039796299
beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(1696039796299)
});

afterEach(() => {
    jest.useRealTimers()
});

test('ShowTime just now', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - 20).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 5 mins', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_MIN * 4).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 30 mins', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_MIN * 29).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 1 hours', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_MIN * 59).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 2 hours', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_HOUR * 2 + ONE_MIN).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 6 hours', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_HOUR * 6 + ONE_MIN).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});


test('ShowTime within 12 hours', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_HOUR * 12 + ONE_MIN).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 1 day', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_DAY + ONE_MIN).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 7 day', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - SEVEN_DAY + ONE_MIN).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});

test('ShowTime within 30 day', () => {
    const DividerDom = renderer.create(
        <ShowTime time={new Date(FAKE_NOW - ONE_MONTH + ONE_MIN).toISOString()}/>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});




