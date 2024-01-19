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

                  <form>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                      <div className="lg:col-span-6">
                        <Input
                          type="text"
                          id="name"
                          label="Name"
                        />
                      </div>

                      <div className="lg:col-span-6">
                        <Input
                          type="email"
                          id="email"
                          label="Email"
                        />
                      </div>

                      <div className="lg:col-span-12">
                        <Input
                          type="text"
                          id="subject"
                          label="Subject"
                        />
                      </div>

                      <div className="lg:col-span-12">
                        <label
                          htmlFor="comments"
                          className="block text-sm font-medium leading-6"
                        >
                          Your Comment:
                        </label>

                        <textarea
                          name="comments"
                          className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 mb-3"
                        ></textarea>
                      </div>
                    </div>
                    <Button>Send</Button>
                  </form>
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
