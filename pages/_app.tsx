import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import youtubeImg from '../public/youtube.png';
import '../styles/globals.scss';
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={youtubeImg}
        width={500} 
        height={350} 
        alt="preview"
        placeholder="blur"
        layout="responsive"
      />
    </Layout>
  )
}

export default MyApp;
