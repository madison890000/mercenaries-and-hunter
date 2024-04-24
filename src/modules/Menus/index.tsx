import * as React from 'react';
import SelectLanguage from "../SelectLanguage";
import LocaleContext from '../../contexts/LocaleContext';


const Menus = () => {
    const {locale, updateLocale, languages} = React.useContext(LocaleContext);
    return (
      <div style={{
          position: 'absolute',
          top: 2,
          bottom: 10,
          right: 5,
          zIndex: 1000
      }}>
          <SelectLanguage value={locale} options={languages} onChange={updateLocale} />
      </div>
    );
};
export default Menus;
