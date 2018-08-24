import React, { Component } from 'react';
import { MdLock } from 'react-icons/lib/md';


class TrainingCourse extends Component {	
	render() {

		const syllabus = this.props.data.syllabus.map((s, i) => <p>{ i+1 }. { s.name }</p>);
		const syllabusDurations = this.props.data.syllabus.map((s) => <p>{ s.duration }</p>);
		const privateBlocker = (this.props.data.is_private) ? <div className="tc-private"><MdLock /></div> : null;
	
		return (
			<div className="white-box">
				<div className="tc-wrapper">
					<div className="tc-header" style={{ backgroundImage: "url(" + this.props.data.image + ")" }}>
						<h2>{ this.props.data.name }</h2>
						<div className="tc-header-details text-center">
							<span>Price: { this.props.data.price }</span>
							<span>Duration: { this.props.data.duration }</span>
							<span>Sustainability score: { this.props.data.sustainability }</span>											
						</div>
					</div>
					<div className="tc-content">
						<div className="tc-description-wrapper">
							<p className="tc-description">{ this.props.data.description }</p>
						</div>
						<div className="tc-content-main">
							{ privateBlocker }
							<h3>Syllabus</h3>
							<div className="row">
								<div className="col-8 tc-content-chapter">
									{ syllabus }
								</div>
								<div className="col-4 tc-content-time text-right">
									{ syllabusDurations }
								</div>
							</div>
						</div>
					</div>
					<div className="tc-footer">
						<div className="row">
							<div className="col-6">
								<p className="tc-lang">{ this.props.data.language }</p>
							</div>
							<div className="col-6 text-right">
								<button type="button" className="btn btn-primary simple-button">START</button>
							</div>						
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default TrainingCourse;