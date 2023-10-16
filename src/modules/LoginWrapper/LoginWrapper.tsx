import GoogleLogin from "../GoogleLogin";
import {PropsWithChildren, useContext} from "react";
import GlobalContext from "../../contexts/GlobalContext";
import {useIntl} from "react-intl";


const LoginWrapper: React.FC<PropsWithChildren> = ({children}) => {
  const {userInfo} = useContext(GlobalContext);
  const intl = useIntl();
  if (!userInfo?.login) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <GoogleLogin/>
        <div style={{
          opacity: 0.5,
          margin: 12,
          pointerEvents: "none"
        }}>
          <div data-testId="login-tips">{intl.formatMessage({id: 'btn.login-first'})}</div>
          {children}
        </div>
      </div>
    )
  } else {
    return <>{children}</>
  }

}

export default LoginWrapper