import type { NextPage } from "next";
import Script from "next/script";
import { IdGenerator } from "../components/IdGenerator";

const Home: NextPage = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PP2DW81169"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-PP2DW81169');
        `}
      </Script>
      <IdGenerator />
    </>
  );
};

export default Home;
