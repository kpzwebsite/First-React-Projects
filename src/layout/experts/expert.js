import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import clienttab from '../../assets/images/clicent.png';

function Expert({logo}) {
  return (
    <section class="section-padding">
		<div class="section-head">
			<span class="badge badge-sm light badge-primary">built for people</span>
			<h2>Easy<strong>for beginner.</strong> platform, <strong>Powerful for experts.</strong></h2>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
          <div class="experts-tab">
          <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="home" title="Create">
                  <div class="ks-expert-bx">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="ks-left-bx">
                                <h2 class="ks-title">
                                    Create
                                </h2>
                                <h6 class="fw-bold">Advanced research software</h6>
                                <p>Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.</p>
                                <div class="primse-btn pt-3">
							                      <a class="btn btn-primary">Get started free</a>
					                    	</div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                        <img src= {clienttab} alt=""/>
                        </div>

                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Distribute">
                <div class="ks-expert-bx">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="ks-left-bx">
                                <h2 class="ks-title">
                                    Distribuite
                                </h2>
                                <h6 class="fw-bold">Advanced research software</h6>
                                <p>Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.</p>
                                <div class="primse-btn pt-3">
							                      <a class="btn btn-primary">Get started free</a>
					                    	</div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                        <img src= {clienttab} alt=""/>
                        </div>

                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile-1" title="Collect">
                <div class="ks-expert-bx">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="ks-left-bx">
                                <h2 class="ks-title">
                                    Collect
                                </h2>
                                <h6 class="fw-bold">Advanced research software</h6>
                                <p>Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.</p>
                                <div class="primse-btn pt-3">
							                      <a class="btn btn-primary">Get started free</a>
					                    	</div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                        <img src= {clienttab} alt=""/>
                        </div>

                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile-2" title="Analyze">
                <div class="ks-expert-bx">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="ks-left-bx">
                                <h2 class="ks-title">
                                   Analyze
                                </h2>
                                <h6 class="fw-bold">Advanced research software</h6>
                                <p>Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.</p>
                                <div class="primse-btn pt-3">
							                      <a class="btn btn-primary">Get started free</a>
					                    	</div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                        <img src= {clienttab} alt=""/>
                        </div>

                    </div>
                  </div>
                </Tab>
               
            </Tabs>

          </div>
				</div>
			</div>
		</div>
	</section>
  
  );
}

export default Expert;