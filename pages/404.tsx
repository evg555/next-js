import Heading from "../components/Heading";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/404.module.scss"
import Head from "next/head";

const Error = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [router])

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>404</title>
            </Head>
            <Heading text="404" tag="h1"/>
            <Heading text="Something is going wrong..." tag="h2" />
        </div>  
    )
}

export default Error;