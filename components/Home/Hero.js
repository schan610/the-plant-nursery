import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container section-container">
        <div className="hero__text">
          <h1 className="heading-primary">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            quibusdam dolor atque excepturi repellat eius itaque molestias nemo.
          </p>
          <div className="hero__actions">
            <Link href={"/shop"} className="btn btn--primary">
              Shop now
            </Link>
            <Link href="/" className="btn btn--secondary">
              Learn more
            </Link>
          </div>
        </div>

        <div className="hero__img">
          <img
            src="https://images.unsplash.com/photo-1560105908-5d41e79c1043?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBwbGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
