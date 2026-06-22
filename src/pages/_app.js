import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <div className={inter.className}>
            <Navbar />
            <main className="min-h-[calc(100vh-10rem)] bg-slate-50 text-slate-900">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}
