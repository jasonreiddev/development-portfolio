import { FunctionComponent, useState } from 'react';
import { BreadcrumbStyles } from './Breadcrumb.styles';
import { MdCheckBox, MdCopyAll } from 'react-icons/md';

export interface BreadcrumbProps {
  path: string;
  siteName: string;
}

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ path, siteName }) => {
  const [copied, setCopied] = useState(false);
  function copyToClipboard(path: string): void {
    setCopied(true);

    const textarea = document.createElement('textarea');
    textarea.textContent = window.location.origin + path;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  // remove url parameters and opening and closing slashes where applicable
  const n = path.indexOf('?');
  let noParamPath = path.substring(0, n != -1 ? n : path.length);
  noParamPath = noParamPath.length && noParamPath[0] == '/' ? noParamPath.slice(1) : noParamPath;
  noParamPath =
    noParamPath.length && noParamPath.slice(-1) == '/' ? noParamPath.slice(0, -1) : noParamPath;

  const arrayPath = noParamPath.split('/');
  let mapPath = '';
  return (
    <BreadcrumbStyles.Breadcrumb>
      <BreadcrumbStyles.BreadcrumbGroup>
        <BreadcrumbStyles.BreadcrumbItem href="/" first={true}>
          {siteName}
        </BreadcrumbStyles.BreadcrumbItem>
      </BreadcrumbStyles.BreadcrumbGroup>
      {arrayPath.map((item, index) => {
        mapPath = mapPath + '/' + item;
        return (
          <BreadcrumbStyles.BreadcrumbGroup key={`BreadcrumbItem-${index}`}>
            <span>/</span>
            <BreadcrumbStyles.BreadcrumbItem href={mapPath}>
              {decodeURIComponent(item).replace(/-/g, ' ').trim()}
            </BreadcrumbStyles.BreadcrumbItem>
            {arrayPath.length - 1 == index && (
              <BreadcrumbStyles.CopyButton
                title="Copy to Clipboard"
                onClick={() => copyToClipboard(path)}
              >
                {!copied && <MdCopyAll />}
                {copied && <MdCheckBox />}
              </BreadcrumbStyles.CopyButton>
            )}
          </BreadcrumbStyles.BreadcrumbGroup>
        );
      })}
    </BreadcrumbStyles.Breadcrumb>
  );
};

export default Breadcrumb;
