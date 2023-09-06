import Rating from '@mui/material/Rating';

interface LikeProps {
    value: number | undefined;
    onChange: any;
}

const Like: React.FC<LikeProps> = ({value, onChange}) => {

    return (
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                onChange(newValue);
            }}
        />
    )
}
export default Like