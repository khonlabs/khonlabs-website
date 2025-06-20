import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <div className="space-y-4 lg:space-y-8">
        <div>
          <h1 className="text-5xl lg:text-8xl font-bold">KHON LABS</h1>
          <h2>คน แล็บส์, Let's make new things.</h2>
        </div>

        <div>
          <div className="flex flex-col text-xl lg:text-4xl">
            <Link href="https://witx.in.th" className="font-bold lg:font-normal hover:underline">WIT X</Link>
            <Link href="https://zobyeteam.com" className="font-bold lg:font-normal hover:underline">ZOBYETEAM</Link>
            <Link href="https://knwbadminton.khonlabs.com" className="font-bold lg:font-normal hover:underline">KNW Badminton Booking</Link>
          </div>
        </div>

        <hr />

        <div>
          <h2 className="text-2xl font-bold">Members</h2>
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
            <Link href="https://github.com/CallMeWasabi" className="flex flex-col lg:flex-row justify-between hover:underline">
              <p className="font-bold lg:font-normal">Suphachock Kamlek</p>
              <p>Back-End Developer</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
