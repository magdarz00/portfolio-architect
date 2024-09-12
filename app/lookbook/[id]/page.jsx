"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const projectData = {
  "kuchnia": {
    title: "Kuchnia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    images: [
      { src: "/assets/kitchen1.jpg", title: "Jasna kuchnia", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/kitchen2.jpg", title: "Kuchnia z elementami drewna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/kitchen3.jpg", title: "Ciemna kuchnia", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ],
  },
  "sypialnia": {
    title: "Sypialnia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    images: [
      { src: "/assets/bedroom1.jpg", title: "Sypialnia ze szkłem", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/bedroom2.jpg", title: "Sypialnia jasna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/bedroom3.jpg", title: "Sypialnia ciemna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ],
  },
  "salon": {
    title: "Salon",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    images: [
      { src: "/assets/living-room1.jpg", title: "Salon vintage", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/living-room2.jpg", title: "Salon jasny", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/living-room3.jpg", title: "Salon z elementami drewna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ],
  },
  "lazienka": {
    title: "Łazienka",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    images: [
      { src: "/assets/bathroom1.jpg", title: "Łazienka z kamienia", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/bathroom2.jpg", title: "Łazienka jasna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/bathroom3.jpg", title: "Łazienka szara", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ],
  },
  "kawiarnia": {
    title: "Kawiarnia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    images: [
      { src: "/assets/coffee-shop1.jpg", title: "Kawiarnia jasna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/coffee-shop2.jpg", title: "Kawiarnia jasna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/coffee-shop3.jpg", title: "Kawiarnia ciemna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ],
  },
  "hotel": {
    title: "Hotel",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    images: [
      { src: "/assets/hotel1.jpg", title: "Hotel vintage", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/hotel2.jpg", title: "Hotel szklany", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      { src: "/assets/hotel3.jpg", title: "Hotel vintage", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ],
  },
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    notFound();
  }

  return (
    <div className="container pt-[80px] lg:pt-[92px]">
      <div className="flex flex-col gap-4 lg:gap-10">
        {project.images.map((image, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
            <div className="relative w-full lg:w-3/4 aspect-[16/9] lg:aspect-auto h-auto lg:h-[80vh]">
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full lg:w-1/4">
              <h2 className="text-xl font-bold mb-2 uppercase">{image.title}</h2>
              <p className="text-lg">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
