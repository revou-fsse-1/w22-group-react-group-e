import { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default App;
