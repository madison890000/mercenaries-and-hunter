import React, {PropsWithChildren} from 'react';
import styles from './Name.module.scss';
import {Importance} from "../../types";

const Name: React.FC<PropsWithChildren<{ level: Importance }>> = ({level, children}) => {
    switch (level) {
        case Importance.Essential:
            return <div className={styles.important}>{children}</div>;
        case Importance.Advanced:
            return <div className={styles.normal}>{children}</div>;
        default:
            return null;
    }
};

export default Name;
