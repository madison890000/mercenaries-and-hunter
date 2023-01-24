import DataModel from './types';
import Base from './Base';

interface ICompany {
    name: string;
    location?: string;
    industry: string;
    type: DataModel.CompanyType;
}

export default class Company extends Base {
    public name: string;
    public type: DataModel.CompanyType;
    public location?: string;
    public industry: string;

    constructor({ name, industry, location, type }: ICompany) {
        super();
        this.name = name;
        this.location = location;
        this.type = type;
        this.industry = industry;
    }
}
