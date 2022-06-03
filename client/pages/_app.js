import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';

export default ({ Component, pageProps }) => {
  return <>
    <Component {...pageProps} />
  </>
};
