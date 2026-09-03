import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero.jpg'

function Hero() {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white">
        <h1 className="font-display text-6xl md:text-[180.8px] font-medium uppercase leading-[0.85] tracking-tight">
          Train On <br /> Your Time.
        </h1>
        <p className="mt-4 text-sm md:text-base tracking-wide">
          150 Kadiwa street San Antonio, Cavite City, Cavite, Philippines, 4100
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/join"
            className="bg-white text-black font-semibold uppercase px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Join MC Fitness
          </Link>
          <Link
            to="/membership"
            className="border border-white text-white font-semibold uppercase px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            View Memberships
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero