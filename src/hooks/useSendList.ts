import {useEffect, useState} from "react";
import {getSendList} from "../service";

const saveItem = (key: string, value: string) => {
    window.localStorage.setItem(key, value);
}

const getItem = (key: string, type = 'string') => {
    return new Promise(resolve => {
        const data = window.localStorage.getItem(key);
        resolve(data)
    })

}

class SendList {
    private data: any[];

    constructor() {
        this.data = [];
        this.recover();
    }

    getListByIds(ids: string[]) {
        return this.data?.filter(d => ids?.includes(d?.id))
    }

    addMore(data: any[]) {
        let changed = false;
        data?.forEach((d) => {
            if (!this.data.find(a => a?.id === d?.id)) {
                this.data.push({
                    ...d,
                    status: 0,
                    like: 3,
                });
                changed = true;
            }
        });
        changed && this.save();
    }

    updateStatusById(id: string, status: any) {
        const index = this.data?.findIndex((e) => e?.id === id);
        this.data[index] = {
            ...this.data[index],
            status,
        }
        this.save();
    }

    updateLikeById(id: string, like: any) {
        const index = this.data?.findIndex((e) => e?.id === id);
        this.data[index] = {
            ...this.data[index],
            like,
        }
        this.save();
    }

    save() {
        saveItem('send-list-data', JSON.stringify(this.data))
    }

    recover = async () => {
        const data = await getItem('send-list-data') as any[];
        try {
            if (typeof data === "string") {
                this.data = JSON.parse(data);
            } else {
                this.data = data ?? [];
            }
        } catch (e) {
            console.log(e)
        }
    }

}

const sendList = new SendList();
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