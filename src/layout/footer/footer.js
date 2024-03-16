import map from '../../assets/images/map.png'

function Footer({logo}) {
    return(
       <footer class="section-padding pb-0 bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-xl-2">
                        <div class="footer-ks-widget">
                            <h4 class="text-white">Products</h4>
                            <ul>
								<li><a href="javascript:void(0);">Delta</a></li>
                                <li><a href="javascript:void(0);">Sigma</a></li>
                                <li><a href="javascript:void(0);">Zeta</a></li>
                                <li><a href="javascript:void(0);">Alpha</a></li>
                                <li><a href="javascript:void(0);">Acumen</a></li>
							
							</ul>
                        </div>

                    </div>
                    <div class="col-xl-2">
                        <div class="footer-ks-widget">
                            <h4 class="text-white">Resources</h4>
                            <ul>
                            
								<li><a href="javascript:void(0);">Help</a></li>
                                <li><a href="javascript:void(0);">Training Videos</a></li>
                                <li><a href="javascript:void(0);">Webinars</a></li>
                                <li><a href="javascript:void(0);">Request a Demo </a></li>
                                <li><a href="javascript:void(0);">Create Surveys</a></li>
                                <li><a href="javascript:void(0);"
                                    Quiz Maker></a></li>
							</ul>
                        </div>

                    </div>
                    <div class="col-xl-2">
                        <div class="footer-ks-widget">
                            <h4 class="text-white">Company</h4>
                            <ul>
                            
								<li><a href="javascript:void(0);">About Us</a></li>
                                <li><a href="javascript:void(0);">Careers</a></li>
                                <li><a href="javascript:void(0);">Team</a></li>
                                <li><a href="javascript:void(0);">Contact Us </a></li>
                                
							</ul>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="footer-ks-widget">
                            <h4 class="text-white">Latest Post</h4>
                            <ul>
								<li><a href="javascript:void(0);">About Us</a></li>
                                <li><a href="javascript:void(0);">Careers</a></li>
                                <li><a href="javascript:void(0);">Team</a></li>
                                <li><a href="javascript:void(0);">Contact Us </a></li>
                                
							</ul>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="footer-ks-widget">
                            <div>
                                <img class="w-100" src={map} alt=""/>
                            </div>
                        </div>
                    </div>
                 </div>    
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <span class="copyright-text">Made By<a class=" mx-2 text-primary "href="https://kpzwebsite.github.io/First-React-Projects/" target="_blank">Electric Developer</a>All rights reserved.</span> 
                </div>
            </div>           
             
       </footer>


    );

}
export default Footer;