import {syncSends} from "../services/mh";
import {IS_DEV} from "../constants/environment";
import {getItem, saveItem} from "../utils";

class SendList {
    private localData: any[];
    private serviceData: any[];

    constructor() {
        this.localData = [];
        this.serviceData = [];
        this.recover();
    }

    private static DATA_KEY = 'send-list-data';

    updateLocalDataByIDAndField(id: string, field: any, saveNow: boolean) {
        const index = this.localData?.findIndex((e) => e?.id === id);
        const localData = [...this.localData];
        localData[index] = {
            ...this.localData[index],
            ...field,
        };
        this.localData = localData;
        saveNow && this.save();
    }

    getNewOne = (a: any, b: any, defaultOne: any) => {
        if (a?.updateTime && b?.updateTime) {
            return a?.updateTime > b?.updateTime ? a : b;
        } else if (!a?.updateTime && b?.updateTime) {
            return b
        } else if (a?.updateTime && !b?.updateTime) {
            return a
        } else if (!a?.updateTime && !b?.updateTime) {
            return defaultOne
        }
    }

    diffLastRestoreAndServerData() {
        const last = this.localData;
        const server = this.serviceData;
        last?.forEach(l => {
            const find = server?.some(s => {
                if (l.site === s.site) {
                    if (l.like !== s?.like || l.status !== s?.status) {
                        const saveData = this.getNewOne(l, s, l);
                        this.updateLocalDataByIDAndField(l?.id, {
                            serverId: s?.id,
                            like: saveData?.like,
                            status: saveData?.status,
                            updateTime: saveData?.updateTime,
                            needSync: true,
                        }, false)
                    } else {
                        this.updateLocalDataByIDAndField(l?.id, {
                            serverId: s?.id,
                            needSync: false,
                        }, false)
                    }
                    return true
                } else {
                    return false
                }
            });
            if (!find) {
                this.updateLocalDataByIDAndField(l?.id, {
                    needSync: true,
                }, false)
            }
        });
    }

    setServerData(d: any[]) {
        this.serviceData = d;
        this.diffLastRestoreAndServerData();
        this.save();
    }


    syncDataToServer = async () => {
        const needSyncData = this.localData?.filter(e => e?.needSync);
        if (needSyncData?.length > 0) {
            await syncSends(needSyncData?.map(e => ({
                ...e,
                id: e?.serverId,
            })));
            needSyncData?.forEach(e => {
                this.updateLocalDataByIDAndField(e?.id, {
                    needSync: false
                }, false)
            })
            this.save();
        }
    }

    getListByIds(ids: string[]) {
        if (IS_DEV) {
            return this.localData
        }
        return this.localData?.filter(d => ids?.includes(d?.id))
    }

    addMore(data: any[]) {
        let changed = false;
        data?.forEach((d) => {
            if (!this.localData.find(a => a?.id === d?.id)) {
                const newData = {
                    ...d,
                    status: 0,
                    like: 3,
                    needSync: true,
                };
                this.localData.push(newData);
                changed = true;
            }
        });
        changed && this.save();
    }

    updateStatusById(id: string, status: any) {
        this.updateLocalDataByIDAndField(id, {
            status,
            updateTime: new Date().getTime(),
            needSync: true,
        }, true)
    }

    updateLikeById(id: string, like: any) {
        this.updateLocalDataByIDAndField(id, {
            like,
            updateTime: new Date().getTime(),
            needSync: true,
        }, true)
    }

    save() {
        saveItem(SendList.DATA_KEY, JSON.stringify(this.localData))
    }


    recover = async () => {
        const data = await getItem(SendList.DATA_KEY) as any[];
        try {
            if (typeof data === "string") {
                this.localData = JSON.parse(data);
            } else {
                this.localData = data || [];
            }
        } catch (e) {
            console.log(e);
        }
    }

}

const sendList = new SendList();
export default sendList