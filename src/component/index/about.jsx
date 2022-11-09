import volunteering from '../../images/group-people-volunteering-foodbank-poor-people.jpg'

export default function About(){
    return(
        <section className="section-padding section-bg" id="section_2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                    <img src={volunteering}
                        className="custom-text-box-image img-fluid" alt="" />
                </div>

                <div className="col-lg-6 col-12">
                    <div className="custom-text-box">
                        <h2 className="mb-2">Our Story</h2>

                        <h5 className="mb-3">Kind Heart Charity, Non-Profit Organization</h5>

                        <p className="mb-0">
                            This is a Charity Website
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="custom-text-box mb-lg-0">
                                <h5 className="mb-3">Our Mission</h5>
                                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                                <div className="counter-thumb">
                                    <div className="d-flex">
                                        <span className="counter-number" data-from="1" data-to="2009"
                                            data-speed="1000"></span>
                                        <span className="counter-number-text"></span>
                                    </div>

                                    <span className="counter-text">Founded</span>
                                </div>

                                <div className="counter-thumb mt-4">
                                    <div className="d-flex">
                                        <span className="counter-number" data-from="1" data-to="120"
                                            data-speed="1000"></span>
                                        <span className="counter-number-text">B</span>
                                    </div>

                                    <span className="counter-text">Donations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}