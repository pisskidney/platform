import React, { Component } from 'react';	
import TrainingCourse from './boxes/trainingCourse';

import course1 from '../images/training/course1.jpg';
import course2 from '../images/training/course2.jpg';
import course3 from '../images/training/course3.jpg';
import course4 from '../images/training/course4.jpg';


const trainingCourses = {
	"count": 4,
	"courses": [
		{
			"id": 3,
			"name": "How to separate waste at Home",
			"price": "Free",
			"duration": "6 hours",
			"sustainability": "+35",
			"image": course1,
			"is_private": false,
			"description": "This module teaches you why waste sepparation is good for you and the environment.",
			"syllabus": [
				{
					"name": "What is waste separation",
					"duration": "45 min",
				},
				{
					"name": "Benefits of separating waste",
					"duration": "30 min",
				},
				{
					"name": "On-site separation ",
					"duration": "1 hour",
				},
				{
					"name": "Containers",
					"duration": "45 min",
				},
				{
					"name": "Types of waste",
					"duration": "2 hours",
				},
				{
					"name": "Advanced tips",
					"duration": "45 min",
				}
			],
			"language": "ENGLISH / FRENCH"
		},
		{
			"id": 4,
			"name": "How to separate waste at the Office",
			"price": "19$",
			"duration": "5.5 hours",
			"sustainability": "+35",
			"image": course2,
			"is_private": false,
			"description": "This module teaches you all you need to know about sustainability at the office.",
			"syllabus": [
				{
					"name": "What is waste separation",
					"duration": "1 hour",
				},
				{
					"name": "Benefits of separating waste",
					"duration": "30 min",
				},
				{
					"name": "Particularities",
					"duration": "1 hour",
				},
				{
					"name": "Working together",
					"duration": "30 min",
				},
				{
					"name": "Types of waste",
					"duration": "2 h",
				},
				{
					"name": "Advanced tips",
					"duration": "1 hour",
				}
			],
			"language": "ENGLISH"
		},
		{
			"id": 5,
			"name": "IoT and Sustainability",
			"price": "135$",
			"duration": "4 hours",
			"sustainability": "+60",
			"image": course3,
			"is_private": false,
			"description": "Want to learn how to set up a modern IoT system? Join the course and find out.",
			"syllabus": [
				{
					"name": "What is IoT",
					"duration": "45 min",
				},
				{
					"name": "Technologies used",
					"duration": "30 min",
				},
				{
					"name": "Alternatives",
					"duration": "1 h",
				},
				{
					"name": "Modern sustainability",
					"duration": "45 min",
				},
				{
					"name": "Scaling",
					"duration": "2 h",
				},
				{
					"name": "Advanced tips",
					"duration": "45 min",
				}
			],
			"language": "ENGLISH / FRENCH"
		},
		{
			"id": 6,
			"name": "Leveraging Big Data",
			"price": "150$",
			"duration": "12 hours",
			"sustainability": "+135",
			"image": course4,
			"is_private": true,
			"description": "Learn how to use modern techniques to predict where sustainability can be most impactful.",
			"syllabus": [
				{
					"name": "What is waste separation",
					"duration": "45 min",
				},
				{
					"name": "Benefits of separating waste",
					"duration": "30 min",
				},
				{
					"name": "On-site separation ",
					"duration": "1 h",
				},
				{
					"name": "Containers",
					"duration": "45 min",
				},
				{
					"name": "Types of waste",
					"duration": "2 h",
				},
				{
					"name": "Advanced tips",
					"duration": "45 min",
				}
			],
			"language": "ENGLISH / FRENCH"
		}
	]
};


class Training extends Component {	
	render() {		
		const courses = trainingCourses.courses.map((course, i) => <div key={ course.id } className="col-md-6 p-0"><TrainingCourse data={ course } /></div>);		
		return (
			<div className="row">
				{ courses }
			</div>
		);
	}
}


export default Training;



