import sendListData from "../lib/SendListData";
import {syncAccount} from "../services/mh";

class Jobs {
    private jobs: any[];
    private flag: boolean;

    constructor() {
        this.flag = false;
        this.init();
    }

    init() {
        this.jobs = [
            {
                task: async () => {
                    await syncAccount();
                },
                time: 1,
            },
            {
                task: sendListData.syncDataToServer,
                time: 2 * 60 * 24 * 5,
            },
        ];
        setInterval(async () => {
            if (this.flag) {
                for (let i = 0; i < this.jobs.length; i++) {
                    const e = this.jobs[i];
                    if (e?.time > 0) {
                        await e?.task?.();
                        this.jobs[i].time -= 1;
                    }
                }
            }
        }, 30 * 1000)
    }

    turnOn() {
        this.flag = true;
    }

    turnOff() {
        this.flag = false;
    }
}

const jobs = new Jobs();
export default jobs