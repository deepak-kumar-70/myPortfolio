import { useRef, useState, useEffect, lazy, Suspense } from "react";
import HeroSection from "../Components/HeroSection";
import ghostFace from '../assets/Image/ghostFace.png'
const Spline = lazy(() => import("@splinetool/react-spline"));

const Home = () => {
  const ref = useRef();
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadSpline(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        {/*loadSpline && (
          <div className="absolute inset-0 z-0">
            <Spline scene="/public/model/robot.splinecode" />
          </div>
        )*/}
        <img src={ghostFace} className="absolute inset-0 w-[460px] mt-6 z-0 left-1/2 transform -translate-x-1/2"/>
      </Suspense>

      <div className="absolute bottom-0 right-0 w-[200px] h-[60px] bg-[#000000] z-10" />
      <div className="relative z-20 pointer-events-none">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
