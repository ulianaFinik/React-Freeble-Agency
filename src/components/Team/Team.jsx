import "./style.css"

const Works = () => {

    return (
        <section className="team">
            <div className="container">
                <h2 className="title team__title">Our Team</h2>
                <div className="team__box">

                    <div className="team__item">
                        <div className="team__item-inner  team__item-inner--1">
                            <img src="img/team-1.jpg" alt="" className="team__item-img" />
                            <div className="team__info">
                                <span className="team__info-name">TOM JONES</span>
                                <span className="team__info-position">Creative Director</span>
                                <span className="team__info-text">Create with simplicity in mind!</span>
                            </div>
                        </div>
                    </div>
                    <div className="team__item">
                        <div className="team__item-inner  team__item-inner--2">
                            <img src="img/team-2.jpg" alt="" className="team__item-img" />
                            <div className="team__info">
                                <span className="team__info-name">TOM JONES</span>
                                <span className="team__info-position">Creative Director</span>
                                <span className="team__info-text">Create with simplicity in mind!</span>
                            </div>
                        </div>
                    </div>
                    <div className="team__item">
                        <div className="team__item-inner  team__item-inner--3">
                            <img src="img/team-3.jpg" alt="" className="team__item-img" />
                            <div className="team__info">
                                <span className="team__info-name">TOM JONES</span>
                                <span className="team__info-position">Creative Director</span>
                                <span className="team__info-text">Create with simplicity in mind!</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Works;