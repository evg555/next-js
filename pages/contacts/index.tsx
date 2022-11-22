import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FC } from "react";
import { contactType } from "../../types";

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {contacts: data}
    }
}

type contactsProps = {
    contacts: [contactType]
}

const Contacts:FC<contactsProps> = ({contacts}) => {
    return (
    
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Heading text="Contacts List:" tag="h1" />
            <ul>
                {contacts && contacts.map(({id, name}) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>    
    )
}

export default Contacts;