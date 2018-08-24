import React, { Component } from 'react';
import {ResponsiveContainer, BarChart, XAxis, YAxis, Legend, Bar, CartesianGrid, Tooltip} from 'recharts';
import { MdMenu, MdSettings, MdPersonAdd, MdLocalShipping, MdInfo, MdStarHalf, MdStar, MdStarBorder, MdLocalFlorist } from 'react-icons/lib/md';


const data = [
	{ name: 'May', "Zara Home": 9.29, "H&M": -5, Auchan: 1.32, Nike: 2.22  },
	{ name: 'Jun', "Zara Home": 0.09, "H&M": 2, Auchan: -1.32, Nike: 3.22  },
	{ name: 'Jul', "Zara Home": 0.53, "H&M": 1, Auchan: 3.32, Nike: 6.22  },
	{ name: 'Aug', "Zara Home": 2.52, "H&M": 5, Auchan: 13.32, Nike: 3.22  },
	{ name: 'Sep', "Zara Home": 0.79, "H&M": 7, Auchan: 4.32, Nike: -3.22  },
	{ name: 'Oct', "Zara Home": 2.94, "H&M": 6, Auchan: 1.32, Nike: 3.22  },
	{ name: 'Nov', "Zara Home": -4.3, "H&M": -12, Auchan: -1.32, Nike: 1.22  },
	{ name: 'Dec', "Zara Home": -7.41, "H&M": 14.21, Auchan: 1.32, Nike: 3.22  },
	{ name: 'Jan', "Zara Home": -6.11, "H&M": 7, Auchan: 1.32, Nike: -3.22 },
	{ name: 'Feb', "Zara Home": 0.39, "H&M": 2, Auchan: 2.32, Nike: 15.22  },
	{ name: 'Mar', "Zara Home": -1.37, "H&M": 1, Auchan: 1.32, Nike: 3.22  },
	{ name: 'Apr', "Zara Home": 1.16, "H&M": 3.5, Auchan: 1.32, Nike: 0.22  },
];


export default class SustainBox extends Component {
	render() {				
		return (
			<div className="white-box">
				<div className="box-title-wrapper">
					<button className="box-drag"><MdMenu /></button>
					<h3 className="box-title">Sustainability</h3>
					<button className="box-settings"><MdSettings /></button>
					<div className="clearfix"></div>
				</div>
				<div className="white-box-content">
					<ResponsiveContainer width='100%' height={250}>
						<BarChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip animationDuration={300} separator="" cursor={{fill: "#eee"}} isAnimationActive={ false } />
							<Legend />
							<Bar dataKey="Zara Home" fill="#82ca9d" />
							<Bar dataKey="H&M" fill="#8884d8" />
							<Bar dataKey="Nike" fill="#a2dd6e" />
							<Bar dataKey="Auchan" fill="#83a6eb" />
						</BarChart>
					</ResponsiveContainer>
					<div id="sustain-all" className="row">
						<div className="col-md-4 text-center">
							<div className="sustain-title-wrapper text-left">
								<MdLocalFlorist className="sustain-title-logo" size={26} />
								<span className="sustain-title">Sustainability Score</span>
								<button className="float-right" data-tip="<p>Aggregated sustainability score</p><p>The score is calculated based on the last 30 days.</p><p>It takes into account the recycling habbit of all associated bins, how</p><p> the recycling habbits of those bins are compared to a weighted</p><p> average of past months, and how those averages fare</p><p> afainst other companies in our database.</p>" data-html={true} ><MdInfo size={16} color="#ddd" /></button>
							</div>
							<div className="sustain-value-wrapper">
								<div className="sustain-value">347</div>
							</div>
							<div className="sustain-subvalue">(<span className="green">+17%</span> from last month)</div>
							<div className="row sustain-details">
								<div className="col-6">
									<div>Highest score: <span className="sustain-details-value">412</span></div>
									<div className="sustain-date">Jan 27, 2018</div>
									<div>Lowest score: <span className="sustain-details-value">257</span></div>
									<div className="sustain-date">Jun 4, 2017</div>
								</div>
								<div className="col-6">
									<MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarBorder />
									<p>Rank <b>#138</b> out of 1567</p>
									<p><a href="">How to improve sustainability?</a></p>
								</div>
							</div>					
						</div>
						<div className="col-md-4 text-center">
							<div className="sustain-title-wrapper text-left">
								<MdLocalShipping className="sustain-title-logo" size={26} />
								<span className="sustain-title">CO2 Saved</span>
								<button className="float-right" data-tip="<p>CO2 saved is calculated based on the difference in using</p><p>IoT and Big Data to make fuel consumption and</p><p>man hours signifficantly more efficient, versus using</p><p>traditional methods of waste management.</p>" data-html={true} ><MdInfo size={16} color="#ddd" /></button>
							</div>
							<div className="sustain-value-wrapper">
								<div className="sustain-value">18t</div>
							</div>
							<div className="sustain-subvalue">(<span className="red">-6%</span> from last month)</div>
							<div className="row sustain-details">
								<div className="col-6">
									<div>Highest score: <span className="sustain-details-value">19t</span></div>
									<div className="sustain-date">Jan 21, 2018</div>
									<div>Lowest score: <span className="sustain-details-value">2t</span></div>
									<div className="sustain-date">Jan 8, 2017</div>
								</div>
								<div className="col-6">
									<MdStar /><MdStar /><MdStar /><MdStarBorder /><MdStarBorder />
									<p>Rank <b>#161</b> out of 1567</p>
								</div>
							</div>					
						</div>
						<div className="col-md-4 text-center">
							<div className="sustain-title-wrapper text-left">
								<MdPersonAdd className="sustain-title-logo" size={26} />
								<span className="sustain-title">Jobs Created</span>
								<button className="float-right" data-tip="<p>Having a sustainable waste management solution creates</p>a lot of new jobs. The number of created jobs is calculated by</p>comparing the data in our system with more traditional ways of managing waste." data-html={true} ><MdInfo size={16} color="#ddd" /></button>
							</div>
							<div className="sustain-value-wrapper">
								<div className="sustain-value">5</div>
							</div>
							<div className="sustain-subvalue">(<span className="green">+25%</span> from last month)</div>
							<div className="row sustain-details">
								<div className="col-6">
									<div>Highest score: <span className="sustain-details-value">7</span></div>
									<div className="sustain-date">Jan 27, 2018</div>
									<div>Lowest score: <span className="sustain-details-value">2</span></div>
									<div className="sustain-date">Jun 4, 2017</div>
								</div>
								<div className="col-6">
									<MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
									<p>Rank <b>#94</b> out of 1567</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
