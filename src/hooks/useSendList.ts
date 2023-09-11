import {useEffect, useState} from "react";
import {getSendList} from "../services/mh";
import sendList from "../lib/SendListData";


const useSendList = () => {
    const [sends, setSends] = useState<any>([]);
    const getList = async () => {
        const res = await getSendList();
        sendList.addMore(res);
        const finalData = sendList.getListByIds(res?.map(e => e?.id) ?? []);
        setSends(finalData)
    }
    useEffect(() => {
        getList();
    }, []);
    return {
        getList,
        sends,
        updateStatusById: (id: string, status: any) => {
            sendList.updateStatusById(id, status);
            getList();
        },
        updateLikeById: (id: string, status: any) => {
            sendList.updateLikeById(id, status);
            getList();
        },
    }
}

export default useSendList