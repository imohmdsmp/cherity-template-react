import Footer from './global/footer'
import DonationCloth from '../component/new-details/donationCloth'
import TextDonation from '../component/new-details/textDonation'

export default function NewDetails(){
    return(
        <main>
            <DonationCloth/>
            <TextDonation/>
            <Footer />
        </main>
    )
}