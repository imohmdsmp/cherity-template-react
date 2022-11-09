import Logo from '../../images/logo.png'

export default function Footer(){
    return(
        <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-12 mb-4">
                    <img src={Logo} className="logo img-fluid" alt="" />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-4">
                    <h5 className="site-footer-title mb-3">Quick Links</h5>

                    <ul className="footer-menu">
                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Our Story</a></li>

                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Newsroom</a></li>

                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Causes</a></li>

                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Become a volunteer</a></li>

                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Partner with us</a></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mx-auto">
                    <h5 className="site-footer-title mb-3">Contact Infomation</h5>

                    <p className="text-white d-flex mb-2">
                        <i className="bi-telephone me-2"></i>

                        <a href="tel:+989919201707" className="site-footer-link">
                            +98-991-920-1707
                        </a>
                    </p>

                    <p className="text-white d-flex">
                        <i className="bi-envelope me-2"></i>

                        <a href="mailto:imohmdsmp@gmail.com" className="site-footer-link">
                            imohmdsmp@gmail.com
                        </a>
                    </p>
                    <a href="#" className="custom-btn btn mt-3">Get Direction</a>
                </div>
            </div>
        </div>

        <div className="site-footer-bottom">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-7 col-12">
                        <p className="copyright-text mb-0">
                        <a href="mailto:imohmdsmp@gmail.com" >
                                    imohmdsmp@gmail.com
                                </a>
                                <a target={'_blank'} href='http://mohammadsmp.com' classNameName='text-white ms-5'>© Mohammad Esmaeilpour portfoli</a>
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                        <ul className="social-icon">
                            <li className="social-icon-item">
                                <a target={'_blank'} href="https://github.com/imohmdsmp" className="social-icon-link bi-github"></a>
                            </li>

                            <li className="social-icon-item">
                                <a target={'_blank'} href="https://www.instagram.com/mohammad_esmaeilpour_web/" className="social-icon-link bi-instagram"></a>
                            </li>

                            <li className="social-icon-item">
                                <a target={'_blank'} href="https://www.linkedin.com/in/mohammad-esmaeilpour-4ab401217/" className="social-icon-link bi-linkedin"></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    )
}