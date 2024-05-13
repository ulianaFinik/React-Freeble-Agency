import "./style.css"

const Contacts = () => {
    return (
        <section className="contacts">
            <h2 className="contacts__title hidden"></h2>
            <div className="contacts__container">
                <a href="tel:8900000000" className="contacts__link  contacts-link">
                    <svg className="contacts__link-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 14V12M12 14V16M12 14H18C19.1046 14 20 13.1046 20 12M12 14H6C4.89543 14 4 13.1046 4 12V8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V17M20 12V11M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                            stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="contacts-link__name">Want to work together?</span>
                    <span className="contacts-link__text">Amazing. Tell us about your project!</span>
                </a>

                <a href="tel:8900000000" className="contacts__link  contacts-link">
                    <svg className="contacts__link-icon" width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 6.5L14.38 12.46H14.37L12.32 14.18C12.13 14.33 11.86 14.33 11.68 14.18L2.5 6.5H21.5Z"
                            stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.4999 18.5L15.9399 13.76" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8.07 13.75L2.5 18.5" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M21.5 8.5V18.5H2.5V8.5" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <span className="contacts-link__name">Сontact us</span>
                    <span className="contacts-link__text">Get in touch</span>
                </a>

            </div>
        </section>
    );
}

export default Contacts;