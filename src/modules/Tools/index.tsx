import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useIntl } from "react-intl";


const Tools = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  return (
    <div style={{
      padding: 30,
      display: "flex",
      justifyContent: 'space-between'
    }}>
      <Button variant="contained" size="large" onClick={() => {
        navigate("/tools/translate")
      }} style={{
        backgroundColor: '#6096B4',
        padding:40,
      }}>{intl.formatMessage({ id: 'menu.format-and-translate' })}</Button>
      <Button variant="contained" size="large" onClick={() => {
        navigate("/tools/cl")
      }} style={{
        backgroundColor: '#6096B4',
        padding:40,
      }}>{intl.formatMessage({ id: 'menu.auto-cl' })}</Button>
      <Button variant="contained" size="large" onClick={() => {
        navigate("/tools/import")
      }} style={{
        backgroundColor: '#6096B4',
        padding:40,
      }}>{intl.formatMessage({ id: 'menu.import' })}</Button>
    </div>
  )
}

export default Tools