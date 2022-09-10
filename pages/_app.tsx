import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/guide/KLabzFooter";
import Footer2 from "../components/guide/ThirdwebFooter";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>The Rich Fox Club Staking Vault</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="thirdweb Example Repository to Showcase How To Use thirdweb's NFT contracts, Marketplace contracts, and token contracts. "
        />
        <meta
          name="keywords"
          content="thirdweb nft contract example, thirdweb nft tutorial, thirdweb nft guide, thirdweb marketplace, thirdweb marketplace guide, thirdweb token guide"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Footer2 />
    </ThirdwebProvider>
  );
}

export default MyApp;
