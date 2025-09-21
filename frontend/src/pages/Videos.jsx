import React from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/AuthFooter';

const Card = ({ children, className }) => (
  <div className={`rounded-xl bg-white shadow-lg p-6 ${className}`}>{children}</div>
);

const Video = () => {
  return (
    <section className="py-18 sm:py-16 lg:py-16 min-h-screen">
        <Header/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Watch Our Featured Video
          </h1>
          <p className="mt-6 text-lg leading-8">
            Learn how our platform helps small businesses streamline finances and boost growth.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="overflow-hidden">
            <div className="relative aspect-video w-full rounded-lg shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9kKlZQGEOto?si=2dgLHimTIz_PZb4j"
                title="Business Finance Management"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>

        {/* Description below video */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-base leading-7">
            This video showcases the core features and benefits of our platform, highlighting how it simplifies expense tracking, reporting, and financial management for small business owners.
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Video;
