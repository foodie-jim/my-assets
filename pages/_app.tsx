import { FC, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@styles/theme';
import Top from '../src/components/top';

// TODO : Make Mini variant drawer permanent layout using material-ui
// https://www.youtube.com/watch?v=0WbrOfmvjvU
// https://www.youtube.com/watch?v=Ix1LZGBSp-E&t=10s

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>my-assets</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Top>
          <Component {...pageProps} />
        </Top>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
