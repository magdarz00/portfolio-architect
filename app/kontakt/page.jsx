"use client";

import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
    const [selected, setSelected] = useState(false);

    const handleChange = (event) => {
        setSelected(event.target.value !== "");
    };

    return (
        <section className="container pt-[80px] lg:pt-[92px]">
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>

                <div className="w-full lg:w-1/4">
                    <h1 className="font-bold uppercase tracking-widest font-secondary text-2xl lg:text-3xl mt-6 mb-10">Kontakt</h1>
                    <h2 className="text-xl font-semibold mb-6 font-secondary tracking-widest uppercase">Dane kontaktowe</h2>

                    <div className="mb-4 flex flex-col gap-4">
                        <a href="mailto:example@email.com" className="text-lg hover:text-accent">example@email.com</a>
                        <a href="tel:+48123123123" className="text-lg hover:text-accent">+48 123 123 123</a>
                        <a href="https://maps.app.goo.gl/QrYTbQniMFZAP9LN7" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent">Gdynia, Polska</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold font-secondary tracking-widest uppercase mt-6">Media społecznościowe</h2>
                        <div className="flex gap-10">
                            <a href="https://instagram.com" className="text-lg hover:text-accent">Instagram</a>
                            <a href="https://facebook.com" className="text-lg hover:text-accent">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/4">
                    <h2 className="text-xl font-semibold mt-6 mb-12 font-secondary tracking-widest uppercase">formularz kontaktowy</h2>

                    <form className="flex flex-col gap-4 bg-[#faf9f6]">
                        <select
                            className={`py-4 px-2 border ${selected ? 'text-black' : 'text-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
                            onChange={handleChange}
                            defaultValue=""
                        >
                            <option value="" disabled>Powód kontaktu</option>
                            <option value="consultation">Konsultacja architektoniczna</option>
                            <option value="design">Projekt architektoniczny</option>
                            <option value="renovation">Renowacja budynku</option>
                            <option value="construction">Nadzór budowlany</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Imię i Nazwisko"
                            className="p-3 border placeholder-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 border placeholder-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <input
                            type="tel"
                            placeholder="Numer telefonu"
                            className="p-3 border placeholder-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <textarea
                            placeholder="Wiadomość"
                            className="p-3 border placeholder-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-accent"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-white text-gray-300 transition-all border py-3 px-6 lg:px-20 hover:bg-black hover:text-white focus:text-white focus:outline-none"
                        >
                            Wyślij
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
