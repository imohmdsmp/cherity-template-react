import hands from '../../images/icons/hands.png'
import heart from '../../images/icons/heart.png'
import receive from '../../images/icons/receive.png'
import scholarship from '../../images/icons/scholarship.png'



export default function Welcome(){
    return(
    <section className="section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12 text-center mx-auto">
                            <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="../../donate" target={'_blank'} className="d-block">
                                    <img src={hands} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Become a <strong>volunteer</strong></p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="../../donate" target={'_blank'} className="d-block">
                                    <img src={heart} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text"><strong>Caring</strong> Earth</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="../../donate" target={'_blank'} className="d-block">
                                    <img src={receive} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">Make a <strong>Donation</strong></p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="../../donate" target={'_blank'} className="d-block">
                                    <img src={scholarship} className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text"><strong>Scholarship</strong> Program</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )
}