import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Plane, Hotel, Calendar, Sparkles } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStart = () => {
    navigate("/generate");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-16">

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-sky-50 to-white"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-100 blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

              <div className="inline-flex items-center px-3 py-1 bg-sky-50 text-sky-600 rounded-full mb-6">
                <Sparkles size={14} className="mr-2" />
                AI Travel Planner
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Plan your perfect trip with{" "}
                <span className="text-sky-600">AI</span>
              </h1>

              <p className="mt-5 text-lg text-slate-600">
                Upload your flight, hotel, or train booking and instantly generate a smart travel itinerary.
              </p>

              {/* BUTTON (FIXED - NO UI LIBRARY) */}
              <button
                onClick={handleStart}
                className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full flex items-center gap-2"
              >
                Generate Itinerary
                <ArrowRight size={18} />
              </button>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-6">
                <div>
                  <div className="text-2xl font-bold text-sky-600">10K+</div>
                  <div className="text-sm text-slate-500">Trips</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-600">95%</div>
                  <div className="text-sm text-slate-500">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-600">3 sec</div>
                  <div className="text-sm text-slate-500">AI Speed</div>
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="bg-white shadow-xl rounded-2xl p-6 border">

                <div className="flex items-center gap-3 mb-4">
                  <Plane className="text-sky-600" />
                  <h3 className="font-semibold">AI Trip Preview</h3>
                </div>

                <div className="space-y-4">

                  <div className="p-4 bg-sky-50 rounded-xl flex items-center gap-3">
                    <MapPin className="text-sky-600" />
                    <div>
                      <p className="font-medium">Destination</p>
                      <p className="text-sm text-slate-500">Goa</p>
                    </div>
                  </div>

                  <div className="p-4 bg-indigo-50 rounded-xl flex items-center gap-3">
                    <Hotel className="text-indigo-600" />
                    <div>
                      <p className="font-medium">Hotel</p>
                      <p className="text-sm text-slate-500">Grand Hyatt Goa</p>
                    </div>
                  </div>

                  <div className="p-4 bg-sky-50 rounded-xl flex items-center gap-3">
                    <Calendar className="text-sky-600" />
                    <div>
                      <p className="font-medium">Dates</p>
                      <p className="text-sm text-slate-500">12 - 15 July</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white rounded-xl shadow">
              <Plane className="mx-auto text-sky-600 mb-3" />
              <h3 className="font-semibold">Upload Booking</h3>
              <p className="text-sm text-slate-500 mt-2">
                Add your PDF ticket
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <Sparkles className="mx-auto text-sky-600 mb-3" />
              <h3 className="font-semibold">AI Process</h3>
              <p className="text-sm text-slate-500 mt-2">
                AI builds itinerary
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <MapPin className="mx-auto text-sky-600 mb-3" />
              <h3 className="font-semibold">Get Plan</h3>
              <p className="text-sm text-slate-500 mt-2">
                Ready to travel
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-600 text-white text-center">

        <h2 className="text-3xl font-bold">
          Start your journey today
        </h2>

        <p className="mt-3 text-sky-100">
          AI will plan everything for you
        </p>

        <button
          onClick={handleStart}
          className="mt-6 bg-white text-sky-600 px-6 py-3 rounded-full font-medium hover:bg-sky-100"
        >
          Generate Itinerary
        </button>

      </section>

    </div>
  );
};

export default HomePage;