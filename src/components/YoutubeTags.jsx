import React, { useEffect, useRef, useState } from "react";

const YoutubeTags = () => {
  const [activeLink, setActiveLink] = useState("action");
  const tabsRef = useRef();
  const genres = [
    "action",
    "adventure",
    "comedy",
    "romance",
    "thriller",
    "war",
    "superhero",
    "drama",
    "horror",
    "mystery",
    "animation",
    "science fiction",
    "crime",
  ];

  useEffect(() => {
    const tabsList = tabsRef.current;

    let touchStartX, touchStartY, touchMoveX, touchMoveY;
    let lastTouchMoveTime = 0;
    let lastTouchMoveDeltaX = 0;
    let lastTouchMoveDeltaY = 0;
    let touchEndTimeoutId = null;

    const handleWheel = (event) => {
      event.preventDefault();
      tabsList.scrollLeft += event.deltaY;
    };

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].pageX;
      touchStartY = event.touches[0].pageY;
      touchMoveX = touchStartX;
      touchMoveY = touchStartY;
      lastTouchMoveTime = Date.now();
      lastTouchMoveDeltaX = 0;
      lastTouchMoveDeltaY = 0;
      clearTimeout(touchEndTimeoutId);
    };

    const handleTouchMove = (event) => {
      const now = Date.now();
      const deltaTime = now - lastTouchMoveTime;
      lastTouchMoveTime = now;

      const deltaX = event.touches[0].pageX - touchMoveX;
      const deltaY = event.touches[0].pageY - touchMoveY;
      touchMoveX += deltaX;
      touchMoveY += deltaY;

      if (deltaTime > 0) {
        lastTouchMoveDeltaX = (deltaX / deltaTime) * 1000;
        lastTouchMoveDeltaY = (deltaY / deltaTime) * 1000;
      }

      const scrollWidth = tabsList.scrollWidth;
      const clientWidth = tabsList.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      const newScrollLeft = Math.min(
        Math.max(tabsList.scrollLeft - deltaX, 0),
        maxScrollLeft
      );
      tabsList.scrollTo({ left: newScrollLeft });

      event.preventDefault();
    };

    const handleTouchEnd = () => {
      const momentumX = lastTouchMoveDeltaX * 200;
      const momentumY = lastTouchMoveDeltaY * 200;
      const distanceX = momentumX * 0.2;
      const distanceY = momentumY * 0.2;

      const scrollWidth = tabsList.scrollWidth;
      const clientWidth = tabsList.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      const targetScrollLeft = Math.min(
        Math.max(tabsList.scrollLeft + distanceX, 0),
        maxScrollLeft
      );
      tabsList.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

      touchEndTimeoutId = setTimeout(() => {
        lastTouchMoveDeltaX = 0;
        lastTouchMoveDeltaY = 0;
      }, 500);
    };

    tabsList.addEventListener("wheel", handleWheel, { passive: false });
    tabsList.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    tabsList.addEventListener("touchmove", handleTouchMove, { passive: false });
    tabsList.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      tabsList.removeEventListener("wheel", handleWheel);
      tabsList.removeEventListener("touchstart", handleTouchStart);
      tabsList.removeEventListener("touchmove", handleTouchMove);
      tabsList.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  return (
    <div className="w-full">
      <ul
        className="flex gap-4 w-full overflow-x-auto py-2"
        ref={tabsRef}
        style={
          {
            //   scrollBehavior: "smooth",
          }
        }
      >
        {genres.map((value) => (
          <li key={value} onClick={() => setActiveLink(value)}>
            <a
              className={`capitalize py-1.5 px-5 whitespace-nowrap rounded-md transition-colors duration-200 font-medium ${
                activeLink === value
                  ? "text-neutral-600 bg-neutral-200"
                  : "text-neutral-300 bg-neutral-700 hover:bg-neutral-700/80"
              }`}
              href=""
              onClick={(e) => e.preventDefault()}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeTags;
