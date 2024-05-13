import "./style.css"

const OurServices = () => {

    return (
        <section className="services">
            <div className="container">
                <h2 className="title services__title">Our services</h2>
                <div className="services__box">

                    <div className="services__item">
                        <div className="services__inner">
                            <div className="services__top">
                                <h3 className="services__item-title" Branding>Brands</h3>
                                <div className="services__icon  services__icon--1"></div>
                            </div>
                            <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt.</p>
                            <a href="" className="services__link">READ MORE</a>
                        </div>
                    </div>
                    <div className="services__item">
                        <div className="services__inner">
                            <div className="services__top">
                                <h3 className="services__item-title" Branding>Groups</h3>
                                <div className="services__icon  services__icon--2"></div>
                            </div>
                            <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt.</p>
                            <a href="" className="services__link">READ MORE</a>
                        </div>
                    </div>
                    <div className="services__item">
                        <div className="services__inner">
                            <div className="services__top">
                                <h3 className="services__item-title" Branding>Logos</h3>
                                <div className="services__icon  services__icon--3"></div>
                            </div>
                            <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt.</p>
                            <a href="" className="services__link">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default OurServices;