import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FC } from "react";
import { postType } from "../../types";

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {posts: data}
    }
}

type postProps = {
    posts: [postType]
}

const Posts:FC<postProps> = ({posts}) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Posts:" tag="h1"/>
            <ul>
                {posts && posts.map(({id, title}) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </>    
    )
} 

export default Posts;