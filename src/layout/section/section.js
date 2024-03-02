	import promise from '../../assets/images/promise.png';
	import award from '../../assets/images/award.png';
	import award1 from '../../assets/images/award/pic1.png';
	import award2 from '../../assets/images/award/pic2.png';
	import award3 from '../../assets/images/award/pic3.png';
	
	function Section({logo}) {
	return(
		<>
		 <section class="section-padding">
		<div class="container">
			<div class="row">
				<div class="col-xl-6 align-self-center">
					<div class="promise-bx">
						<span class="badge badge-sm badge-primary light mb-3">OUR PROMISE</span>
						<div class="promise-title">
							<h2 class="mb-4">Tool <strong class="text-black">built for people.</strong></h2>
							<p class="mb-3">
								Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.

								
							</p>
							<p class="mb-5">Circle has 100+ integrations with tools you already use and love.</p>
						</div>
						<div class="primse-btn">
							<a class="btn btn-primary">Get started free</a>
						</div>
					</div>
				</div>
				
				<div class="col-xl-6">
					<img src= {promise} class="rounded"  alt=""/>
				</div>
				
			</div>
		</div>
	</section>
	<section class="section-padding">
		<div class="section-head">
			<span class="badge badge-sm light badge-primary">Award</span>
			<h2>An <strong>award winning</strong> platform, <strong>loved by customers.</strong></h2>
		</div>
		<div class="container">
			<div class="row gy-4">
				<div class="col-xl-3">
					<div class="award-bx award-primary">
						<div class="award-content">
							<img src= {award} class="mb-2"  alt=""/>
							<h6>Market leader across 18 categories</h6>
						</div>
					</div>
				</div>
				<div class="col-xl-3">
					<div class="award-bx award-secondary">
						<div class="award-content">
							<img src= {award1} class="mb-2"  alt=""/>
							<h6>Most loved SaaS tool in 2021</h6>
						</div>
					</div>
				</div>
				<div class="col-xl-3">
					<div class="award-bx award-info">
						<div class="award-content">
							<img src= {award3} class="mb-2"  alt=""/>
							<h6>Market leader across 18 categories</h6>
						</div>
					</div>
				</div>
				<div class="col-xl-3">
					<div class="award-bx award-success">
						<div class="award-content">
							<img src= {award2} class="mb-2"  alt=""/>
							<h6>Top performer spring 2021</h6>
						</div>
					</div>
				</div>
				<div class="col-xl-3">
					<div class="award-bx award-primary">
						<div class="award-content">
							<img src= {award} class="mb-2"  alt=""/>
							<h6>Market leader across 18 categories</h6>
						</div>
					</div>
				</div>
				<div class="col-xl-3">
					<div class="award-bx award-secondary">
						<div class="award-content">
							<img src= {award1} class="mb-2"  alt=""/>
							<h6>Most loved SaaS tool in 2021</h6>
						</div>
					</div>
				</div>
				<div class="col-xl-3">
					<div class="award-bx award-info">
						<div class="award-content">
							<img src= {award3} class="mb-2"  alt=""/>
							<h6>Market leader across 18 categories</h6>
						</div>
					</div>
				</div>
				<div class="col-xl-3">
					<div class="award-bx award-success">
						<div class="award-content">
							<img src= {award2} class="mb-2"  alt=""/>
							<h6>Top performer spring 2021</h6>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	

	
	
	</>
	)
}
export default Section;