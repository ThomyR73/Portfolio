import React from "react";
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,300;1,300&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Primary Meta Tags --> */}
      <title>Thomas Romano Desarrollador Web</title>
      <meta name="title" content="Thomas Romano Desarrollador Web" />
      <meta
        name="description"
        content="Soy Thomas Romano, un joven desarrollador web, capacitado para desarrollar páginas web que satisfagan las necesidades del cliente implementando las mejores tecnologías del mercado"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://t-romano.com/" />
      <meta property="og:title" content="Thomas Romano Desarrollador Web" />
      <meta
        property="og:description"
        content="Soy Thomas Romano, un joven desarrollador web, capacitado para desarrollar páginas web que satisfagan las necesidades del cliente implementando las mejores tecnologías del mercado"
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/BvNvFSxy/og.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://t-romano.com" />
      <meta
        property="twitter:title"
        content="Thomas Romano Desarrollador Web"
      />
      <meta
        property="twitter:description"
        content="Soy Thomas Romano, un joven desarrollador web, capacitado para desarrollar páginas web que satisfagan las necesidades del cliente implementando las mejores tecnologías del mercado"
      />
      <meta
        property="twitter:image"
        content="https://i.postimg.cc/BvNvFSxy/og.png"
      />
    </Head>
  );
};

export default MetaTags;
