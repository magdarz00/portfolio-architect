import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-accent font-secondary py-8">
            <div className="container flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col text-left">
                    <Link href="/">
                        <h2 className="text-xl uppercase tracking-widest">Małgorzata Bereżecka</h2>
                    </Link>
                    <div className="text-sm mt-4">&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-8 mt-6 md:mt-0">
                    <div className="flex space-x-12 mb-4 md:mb-0 uppercase font-medium">
                        <Link href="/o-mnie" className="hover:underline">O mnie</Link>
                        <Link href="/lookbook" className="hover:underline">Lookbook</Link>
                        <Link href="/kontakt" className="hover:underline">Kontakt</Link>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gray-400">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gray-400">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
