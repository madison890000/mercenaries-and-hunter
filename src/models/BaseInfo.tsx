import React from "react";
import Base from "./Base";
import EditText from "./EditText";
import styles from "./BaseInfo.module.scss";
import {RelatedLink} from "./types";

class BaseInfo extends Base {

    private links: RelatedLink[];
    private firstName: EditText;
    private lastName: EditText;
    private email: EditText;
    private cellphone: EditText;
    private location: EditText;
    private searchingFor: EditText;

    constructor({
                    links,
                    firstName,
                    lastName,
                    email,
                    cellphone,
                    location,
                    searchingFor,
                }: any) {
        super();
        this.links = links;
        this.firstName = new EditText(firstName, 'input', '名').setParent(this);
        this.lastName = new EditText(lastName, 'input', '姓').setParent(this);
        this.email = new EditText(email).setParent(this);
        this.cellphone = new EditText(cellphone).setParent(this);
        this.location = new EditText(location).setParent(this);
        this.searchingFor = new EditText(searchingFor).setParent(this);
    }

    View = () => {
        return (
            <this.ViewWrapper>
                <header className={styles.header}>
                    <h1>
                        <this.firstName.Show/>
                        <this.lastName.Show/>
                    </h1>
                    <div className={styles.basicInfo}>
                        <div className={styles.basicInfoItem}>
                            <div>Looking:</div>
                            <div>
                                <this.searchingFor.Show/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Email:</div>
                            <div>
                                <this.email.Show/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Mobile:</div>
                            <div>
                                <this.cellphone.Show/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Location:</div>
                            <div>
                                <this.location.Show/>
                            </div>
                        </div>
                        <div className={styles.links}>
                            {this.links?.map(link => (
                                <div key={link?.value}>
                                    <a href={link?.value} target="_blank">{link?.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </header>
            </this.ViewWrapper>
        )
    }
}

export default BaseInfo