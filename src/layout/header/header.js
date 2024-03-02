
import headerlogo from '../../assets/images/logo.png';

function Header({logo}) {
	return(
		<header className="App-header">
	  
		   <div class="container-fluid">
			<nav class="navbar navbar-expand-lg">
				<div class="container">
					<div class="header-left">
						<ul class="nav-menu">
							<li><a class="" href="javascript:void(0);">Features</a></li>
							<li><a class="" href="javascript:void(0);">Pricing</a></li>
							<li><a class="" href="javascript:void(0);">Testimonials</a></li>
							<li><a class="" href="javascript:void(0);">Resources</a></li>
						</ul>
					</div>
					<div class="logo">
						<img src= {headerlogo} alt=""/>
					</div>
					
					<div class="header-right">
					  <ul class="nav-menu">
							<li><a class="" href="javascript:void(0);">Company</a></li>
							<li><a class="" href="javascript:void(0);">Contact</a></li>
							<li><a href="" class="btn btn-outline-primary">Login</a></li>
						</ul>
						
					</div>
				</div>
			</nav>
			</div>
		  </header>
	)
}
export default Header;