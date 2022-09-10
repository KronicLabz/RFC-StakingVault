import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>The Rich Fox Club Staking Vault</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <img src={`/rfc-logo.svg`} alt="drop" width={200} />
          <h2 className={styles.selectBoxTitle}>Mint</h2>
          <p className={styles.selectBoxDescription}>
            Mint the RFC Staking Token to be able to stake for RFC.X
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/rfc-stake.svg`} alt="drop" width={200} />
          <h2 className={styles.selectBoxTitle}>The Fox Hole</h2>
          <p className={styles.selectBoxDescription}>
            Stake your RFC.ST tokens and earn <b>RFC.X</b> rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
