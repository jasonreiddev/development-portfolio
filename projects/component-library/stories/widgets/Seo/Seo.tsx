//import { Helmet } from 'react-helmet-async';
// import { useLocation } from '@reach/router';
// import { graphql, StaticQuery } from 'gatsby';

export interface SeoProps {
  title?: string;
  //   subTitle?: string;
  //   description?: string;
  //   image?: string;
  //   content?: string;
}

export const Seo = ({ title }: SeoProps): JSX.Element => {
  //const { pathname } = useLocation();
  return (
    <div>{title}</div>
    // <StaticQuery
    //   query={graphql`
    //     query SiteMetadataQuery {
    //       site {
    //         siteMetadata {
    //           titleTemplate
    //           url
    //           description
    //           image
    //           twitterUsername
    //         }
    //       }
    //     }
    //   `}
    //   render={(data: { site: { siteMetadata: any } }) => {
    //     const seo = data.site.siteMetadata;

    //     description = description ? description : seo.description;
    //     image = seo.url + (image ? image : seo.image);

    //     title =
    //       (title ? title + ' | ' + seo.titleTemplate : seo.titleTemplate) +
    //       (subTitle ? ' - ' + subTitle : '');
    //     const pageUrl = seo.url + pathname;
    //     content = content ? content : 'website';
    //   return (
    // <Helmet title={title}>
    //   <html lang="en" />
    //   <meta name="robots" content="index" />
    //   <meta name="description" content={description} />

    //   <meta property="og:description" content={description} />
    //   {/* <meta property="og:url" content={pageUrl} /> */}

    //   <meta property="og:type" content={content} />
    //   <meta property="og:title" content={title} />
    //   <meta property="og:image" content={image} />

    //   <meta name="twitter:card" content="summary_large_image" />
    //   {/* <meta name="twitter:creator" content={seo.twitterUsername} />
    //         <meta property="twitter:domain" content={seo.url} />
    //         <meta property="twitter:url" content={pageUrl} /> */}
    //   <meta name="twitter:title" content={title} />
    //   <meta name="twitter:description" content={description} />
    //   <meta name="twitter:image" content={image} />
    // </Helmet>
    // );
    //}}
    ///>
  );
};
