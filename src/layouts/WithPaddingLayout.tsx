import { PropsWithChildren } from 'react';

const WithPaddingLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      margin: 'var(--base-layout-padding)',
      padding: 'var(--base-padding)',
      background: 'var(--color-white)',
      borderRadius: 'var(--base-border-radius)'
    }}
  >
    {children}
  </div>
);
export default WithPaddingLayout;
