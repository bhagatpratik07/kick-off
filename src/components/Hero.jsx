import mobile from "../assets/images/mobile_profile.png";
import { Helmet } from "react-helmet";

export default function Hero() {
  return (
    <div>
      <section className="bg-black ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-4xl mb-4 text-4xl sm:text-7xl font-extrabold tracking-tight leading-none text-white">
              Your football journey starts here
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">
              Connect with fellow academy players, share your passion, and get
              discovered by scouts on the ultimate football social network.
            </p>

            <div className="max-w-md">
              <div className="flex items-center mt-1">
                {/* <input
                  type="email"
                  id="input-9"
                  className="w-full h-10 px-3 text-sm  border border-r-0 rounded-r-none focus:outline-none rounded shadow-sm"
                  placeholder="user@mail.com"
                />
                <button className="h-10 px-4 text-sm w-44 bg-blue-500 border border-l-0 rounded-r shadow-sm  cursor-pointer  focus:outline-none">
                  Join waitlist
                </button> */}

                <div
                  id="getWaitlistContainer"
                  data-waitlist_id="17166"
                  data-widget_type="WIDGET_2"
                ></div>
                <Helmet>
                  <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
                  />
                  <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
                </Helmet>
              </div>
            </div>
          </div>

          <div className="lg:mt-0 lg:col-span-4 lg:flex">
            <img src={mobile} alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}
