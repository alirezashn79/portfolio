const Contact = () => {
  return (
    <div id="contact" className="max-w-5xl mx-auto px-4 py-12 md:pl-20">
      <h1 className="font-bold text-5xl text-myColor text-center pb-10">
        Contact
      </h1>
      <form
        action="https://getform.io/f/2f90213b-bba0-4cf6-83c4-1c6c6d6dd522"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-0  md:gap-4  w-full">
          <div className="flex flex-col pb-4">
            <label className="uppercase" htmlFor="name">
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border-2 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col pb-4">
            <label className="uppercase" htmlFor="phone">
              phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="border-2 p-2 border-gray-300 rounded-lg"
            />
          </div>
        </div>
        {/*  */}
        <div>
          <div className="flex flex-col pb-4">
            <label className="uppercase" htmlFor="email">
              email
            </label>
            <input
              className="border-2 border-gray-300 p-2 rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col pb-4">
            <label className="uppercase" htmlFor="subject">
              subject
            </label>
            <input
              className="border-2 border-gray-300 p-2 rounded-lg"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div className="flex flex-col pb-4">
            <label className="uppercase" htmlFor="message">
              message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className="resize-none border-2 border-gray-300 p-2 rounded-lg"
              placeholder="your message..."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="bg-myColor text-gray-100 p-3 w-full rounded-lg hover:scale-x-95 hover:opacity-95 ease-in duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
