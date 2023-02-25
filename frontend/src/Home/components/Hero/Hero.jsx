import React from 'react'
import { HomeContainer, RectangularBlock, Shop, Eyeing, Shoppee, New, HomeDecor, BlueBox, TopBrand, TwoBigImages, ImageDiv, Costumers, NeedHelpBuying  } from './HeroCSS'
import ImageSlider from '../ImageSlider/ImageSlider'
import { SliderData } from '../ImageSlider/SliderData';

const Hero = () => {
  return (
    <>
        <HomeContainer>
            <div className="belowNavbar">
                {/* <ImageSlider slides={SliderData}/> */}
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Scandinavian_RHS_26042022.jpg" alt={"SideImage"} className="sideImage"/>
            </div>
            <RectangularBlock><img src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_21042022.jpg" alt={"T&C"}/></RectangularBlock>
            <h1>Shop By Room</h1>
            <Shop>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1_2x_31032022.jpg" alt={"Living"} />
                    <div className="title">Living Room</div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2_2x_31032022.jpg" alt={"WFH"} />
                    <div className="title">Work From Home</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3_2x_31032022.jpg" alt={"Bedroom"} />
                    <div className="title">Bedroom</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4_2x_31032022.jpg" alt={"KidsRoom"} />
                    <div className="title">Kids Room</div>
                </div>
            </Shop>
            <h1>What's Everyone Eyeing</h1>
            <Eyeing>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_31032022.jpg" alt={"Wardrobes"} className="sideOne"/>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_31032022.jpg" alt={"WallArt"} className="sideTwo"/>
                </div>
                <div className="quadra">
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_31032022.jpg" alt={"ShoeRack"} className="quadraImage"/> 
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_31032022.jpg" alt={"KingSizeBed"} className="quadraImage"/> 
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_31032022.jpg" alt={"SeaterSofa"} className="quadraImage"/>
                    </div>
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_31032022.jpg" alt={"HangingLights"} className="quadraImage"/>
                    </div>
                </div>
            </Eyeing>
            <h1>Your Pocket-Friendly Shoppe</h1>
            <Shoppee>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_31032022.jpg" alt={"QueenSizeBeds"} />
                    <div className="upperText">Queen Size Beds</div>
                    <div className="lowerText">Under Rs. 20,000</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_2_2x_31032022.jpg" alt={"StudyTables"} />
                    <div className="upperText">Study Tables</div>
                    <div className="lowerText">Under Rs. 10,000</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_31032022.jpg" alt={"PortableTables"} />
                    <div className="upperText">Portable Tables</div>
                    <div className="lowerText">Under Rs. 3,000</div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_4_2x_31032022.jpg" alt={"OfficeChairs"} />
                    <div className="upperText">Office Chairs</div>
                    <div className="lowerText">Under Rs. 9,000</div>
                </div>
            </Shoppee>
            <h1>Ready For The New?</h1>
            <New>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_1_2x_31032022.jpg" alt={"Aelber"} />
                    <div className="upperText">Aelber Collection</div>
                    <div className="lowerText">So Plush</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_2_2x_31032022.jpg" alt={"Alabaster"} />
                    <div className="upperText">Alabaster Collection</div>
                    <div className="lowerText">Winsome Whites</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_3_2x_31032022.jpg" alt={"DisneyCollection"} />
                    <div className="upperText">Disney Collection</div>
                    <div className="lowerText">The Happiest Collection</div>
                </div>
            </New>
            <h1>Home Décor You Can't Ignore</h1>
            <HomeDecor>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_1_2x_31032022.jpg" alt={"BedSheets"} />
                    <div className="upperText">Bed Sheets</div>
                    <div className="lowerText">Fresh & Breezy</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_2_2x_31032022.jpg" alt={"WallArt"} />
                    <div className="upperText">Metal Wall Art</div>
                    <div className="lowerText">Oh So Glam</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_3_2x_31032022.jpg" alt={"Figurines"} />
                    <div className="upperText">Figurines</div>
                    <div className="lowerText">Starting Rs. 265</div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_4_2x_31032022.jpg" alt={"CushionCovers"} />
                    <div className="upperText">Cushion Covers</div>
                    <div className="lowerText">Quick Makeovers</div>
                </div>
            </HomeDecor>
            <BlueBox>
                <div>
                    <h1>We’ve Got Your Style</h1><br/>
                    <p>Your home is a reflection of you. Nail your aesthetic with products our stylists love and recommend</p><br/>
                    <div style={{color:"#ff7035"}}>View all Styles</div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_1_2x_31032022.jpg" alt={"Modern"} />
                    <div className="upperText">Modern</div>
                    <div className="lowerText">Form Meets Function</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_2_2x_31032022.jpg" alt={"Traditional"} />
                    <div className="upperText">Traditional</div>
                    <div className="lowerText">Old World Charm</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_3_2x_31032022.jpg" alt={"Industrial"} />
                    <div className="upperText">Industrial</div>
                    <div className="lowerText">Prefect Imperfections</div>
                </div>
            </BlueBox>
            <h1>Top Brands To Choose From</h1>
            <TopBrand>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_1_2x_31032022.jpg" alt={"Industrial"} />
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_2_2x_31032022.jpg" alt={"Industrial"} />
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_3_2x_31032022.jpg" alt={"Industrial"} />
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_4_2x_31032022.jpg" alt={"Industrial"} />
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_5_2x_31032022.jpg" alt={"Industrial"} />
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_6_2x_31032022.jpg" alt={"Industrial"} />
            </TopBrand>
            <TwoBigImages>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Mattress_Block_Web_2X_04032022.jpg" alt={"ShopNowOne"}/>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Modular_Block_Web_2X_04032022.jpg" alt={"ShopNowTwo"}/>
            </TwoBigImages>
            <ImageDiv>
                <img src="https://ii1.pepperfry.com/images/hp_more_from_store_bg.jpg" alt={"SofaImage"}/>
                <div className="textDiv">
                    <h1>More From The Store</h1><br/>
                    <div className="lists">
                        <div>
                            <h3>Furniture</h3>
                            <ul>
                                <li>Sofas & Recliners</li>
                                <li>Seating</li>
                                <li>Chairs</li>
                                <li>Beds</li>
                                <li>Cabinetry</li>
                                <li>Tables</li>
                                <li>Dining</li>
                                <li>Kids & Teens</li>
                                <li>Home Office</li>
                                <li>Sofa Chairs</li>
                                <li>Entertainment Units</li>
                                <li>Outdoor</li>
                                <li>Bar Furniture</li>
                                <li>Furniture & Home Services</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Sofas & Recliners</h3>
                            <ul>
                                <li>By size</li>
                                <li>By Types</li>
                                <li>By Style</li>
                                <li>By Material</li>
                                <li>Soda Chairs</li>
                            </ul><br />
                            <h3>Décor</h3>
                            <ul>
                                <li>Wall Shelves & Cabinets</li>
                                <li>Clocks</li>
                                <li>Wall Art</li>
                                <li>Table Décor</li>
                                <li>Spiritual</li>
                                <li>Home Garden</li>
                                <li>Tableware</li>
                                <li>Kids Décor</li>
                                <li>Mirrors</li>
                                <li>Photo Frames</li>
                                <li>Accent Furniture</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Beds</h3>
                                <ul>
                                    <li>By Size</li>
                                    <li>By Storage</li>
                                    <li>Kids & Teens</li>
                                    <li>By Material</li>
                                    <li>By Style</li>
                                    <li>Mattresses</li>
                                </ul><br/>
                            <h3>Furnishings</h3>
                                <ul>
                                   <li>Bed Linen</li> 
                                    <li>Blankets & Comforters</li>
                                    <li>Carpets</li>
                                    <li>Curtains</li>
                                    <li>Cushion & Covers</li>
                                    <li>Bath Linen</li>
                                    <li>Kids Furnishings</li>
                                    <li>Home Services</li>
                                    <li>Flooring</li>
                                    <li>Table Linen</li>
                                    <li>Essentials</li>
                                </ul>
                        </div>
                        <div>
                            <h3>Cabinetry</h3>
                                <ul>
                                    <li>Wardrobes</li>
                                    <li>Shoe Racks</li>
                                    <li>Storage</li>
                                    <li>Entertainment Units</li>
                                    <li>Bar</li>
                                    <li>Kids Storage</li>
                                </ul><br />
                            <h3>Lighting</h3>
                                <ul>
                                   <li>Floor Lamps</li> 
                                    <li>Chandeliers</li>
                                    <li>Wall Lights</li>
                                    <li>Smart Lights</li>
                                    <li>Festive Lights</li>
                                    <li>Lampshades</li>
                                    <li>Ceiling Lights</li>
                                    <li>LED Lights</li>
                                    <li>Outdoor Lights</li>
                                    <li>Table Lamps</li>
                                    <li>Kids Lighting</li>
                                </ul>
                        </div>
                        <div>
                            <h3>Appliances</h3>
                            <ul>
                                <li>Mixers & Processors</li>
                                <li>Breakfast Appliances</li>
                                <li>Chinmeys</li>
                                <li>Built-in Appliances</li>
                                <li>Heating & Cooling Appliances</li>
                                <li>Cleaning</li>
                                <li>Refrigerators</li>
                                <li>OTGs</li>
                                <li>Food Makers</li>
                                <li>Cocktops</li>
                                <li>Bar Appliances</li>
                                <li>Purifiers</li>
                                <li>Laundry</li>
                                <li>Televisions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ImageDiv>
            <Costumers>
                <h1>Happy Costumers, Happy Us</h1>
                <div className="customerReviews">
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg" alt="" />
                        <p>Bought these two grey puffy stools from pepperfry. Found them to be surprisingly strong! Blends perfectly...</p>
                        <div className="customerName">Suman Senapatia</div>
                        <div className="location">Visakhapatnam</div>
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_8.jpg" alt="" />
                        <p>I purchased Candy Study Chair in Pink Colour by Alex Daisy from pepperfry looks awesome and My daughter...</p>
                        <div className="customerName">Satya Madhana</div>
                        <div className="location">Secunderabad</div>
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg" alt="" />
                        <p>Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered, got it...</p>
                        <div className="customerName">Baba Kattubadi</div>
                        <div className="location">Hyderabad</div>
                    </div>
                </div>
            </Costumers>
            <NeedHelpBuying>
                <h1>Need Help Buying</h1>
                <div className="LastBlock">
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg" alt="" />
                        <div>Here's How To Choose The Right Sofa</div>
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg" alt="" />
                        <div>How To Buy A Perfect Bed For Your Room</div>
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg" alt="" />
                        <div>Your Guide To Buy The Perfect Mattress</div>
                    </div>
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg" alt="" />
                        <div>Everything About Cabinets And Sideboards</div>
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg" alt="" />
                        <div>What To Look For While Buying A Chair</div>
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg" alt="" />
                    </div>
                </div>
            </NeedHelpBuying>
        </HomeContainer>
    </>
  )
}

export default Hero