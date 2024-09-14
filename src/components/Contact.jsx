const Contact = () => {
  return (
    <section
      id="contact"
      className="container relative max-w-4xl min-h-screen px-5 mx-auto flex-center"
    >
      <div className="w-full pb-10">
        <div className="text-center">
          <h3 className="font-bold text-primary">Contact Me</h3>
        </div>
        <div className="flex flex-col max-w-xs gap-5 mx-auto mt-12 md:relative sm:max-w-full">
          <div className="w-full mx-auto text-gray-800 rounded-lg shadow-xl dark:bg-slate-800 bg-slate-50 dark:text-gray-100 md:w-2/3 py-14 px-7">
            <h3 className="text-3xl font-semibold">
              Send Me A <br />
              <span className="text-primary">Message</span>
            </h3>
            <form className="*:flex *:flex-col *:gap-1 mt-5 md:w-2/3 w-full">
              <div className="">
                <label>Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="">
                <label>Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="">
                <label>Message</label>
                <textarea id="msg" placeholder="Enter your message"></textarea>
              </div>
              <button className="ml-auto btn btn-filled">Send to Me</button>
            </form>
          </div>
          <div className="w-full py-12 mx-auto bg-white shadow-xl dark:bg-gray-700 px-7 md:absolute lg:-right-9 right-28 rounded-xl md:w-2/5 h-5/6 top-28">
            <h3 className="pb-4 text-2xl font-semibold border-b border-gray-600">
              <span className="text-primary">Contact Details</span>.
            </h3>
            <div className="py-4">
              <p className="text-xs leading-5 text-gray-400">
                You can contact me via email, viber, whatsapp, and messenger.
              </p>
              <ul className="*:flex *:gap-4 *:items-center *:mt-4">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h2>Baguio City</h2>
                    <address className="text-xs">Philippines</address>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <p>iamannamarie1998@gmail.com</p>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <p>+639094118913</p>
                </li>
              </ul>
              <div className="flex items-center justify-center gap-6 text-gray-600 md:justify-end dark:text-gray-200 mt-9">
                <p className="text-xs">Follow Me</p>
                <div className="flex justify-end gap-3">
                  <a
                    href="https://www.facebook.com/00annamarie00"
                    className="social-icon"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
