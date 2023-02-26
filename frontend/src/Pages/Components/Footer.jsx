import React from 'react';
import {FooterBox, FooterFirstHalf, UsefulLinks, Partners, NeedHelp, DownloadApp, FooterSecondHalf, PopularCategories, PopularBrands, Cities, FooterThirdHalf, FooterLeft, FooterRight, FooterFourthHalf} from '../styles/FooterCSS';

const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterFirstHalf>
          <UsefulLinks>
            <ul>
              <li className="footer--headings">Useful Links</li>
              <li>About Us</li>
              <li>Our Blog</li>
              <li>Careers</li>
              <li>Corporate Governance</li>
              <li>Pepperfry In the News</li>
              <li>Find A Studio</li>
              <li>Gift Cards</li>
              <li>Brands</li>
              <li>Customer Reviews</li>
            </ul>
          </UsefulLinks>
          <Partners>
            <ul>
              <li className="footer--headings">Partners</li>
              <li>Sell With Us</li>
              <li>Become a Franchisee</li>
              <li>Design For Us</li>
              <li>Pepperfry Marketplace Policies</li>
              <li>Login to Your Merchant Dashboard</li>
              <li>Important : GST and You</li>
              <li>Corporate Enquiries</li>
            </ul>
          </Partners>
          <NeedHelp>
            <ul>
              <li className="footer--headings">Need Help?</li>
              <li>Contact Us</li>
              <li>Returns & Refund</li>
              <li>Track Your Order</li>
              <li>FAQs</li>
              <li>Buy on Phone</li>
            </ul>
          </NeedHelp>
          <DownloadApp>
              <h2>Download App</h2>
              <img src="apple.png" alt={"AppStore"} /><br/>
              <img src="/googleplay.png" alt={"GooglePlay"} />
          </DownloadApp>
        </FooterFirstHalf>
        <FooterSecondHalf>
          <PopularCategories>
            <h1 className="titles">Popular Categories</h1>
            <p>Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle Bed</p>
          </PopularCategories>
          <PopularBrands>
            <h1 className="titles">Popular Brands</h1>
            <p>Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India, Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa, Duroflex</p>
          </PopularBrands>
          <Cities>
            <h1 className="titles">Cities we deliver to</h1>
            <p>Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad and many more</p>
          </Cities>
        </FooterSecondHalf>
        <hr />
        <FooterThirdHalf>
          <FooterLeft>
            <h1 className="titles">We accept</h1>
            <div className='flex'>
              <img src="/footer-visacard-logo.png" alt={"VisaLogo"} />
              <img src="/footer-mastercard-logo.png" alt={"MasterCardLogo"} />
              <img src="/footer-maestrocard-logo.png" alt={"MaestroCardLogo"} />
              <img src="/footer-amexcard-logo.png" alt={"AmericanExpressLogo"} />
              <img src="/footer-rupaycard-logo.png" alt={"RupayLogo"} />
              <img src="/footer-dinnerscard-logo.png" alt={"DinnersCardLogo"} />
              <img src="/footer-wallet-logo.png" alt={"WalletLogo"} />
              <img src="/footer-internet-banking-logo.png" alt={"InternetBankingLogo"} />
            </div>
          </FooterLeft>
          <FooterRight>
          <h1 className="titles">Like what you see? You'll like us even more here</h1>
            <div className='flex'>
              <img src="/footer-facebook-logo.png" alt={"FacebookLogo"} />
              <img src="/footer-twitter-logo.png" alt={"TwitterLogo"} />
              <img src="/footer-youtube-logo.png" alt={"YoutubeLogo"} />
              <img src="/footer-facebook-logo.png" alt={"InstagramLogo"} />
              <img src="/footer-linkedin-logo.png" alt={"LinkedinLogo"} />
              <img src="/footer-pinterest-logo.png " alt={"PinterestLogo"} />
            </div>
          </FooterRight>
        </FooterThirdHalf>
        <hr />
        <FooterFourthHalf>
          <div className="leftside">
            <h3>Buy In Bulk</h3>
            <h3>Write A Testimonial</h3>
          </div>
          <div className="rightside">
            <h3>Whitehat</h3>
            <h3>Site Map</h3>
            <h3>Terms Of Use</h3>
            <h3>Privacy Policy</h3>
            <h3>Your Data & Security</h3>
            <h3>Grievance Redressal</h3>
          </div>
        </FooterFourthHalf>
      </FooterBox>
    </>
  )
}

export default Footer