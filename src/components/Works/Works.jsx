import "./style.css"

const Works = () => {

    return (
        <section className="works">
            <div className="container">
                <div className="works__box">
                    <div className="works__left">
                        <h2 className="title works__title">Latest Works</h2>
                        <ul className="works__categories">
                            <li className="works__categories-item">
                                <button className="works__categories-btn">All</button>
                            </li>
                            <li className="works__categories-item">
                                <button className="works__categories-btn">Web Design</button>
                            </li>
                            <li className="works__categories-item">
                                <button className="works__categories-btn">Branding</button>
                            </li>
                            <li className="works__categories-item">
                                <button className="works__categories-btn">Photography</button>
                            </li>
                            <li className="works__categories-item">
                                <button className="works__categories-btn">Illustration</button>
                            </li>
                        </ul>
                        <div className="works__left-list">

                            <div className="works__item">
                                <article className="works__article">
                                    <div className="works__article-top">
                                        <img src="img/works-2.jpg" alt="" className="works__article-img" />
                                            <h3 className="works__article-title  works__article-title--left">A KITTEN’S<br/>LIFE</h3>
                                    </div>
                                    <div className="works__article-bottom  works__article-bottom--left">
                                        <span className="works__article-name">Photography</span>
                                        <span className="works__article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                        <a href="" className="works__article-link">read more</a>
                                    </div>
                                </article>
                            </div>
                            <div className="works__item">
                                <article className="works__article">
                                    <div className="works__article-top">
                                        <img src="img/works-3.jpg" alt="" className="works__article-img" />
                                            <h3 className="works__article-title  works__article-title--left">Apple's lost magic</h3>
                                    </div>
                                    <div className="works__article-bottom  works__article-bottom--left">
                                        <span className="works__article-name">Photography</span>
                                        <span className="works__article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                        <a href="" className="works__article-link">read more</a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className="works__right">
                        <div className="works__left-list">

                            <div className="works__item">
                                <article className="works__article">
                                    <div className="works__article-top">
                                        <img src="img/works-1.jpg" alt="" className="works__article-img" />
                                            <h3 className="works__article-title  works__article-title--right">100 years<br /> photography</h3>
                                    </div>
                                    <div className="works__article-bottom  works__article-bottom--right">
                                        <span className="works__article-name">Photography</span>
                                        <span className="works__article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                        <a href="" className="works__article-link">read more</a>
                                    </div>
                                </article>
                            </div>
                            <div className="works__item">
                                <article className="works__article">
                                    <div className="works__article-top">
                                        <img src="img/works-4.jpg" alt="" className="works__article-img" />
                                            <h3 className="works__article-title  works__article-title--right">Groovemade<br/> products for mac</h3>
                                    </div>
                                    <div className="works__article-bottom  works__article-bottom--right">
                                        <span className="works__article-name">Photography</span>
                                        <span className="works__article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                        <a href="" className="works__article-link">read more</a>
                                    </div>
                                </article>
                            </div>
                            <a href="" className="works__link">view more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;