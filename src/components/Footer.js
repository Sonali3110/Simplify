import React from 'react';
import fb from "../../src/images/facebook-logo.svg";
import tw from "../../src/images/twitter-logo.png";


function Footer() {
  return (
    <>
    	
		<footer id="footer">
			<div class="container">
				<div class="row">
				
					<div class="col-md-3" >
						<div class="useful-link" >
							<h2 style={{marginBottom:0, marginRight:25}}>Useful Links</h2>
							<img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
							<div class="use-links">
								<li><a href="index.html"><i class="fa-solid fa-angles-right"></i> Home</a></li>
								<li><a href="about.html"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
								<li><a href="gallery.html"><i class="fa-solid fa-angles-right"></i> Gallery</a></li>
								<li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
							</div>
						</div>

					</div>
                    <div class="col-md-3">
                        <div class="social-links" style={{margin:20, marginTop:0}}>
							<h2 style={{marginRight:25}}>Follow Us</h2>
							<div class="social-icons">
								
                            <li ><img src={fb} style={{    height: "44px", position: "absolute", display:"flex" , marginLeft:"75px"}} />Facebook</li>

                            <li ><img src={tw} style={{    height: "56px", position: "absolute", display:"flex" , marginLeft:"69px"}} />Twitter</li>

                            <li ><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"} style={{    height: "45px", position: "absolute", display:"flex" , marginLeft:"75px"}} />Instagram</li>


								
							</div>
						</div>
                    

                    </div>
					<div class="col-md-3">
						<div class="address" >
							<h2 >Address</h2>
							<div class="address-links">
								<li class="address1"><i class="fa-solid fa-location-dot"></i> Kolathur ramankulam-
									Malappuram Dt 
								   Kerala 679338</li>
								   <li><a href=""><i class="fa-solid fa-phone"></i> +91 90904500112</a></li>
								   <li><a href=""><i class="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
							</div>
						</div>
					</div>
                  
				</div>
			</div>

		</footer>
		
		<section id="copy-right">
			<div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>  
				lorem ispum lorem ispum 2022 Powerd By <a href="#">lorem ispum</a> 


			</div>

		</section>
		
    </>
  )
}

export default Footer;
