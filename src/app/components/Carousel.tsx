import { PropsWithChildren } from "react";

const Carousel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="carousel flex gap-4 overflow-x-scroll max-w-[1400px]">
      {children}
    </div>
  );
};

export default Carousel;
