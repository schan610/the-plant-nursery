import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import StoryDetails from "./StoryDetails";
import { AnimatePresence } from "framer-motion";
const OurStory = () => {
  const [showStoryDetails, setShowStoryDetails] = useState(false);
  return (
    <section className="story">
      <div className="section-container story__container">
        <div className="story__heading">
          <div className="story__heading__img"></div>
          <div className="story__heading__text">
            <div className="story__heading__text__title">
              <h2 className="heading-secondary">Our Story.</h2>
            </div>
            <p>
              Starting out as two plant hobbyists in 2012, over the years we
              have connnected with other plant enthusiasts and have learned and
              grown together. After coming together and starting out from humble
              beginnings as a close group of friends, we have grown the business
              to a thriving plant nursery with the goal of spreading the love
              for plants.
            </p>

            <Link href="/about/visit" className="btn btn--secondary">
              Visit us
            </Link>
          </div>
        </div>
        <button
          className="story__readmore"
          onClick={() => setShowStoryDetails((prevState) => !prevState)}
        >
          Read More {showStoryDetails ? <BiChevronsUp /> : <BiChevronsDown />}
        </button>
        <AnimatePresence>
          {showStoryDetails && <StoryDetails />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurStory;
