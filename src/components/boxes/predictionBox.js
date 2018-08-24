import React, { Component } from 'react';
import { MdInfoOutline, MdMenu, MdSettings, MdPersonAdd, MdInfo } from 'react-icons/lib/md';


export default class PredictionBox extends Component {
	render() {
		const google_key = "AIzaSyDtVkNsOTE1F7AeodyDWlAjHt5dslRHgDs";
		const google1 = '<img src="https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=48.8701467,2.3490299&zoom=16&markers=icon:https://i.imgur.com/A6t80lB.png|48.8702372,2.3489224|48.8700581,2.3487889|48.8701635,2.3492952|48.8699448,2.3491966&path=color:0x666666FF|weight:5|fillcolor:0x00000033|48.8710341,2.3479651|48.8704502,2.3505158|48.86928,2.3502904|48.869456,2.3470014|48.8710341,2.3479651&key=' + google_key + '" />';
		const google2 = '<img src="https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=48.8701467,2.3490299&zoom=16&markers=icon:https://i.imgur.com/A6t80lB.png|48.8702372,2.3489224|48.8700581,2.3487889|48.8701635,2.3492952|48.8699448,2.3491966&path=color:0x666666FF|weight:5|fillcolor:0x00000033|48.8707664,2.3477459|48.8718895,2.3479256|48.8709722,2.3520937|48.8700448,2.3508975|48.8707664,2.3477459&key=' + google_key + '" />';
		const google3 = '<img src="https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=48.8701467,2.3490299&zoom=16&markers=icon:https://i.imgur.com/A6t80lB.png|48.8702372,2.3489224|48.8700581,2.3487889|48.8701635,2.3492952|48.8699448,2.3491966&path=color:0x666666FF|weight:5|fillcolor:0x00000033|48.8746425,2.3462246|48.8720597,2.3664336|48.8543568,2.3578949|48.8589776,2.3014704|48.8746425,2.3462246&key=' + google_key + '" />';
		const google4 = '<img src="https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=48.8701467,2.3490299&zoom=16&markers=icon:https://i.imgur.com/A6t80lB.png|48.8702372,2.3489224|48.8700581,2.3487889|48.8701635,2.3492952|48.8699448,2.3491966&path=color:0x666666FF|weight:5|fillcolor:0x00000033|48.8704877,2.3472904|48.8704502,2.3505158|48.86928,2.3502904|48.869456,2.3470014|48.8704877,2.3472904&key=' + google_key + '" />';		
				
		return (
			<div className="white-box">
				<div className="box-title-wrapper">
					<button className="box-drag"><MdMenu /></button>
					<h3 className="box-title">PREDICTIVE ANALYSIS</h3>
					<button className="box-settings"><MdSettings /></button>
					<div className="clearfix"></div>
				</div>
				<div className="white-box-content">
					<div className="row">
						<div className="col-12">
							<div className="table-responsive">						
								<table className="table">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Upcoming events</th>
											<th scope="col">Date</th>
											<th scope="col">Duration</th>
											<th scope="col">Distance</th>
											<th scope="col">Effect</th>
											<th scope="col">Map</th>
											<th scope="col">Added</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Summer Fest Bonanza</td>
											<td>18 Aug, 2018</td>
											<td>72 hours</td>
											<td>300m</td>
											<td className="red">+118%</td>
											<td><button data-tip={google1} data-place="left" data-html={true}><MdInfoOutline /></button></td>
											<td>manual</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Metallica Concert</td>
											<td>25 Aug, 2018</td>
											<td>4 hours</td>
											<td>155m</td>
											<td className="red">+698%</td>
											<td><button data-tip={google2} data-place="left" data-html={true}><MdInfoOutline /></button></td>
											<td>auto</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Summer break</td>
											<td>26 Aug, 2018</td>
											<td>1 month</td>
											<td>0m</td>
											<td className="green">-120%</td>
											<td><button data-tip={google3} data-place="left" data-html={true}><MdInfoOutline /></button></td>
											<td>auto</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Women's March for Equality</td>
											<td>29 Aug, 2018</td>
											<td>1 hour</td>
											<td>780m</td>
											<td className="red">+50%</td>
											<td><button data-tip={google4} data-place="left" data-html={true}><MdInfoOutline /></button></td>
											<td>auto</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 text-center">
							<button className="simple-button" data-toggle="modal" data-target="#addEventModal"> ADD EVENT </button>
						</div>
					</div>
					<div id="predictions" className="row text-center">
						<div className="col-md-4">									
							<div className="sustain-title-wrapper text-left">
								<MdPersonAdd className="sustain-title-logo" size={26} />
								<span className="sustain-title">Tomorrow</span>
								<button className="float-right" data-tip="<p>The expected fill level speed modifier for tomorrow.</p>" data-html={true} ><MdInfo size={16} color="#ddd" /></button>
							</div>
							<div className="sustain-value-wrapper">
								<div className="sustain-value">+63%</div>
							</div>
							<div className="sustain-subvalue">Confidence: (<span className="red">52%</span>)</div>										
						</div>
						<div className="col-md-4">
							<div className="sustain-title-wrapper text-left">
								<MdPersonAdd className="sustain-title-logo" size={26} />
								<span className="sustain-title">Next week</span>
								<button className="float-right" data-tip="<p>The expected fill level speed modifier for the next 7 days.</p>" data-html={true} ><MdInfo size={16} color="#ddd" /></button>
							</div>
							<div className="sustain-value-wrapper">
								<div className="sustain-value">-15%</div>
							</div>
							<div className="sustain-subvalue">Confidence: (<span className="green">73%</span>)</div>		
						</div>
						<div className="col-md-4">
							<div className="sustain-title-wrapper text-left">
								<MdPersonAdd className="sustain-title-logo" size={26} />
								<span className="sustain-title">Next month</span>
								<button className="float-right" data-tip="<p>The expected fill level speed modifier for the next 31 days.</p>" data-html={true} ><MdInfo size={16} color="#ddd" /></button>
							</div>
							<div className="sustain-value-wrapper">
								<div className="sustain-value">+43%</div>
							</div>
							<div className="sustain-subvalue">Confidence: (<span className="green">92%</span>)</div>		
						</div>
					</div>
				</div>
			</div>				
		);
	}
}
