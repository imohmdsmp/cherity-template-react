import africanKids from '../../images/causes/group-african-kids-paying-attention-class.jpg'
import childLandfill from '../../images/causes/poor-child-landfill-looks-forward-with-hope.jpg'
import africanWoman from '../../images/causes/african-woman-pouring-water-recipient-outdoors.jpg'
export default function Causes(){
    return(
        <section className="section-padding" id="section_3">
        <div className="container">
            <div className="row">

                <div className="col-lg-12 col-12 text-center mb-4">
                    <h2>Our Causes</h2>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block-wrap">
                        <img src={africanKids}
                            className="custom-block-image img-fluid" alt="" />

                        <div className="custom-block">
                            <div className="custom-block-body">
                                <h5 className="mb-3">Children Education</h5>

                                <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>

                                <div className="progress mt-4">
                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="d-flex align-items-center my-2">
                                    <p className="mb-0">
                                        <strong>Raised:</strong>
                                        $18,500
                                    </p>

                                    <p className="ms-auto mb-0">
                                        <strong>Goal:</strong>
                                        $32,000
                                    </p>
                                </div>
                            </div>

                            <a target={'_blank'} href="../../donate" className="custom-btn btn">Donate now</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block-wrap">
                        <img src={childLandfill}
                            className="custom-block-image img-fluid" alt="" />

                        <div className="custom-block">
                            <div className="custom-block-body">
                                <h5 className="mb-3">Poverty Development</h5>

                                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus
                                    tempor</p>

                                <div className="progress mt-4">
                                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="d-flex align-items-center my-2">
                                    <p className="mb-0">
                                        <strong>Raised:</strong>
                                        $27,600
                                    </p>

                                    <p className="ms-auto mb-0">
                                        <strong>Goal:</strong>
                                        $60,000
                                    </p>
                                </div>
                            </div>

                            <a target={'_blank'} href="../../donate" className="custom-btn btn">Donate now</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block-wrap">
                        <img src={africanWoman}
                            className="custom-block-image img-fluid" alt=""/>

                        <div className="custom-block">
                            <div className="custom-block-body">
                                <h5 className="mb-3">Supply drinking water</h5>

                                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                </p>

                                <div className="progress mt-4">
                                    <div className="progress-bar w-100" role="progressbar" aria-valuenow="100"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="d-flex align-items-center my-2">
                                    <p className="mb-0">
                                        <strong>Raised:</strong>
                                        $84,600
                                    </p>

                                    <p className="ms-auto mb-0">
                                        <strong>Goal:</strong>
                                        $100,000
                                    </p>
                                </div>
                            </div>

                            <a target={'_blank'} href="../../donate" className="custom-btn btn">Donate now</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}