import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container section-container">
        <div className="hero__text">
          <h1 className="heading-primary">
            Feel better and <span>revitalize</span> your space with plants
          </h1>
          <p className="text-primary">
            Beautiful plants hand-picked and shipped to your door, grown by
            people who care — happy and healthy guaranteed.
          </p>
          <div className="hero__actions">
            <Link href={"/shop"} className="btn btn--primary">
              Shop now
            </Link>
            <Link href="/about/our-story" className="btn btn--secondary">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
