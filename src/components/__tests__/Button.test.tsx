import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';
import {fireEvent, render, screen} from "@testing-library/react";

const sleep = (time=1000)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('success')
    },time)
  })
}
test('renders Button', () => {
    const DividerDom = renderer.create(
        <Button>
            Test Button
        </Button>
    ).toJSON();
    expect(DividerDom).toMatchSnapshot();
});


test('renders Button with loading', async () => {
  const mockClick = async () => {
    await sleep();
    return ''
  }
  render(<Button onClick={mockClick}>
    Test Button
  </Button>);
  const selectBtn = screen.getByText('Test Button');
  fireEvent.click(selectBtn);
  await sleep(500);
  // has loading class
  expect(document.body).toMatchSnapshot();
  // loading end
  await sleep(1000);
  expect(document.body).toMatchSnapshot();
});