import sendList from "../SendListData";

jest.mock('../../services/mh', () => {
    return {
        syncSends: jest.fn()
    }
})
const mockSendItem = {
    "site": "https://www.linkedin.com/jobs/view/3629510439/",
    "time": "2023-09-07T05:04:14.404Z",
    "id": "2023-09-07T05:04:14.405Z0.927",
    "title": "Engineering Manager (FE) - Share & Publish team (NZ remote) | Canva | LinkedIn",
    "originUrl": "https://www.linkedin.com/jobs/view/3629510439/?refId=30dadc00-1cf7-4256-9dcb-faa7eddbb566&trackingId=JSMd6nvWS0yTy4vfB2H0hw%3D%3D&trk=flagship3_job_home_savedjobs",
    "status": 5,
    "like": 4,
    "needSync": true,
    "serverId": 11,
    "updateTime": 1695853606312
}
beforeEach(() => {
    // to fully reset the state between tests, clear the storage
    localStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();

    // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
    // @ts-ignore
    localStorage.setItem.mockClear();
    localStorage.setItem('send-list-data', JSON.stringify([mockSendItem]));
});

test('test sendList can recover data correctly', async () => {
    await sendList.recover();
    expect(sendList.getListByIds([
        mockSendItem.id
    ])?.length).toBe(1);
});

test('test sendList can addMore data', async () => {
    await sendList.recover();
    expect(sendList.getListByIds([
        mockSendItem.id,
        "2023-09-08T05:04:14.405Z0.927",
    ])?.length).toBe(1);
    sendList.addMore([
        {
            "site": "https://www.linkedin.com/jobs/view/3629510470/",
            "time": "2023-09-07T05:04:14.404Z",
            "id": "2023-09-08T05:04:14.405Z0.927",
            "title": "Engineering Manager (FE) - Share & Publish team (NZ remote) | Canva | LinkedIn",
            "originUrl": "https://www.linkedin.com/jobs/view/3629510470",
        }
    ])
    expect(sendList.getListByIds([
        mockSendItem.id,
        "2023-09-08T05:04:14.405Z0.927",
    ])?.length).toBe(2);
});

test('test sendList can diff server and local', async () => {
    await sendList.recover();
    expect(sendList.getListByIds([
        mockSendItem.id
    ])?.length).toBe(1);
    sendList.setServerData([{
        ...mockSendItem,
        id: 11,
        status: 2
    }])
    expect(sendList.getListByIds([
        mockSendItem.id
    ])).toStrictEqual([
        {
            ...mockSendItem,
            status: 2,
            needSync: true
        }
    ]);
});
