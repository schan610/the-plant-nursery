// FEATURE 6 ITEMS

const FeaturedItems = () => {
  return (
    <section className="featured">
      <div className="featured__container section-container">
        <h1 className="heading-secondary">Featured Items</h1>

        <ul className="featured__carousel">
          <li className="featured__item">
            <div className="featured__item__img">
              <img
                src="https://images.unsplash.com/photo-1675676578115-a5169d22abe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                alt="Featured product"
              />
            </div>

            <div className="featured__item__info">
              <h3 className="featured__item__info__title heading-tertiary">
                Aglaonema Greyhound
              </h3>
              <span>$163</span>
            </div>

            <div className="variations">
              <span className="variations__current">Charcoal</span>
              <ul className="variations__list">
                <li className="variations__color variations__color--active variations__color--charcoal "></li>
                <li className="variations__color  variations__color--whitesmoke "></li>
                <li className="variations__color  variations__color--ashgrey "></li>
                <li className="variations__color  variations__color--calmblue "></li>
                <li className="variations__color  variations__color--honeydew "></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedItems;
