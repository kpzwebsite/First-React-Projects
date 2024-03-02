import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
                    Tab content for Create
                </Tab>
                <Tab eventKey="profile" title="Distribute">
                    Tab content for Distribute
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