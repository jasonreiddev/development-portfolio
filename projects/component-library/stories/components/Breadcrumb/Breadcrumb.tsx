import Link from 'next/link';
import { useState } from 'react';
import { MdCheckBox, MdCopyAll } from 'react-icons/md';

import { BreadcrumbStyles as s } from './Breadcrumb.styles';

export interface BreadcrumbProps {
  path: string;
  siteName?: string;
}

export const Breadcrumb = ({ path = '', siteName }: BreadcrumbProps): JSX.Element => {
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
    <s.Breadcrumb>
      <s.BreadcrumbGroup>
        {siteName && (
          <Link href="/" passHref>
            <s.BreadcrumbItem first={true}>{siteName}</s.BreadcrumbItem>
          </Link>
        )}
      </s.BreadcrumbGroup>
      {arrayPath.map((item, index) => {
        mapPath = mapPath + '/' + item;
        return (
          <s.BreadcrumbGroup key={`BreadcrumbItem-${index}`}>
            <span>/</span>
            <s.BreadcrumbItem href={mapPath}>
              {decodeURIComponent(item).replace(/-/g, ' ').trim()}
            </s.BreadcrumbItem>
            {arrayPath.length - 1 == index && (
              <s.CopyButton title="Copy to Clipboard" onClick={() => copyToClipboard(path)}>
                {!copied && <MdCopyAll />}
                {copied && <MdCheckBox />}
              </s.CopyButton>
            )}
          </s.BreadcrumbGroup>
        );
      })}
    </s.Breadcrumb>
  );
};
