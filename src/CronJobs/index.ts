import sendListData from "../lib/SendListData";
import {syncAccount} from "../services/mh";
import {HALF_MINUTES, MAX_CRON_JOBS_TIME} from "../constants/date";

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
                time: MAX_CRON_JOBS_TIME,
            },
        ];
        const checking = async () => {
            if (this.flag) {
                for (let i = 0; i < this.jobs.length; i++) {
                    const e = this.jobs[i];
                    if (e?.time > 0) {
                        await e?.task?.();
                        this.jobs[i].time -= 1;
                    }
                }
            }
        }
        setInterval(()=>{
            checking();
        }, HALF_MINUTES)
    }

    turnOn() {
        this.flag = true;
    }

    turnOff() {
        this.flag = false;
    }
}

const cronJobs = new Jobs();
export default cronJobs