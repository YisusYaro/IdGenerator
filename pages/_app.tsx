import "reflect-metadata";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { App } from "../modules/shared/infrastructure/dependency-injection/app";
import Script from "next/script";

App.getInstance().setDependencyInjectionApp();

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
