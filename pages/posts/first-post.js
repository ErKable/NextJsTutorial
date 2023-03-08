import Link from 'next/link';
import Head from 'next/head';
//import Script from 'next/script';
import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>First Post</title>
         {/*    <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload" //this param controls when the third party script should be loaded
                onLoad={() => //this param is used to run any js code after the script is loaded
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">← Back to home</Link>
        </h2>
    </Layout>
  );
}