import { getItem, saveItem } from '../utils';

class GlobalStore {
  private keys: string[];
  private data: any;

  constructor() {
    this.keys = [];
    this.data = {};
    this.recover();
  }

  private static DATA_KEYS = 'global-data-key';

  save(key: string, value: any) {
    if (!this.keys?.find(k => k === key)) {
      this.keys.push(key);
      saveItem(GlobalStore.DATA_KEYS, JSON.stringify(this.keys));
    }
    this.data[key] = value;
    saveItem(key, JSON.stringify(value));
  }

  get(key: string) {
    return this.data[key];
  }

  async syncGetWithNoCache(key: string) {
    const values = (await getItem(key)) as any;
    this.data[key] = JSON.parse(values);
    return this.data[key];
  }

  recover = async () => {
    const data = (await getItem(GlobalStore.DATA_KEYS)) as any[];
    try {
      if (typeof data === 'string') {
        this.keys = JSON.parse(data);
      }
    } catch (e) {
      console.log(e);
    }
    for (const key of this.keys) {
      const values = (await getItem(key)) as any;
      this.data[key] = JSON.parse(values);
    }
  };
}

const globalStore = new GlobalStore();
export default globalStore;
