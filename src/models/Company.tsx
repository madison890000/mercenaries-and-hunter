import Base from './Base';
import EditText from './EditText';
import React from "react";
import styled from "styled-components";

const CompanyUI = styled.div`
  font-size: 20px;
  font-weight: normal;
  color: var(--period-sub-title-color);
  display: flex;
  align-items: center;
`

class Company extends Base {
    public name: EditText;

    constructor(name: string = '') {
        super();
        this.name = new EditText(name, 'input', '公司').setParent(this);
    }

    View = () => {
        const Name = this.name.Show;
        return (
            <CompanyUI>
                <div>
                    <Name/>
                </div>
            </CompanyUI>
        )
    }

    toJSON() {
        return this.name.text
    }
}

export default Company
