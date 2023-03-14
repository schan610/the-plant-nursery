import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className="about">
      <div className="section-container about__container">
        <div className="about__heading">
          <div className="about__heading__text">
            <div className="about__heading__text__title">
              <h2 className="heading-secondary">About us.</h2>
            </div>
            <p>
              Starting as a group of friends who have loved plants, our mission
              is to spread the joy of plants right to your door.
            </p>
          </div>
          <div className="about__heading__img"></div>
        </div>
        <article className="about__content">
          <div>
            <p>
              As a group of passionate people, we grew our small business from a
              tiny apartment and now a thriving plant nursery. Every plant is
              nursed to the utmost care and shipped happy and carefully, ready
              to be in their new home.
            </p>
          </div>
          <Link href="/about/our-story" className="about__story-link">
            Our Story <HiArrowRight />
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
