import {useState} from "react";

const useReload = () => {
    const [_, setCount] = useState(0);
    const reload = () => {
        setCount(pre => pre + 1)
    }
    return reload
}

export default useReload