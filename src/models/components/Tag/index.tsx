import React, {PropsWithChildren} from 'react';
import styles from './index.module.scss';

type TagType = 'filled' | 'normal' | 'less';

interface TagProps {
    type?: TagType;
}

const Tag: React.FC<PropsWithChildren<TagProps>> = ({type = 'normal', children}) => {
    switch (type) {
        case 'filled':
            return <div className={`${styles.filled} ${styles.tag}`}>{children}</div>;
        case 'normal':
            return <div className={`${styles.normal} ${styles.tag}`}>{children}</div>;
        case 'less':
            return <div className={`${styles.less} ${styles.tag}`}>{children}</div>;
        default:
            return <div>{children}</div>;
    }
};

export default Tag;
