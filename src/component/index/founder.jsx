import whoOrganized from '../../images/portrait-volunteer-who-organized-donations-charity.jpg'

export default function Founder(){
    return(
        <section className="about-section section-padding">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-md-5 col-12">
                    <img src={whoOrganized}
                        className="about-image ms-lg-auto bg-light shadow-lg img-fluid" alt="" />
                </div>

                <div className="col-lg-5 col-md-7 col-12">
                    <div className="custom-text-block">
                        <h2 className="mb-0">Sandy Chan</h2>

                        <p className="text-muted mb-lg-4 mb-md-4">Founding Partner</p>

                        <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional
                            charity theme based</p>

                        <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus</p>

                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}