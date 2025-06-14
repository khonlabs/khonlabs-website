import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <div>
        <h1 className="text-xl lg:text-7xl font-black">KHON LABS</h1>
        <div className="mt-2 lg:mt-8 flex flex-col text-xl lg:text-7xl">
          <Link href="https://witx.app" className="hover:underline">WIT X</Link>
          <Link href="https://zobyeteam.com" className="hover:underline">ZOBYETEAM</Link>
          <Link href="https://knwbadminton.khonlabs.com" className="hover:underline">KNW Badminton Booking</Link>
        </div>
      </div>
    </div>
  );
}
