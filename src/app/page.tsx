import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl lg:text-7xl font-bold">KHON LABS</h1>
        <div className="mt-2 lg:mt-8 flex flex-col text-xl lg:text-6xl">
          <Link href="https://witx.app" className="font-bold lg:font-normal hover:underline">WIT X</Link>
          <Link href="https://zobyeteam.com" className="font-bold lg:font-normal hover:underline">ZOBYETEAM</Link>
          <Link href="https://knwbadminton.khonlabs.com" className="font-bold lg:font-normal hover:underline">KNW Badminton Booking</Link>
        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold">MEMBERS</h2>
        <div className="flex flex-col gap-4 lg:gap-0">
          <Link href="https://github.com/takzobye" className="flex flex-col lg:flex-row justify-between hover:underline">
            <p className="font-bold lg:font-normal">Thanathip Singkaew</p>
            <p>Full-Stack Developer</p>
          </Link>
          <Link href="https://github.com/genezobye" className="flex flex-col lg:flex-row justify-between hover:underline">
            <p className="font-bold lg:font-normal">Kanisorn Maprajuk</p>
            <p>UX/UI Designer</p>
          </Link>
          <Link href="https://github.com/generatee" className="flex flex-col lg:flex-row justify-between hover:underline">
            <p className="font-bold lg:font-normal">Krittipong Seekaewnit</p>
            <p>Mobile Developer</p>
          </Link>
          <Link href="https://github.com/generatee" className="flex flex-col lg:flex-row justify-between hover:underline">
            <p className="font-bold lg:font-normal">Suphachock Kamlek</p>
            <p>Back-End Developer</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
