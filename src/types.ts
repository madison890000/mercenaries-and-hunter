export enum SendType {
    SEND = 0,
    START_INTERVIEWING = 1,
    MIDDLE_INTERVIEWING = 2,
    FINAL_INTERVIEWING = 3,
    OFFER = 4,
    REJECTED = 5,
}

export interface IAppliedInExtension {
    site: string;
    time: string;
    id: string;
    title: string;
    originUrl?: string
}

export interface IAppliedInLocal extends IAppliedInExtension {
    status: SendType;
    like: number;
    needSync: boolean;
    serverId?: number;
    updateTime?: string;
}

export interface IAppliedInServer extends IAppliedInLocal {
    status: SendType;
    like: number;
    needSync: boolean;
    serverId: number;
    updateTime: string;
}

export type NeedSyncAppliedItem = Omit<IAppliedInLocal, 'id'> & { id?: number }