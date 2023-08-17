const addSuffix = (chars: string, suffix: string) => {
    if(!chars){
        return ''
    }
    if (chars.endsWith(suffix)) {
        return chars;
    }
    return `${chars}${suffix}`;
};

export const addPeriodSuffix = (chars: string) => addSuffix(chars, '.');
