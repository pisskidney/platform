import React, { Component } from 'react';	
import WasteCompany from './boxes/wasteCompany';
import { MdMenu, MdSettings } from 'react-icons/lib/md';

import visa from '../images/payment/visa.png';
import paypal from '../images/payment/paypal.png';
import bitcoin from '../images/payment/bitcoin.png';

import truck1 from '../images/trucks/truck1.jpg';
import truck2 from '../images/trucks/truck2.jpg';
import truck3 from '../images/trucks/truck3.jpg';
import truck4 from '../images/trucks/truck4.jpg';


const wasteCompanies = {
	"count": 4,
	"companies": [
		{
			"id": 3,
			"name": "Ramco",
			"image": truck1,
			"description": "Friendly, reliable and honest service is what we provide our customers. Ramco offers front load waste collection to the River Valley and all of central Arkansas as well as the Tupelo, Mississippi areas.  We offer 2, 4, 6, and 8 yard containers.  We are always here to help, our local dispatchers are just a phone call away.",			
			"proximity": 87,
			"price": 78,
			"sustainability": 85,
			"tags": ["best price", "recommended"],
			"avgdata": {
				"time": "2.7 h",
				"distance": "7 km",
				"co2": "8.9 kg",
				"price": "87 $"
			}
		},
		{
			"id": 4,
			"name": "Veolia",
			"image": truck2,
			"description": "Veolia Environnement S.A., branded as Veolia, is a French transnational company with activities in four main service and utility areas traditionally managed by public authorities – water management, waste management, transport and energy services. In 2012, Veolia employed 318,376 employees in 48 countries.",			
			"proximity": 73,
			"price": 89,
			"sustainability": 82,
			"tags": ["best price"],
			"avgdata": {
				"time": "3.2 h",
				"distance": "8.2 km",
				"co2": "9.5 kg",
				"price": "84 $"
			}						
		},
		{
			"id": 5,
			"name": "Docklands",
			"image": truck3,
			"description": "The social benefits of recycling waste are clear. Companies and individuals therefore have a moral responsibility to plan their waste disposal responsibly. So from one-off waste disposal, skip hire or asbestos removal, to long-term collection and recycling contracts, we aim to make waste recycling something that is managed properly.",			
			"proximity": 78,
			"price": 66,
			"sustainability": 72,
			"tags": [],
			"avgdata": {
				"time": "2.7 h",
				"distance": "7 km",
				"co2": "8.9 kg",
				"price": "87 $"
			}			
		},
		{
			"id": 6,
			"name": "WM",
			"image": truck4,
			"description": "Waste Management works with communities like yours to create a safe, sustainable environment. Our trucks and people are on your streets every day, working to keep your community clean. With a range of environmental solutions, Waste Management is your provider for keeping your business green.",			
			"proximity": 76,
			"price": 66,
			"sustainability": 71,
			"tags": [],
			"avgdata": {
				"time": "2.7 h",
				"distance": "7 km",
				"co2": "8.9 kg",
				"price": "87 $"
			}
		}	
	]
};


class Pickup extends Component {	
	render() {		
		const companies = wasteCompanies.companies.map((company, i) => <div key={ company.id } className="col-md-6 p-0"><WasteCompany data={ company } selected={ (i === 0) ? true : false } /></div>);		
		return (
			<div>
				<div className="white-box">
					<div className="box-title-wrapper">
						<button className="box-drag"><MdMenu /></button>
						<h3 className="box-title">On demand pickup</h3>
						<button className="box-settings"><MdSettings /></button>
						<div className="clearfix"></div>
					</div>
					<div className="white-box-content">
						<div className="row ondemand">
							<div className="col-md-2">
								<div className="ondemand-box">
									<p className="ondemand-title">Bins that need emptying</p>
									<p className="ondemand-value">26</p>
								</div>
							</div>
							<div className="col-md-2">
								<div className="ondemand-box">
									<p className="ondemand-title">Time until pickup</p>
									<p className="ondemand-value">2 hours</p>	
								</div>
							</div>
							<div className="col-md-2">
								<div className="ondemand-box">
									<p className="ondemand-title">Duration</p>
									<p className="ondemand-value">59 minutes</p>
								</div>
							</div>
							<div className="col-md-2">
								<div className="ondemand-box">
									<p className="ondemand-title">Cost</p>
									<p className="ondemand-value">48$</p>	
								</div>
							</div>
							<div className="col-md-2">		
								<div className="ondemand-box">
									<p className="ondemand-title">Eligible for crypto payment</p>
									<p className="ondemand-value">Yes</p>
								</div>
							</div>
							<div className="col-md-2">
								<div className="ondemand-box">
									<p className="ondemand-title">Company</p>
									<p className="ondemand-value">WM</p>		
								</div>
							</div>							
						</div>
						<div className="row">
							<div className="col-12 text-right">
								<div className="ondemand-buy-box">
									<img src={ visa } alt="" />
									<img src={ paypal } alt="" />
									<img src={ bitcoin } alt="" />
									<button className="simple-button">Buy</button>
								</div>
							</div>
						</div>
					</div>
				</div>			
				<div className="row">
					{ companies }
				</div>
			</div>
		);
	}
}


export default Pickup;



