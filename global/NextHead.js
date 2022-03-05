import Head from "next/head";

export const NextHead = ({ title }) => {
  return (
    <Head>
      {/* Head's Title */}
      <title>{title}</title>

      {/* Favicon */}
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

      {/* Google: Font:  */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={true}
      />

      {/* Links: Style-Sheets */}
      <style src="./links.js" type="text/javascript" defer></style>
    </Head>
  );
};
