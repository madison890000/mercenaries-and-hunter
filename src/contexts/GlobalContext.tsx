import React from 'react';
import type { useScore } from '../hooks/useScore';

interface ILocaleContext {
  scoreValues: ReturnType<typeof useScore>;
  reload: () => void;
  updateToken: () => void;
  userInfo: any;
}

export const GlobalContext = React.createContext({} as ILocaleContext);
export default GlobalContext;
