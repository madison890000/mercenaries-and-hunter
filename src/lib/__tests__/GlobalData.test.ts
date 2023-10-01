
import globalStore from "../GlobalData";

beforeEach(() => {
    // to fully reset the state between tests, clear the storage
    localStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();

    // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
    // @ts-ignore
    localStorage.setItem.mockClear();
    localStorage.setItem('global-data-key',JSON.stringify([
        'test-global-key-1'
    ]));
    localStorage.setItem('test-global-key-1',JSON.stringify('test-global-value-1'))
});

test('test GlobalData can recover data correctly', async () => {
    await globalStore.recover();
    expect(globalStore.get('test-global-key-1')).toBe('test-global-value-1');
});

test('test GlobalData can save data correctly', async () => {
    await globalStore.recover();
    globalStore.save('test-global-key-2','test-global-value-2')
    expect(globalStore.get('test-global-key-2')).toBe('test-global-value-2');
    expect(localStorage.__STORE__['test-global-key-2']).toBe(JSON.stringify('test-global-value-2'));
});
test('test GlobalData can syncGetWithNoCache correctly', async () => {
    await globalStore.recover();
    globalStore.save('test-global-key-2','test-global-value-2');
    localStorage.setItem('test-global-key-2',JSON.stringify('test-global-value-2-changed'))
    expect(globalStore.get('test-global-key-2')).toBe('test-global-value-2');
    expect(localStorage.__STORE__['test-global-key-2']).toBe(JSON.stringify('test-global-value-2-changed'));
    const newValue = await globalStore.syncGetWithNoCache('test-global-key-2')
    expect(newValue).toBe('test-global-value-2-changed');
    expect(globalStore.get('test-global-key-2')).toBe('test-global-value-2-changed');
});