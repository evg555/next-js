import ContactInfo from "../../components/ContactInfo";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { contactType } from "../../types";

export const getServerSideProps:GetServerSideProps = async (context) => {
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {contact: data}
    }
}

type contactProps = {
    contact: contactType
}

const Contact:FC<contactProps> = ({contact}) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo contact={contact} />
    </>    
);

export default Contact;