import {IS_DEV} from "./environment";

const FLAGS = {
    editResume: IS_DEV ? true : false,
    autoCL: IS_DEV ? true : false,
}
export default FLAGS