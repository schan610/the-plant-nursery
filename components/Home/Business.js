import Link from "next/link";

const Business = () => {
  return (
    <section className="business">
      <div className="business__container section-container">
        <div className="business__img business__img--1">
          <img
            src="https://images.unsplash.com/photo-1528467279403-46af96c37ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnQlMjBjYXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
            alt=""
          />
        </div>

        <div className="business__img business__img--2">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>

        <div className="business__img business__img--3">
          <img
            src="https://images.unsplash.com/photo-1492201794891-32eece378309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdXNlcGxhbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
            alt=""
          />
        </div>

        <div className="business__main">
          <h2 className="heading-secondary business__main__title">
            A Business Built from Passion
          </h2>
          <p className="text-primary business__main__text">
            Starting out as a small business with a small group of people who
            are passionate about plants, we take pride in caring and shipping
            out the best quality of plants to your door.
          </p>
          <Link href={"/"} className=" btn btn--secondary">
            Learn More
          </Link>
          <div className="business__main__img">
            <div>
              <img
                src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW50JTIwbnVyc2VyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=2000&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
