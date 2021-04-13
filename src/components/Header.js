
const Header = () => {
    return (
        <div>
            <div id="preloader">
               
               <div class="spinner">
                  <div class="bounce1"></div>
               </div>
		  
            </div>
            <nav id="main-nav" class="navbar-expand-xl fixed-top">
               <div class="row">
                  
                  <div class="container-fluid top-bar">
                     <div class="container">
                        <div class="row">
                           <div class="col-md-12">
                              
                              <ul class="contact-details float-left">
                                 <li><i class="fa fa-map-marker"></i>Pet Street 123 - New York</li>
                                 <li><i class="fa fa-envelope"></i><a href="mailto:email@site.com">email@yoursite.com</a></li>
                                 <li><i class="fa fa-phone"></i>(123) 456-789</li>
                              </ul>
                              
                              <ul class="social-list float-right list-inline">
                                 <li class="list-inline-item"><a title="Facebook" href="facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                                 <li class="list-inline-item"><a title="Twitter" href="twitter.com"><i class="fab fa-twitter"></i></a></li>
                                 <li class="list-inline-item"><a  title="Instagram" href="instagram"><i class="fab fa-instagram"></i></a></li>								
                              </ul>
                           
                           </div>
                     
                        </div>
                     
                     </div>
                  
                  </div>
                  
                  <div class="navbar container-fluid">
                     <div class="container ">
                  
                        <a class="navbar-brand" href="index.html">
                     <i class="flaticon-dog-20"></i><span>PET RESCUE!</span>
                  </a>
                     
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggle-icon">
                     <i class="fas fa-bars"></i>
                     </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                           <ul class="navbar-nav ml-auto">
                     
                              <li class="nav-item">
                                 <a class="nav-link" href="index.html">Home
                                 </a>
                              </li>
                        
                           
                           </ul>
                     
                        </div>
                     
                     </div>
                  
                  </div>
               
               </div>
            
            </nav>
	   
        </div>
    )
}

export default Header
