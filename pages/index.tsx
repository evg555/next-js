import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";
import Socials from "../components/Socials";
import { GetStaticProps } from "next";

export const getStaticProps:GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/socials`);
    const data = await response.json();
  
    if (!data) {
        return {
            notFound: true
        }
    }
  
    return {
        props: {socials: data}
    }
  } catch {
    return {
      props: {socials: null}
  }
  }

}

const Home = ({socials}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" tag="h1"/>
      <Socials socials={socials} />
  </div>
  )
}

export default Home;