import React from 'react';
import styles from './index.module.scss';
import capitalize from '../../../utils/capitalize';

interface DividerProps {
    title?: string;
    variant?: 'v' | 'dash';
}

const Divider = ({variant, title}: DividerProps) => {
    if (variant === 'v') {
        return <div className={styles.dividerH}/>;
    }
    if (variant === 'dash') {
        return <div className={styles.sectionDash}/>;
    }
    return (
        <div className={styles.divider}>
            <div>
                <div className={styles.title}>{capitalize(title)}</div>
            </div>
            <div className={styles.section}/>
        </div>
    );
};

export default Divider;
