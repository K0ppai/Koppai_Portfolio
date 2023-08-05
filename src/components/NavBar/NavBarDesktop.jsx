import { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from './animation_lkvc5yuu.json';
import './NavBar.css';

const NavBarDesktop = () => {
  useEffect(() => {
    const container = document.getElementById('lottie-container');
    lottie.loadAnimation({
      container,
      animationData,
      loop: true,
      autoplay: true,
    });
    console.log('animation loaded');
  }, []);

  return (
    <div className="hidden md:block">
      <div className="hanging-board">
        <div className="hanging-bar"></div>
        <button className="hanging-button text-red-600">Button 1</button>
        <button className="hanging-button">Button 2</button>
        <button className="hanging-button">Button 3</button>
        <button className="hanging-button">Button 4</button>
        <button className="hanging-button">Button 5</button>
      </div>
    </div>
  );
};

export default NavBarDesktop;
