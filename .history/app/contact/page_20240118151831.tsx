import Map from "@/components/Map";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Map />

      <section className="lg:py-24 py-16">
        <div className="main-container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6">
              <Image
                src={"/contact.jpg"}
                width={500}
                height={500}
                alt="contact image"
              />
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-5">
                <div className="border p-6">
                  <h3 className="mb-6 text-2xl leading-normal">
                    Get in touch
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
