import { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '../context/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </QueryClientProvider>
    </CartProvider>
  );
};

export default App;
