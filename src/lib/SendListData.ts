import { IS_DEV } from '../constants/environment';
import { getItem, saveItem } from '../utils';
import { IAppliedInExtension, IAppliedInLocal, SendType } from '../types';

class AppliedList {
  private localData: IAppliedInLocal[];

  constructor() {
    this.localData = [];
    this.recover();
  }

  private static DATA_KEY = 'send-list-data';

  updateLocalDataByIDAndField(id: string, field: any, saveNow: boolean) {
    const index = this.localData?.findIndex(e => e?.id === id);
    const localData = [...this.localData];
    localData[index] = {
      ...this.localData[index],
      ...field
    };
    this.localData = localData;
    saveNow && this.save();
  }

  getListByIds(ids: string[]) {
    if ( IS_DEV ) {
      return this.localData;
    }
    return this.localData?.filter(d => ids?.includes(d?.id));
  }

  addMore(data: IAppliedInExtension[]) {
    let changed = false;
    data?.forEach(d => {
      if ( !this.localData.find(a => a?.id === d?.id) ) {
        const newData = {
          ...d,
          status: SendType.SEND,
          like: 3,
          needSync: true
        };
        this.localData.push(newData);
        changed = true;
      }
    });
    changed && this.save();
  }

  updateStatusById(id: string, status: any) {
    this.updateLocalDataByIDAndField(
      id,
      {
        status,
        updateTime: new Date().getTime(),
        needSync: true
      },
      true
    );
  }

  updateLikeById(id: string, like: any) {
    this.updateLocalDataByIDAndField(
      id,
      {
        like,
        updateTime: new Date().getTime(),
        needSync: true
      },
      true
    );
  }

  save() {
    saveItem(AppliedList.DATA_KEY, JSON.stringify(this.localData));
  }

  recover = async () => {
    const data = (await getItem(AppliedList.DATA_KEY)) as any[];
    try {
      if ( typeof data === 'string' ) {
        this.localData = JSON.parse(data);
      } else {
        this.localData = data || [];
      }
    } catch (e) {
      console.log(e);
    }
  };
}

const sendList = new AppliedList();
export default sendList;
