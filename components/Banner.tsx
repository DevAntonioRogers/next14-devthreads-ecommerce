import Image from "next/image";

const Banner = () => {
  return (
    <section className="main-container flex justify-center my-5">
      <Image
        src={"/banner-image.png"}
        width={1400}
        height={500}
        alt="shirt banner"
      />
    </section>
  );
};

export default Banner;
