import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export async function getStaticProps() {
    const allPostsData = await fetch('https://proapi.azurewebsites.net/github/issues').then(res => res.json())
    return {
        props: {
            allPostsData: allPostsData.data
        }
    }
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={`${utilStyles.headingLg} text-pink-600`}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, created_at, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <div className="text-lg">{title}</div>
                            <br/>
                            {id}
                            <br/>
                            <Link href="/posts/first-post"><span className="btn-blue">{created_at}</span></Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

