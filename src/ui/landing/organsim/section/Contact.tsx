import Button from "@ui/landing/atom /Button";

const Contact = () => {
  return (
    <div className="bg-[#f8f5f1] pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between p-10 px-20  max-w-[1800px] mx-auto w-full gap-20 ">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Request a Consultation</h2>
          <p className="text-gray-600">
            Get expert advice tailored to your needs. Our team is here to guide
            you every step of the way. Schedule your consultation today!
          </p>
        </div>
        <div className="md:w-1/2 ">
          <form className="bg-[#f8f5f1] px-8 pt-6 pb-8 mb-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  className="border-0 border-b-2 border-b-black outline-0 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="border-0 border-b-2 border-b-black outline-0 w-full"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="border-0 border-b-2 border-b-black outline-0 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="border-0 border-b-2 border-b-black outline-0 w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="border-0 border-b-2 border-b-black outline-0 w-full"
                rows={4}
              ></textarea>
            </div>
            <div className="mt-6">
              <Button value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
