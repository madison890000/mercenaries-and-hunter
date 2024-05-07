import React from 'react';
import useSendList from '../hooks/useSendList';
import ExtensionWrapper from "../modules/ExtensionWrapper";
import Board from "./Board";


const SendList = () => {
  const { sends } = useSendList();
  return (
    <ExtensionWrapper>
      <Board data={sends} />
    </ExtensionWrapper>
  )
}
export default SendList;
