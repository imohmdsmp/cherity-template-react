import Footer from './global/footer'
import Wlc from '../component/index/wlc'
import About from '../component/index/about'
import Founder from '../component/index/founder'
import MemberShip from '../component/index/member-ship'
import Causes from '../component/index/causes'
import Volunteer from '../component/index/volunteer'
import LatestNews from '../component/index/latest-news'
import HappyCustomers from '../component/index/happyCustomers'
import SimpleSlider from '../component/index/slide'

export default function Index(){
    return(
        <>
            <SimpleSlider/>
            <Wlc />
            <About/>
            <Founder/>
            <MemberShip/>
            <Causes />
            <Volunteer/>
            <LatestNews/>
            <HappyCustomers/>
            <Footer />
        </>
    )
}