import 'normalize.css';
import '../styles/index.scss';
import SectionSlider from '../components/SectionSlider';
import Head from '../components/Head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Header />
      <SectionSlider Component={Component} pageProps={pageProps} />
    </>
  );
}

export default MyApp;
