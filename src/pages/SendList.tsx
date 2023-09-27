import React, {useState} from "react";
import {Card, CardContent} from "@mui/material";

import {DataGrid, GridColDef} from '@mui/x-data-grid';
import ShowTimeUntilNow from "../components/ShowTime";
import Button from "@mui/material/Button";
import SendStatus from "../components/SendStatus";
import useSendList from "../hooks/useSendList";
import Like from "../components/Like";
import {defineMessages, useIntl} from "react-intl";
import {CHROME_EXTENSION_LINK_ADDRESS} from "../constants/domain";
import {IAppliedInLocal} from "../types";

const DEFAULT_COLUMNS_WIDTH = 150;
const DEFAULT_PAGE_SIZE = 20;
const messages = defineMessages({
    reloadData: {
        id: 'send.reload-data',
        defaultMessage: "Reload Data",
    },
    tips: {
        id: 'send.tips',
    },
    name: {
        id: 'send.table.name',
    },
    time: {
        id: 'send.table.time',
    },
    favor: {
        id: 'send.table.favor',
    },
    status: {
        id: 'send.table.status',
    },
});
const SendList = () => {
    const {sends, updateStatusById, updateLikeById, getList} = useSendList();
    const [pagination, setPagination] = useState({
        page: 0,
        pageSize: DEFAULT_PAGE_SIZE
    })
    const intl = useIntl();
    const columns: GridColDef<IAppliedInLocal>[] = [
        {
            field: 'title', headerName: intl.formatMessage(messages.name), width: DEFAULT_COLUMNS_WIDTH * 3,
            renderCell: ({value, row}) => <a href={row.originUrl ?? row?.site} target="_blank">{value}</a>
        },
        {
            field: 'time',
            headerName: intl.formatMessage(messages.time),
            width: DEFAULT_COLUMNS_WIDTH,
            renderCell: ({value}) => <ShowTimeUntilNow time={value}/>
        },
        {
            field: 'like',
            headerName: intl.formatMessage(messages.favor),
            width: DEFAULT_COLUMNS_WIDTH,
            renderCell: ({value, row}) => (
                <Like
                    onChange={(e: any) => updateLikeById(row.id, e)}
                    value={value}
                />
            )
        },
        {
            field: 'status',
            headerName: intl.formatMessage(messages.status),
            width: DEFAULT_COLUMNS_WIDTH,
            renderCell: ({value, row}) => (
                <SendStatus
                    onChange={(e: any) => updateStatusById(row.id, e?.target?.value)}
                    value={value}
                />
            )
        }
    ];
    return (
        <Card>
            <CardContent>
                <Button variant="contained" onClick={() => {
                    getList();
                }}>
                    {intl.formatMessage(messages.reloadData)}
                </Button>
                <a style={{
                    marginLeft: 30,
                }}
                   href={CHROME_EXTENSION_LINK_ADDRESS}
                   target="_blank">({intl.formatMessage(messages.tips)})</a>
            </CardContent>
            <DataGrid
                rows={sends}
                style={{
                    minHeight: 400
                }}
                columns={columns}
                paginationMode="client"
                onPaginationModelChange={(model, details) => {
                    setPagination(model)
                }}
                paginationModel={pagination}
            />
        </Card>
    )
}

export default SendList