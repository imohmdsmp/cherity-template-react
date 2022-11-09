export default function Form(){
return(
<main>
        <section className="donate-section">
            <div className="section-overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mx-auto">
                        <form className="custom-form donate-form" action="#" method="get" role="form">
                            <h3 className="mb-4">Make a donation</h3>

                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <h5 className="mb-3">Donation Frequency</h5>
                                </div>

                                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="DonationFrequency"
                                            id="DonationFrequencyOne" checked />

                                        <label className="form-check-label" for="DonationFrequencyOne">
                                            One Time
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="DonationFrequency"
                                            id="DonationFrequencyMonthly" />

                                        <label className="form-check-label" for="DonationFrequencyMonthly">
                                            Monthly
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-12">
                                    <h5 className="mt-2 mb-3">Select an amount</h5>
                                </div>

                                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            $10
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2"/>
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            $15
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault3"/>
                                        <label className="form-check-label" for="flexRadioDefault3">
                                            $20
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault4"/>
                                        <label className="form-check-label" for="flexRadioDefault4">
                                            $30
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault5"/>
                                        <label className="form-check-label" for="flexRadioDefault5">
                                            $45
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault6"/>
                                        <label className="form-check-label" for="flexRadioDefault6">
                                            $50
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12 form-check-group">
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1">$</span>

                                        <input type="text" className="form-control" placeholder="Custom amount"
                                            aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-12">
                                    <h5 className="mt-1">Personal Info</h5>
                                </div>

                                <div className="col-lg-6 col-12 mt-2">
                                    <input type="text" name="donation-name" id="donation-name" className="form-control"
                                        placeholder="Jack Doe" required/>
                                </div>

                                <div className="col-lg-6 col-12 mt-2">
                                    <input type="email" name="donation-email" id="donation-email"
                                        pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Jackdoe@gmail.com"
                                        required/>
                                </div>

                                <div className="col-lg-12 col-12">
                                    <h5 className="mt-4 pt-1">Choose Payment</h5>
                                </div>

                                <div className="col-lg-12 col-12 mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="DonationPayment"
                                            id="flexRadioDefault9"/>
                                        <label className="form-check-label" for="flexRadioDefault9">
                                            <i className="bi-credit-card custom-icon ms-1"></i>
                                            Debit or Credit card
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="DonationPayment"
                                            id="flexRadioDefault10"/>
                                        <label className="form-check-label" for="flexRadioDefault10">
                                            <i className="bi-paypal custom-icon ms-1"></i>
                                            Paypal
                                        </label>
                                    </div>

                                    <button type="submit" className="form-control mt-4">Submit Donation</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </main>
)
}