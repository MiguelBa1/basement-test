import Head from "next/head";

export interface MetaTagsProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const MetaTags = ({title, description, url, image}: MetaTagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={title} name="title" />
      <meta content={description} name="description" />

      <meta content="website" property="og:type" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={image} property="og:image" />

      <meta content="summary_large_image" property="twitter:card" />
      <meta content={url} property="twitter:url" />
      <meta content={title} property="twitter:title" />
      <meta content={description} property="twitter:description" />
      <meta content={image} property="twitter:image" />
    </Head>
  );
};

export default MetaTags;
