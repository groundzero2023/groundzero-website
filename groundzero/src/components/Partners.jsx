import React from 'react';
import "../index.css";
import { mapletree, metacamp, fomopay, skilledin} from '../assets';
import NavigationBar from "./NavigationBar";
import Footer2 from './Footer2';



function Partners() {
    return (
      <div className="bg-darkBlue w-full overflow-hidden min-h-screen">

      <NavigationBar    className="navbar-special-margin" />
      <div className="pt-20 pb-10 px-4">
          <h1 className="font-poppins text-white text-center text-5xl mt-10 font-light ">
SPONSORS          </h1>
        <div className="sponsors-container">
            <div className="sponsor-level">Patron Sponsor</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
              <a href="https://www.mapletree.com.sg" target="_blank" rel="noopener noreferrer"> 
                <img src={mapletree} className="sponsor-logo" />
                </a>
                </div>
                <div className="sponsor-description">
                    <h1>About Mapletree:</h1>
                    <p>
                    Headquartered in Singapore, Mapletree is a global real estate development, investment, capital and property management company committed to sustainability. Its strategic focus is to invest in markets and real estate sectors with good growth potential. By combining its key strengths, the Group has established a track record of award-winning projects, and delivers consistent and high returns across real estate asset classes.
                    <br></br>
<br></br>
The Group manages three Singapore-listed real estate investment trusts (“REITs”) and eight private equity real estate funds, which hold a diverse portfolio of assets in Asia Pacific, Europe, the United Kingdom (“UK”) and the United States (“US”). 
<br>
</br>
<br></br>
The Group’s assets are located across 13 markets globally, namely Singapore, Australia, Canada, China, Europe, Hong Kong SAR, India, Japan, Malaysia, South Korea, the UK, the US and Vietnam. To support its global operations, Mapletree has established an extensive network of offices in these countries.
                    </p>
                    <p></p>
                </div>
            </div>
            <div className="sponsors-container">
            <div className="sponsor-level-gold">Gold Sponsor</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container'>
                <img src={fomopay} className="sponsor-logo" />
                </div>
                </div>
        </div>

        <div className="sponsors-container">
            <div className="sponsor-level-silver">Silver Sponsors</div>
            <div className="sponsor-content">
              <div className='sponsor-logo-container-s'>
                <img src={metacamp} className="sponsor-logo" />
                <img src={skilledin} className="sponsor-logo-sg" />

                </div>
                </div>
        </div>
        </div>
        </div>
        <Footer2/>
        </div>
    );
}

export default Partners;
