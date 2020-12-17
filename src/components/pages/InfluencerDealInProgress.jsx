import React, { Component } from 'react';
import image from '../../images/image 2.png';
import Visa from './123.jpeg'
import '../../CSS/InfluencerDealInProgress.css';

import back from '../../images/back.png'
class InfluencerDealInProgress extends Component {
	state = {};
	render() {
		return (
      <div className="row">
      
			<div> <img src={back} style={{width:"30px",height:"30px"}} alt="" /></div>

			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<h2 className="text-center"><strong>Instagram Sponsored Post ($120)</strong></h2>

					<div className="text-center">
						<img src={image} style={{ width: '450px', height: '250px' }} alt="###" />
					</div>
					<p>
						I will promote your product on Instagram as a sponsored post. I have worked previously with
						Joanne Cosmetics and have created a 25% increase in inbound sales and can do the same for your
						product.
					</p>

					<div className="text-center">
						<button className="filter-btn btn-block">More Influencer Offers</button>
					</div>
				</div>
			<div className="col-lg-1 col-md-1 idipmobileHide">
			<div className="idipvl idipmobileHide"></div>
			</div>
				<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
					<div className="text-center">
						<h2><strong> Payments </strong></h2>
						<div className="form-group">
							<label style={{ float: 'left' }}> Email</label>
							<input style={{borderRadius:"10px"}}
								type="name"
								className="form-control idipInput"
								name="name"
								value={this.state.email}
								onChange={this.handleChange}
								autoFocus
							/>
						</div>

						<div className="form-group">
							<label style={{ float: 'left' }}> Card Name</label>
							<input  style={{borderRadius:"10px"}}
								type="password"
								className="form-control idipInput"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>

						<div className="form-group" style={{
							display : 'inline-table'
						}}>
							<label className="text-left"> Card Details</label>
						</div>
						<br/>
						<div className="row">
								<div className="col-12">
								<span style={{display:"flex"}}>
								<input  style={{
									borderTopLeftRadius:"10px",
									borderTopRightRadius:"0px",
									borderBottomRightRadius:"0px",
									borderRight:"none",
									width:"1230px"
								}}
									type="password"
									className="form-control idipInput"
									name="password"
									placeholder="1234 1234 1234 1234"
									// value={this.state.password}
									// onChange={this.handleChange}
							
								>
									
								</input>
								<input  style={{
									borderTopLeftRadius:"0px",
									borderTopRightRadius:"0px",
									borderBottomLeftRadius:"0px",
									borderBottomRightRadius:"0px",
									borderLeft:"none",
									borderRight:"none",
									width:"50px",
									height:"38px"
								}}
								type="image" src={Visa} alt="Submit" 
								
								
									className="form-control"
									name="images"
								
									// value={this.state.password}
									// onChange={this.handleChange}
							
								>
									
								</input>
								<input  style={{
									borderTopLeftRadius:"0px",
									borderTopRightRadius:"0px",
									borderBottomLeftRadius:"0px",
									borderBottomRightRadius:"0px",
									borderLeft:"none",
									borderRight:"none",
									width:"50px",
									height:"38px"
								}}
								type="image" src={Visa} alt="Submit" 
								
								
									className="form-control"
									name="images"
								
									// value={this.state.password}
									// onChange={this.handleChange}
							
								>
									
								</input>
								<input  style={{
									borderTopLeftRadius:"0px",
									borderTopRightRadius:"0px",
									borderBottomLeftRadius:"0px",
									borderBottomRightRadius:"0px",
									borderRight:"none",
									borderLeft:"none",
									width:"50px",
									height:"38px"
								}}
								type="image" src={Visa} alt="Submit" 
								
								
									className="form-control"
									name="images"
								
									// value={this.state.password}
									// onChange={this.handleChange}
							
								>
									
								</input>
								<input  style={{
									borderTopLeftRadius:"0px",
									borderTopRightRadius:"10px",
									borderBottomLeftRadius:"0px",
								
									borderLeft:"none",
									width:"50px",
									height:"38px"
								}}
								type="image" src={Visa} alt="Submit" 
								
								
									className="form-control"
									name="images"
								
									// value={this.state.password}
									// onChange={this.handleChange}
							
								>
									
								</input>
								</span>

								<span style={{
									display : 'flex'
								}}>
								<input  style={{
									borderBottomLeftRadius:"10px",
									width: '50%',
								}}
									type="text"
									className="form-control idipInput"
									name="text"
									placeholder="MM/YY"
									// value={this.state.password}
									// onChange={this.handleChange}
								/>
								<input  style={{
									borderTopRightRadius:"0px",
									borderBottomRightRadius:"0px",
									borderRight:"0px",
									width: '50%'
								}}
									type="text"
									className="form-control idipInput"
									name="text"
									placeholder="CVC"
									// value={this.state.password}
									// onChange={this.handleChange}
								/>
								<input  style={{
									borderTopLeftRadius:"0px",
									borderTopRightRadius:"0px",
									borderBottomLeftRadius:"0px",
									borderBottomRightRadius:"10px",
								
									borderLeft:"none",
									width:"50px",
									height:"38px"
								}}
								type="image" src={Visa} alt="Submit" 
								
								
									className="form-control"
									name="images"
								
									// value={this.state.password}
									// onChange={this.handleChange}
							
								></input>

								</span>
								</div>
								
								</div>
						{/* <div className="row">
							<div className="col-12">
							<input  style={{
								borderTopLeftRadius:"10px",
								borderTopRightRadius:"10px"
							}}
								type="password"
								className="form-control idipInput"
								name="password"
								placeholder="1234 1234 1234 1234"
								// value={this.state.password}
								// onChange={this.handleChange}
							/>
							<span style={{
								display : 'flex'
							}}>
							<input  style={{
								borderBottomLeftRadius:"10px",
								width: '50%',
							}}
								type="text"
								className="form-control idipInput"
								name="text"
								placeholder="MM/YY"
								// value={this.state.password}
								// onChange={this.handleChange}
							/>
							<input  style={{
								borderBottomRightRadius:"10px",
								width: '50%'
							}}
								type="text"
								className="form-control idipInput"
								name="text"
								placeholder="CVC"
								// value={this.state.password}
								// onChange={this.handleChange}
							/>
							</span>
							</div>
							
						</div> */}
							


						<div className="text-center">
							<p>A 9% serivce fee will be added.</p>

							<div className="row">
								<div className="col-4"></div>
								<div className="col-4">
									<button className="filter-btn">Pay $130.80</button>
								</div>
								<div className="col-4"></div>
							</div>
						</div>
					</div>
			</div>
			</div>
			</div>
		);
	}
}

export default InfluencerDealInProgress;
