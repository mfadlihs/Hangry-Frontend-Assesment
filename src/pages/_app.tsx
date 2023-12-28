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
        <meta name="title" content="Hangry - Assesment" />
        <meta
          name="description"
          content="This website builds for Hangry Frontend Intern Submission"
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
