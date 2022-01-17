import { ReactElement } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';

export const PathBreadcrumb = (): ReactElement => {
  return (
    <>
      {typeof window !== 'undefined' && window.location.pathname !== '/' && (
        <Breadcrumb
          siteName="Jason Reid Development Portfolio"
          path={window.location.pathname + window.location.search}
        />
      )}
    </>
  );
};

export default PathBreadcrumb;
