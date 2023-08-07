import React from 'react';
import styles from './index.module.scss';
import capitalize from '../../utils/capitalize';
import DataModel from '../../models/types';

interface BaseInfoProps {
    firstName: string;
    lastName: string;
    email: string;
    location?: string;
    searchingFor?: string;
    cellphone: string;
    links?: DataModel.RelatedLink[];
}

const BaseInfo = ({ links, firstName, lastName, email, cellphone, location, searchingFor }: BaseInfoProps) => {
    return (
        <header className={styles.header}>
            <h1>
                {capitalize(firstName)} {capitalize(lastName)}
            </h1>
            <div className={styles.basicInfo}>
                <div className={styles.basicInfoItem}>
                    <div>Looking For:</div>
                    <div>{searchingFor}</div>
                </div>
                <div className={styles.basicInfoItem}>
                    <div>Email:</div>
                    <div>{email}</div>
                </div>
                <div className={styles.basicInfoItem}>
                    <div>Mobile:</div>
                    <div>{cellphone}</div>
                </div>
                <div className={styles.basicInfoItem}>
                    <div>Location:</div>
                    <div>{location}</div>
                </div>
                <>
                    {links?.map(link => (
                        <div key={link?.value} className={styles.basicInfoItem}>
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

export default BaseInfo;
