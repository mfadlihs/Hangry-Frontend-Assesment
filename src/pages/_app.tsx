import Scaffold from "@/layout/Scaffold";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 640;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>Hangry - Assesment</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="title"
          content="Hangry - Multi-brand delivery-only restaurants serving delicious food"
        />
        <meta
          name="description"
          content="Satisfy your cravings here! Find out our latest promotion and events here!"
        />
        <meta
          name="description"
          content="Fadli Hasan is a software engineer who builds accessible, inclusive product and digital experiences for web & mobile."
          key="description"
        />
        <meta
          name="keywords"
          content="Hangry, Hangry Group, Hangry Indonesia, Cloud Kitchen, FnB, Food and Beverages, Nasi Ayam, Bude Sari, Ayam Geprek, Ayam Koplo, Kopi Susu, Dari Pada, Gyudon, Beef Bowl, San Gyu"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Scaffold>
        <Component {...pageProps} />
      </Scaffold>
    </>
  );
}
