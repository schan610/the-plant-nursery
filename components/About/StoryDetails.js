import { motion, easeIn } from "framer-motion";

const StoryDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
          type: easeIn,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0,
        },
      }}
    >
      <section className="story__content">
        <article className="story__content__item">
          <div className="story__content__text">
            <h2 className="heading-secondary">
              <span>2018</span> &#8212; Startup
            </h2>
            <p>
              With years of nursing plants and collecting handfuls of healthy
              cuttings, we decided to start a business of our own in a small
              studio apartment.
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
              2 years after developing a business, sales have been racking up
              and the small studio apartment is getting cramped. We needed to
              expand.
            </p>
          </div>
        </article>
        <article className="story__content__item">
          <div className="story__content__text">
            <h2 className="heading-secondary">
              <span>2022</span> &#8212; Plant Nursery
            </h2>
            <p>
              Fast-forward to present day, we have successfully expanded to an
              outdoor plant nursery where our plants are thriving with a store
              where customers visit on a daily basis.
            </p>
          </div>
          <div className="story__content__img">
            <img
              src="https://images.unsplash.com/photo-1525033842647-a956848705f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </article>
      </section>
    </motion.div>
  );
};

export default StoryDetails;
