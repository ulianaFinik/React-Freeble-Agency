import "./style.css"
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Header = () => {
    const [isOpen, setOpen] = useState();

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <a href="#" className="header__logo">SQWD</a>
                        <nav className={`menu ${isOpen ? "menu--active" : ""}`}>
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a href="#" className="menu__link">WORKS</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">ABOUT</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">SERVICES</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">BLOG</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">CONTACTS</a>
                                </li>
                            </ul>
                        </nav>
                        <button onClick={() => setOpen(!isOpen)} className={`menu__btn ${isOpen ? "menu__btn--active" : ""}`}>
                            <span className="menu__btn-line"></span>
                            <span className="menu__btn-line"></span>
                        </button>
                    </div>
                </div>
            </header>


            <Swiper className="swiper header__swiper"
                modules={[ Pagination, A11y ]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
            
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide  swiper-slide--header swiper-slide--header-1">
                        <div className="container slider-container">
                            <h2 className="slider__title">WHERE GREAT IDEAS COME TO&nbsp;LIFE</h2>
                            <div className="slider__text">Passionate creative studio helping startups grow their business!</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide  swiper-slide--header  swiper-slide--header-2"
                     >
                        <div className="container slider-container">
                            <h2 className="slider__title">WHERE GREAT IDEAS COME TO LIFE</h2>
                            <div className="slider__text">Passionate creative studio helping startups grow their business!</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide  swiper-slide--header  swiper-slide--header-3"
                     >
                        <div className="container slider-container">
                            <h2 className="slider__title">WHERE GREAT IDEAS COME TO LIFE</h2>
                            <div className="slider__text">Passionate creative studio helping startups grow their business!</div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}

export default Header;
