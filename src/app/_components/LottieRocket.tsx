'use client';

import Lottie from "lottie-react";
import rocketAnimation from '@/assets/rocket.json';

export function LottieRocket() {
    return (
          <div className="w-36 h-36">
    <Lottie animationData={rocketAnimation} loop />
  </div>

    );
}