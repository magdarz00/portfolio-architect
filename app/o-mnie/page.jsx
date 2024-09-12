import Image from "next/image";
import Link from 'next/link';

const projects = [
    {
        id: "salon",
        title: "Projekt salonu",
        image: "/assets/living-room1.jpg",
    },
    {
        id: "sypialnia",
        title: "Projekt sypialni",
        image: "/assets/bedroom1.jpg",
    },
    {
        id: "kawiarnia",
        title: "Projekt kawiarni",
        image: "/assets/coffee-shop3.jpg",
    },
    {
        id: "hotel",
        title: "Projekt hotelu",
        image: "/assets/hotel2.jpg",
    }
];

const Resume = () => {
    return (
        <>
            <section className="container relative pt-[80px] lg:pt-[92px] mb-0 lg:mb-10">
                <div className="w-full flex flex-col lg:flex-row items-center gap-0 lg:gap-10">
                    <div className="relative w-full lg:w-1/2 xl:w-2/3">
                        <Image
                            src="/assets/people1.jpg"
                            alt="Małgorzata Bereżecka"
                            layout="responsive"
                            width={800}
                            height={600}
                            className="object-cover shadow-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col text-left my-6 lg:my-0">
                        <h1 className="text-3xl lg:text-4xl font-bold font-secondary uppercase">
                            Małgorzata Bereżecka
                        </h1>
                        <hr className="my-4 lg:my-8 border-t border-gray-300" />
                        <div className="flex flex-col gap-4 text-lg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
                    {projects.map(project => (
                        <Link key={project.id} href={`/lookbook/${project.id}`} passHref>
                            <div className="relative group overflow-hidden shadow-lg h-[40vh]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    <p className="text-white font-secondary tracking-widest text-xl uppercase font-medium">{project.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Resume;
