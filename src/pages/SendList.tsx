import React, { useState } from 'react';
import { CardContent } from '@mui/material';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ShowTimeUntilNow from '../components/ShowTime';
import Button from '@mui/material/Button';
import SendStatus from '../components/SendStatus';
import useSendList from '../hooks/useSendList';
import Like from '../components/Like';
import { defineMessages, useIntl } from 'react-intl';
import { CHROME_EXTENSION_LINK_ADDRESS } from '../constants/domain';
import { IAppliedInLocal } from '../types';
import Link from "../components/Link";

const DEFAULT_COLUMNS_WIDTH = 200;
const DEFAULT_PAGE_SIZE = 20;
const messages = defineMessages({
  reloadData: {
    id: 'send.reload-data',
    defaultMessage: 'Reload Data'
  },
  tips: {
    id: 'send.tips'
  },
  name: {
    id: 'send.table.name'
  },
  time: {
    id: 'send.table.time'
  },
  favor: {
    id: 'send.table.favor'
  },
  status: {
    id: 'send.table.status'
  }
});
const SendList = () => {
  const { sends, updateStatusById, updateLikeById, getList } = useSendList();
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: DEFAULT_PAGE_SIZE
  });
  const intl = useIntl();
  const columns: GridColDef<IAppliedInLocal>[] = [
    {
      field: 'like',
      headerName: intl.formatMessage(messages.favor),
      width: DEFAULT_COLUMNS_WIDTH,
      renderCell: ({ value, row }) => <Like onChange={(e: any) => updateLikeById(row.id, e)} value={value}/>
    },
    {
      field: 'title',
      headerName: intl.formatMessage(messages.name),
      flex: 1,
      renderCell: ({ value, row }) => (
        <Link href={row.originUrl ?? row?.site} text={value}/>
      )
    },
    {
      field: 'time',
      headerName: intl.formatMessage(messages.time),
      width: DEFAULT_COLUMNS_WIDTH/2,
      renderCell: ({ value }) => <ShowTimeUntilNow time={value}/>
    },

    {
      field: 'status',
      headerName: intl.formatMessage(messages.status),
      width: DEFAULT_COLUMNS_WIDTH,
      renderCell: ({ value, row }) => (
        <SendStatus onChange={(e: any) => updateStatusById(row.id, e?.target?.value)} value={value}/>
      )
    }
  ];
  return (
    <>
      <CardContent>
        <Button
          variant="contained"
          onClick={() => {
            getList();
          }}
        >
          {intl.formatMessage(messages.reloadData)}
        </Button>
      </CardContent>
      <DataGrid
        rows={sends}
        style={{
          minHeight: 400
        }}
        columns={columns}
        paginationMode="client"
        onPaginationModelChange={(model, details) => {
          setPagination(model);
        }}
        paginationModel={pagination}
      />
    </>
  );
};

export default SendList;
