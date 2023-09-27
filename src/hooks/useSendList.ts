import {getSendList} from "../services/mh";
import sendList from "../lib/SendListData";
import {useQuery} from "@tanstack/react-query";


const useSendList = () => {
    const {data, refetch} = useQuery({
        queryFn: async () => {
            const res = await getSendList();
            sendList.addMore(res);
            const finalData = sendList.getListByIds(res?.map(e => e?.id) ?? []);
            return finalData
        },
        initialData: []
    });
    return {
        getList: refetch,
        sends: data,
        updateStatusById: (id: string, status: any) => {
            sendList.updateStatusById(id, status);
            refetch();
        },
        updateLikeById: (id: string, status: any) => {
            sendList.updateLikeById(id, status);
            refetch();
        },
    }
}

export default useSendList