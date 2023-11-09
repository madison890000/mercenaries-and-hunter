import { PropsWithChildren } from "react";
import { CHROME_EXTENSION_LINK_ADDRESS } from "../../constants/domain";
import { hasInstallChromeExtension } from "../../services/mh";
import Button from "@mui/material/Button";


const ExtensionWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  if (!hasInstallChromeExtension()) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          margin: 'auto',
          minHeight: 400,
          marginTop: 40,
          textAlign: 'center'
        }}>
          <div
            data-testId="chrome-tips"
            style={{
              margin: 20,
              fontSize: 18,
            }}
          >
            You haven't install chrome extension of M & H
          </div>
          <Button
            style={{
              marginLeft: 30
            }}
            size="large"
            variant="contained"
            onClick={() => {
              window.open(CHROME_EXTENSION_LINK_ADDRESS, '_blank')
            }}
          >
            install Extension Now
          </Button>
        </div>
      </div>
    )
  } else {
    return <>{children}</>
  }

}

export default ExtensionWrapper