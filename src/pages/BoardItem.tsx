import { IAppliedInLocal, SendType } from "../types";
import useSendList from "../hooks/useSendList";
import ShowTimeUntilNow from "../components/ShowTime";
import Like from "../components/Like";
import { Card, CardActions, CardContent, Typography } from '@mui/material';

const rejectStyle = {
  transform: 'rotateX(60deg) rotateZ(10deg) scale(0.8)',

}

const styles = {
  [SendType.REJECTED]: rejectStyle
} as Record<SendType, any>;

const BoardItem = ({ title, time, like, id, originUrl, status }: IAppliedInLocal) => {
  const { updateLikeById } = useSendList();
  const style = styles[status] ?? {}
  return (
    <Card sx={{ width: 180, margin: 1, ...style }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <ShowTimeUntilNow time={time} />
        </Typography>
        <Typography variant="h6" component="div">
          <a href={originUrl} target="_blank">{title}</a>
        </Typography>

      </CardContent>
      <CardActions>
        <Like onChange={(e: any) => updateLikeById(id, e)} value={like} />
      </CardActions>
    </Card>
  )
}

export default BoardItem