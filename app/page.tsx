import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/homepage/100thieves.svg"
        alt="default logo"
        width={500}
        height={500}
      />
    </>
  );
}
