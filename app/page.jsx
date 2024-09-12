import Image from "next/image";
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <section className="container">

        <section className="flex flex-col lg:items-center justify-center lg:text-center pt-[80px] lg:pt-[92px] mb-6 lg:my-10">
          <p className="mb-4 lg:mb-8 text-xl md:text-2xl uppercase text-accent font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h1 className="flex flex-col md:flex-row gap-4 md:gap-10 w-full text-5xl lg:text-6xl xl:text-8xl text-accent tracking-widest font-bold font-secondary uppercase">
            <div className="w-full md:w-[1/2] text-left md:text-right">Małgorzata</div>
            <div className="w-full md:w-[1/2] text-left">Bereżecka</div>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-8">
            <Link href="/o-mnie" className="relative block w-full md:w-1/2 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/people1.jpg"
                  alt="Małgorzata Bereżecka"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Zobacz więcej</h1>
                </div>
              </div>
            </Link>
            <Link href="/o-mnie" className="relative block w-full md:w-1/2 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/people2.jpg"
                  alt="Małgorzata Bereżecka"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Zobacz więcej</h1>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-4 lg:gap-10">
          <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-[100vh]">
            <Link href="/lookbook/kuchnia" passHref>
              <div className="relative overflow-hidden w-full h-full group cursor-pointer">
                <Image
                  src="/assets/kitchen2.jpg"
                  alt="Kuchnia"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Projekt kuchni</h1>
                </div>
              </div>
            </Link>
          </div>

          <section>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <Link href="/lookbook/salon" className="relative block w-full md:w-1/2 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/living-room1.jpg"
                    alt="Salon"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Projekt salonu</h1>
                  </div>
                </div>
              </Link>
              <Link href="/lookbook/salon" className="relative block w-full md:w-1/2 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/living-room2.jpg"
                    alt="Salon"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Projekt salonu</h1>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <Link href="/lookbook/sypialnia" className="relative block w-full md:w-1/2 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/bedroom1.jpg"
                    alt="Sypialnia"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Projekt sypialni</h1>
                  </div>
                </div>
              </Link>
              <Link href="/lookbook/sypialnia" className="relative block w-full md:w-1/2 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/bedroom2.jpg"
                    alt="Sypialnia"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Projekt sypialni</h1>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <Link href="/lookbook/lazienka" className="relative block w-full md:w-1/2 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/bathroom3.jpg"
                    alt="Łazienka"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Projekt łazienki</h1>
                  </div>
                </div>
              </Link>
              <Link href="/lookbook/lazienka" className="relative block w-full md:w-1/2 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/bathroom1.jpg"
                    alt="Łazienka"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h1 className="text-white font-secondary tracking-widest text-xl md:text-2xl uppercase font-medium">Projekt łazienki</h1>
                  </div>
                </div>
              </Link>
            </div>
          </section>

        </section>

      </section>
    </>
  );
};

export default Home;
