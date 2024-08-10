const AboutUs = () => {
  return (
    <>
      <header className="about-us-header">
        <div className="about-us-header-box">
          <h1><span>About</span> Us</h1>
          <div className="text-box">
            <h3>We help you find your prefered recipes so that you can add them to your meal plans.</h3>
          </div>
        </div>
        <div className="about-us-header-image">
          <img src="static/images/about-us.png" alt="Healthy sandwitch" />
        </div>
      </header>
      
      <div className="lifestyle">
        <div className="lifestyle-content-box">
          <div className="lifestyle-text-container">
            <h1><span>Creating</span> your lifestyle</h1>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</h3>
          </div>
          <div className="about-us-main-image"><img src="/static/images/about-us2.png" alt="jumping girl"/></div>
        </div>
      </div>

      <div className="service">
        <h1><span>Our</span> services</h1>
        <div className="service-container">
          <div className="service-text-box">
            <div className="service-icon"><i className="fas fa-utensils"></i></div>
            <h3><span>Healthy recipes</span></h3>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h3>
          </div>
          <div className="service-text-box">
            <div className="service-icon"><i className="fas fa-dumbbell"></i></div>
            <h3><span>Fitness program</span></h3>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h3>
          </div>
          <div className="service-text-box">
            <div className="service-icon"><i className="fas fa-weight"></i></div>
            <h3><span>Weightloss program</span></h3>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
