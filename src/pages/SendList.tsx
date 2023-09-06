import React, {useState} from "react";
import {Card, CardContent} from "@mui/material";

import {DataGrid, GridColDef} from '@mui/x-data-grid';
import ShowTimeUntilNow from "../components/ShowTime";
import Button from "@mui/material/Button";
import SendStatus from "../components/SendStatus";
import useSendList from "../hooks/useSendList";
import Like from "../components/Like";

const DEFAULT_COLUMNS_WIDTH = 150;

const SendList = () => {
    const {sends, updateStatusById, updateLikeById, getList} = useSendList();
    const [pagination, setPagination] = useState({
        page: 0,
        pageSize: 10
    })
    const columns: GridColDef<{
        id: string;
        title?: string;
        time: string;
        originUrl?: string;
        site: string;
    }>[] = [
        {
            field: 'title', headerName: '名称', width: DEFAULT_COLUMNS_WIDTH * 3,
            renderCell: ({value, row}) => <a href={row.originUrl ?? row?.site} target="_blank">{value}</a>
        },
        {
            field: 'time',
            headerName: '投递时间',
            width: DEFAULT_COLUMNS_WIDTH,
            renderCell: ({value}) => <ShowTimeUntilNow time={value}/>
        },
        {
            field: 'like',
            headerName: '心仪度',
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
            headerName: '状态',
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
                    刷新数据
                </Button>
                <a style={{
                    marginLeft: 30,
                }}
                   href="https://chrome.google.com/webstore/detail/it-mercenaries-and-hunter/eilakanollhbgdoppbffeikcbkhmeloc?hl=zh-CN&authuser=0"
                   target="_blank">(需要安装插件)</a>
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