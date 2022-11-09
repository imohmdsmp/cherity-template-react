import volunteerTshirt from "../../images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg"

export default function Volunteer(){
    return(
        
        <section className="volunteer-section section-padding" id="section_4">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12">
                        <h2 className="text-white mb-4">Volunteer</h2>

                        <form className="custom-form volunteer-form mb-5 mb-lg-0" action="#" method="post" role="form">
                            <h3 className="mb-4">Become a volunteer today</h3>

                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <input type="text" name="volunteer-name" id="volunteer-name" className="form-control"
                                        placeholder="Mohammad Esmaeilpour" required />
                                </div>

                                <div className="col-lg-6 col-12">
                                    <input type="email" name="volunteer-email" id="volunteer-email"
                                        pattern="[^ @]*@[^ @]*" className="form-control" placeholder="imohmdmsmp@gmail.com"
                                        required />
                                </div>

                                <div className="col-lg-6 col-12">
                                    <input type="text" name="volunteer-subject" id="volunteer-subject"
                                        className="form-control" placeholder="Subject" required />
                                </div>

                                <div className="col-lg-6 col-12">
                                    <div className="input-group input-group-file">
                                        <input type="file" className="form-control" id="inputGroupFile02" />

                                        <label className="input-group-text" for="inputGroupFile02">Upload your CV</label>

                                        <i className="bi-cloud-arrow-up ms-auto"></i>
                                    </div>
                                </div>
                            </div>

                            <textarea name="volunteer-message" rows="3" className="form-control" id="volunteer-message"
                                placeholder="Comment (Optional)"></textarea>

                            <button type="submit" className="form-control">Submit</button>
                        </form>
                    </div>

                    <div className="col-lg-6 col-12">
                        <img src={volunteerTshirt}
                            className="volunteer-image img-fluid" alt="" />

                        <div className="custom-block-body text-center">
                            <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>

                            <p className="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm
                                tokito Professional charity theme based</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}