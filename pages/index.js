import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

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
                <h2 className={`${utilStyles.headingLg} text-blue-600`}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, created_at, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br/>
                            {id}
                            <br/>
                            {created_at}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

