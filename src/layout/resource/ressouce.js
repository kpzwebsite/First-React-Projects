import resouceimg from '../../assets/images/promise.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Resorce({logo}) {
    return (
    <section class="section-padding"> 
        <div class="section-head">
			<span class="badge badge-sm light badge-primary">Resources</span>
			<h2><strong>Stay</strong> in the <strong>know</strong></h2>
		</div>
		<div class="container">
                <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="card">
                        <div class="card-body">
                           <div class="resource-media">
                             <img class="w-100 rounded" src = {resouceimg} alt=""/>
                           </div>
                            <div class="resource-info mt-4">
                                <h2 class="ks-title-small">Quis nostrum exercitationem ullam corporis suscipit laboriosam</h2>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit </p>
                                <a href="javascript:void(0);" class="btn btn-primary mt-4">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
                </Swiper>
           
        </div>
    </section>

    );

}
export default Resorce;