import {LoadingButton} from "@mui/lab";
import React, {useEffect, useState} from "react";


const Button = ({onClick, loading: outerLoading, children}: any) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(outerLoading)
    }, [outerLoading])
    return (
        <LoadingButton loading={loading} onClick={async () => {
            setLoading(true);
            try {
                await onClick?.();
            } finally {
                setLoading(false);
            }
        }}>
            {children}
        </LoadingButton>
    )
}

export default Button