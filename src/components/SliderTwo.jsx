import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const SliderTwo = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const cards = [
    {
      name: "Leslie Alexander",
      description:
        "Circle is being used for my project, and the team has been very helpful. Thanks, are there any new tools you've tried this week?",
      imageUrl: img1,
    },
    {
      name: "Dianne Russell",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      imageUrl: img2,
    },
    {
      name: "Darrell Steward",
      description:
        "Making your own mobile app is currently pretty easy for me. Thank you, with the aid of Circle assistive technologies!",
      imageUrl: img3,
    },
  ];

  const infiniteCards = [...cards, ...cards, ...cards, ...cards];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += 1;

        if (
          scrollContainer.scrollLeft >=
          (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    scrollInterval = setInterval(scroll, 30);

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered]);

  return (
    <div className="w-full mx-auto overflow-hidden z-20">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-6">
          {infiniteCards.map((card, index) => (
            <div
              key={`${card.name}-${index}`}
              className="flex-none w-80 bg-[#151925] p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4 p-4">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <span className="text-white font-semibold">{card.name}</span>
              </div>
              <div className="pt-4 px-4 flex flex-col items-start justify-center gap-4">
                <p className="text-gray-400 text-xs">{card.description}</p>
                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <FaStar key={i} className="text-[#FFD964]" size={20} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default SliderTwo;
