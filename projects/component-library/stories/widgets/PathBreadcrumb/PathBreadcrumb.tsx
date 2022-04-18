import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';

export const PathBreadcrumb = (): JSX.Element => {
  return (
    <>
      {typeof window !== 'undefined' && window.location.pathname !== '/' && (
        <Breadcrumb path={window.location.pathname + window.location.search} />
      )}
    </>
  );
};
