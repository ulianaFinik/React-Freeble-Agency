import "./style.css"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__container">
                    <div className="about__box">
                        <h2 className="about__title">WE ARE<br/>THE SQWD</h2>
                        <p className="about__text  about__text--left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis commodi animi architecto?
                        </p>
                    </div>
                    <div className="about__images">
                        <img className="about__img about__img--1" src="img/about-1.jpg" alt="" />
                            <span className="about__img about__img--2"></span>
                            <img className="about__img about__img--3" src="img/about-2.jpg" alt="" />
                            </div>
                            <p className="about__text  about__text--right">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis commodi animi architecto?
                            </p>
                    </div>
                </div>
        </section>
    );
}

export default About;