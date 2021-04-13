
const Home = () => {
    const wrapper = {
        width: '1200px',
        height: '800px',
        margin: '0 auto',
        marginbottom: '0px',
      };
    return (
        <div>
            <div id="slider" style={wrapper}>
   
            <div class="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
                
                <img src="img/slide1.jpg" class="ls-bg" alt="" />
                
                <div class="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
                    <div class="header-text dog-elements">
                        <h1>Adopt a pet today!</h1>
                        
                        <div class="d-none d-sm-block">
                        <p class="header-p">Search our list of dogs, cats and other pets available for adoption near you</p>
                        <a class="btn btn-primary " href="adoption.html">Adopt Today</a>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
            <div class="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
                
                <img src="img/slide2.jpg" class="ls-bg" alt="" />
                
                <div class="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
                    <div class="header-text cat-elements">
                    <h1>High Quality pet food</h1>
                        
                        <div class="d-none d-sm-block">
                        <p class="header-p">We have all the best products for your pet, visit our store today!</p>
                        <a class="btn btn-primary " href="contact.html">Contact us</a>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
            <div class="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
                
                <img src="img/slide3.jpg" class="ls-bg" alt="" />
                
                <div class="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
                    <div class="header-text dog-elements">
                        <h1>Visit our Pet Hotel</h1>
                        
                        <div class="d-none d-sm-block">
                        <p class="header-p">Our facility is designed to meet the unique needs of your pet</p>
                        <a class="btn btn-primary " href="services.php">Our services</a>
                        </div>
                    
                    </div>
                    
                </div>
                
            </div>
            
            <div class="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
                
                <img src="img/slide4.jpg" class="ls-bg" alt="" />
                
                <div class="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
                    <div class="header-text cat-elements">
                    <h1>Experienced Veterinarians</h1>
                        
                        <div class="d-none d-sm-block">
                        <p class="header-p">Your pet is in good hands, meet our highly qualified professionals</p>
                        <a class="btn btn-primary " href="team.html">Our Team</a>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
            </div>
        </div>
    )
}

export default Home
