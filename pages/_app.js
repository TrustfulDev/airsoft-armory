import '../styles/globals.css';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
