import Base from "./Base";

import {RelatedLink} from "./types";
import EditText from "./EditText";
import {capitalize, pipe} from "../utils";

class Link extends Base {
    private name: EditText;
    private value: EditText;


    constructor({name, value}: RelatedLink) {
        super();
        this.name = new EditText(pipe<string>(capitalize)(name ?? ''), 'input', '链接名称', '请输入链接名称').setParent(this);
        this.value = new EditText(value ?? '', 'input', '链接地址', '请输入链接地址').setParent(this);
    }

    View = () => {
        return <div style={{marginRight: 6}}>
            <a href={this.value.text}>{this.name.text}</a>
        </div>
    }

    Edit = () => {
        return <>
            <this.name.Show/>
            <this.value.Show/>
        </>
    }

}

export default Link;