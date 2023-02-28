import Link from "next/link";
import Image from "next/image";

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
            <Link href="/" className="btn btn--secondary">
              Learn more
            </Link>
          </div>
        </div>

        <div className="hero__img">
          <Image
            src="https://images.unsplash.com/photo-1560105908-5d41e79c1043?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBwbGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={500}
            height={660}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
