'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import  "aos/dist/aos.css";

export default function Aos() {
  useEffect(() => {
    console.log("AOS");
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <></>;
}