import React from "react";
import Base from "./Base";
import EditText from "./EditText";
import styles from "./BaseInfo.module.scss";
import ArrayData from "./ArrayData";
import Link from "./Link";
import {RelatedLink} from "./types";
import {nonenumerable} from "core-decorators";
import {formatAndTranslateResume} from "../service";

class BaseInfo extends Base {

    private links: ArrayData<Link>;
    private firstName: EditText;
    private lastName: EditText;
    private email: EditText;
    private cellphone: EditText;
    private location: EditText;
    private searchingFor: EditText;
    private visa: EditText;

    constructor({
                    links,
                    firstName,
                    lastName,
                    email,
                    visa,
                    cellphone,
                    location,
                    searchingFor,
                }: any) {
        super();
        this.links = new ArrayData<Link>(links?.map((e: RelatedLink) => new Link(e)) ?? [], () => new Link({
            name: '链接',
            value: ''
        }), false).setParent(this);
        this.firstName = new EditText(firstName, 'input', '名').setParent(this);
        this.lastName = new EditText(lastName, 'input', '姓').setParent(this);
        this.email = new EditText(email).setParent(this);
        this.cellphone = new EditText(cellphone).setParent(this);
        this.location = new EditText(location).setParent(this);
        this.visa = new EditText(visa).setParent(this);
        this.searchingFor = new EditText(searchingFor).setParent(this);
        this.canTranslate = true;
        this.showEditButton = true;
    }

    @nonenumerable
    onTranslate = async () => {
        const data = await formatAndTranslateResume(this.toTranslate());
        this.location.text = data?.location;
        this.searchingFor.text = data?.searchingFor;
        this.emit('value-change')
    }
    @nonenumerable
    toTranslate = () => {
        return {
            location: this.location,
            searchingFor: this.searchingFor
        }
    }
    View = () => {
        const FirstName = this.firstName.Show;
        const LastName = this.lastName.Show;
        const SearchingFor = this.searchingFor.Show;
        const Email = this.email.Show;
        const Cellphone = this.cellphone.Show;
        const Location = this.location.Show;
        const Visa = this.visa.Show;
        const ViewWrapper = this.ViewWrapper;
        return (
            <ViewWrapper editText="编辑个人信息" onTranslate={this.onTranslate}>
                <header className={styles.header}>
                    <h1>
                        <FirstName/>
                        <span style={{margin: '0 10px'}}></span>
                        <LastName/>
                    </h1>
                    <div className={styles.basicInfo}>
                        <div className={styles.basicInfoItem}>
                            <div>Looking:</div>
                            <div>
                                <SearchingFor/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Email:</div>
                            <div>
                                <Email/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Mobile:</div>
                            <div>
                                <Cellphone/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Location:</div>
                            <div>
                                <Location/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Visa:</div>
                            <div>
                                <Visa/>
                            </div>
                        </div>
                        <div className={styles.links}>
                            {this.links.data?.map(l => <l.View/>)}
                        </div>
                    </div>
                </header>
            </ViewWrapper>
        )
    }
    Edit = () => {
        const FirstName = this.firstName.Show;
        const LastName = this.lastName.Show;
        const SearchingFor = this.searchingFor.Show;
        const Email = this.email.Show;
        const Cellphone = this.cellphone.Show;
        const Location = this.location.Show;
        const Links = this.links.Show;
        const ViewWrapper = this.ViewWrapper;
        return (
            <ViewWrapper editText="编辑个人信息">
                <header className={styles.header}>
                    <h1>
                        <FirstName/>
                        <span style={{margin: '0 10px'}}></span>
                        <LastName/>
                    </h1>
                    <div className={styles.basicInfo}>
                        <div className={styles.basicInfoItem}>
                            <div>Looking:</div>
                            <div>
                                <SearchingFor/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Email:</div>
                            <div>
                                <Email/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Mobile:</div>
                            <div>
                                <Cellphone/>
                            </div>
                        </div>
                        <div className={styles.basicInfoItem}>
                            <div>Location:</div>
                            <div>
                                <Location/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <Links/>
                    </div>
                </header>
            </ViewWrapper>
        )
    }

    toResume() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
        }
    }
}

export default BaseInfo