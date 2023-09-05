import React, {useEffect, useState} from "react";
import {Card, CardContent} from "@mui/material";

import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {getSendList} from "../service";
import ShowTimeUntilNow from "../components/ShowTime";
import Button from "@mui/material/Button";

const DEFAULT_COLUMNS_WIDTH = 150;
const columns: GridColDef<{
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
];
const SendList = () => {
    const [sends, setSends] = useState<any>([]);
    const getList = async () => {
        const res = await getSendList();
        console.log(res)
        setSends(res ?? [])
    }
    useEffect(() => {
        getList();
    }, [])
    const [pagination, setPagination] = useState({
        page: 0,
        pageSize: 10
    })
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