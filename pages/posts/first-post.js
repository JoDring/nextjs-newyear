import Link from "next/link";
import Img from '../../public/images/profile.jpg'
import Img1 from '../../public/img1.jpg'
import Img2 from '../../public/img2.jpg'
import Image from "next/image";
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>first post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        <Image src={Img} alt="image"/>

        <div style={{height: '100px'}}></div>

        <Image src={Img1} alt="image"/>

        <div style={{height: '100px'}}></div>

        <Image src={Img2} alt="image"/>

        <div style={{height: '100px'}}></div>

        <Image src={Img1} alt="image"/>
    </Layout>
}
