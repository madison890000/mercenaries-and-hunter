const saveItem = (key: string, value: string) => {
    window.localStorage.setItem(key, value);
}

const getItem = (key: string, type = 'string') => {
    return new Promise(resolve => {
        const data = window.localStorage.getItem(key);
        resolve(data)
    })

}

class GlobalStore {
    private keys: string[];
    private data: any;

    constructor() {
        this.keys = [];
        this.data = {};
        this.recover();
    }


    save(key: string, value: any) {
        if (!this.keys?.find(k => k === key)) {
            this.keys.push(key);
            saveItem('global-data-key', JSON.stringify(this.keys))
        }
        this.data[key] = value;
        saveItem(key, JSON.stringify(value))
    }

    get(key: string) {
        return this.data[key]
    }

    recover = async () => {
        const data = await getItem('global-data-key') as any[];
        try {
            if (typeof data === "string") {
                this.keys = JSON.parse(data);
            }
        } catch (e) {
            console.log(e);
        }
        for (const key of this.keys) {
            const values = await getItem(key) as any;
            this.data[key] = JSON.parse(values);
        }
    }

}

const globalStore = new GlobalStore();
export default globalStore