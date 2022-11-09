import withClothing from "../../images/news/medium-shot-volunteers-with-clothing-donations.jpg"
import AfricanDr from "../../images/news/africa-humanitarian-aid-doctor.jpg"
import workTogether from "../../images/news/close-up-happy-people-working-together.jpg"
import collection from "../../images/news/medium-shot-people-collecting-foodstuff.jpg"
export default function Clothes(){
return(
<section className="news-section section-padding">
    <div className="container">
        <div className="row">

            <div className="col-lg-7 col-12">
                <div className="news-block">
                    <div className="news-block-top">
                        <a href="news-detail.html">
                            <img src={withClothing}
                                className="news-image img-fluid" alt=""/>
                        </a>

                        <div className="news-category-block">
                            <a href="#" className="category-block-link">
                                Lifestyle,
                            </a>

                            <a href="#" className="category-block-link">
                                Clothing Donation
                            </a>
                        </div>
                    </div>

                    <div className="news-block-info">
                        <div className="d-flex mt-2">
                            <div className="news-block-date">
                                <p>
                                    <i className="bi-calendar4 custom-icon me-1"></i>
                                    October 18, 2036
                                </p>
                            </div>

                            <div className="news-block-author mx-5">
                                <p>
                                    <i className="bi-person custom-icon me-1"></i>
                                    By Admin
                                </p>
                            </div>

                            <div className="news-block-comment">
                                <p>
                                    <i className="bi-chat-left custom-icon me-1"></i>
                                    32 Comments
                                </p>
                            </div>
                        </div>

                        <div className="news-block-title mb-2">
                            <h4><a href="news-detail.html" className="news-block-title-link">Clothing donation to
                                    urban area</a></h4>
                        </div>

                        <div className="news-block-body">
                            <p>This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can
                                feel free to use it. Please tell your friends about TemplateMo website. Thank
                                you.</p>
                        </div>
                    </div>
                </div>

                <div className="news-block mt-3">
                    <div className="news-block-top">
                        <a href="news-detail.html">
                            <img src={collection}
                                className="news-image img-fluid" alt=""/>
                        </a>

                        <div className="news-category-block">
                            <a href="#" className="category-block-link">
                                Food,
                            </a>

                            <a href="#" className="category-block-link">
                                Donation,
                            </a>

                            <a href="#" className="category-block-link">
                                Caring
                            </a>
                        </div>
                    </div>

                    <div className="news-block-info">
                        <div className="d-flex mt-2">
                            <div className="news-block-date">
                                <p>
                                    <i className="bi-calendar4 custom-icon me-1"></i>
                                    October 12, 2036
                                </p>
                            </div>

                            <div className="news-block-author mx-5">
                                <p>
                                    <i className="bi-person custom-icon me-1"></i>
                                    By Admin
                                </p>
                            </div>

                            <div className="news-block-comment">
                                <p>
                                    <i className="bi-chat-left custom-icon me-1"></i>
                                    35 Comments
                                </p>
                            </div>
                        </div>

                        <div className="news-block-title mb-2">
                            <h4><a href="news-detail.html" className="news-block-title-link">Food donation area</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-12 mx-auto mt-4 mt-lg-0">
                <form className="custom-form search-form" action="#" method="post" role="form">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>

                    <button type="submit" className="form-control">
                        <i className="bi-search"></i>
                    </button>
                </form>

                <h5 className="mt-5 mb-3">Recent news</h5>

                <div className="news-block news-block-two-col d-flex mt-4">
                    <div className="news-block-two-col-image-wrap">
                        <a href="news-detail.html">
                            <img src={AfricanDr} className="news-image img-fluid"
                                alt=""/>
                        </a>
                    </div>

                    <div className="news-block-two-col-info">
                        <div className="news-block-title mb-2">
                            <h6><a href="news-detail.html" className="news-block-title-link">Food donation area</a>
                            </h6>
                        </div>

                        <div className="news-block-date">
                            <p>
                                <i className="bi-calendar4 custom-icon me-1"></i>
                                October 16, 2036
                            </p>
                        </div>
                    </div>
                </div>

                <div className="news-block news-block-two-col d-flex mt-4">
                    <div className="news-block-two-col-image-wrap">
                        <a href="news-detail.html">
                            <img src={workTogether}
                                className="news-image img-fluid" alt=""/>
                        </a>
                    </div>

                    <div className="news-block-two-col-info">
                        <div className="news-block-title mb-2">
                            <h6><a href="news-detail.html" className="news-block-title-link">Volunteering Clean</a>
                            </h6>
                        </div>

                        <div className="news-block-date">
                            <p>
                                <i className="bi-calendar4 custom-icon me-1"></i>
                                October 24, 2036
                            </p>
                        </div>
                    </div>
                </div>

                <div className="category-block d-flex flex-column">
                    <h5 className="mb-3">Categories</h5>

                    <a href="#" className="category-block-link">
                        Drinking water
                        <span className="badge">20</span>
                    </a>

                    <a href="#" className="category-block-link">
                        Food Donation
                        <span className="badge">30</span>
                    </a>

                    <a href="#" className="category-block-link">
                        Children Education
                        <span className="badge">10</span>
                    </a>

                    <a href="#" className="category-block-link">
                        Poverty Development
                        <span className="badge">15</span>
                    </a>

                    <a href="#" className="category-block-link">
                        Clothing Donation
                        <span className="badge">20</span>
                    </a>
                </div>

                <div className="tags-block">
                    <h5 className="mb-3">Tags</h5>

                    <a href="#" className="tags-block-link">
                        Donation
                    </a>

                    <a href="#" className="tags-block-link">
                        Clothing
                    </a>

                    <a href="#" className="tags-block-link">
                        Food
                    </a>

                    <a href="#" className="tags-block-link">
                        Children
                    </a>

                    <a href="#" className="tags-block-link">
                        Education
                    </a>

                    <a href="#" className="tags-block-link">
                        Poverty
                    </a>

                    <a href="#" className="tags-block-link">
                        Clean Water
                    </a>
                </div>

                <form className="custom-form subscribe-form" action="#" method="post" role="form">
                    <h5 className="mb-4">Newsletter Form</h5>

                    <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*"
                        className="form-control" placeholder="Email Address" required/>

                    <div className="col-lg-12 col-12">
                        <button type="submit" className="form-control">Subscribe</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</section>
)
}