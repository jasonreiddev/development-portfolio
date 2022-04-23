import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ClearCacheProvider } from 'react-clear-cache';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<{ styles: JSX.Element; html: string; head?: (JSX.Element | null)[] | undefined }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <ClearCacheProvider auto={true}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </ClearCacheProvider>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
