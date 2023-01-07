import React from 'react';
import styles from './index.module.scss';
import capitalize from '../../utils/capitalize';
import DataModel from '../../models/types';

interface HeaderProps {
    firstName: string;
    lastName: string;
    email: string;
    cellphone: string;
    links?: DataModel.RelatedLink[];
}

const Header = ({ links, firstName, lastName, email, cellphone }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <h1>
                {capitalize(firstName)} {capitalize(lastName)}
            </h1>
            <div className={styles.basicInfo}>
                <div className={styles.basicInfoItem}>
                    <div>Email:</div>
                    <div>{email}</div>
                </div>
                <div className={styles.basicInfoItem}>
                    <div>Cellphone:</div>
                    <div>{cellphone}</div>
                </div>
                <>
                    {links?.map(link => (
                        <div className={styles.basicInfoItem}>
                            <div>{link?.name}:</div>
                            <div>
                                <a href={link?.value} target="_blank">
                                    {link?.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </>
            </div>
        </header>
    );
};

export default Header;
