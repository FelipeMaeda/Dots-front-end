import React from 'react';
import { Spinner } from 'reactstrap';
import Menu from '../components/Menu.js';
import Image from 'next/image';
import Head from 'next/head';

function Home() {
    return (
        <div>
            <Head>
                <title>Lógos PC</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Menu />
            <div className="banner">
                <h1 class="">
                    MELHORES COMPUTADORES PELO MELHOR PREÇO    
                </h1>    
            </div>
            {/* <Image
                src="/presentation.png"
                alt="Picture of the author"
                width={1320}
                height={450}
            /> */}
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>
            </div>
        </div>
    );
}

export default Home;