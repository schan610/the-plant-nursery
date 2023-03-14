import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
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

            <Link href="/" className="btn btn--secondary">
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
        {showStoryDetails && (
          <section className="story__content">
            <article className="story__content__item">
              <div className="story__content__text">
                <h2 className="heading-secondary">
                  <span>2018</span> &#8212; Startup
                </h2>
                <p>
                  With years of nursing plants and collecting handfuls of
                  healthy cuttings, we decided to start a business of our own in
                  a small studio apartment.
                </p>
              </div>
              <div className="story__content__img">
                <img
                  src="https://images.unsplash.com/photo-1449247613801-ab06418e2861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt=""
                />
              </div>
            </article>
            <article className="story__content__item">
              <div className="story__content__img">
                <img
                  src="https://images.unsplash.com/photo-1607163365613-c281acde5012?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className="story__content__text">
                <h2 className="heading-secondary">
                  <span>2020</span> &#8212; Expanding
                </h2>
                <p>
                  2 years after developing a business, sales have been racking
                  up and the small studio apartment is getting cramped. We
                  needed to expand.
                </p>
              </div>
            </article>
            <article className="story__content__item">
              <div className="story__content__text">
                <h2 className="heading-secondary">
                  <span>2022</span> &#8212; Plant Nursery
                </h2>
                <p>
                  Fast-forward to present day, we have successfully expanded to
                  an outdoor plant nursery where our plants are thriving with a
                  store where customers visit on a daily basis.
                </p>
              </div>
              <div className="story__content__img">
                <img
                  src="https://images.unsplash.com/photo-1678254487407-a28544364f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1510&q=80"
                  alt=""
                />
              </div>
            </article>
          </section>
        )}
      </div>
    </section>
  );
};

export default OurStory;
