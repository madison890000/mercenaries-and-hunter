import Base from "./Base";

const ProxyWithParent = <T extends Base>(origin: T) => {
    const newObject = new Proxy(origin, {
        get(t: any, p: string | symbol): boolean {
            const originValue = Reflect.get(t, p);
            if (p !== 'parent' && originValue?.needProxyParent) {
                if (originValue.parent !== t) {
                    console.log('hack==>', p, originValue, t)
                    originValue.parent = t;
                }
                return originValue;
            }
            return originValue;
        }
    });
    return newObject
}

export default ProxyWithParent