"use client"
import Porfolio from "../../components/Portfolio";
import Header from "../../components/Header";


export default function Home() {
  return (
    <div className="w-full flex-col items-center relative bg-[var(--color-1)] overflow-hidden overflow-y-auto">
      {/* Header */}
      <Header />
      {/* Testimonial section */}
      <Porfolio />
    </div>
  );
}
