import React, {useEffect, useState} from "react";
import {Card} from "antd";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {getSendList} from "./service";
import ShowTimeUntilNow from "./components/ShowTime";
import Button from "@mui/material/Button";

const DEFAULT_COLUMNS_WIDTH = 150;
const columns: GridColDef[] = [
    {field: 'title', headerName: '名称', width: DEFAULT_COLUMNS_WIDTH * 2},
    {
        field: 'time',
        headerName: '投递时间',
        width: DEFAULT_COLUMNS_WIDTH,
        renderCell: ({value}) => <ShowTimeUntilNow time={value}/>
    },
    {field: 'site', headerName: 'url', width: DEFAULT_COLUMNS_WIDTH * 2},

];
const SendList = () => {
    const [sends, setSends] = useState([]);
    const getList = async () => {
        const res = await getSendList();
        setSends(res)
    }
    useEffect(() => {
        getList();
    }, [])
    const [pagination, setPagination] = useState({
        page: 0,
        pageSize: 10
    })
    return (
        <Card title={
            <Button onClick={() => {
                getList();
            }}>
                刷新数据
            </Button>
        }>
            <DataGrid
                loading={status === 'loading'}
                rows={sends}
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