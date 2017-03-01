var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router'


if (typeof windows !== 'undefined'){
  window.React = React;
}

/* This will have all the details of the User Profile */
var Profile = React.createClass({

	getInitialState: function() {
        return {
            profileDetails: {
				"GeekInfo": {
		"UserName": "Test User",
		"CurrentCompany": "Amazon.com",
		"Designation": "Designation",
		"CollegeOrUniversity": "XYZ University",
		"CurrentLocation": "Bangalore",
		"ProfileImage": "https://lh3.googleusercontent.com/-_PNeKCtE7XA/AAAAAAAAAAI/AAAAAAAAAAA/AKB_U8ueCG_xALFeb3IyOjxAGl9xQeqfnw/s96-c/photo.jpg",
		"ProfileCompleteness": "50",


		"JobPreferences": {
			"PreferredLocations": ["Bangalore", "Hyderabad", "Delhi"],
			"LookingFrequency": "Actively looking",
			"NoticePeriod": "30 days",
			"ServingNoticePeriod": "true",
			"DaysLeftInNoticePeroid": "15",
			"Open For": {
				"ProductComapnies": "true",
				"ServiceCompanies": "false",
				"Startups": "true"
			}
		},

		"Experience": [{
			"Designation": "Senior Software Developer",
			"Company": "Amazon.com",
			"CurrentCompany": "true",
			"WorkedFrom": "Sept 2014",
			"WorkedTill": ""
		}, {
			"Designation": "Software Developer",
			"Company": "Microsoft",
			"CurrentCompany": "false",
			"WorkedFrom": "Jun 2012",
			"WorkedTill": "Sept 2014"
		}],
		"Education": [{
			"UniversityOrCollege": "XYZ University",
			"Degree": "MS Computer Science",
			"Year": "2012",
			"FieldOfStudy": "Computer Science",
			"Grade": "6.5"
		}, {
			"UniversityOrCollege": "XYZ University",
			"Degree": "BTech",
			"Year": "2010",
			"FieldOfStudy": "Computer Science",
			"Grade": "70%"
		}],
		"Projects": [{
			"ProjectName": "XYZ Project",
			"ProjectUrl": "www.xyzproject.com",
			"OnGoingProject": "true",
			"StartDate": "Sept 2014",
			"EndDate": "",
			"Description": "",
			"RelatedSkills": "Algorithms, Java, Facebook Graph API"
		}, {
			"ProjectName": "XYZ Project 2",
			"ProjectUrl": "www.xyzproject2.com",
			"OnGoingProject": "false",
			"StartDate": "Jun 2012",
			"EndDate": "Sept 2014",
			"Description": "",
			"RelatedSkills": "Java, J2EE, CSS, HTML"
		}],
		"SkillSet": [{
			"Programming": ["C", "Java", "J2EE"],
			"Frameworks": ["Hibernate"],
			"Concepts": ["Data Strutures", "Algorithms", "Operating Systems"],
			"GeekySkills": ["Multithreading", "Basic Structures"]
		}],
		"Resume": {
			"ResumeTitle": "Software Developer 2 at Amazon",
			"ResumeUrl": "aws s3 url"
		}
				}
			}	
        }
    },

    render: function(){
        return (
            <div>
            	<BasicInfo profileDetails={this.state.profileDetails}/>
            	<div className="row">
            		<div className="side col s12 m4 l3">
	    				<SideBar/>
	    			</div>
	            	<div className="content col s12 m8 l9 card-panel">
	        			{this.props.children}
	        		</div>
	        	</div>
            </div>
        );
    }
});

/* This Nasic information will have Basic Information detail;s about the person */
var BasicInfo = React.createClass({
    
    render: function(){
    	var profileDetails = this.props.profileDetails['GeekInfo'];
    	var imageUrl = profileDetails['ProfileImage'];
    	//console.log(imageUrl)
        return (
            <div className="row card-panel">
        		<div className="">
	      			<div className="col s12 m4 l2">
	        			<ImageDetails imageUrl= {imageUrl}/>
	      			</div>
	      			<div className="col s12 m4 l8">
	        			<NameDetails profileDetails={profileDetails}/>
	      			</div>
	      			<div className="col s12 m4 l2">
	        			<CompletionDetails profileCompletion={profileDetails['ProfileCompleteness']}/>
	      			</div>
      			</div>
    		</div>
        );
    }
});

/* Places image as Profile Picture */
var ImageDetails = React.createClass({

	render: function(){
		var imageStyle = {
			display: "block",
    		width: 160,
    		height: 160,
    		margin: 5,
    		backgroundColor: "#fff",
    		borderRadius: 2,
    		borderColor: "#0e0e0f"
		};
		var imageUrl = this.props.imageUrl;
		//console.log(imageUrl);
		return(
			<div>
				<img style={imageStyle} src={imageUrl}/>
			</div>
		);
	}
});

/* Basic Details of the user, will involved components for each type of data.*/
var NameDetails = React.createClass({

	render: function(){
		return(
		<div>
			<h5>{this.props.profileDetails.UserName}</h5>
			<WorkDetails workDetails={this.props.profileDetails}/>
			<h6>Previous: <span>{this.props.profileDetails.CollegeOrUniversity}</span></h6>
		</div>
		);
	}
});

var WorkDetails = React.createClass({
	render: function(){
		return(
		<div>
			<p><b>Working</b> at {this.props.workDetails.CurrentCompany} <b>as</b> <i>{this.props.workDetails.Designation}</i></p>
		</div>
		);
	}
});


/* For Showing the Graph of the % of Profile Completed */
var CompletionDetails = React.createClass({
	render: function(){
		var progressStyle = {
			width: this.props.profileCompletion + '%'
		};

		return(
			<div>
				<h6>Profile Completed: {this.props.profileCompletion}%</h6>
				<div className="progress">
					<div className="determinate" style={progressStyle}></div>
				</div>
			</div>
		);
	}
});

/* This part onwards is for the display of the Detailed Information of the person */
var SideBar = React.createClass({
	render: function(){
		return(
			<div className="sideBar">
				<ul className="collection z-depth-3">
		          <li><IndexLink to='/' className="collection-item"  activeClassName="active"><b>Geek Info</b></IndexLink></li>
		          <li><Link to='/accountsetting' className="collection-item" activeClassName="active"><b>Account Settings</b></Link></li>
		          <li><Link to='/notifications' className="collection-item" activeClassName="active"><b>Notifications</b></Link></li>
		          <li><Link to='/payments' className="collection-item" activeClassName="active"><b>Payments</b></Link></li>
		          <li><Link to='/preferences' className="collection-item" activeClassName="active"><b>Preferences</b></Link></li>
        		</ul>
			</div>
		);
	}
});

var GeekInfo = React.createClass({
	getInitialState: function(){
		return {
			profileDetails: {
				"GeekInfo": {
		"UserName": "Test User",
		"CurrentCompany": "Amazon.com",
		"Designation": "Designation",
		"CollegeOrUniversity": "XYZ University",
		"CurrentLocation": "Bangalore",
		"ProfileImage": "https://lh3.googleusercontent.com/-_PNeKCtE7XA/AAAAAAAAAAI/AAAAAAAAAAA/AKB_U8ueCG_xALFeb3IyOjxAGl9xQeqfnw/s96-c/photo.jpg",
		"ProfileCompleteness": "50",


		"JobPreferences": {
			"PreferredLocations": ["Bangalore", "Hyderabad", "Delhi"],
			"LookingFrequency": "Actively looking",
			"NoticePeriod": "30 days",
			"ServingNoticePeriod": "true",
			"DaysLeftInNoticePeroid": "15",
			"Open For": {
				"ProductComapnies": "true",
				"ServiceCompanies": "false",
				"Startups": "true"
			}
		},

		"Experience": [{
			"Designation": "Senior Software Developer",
			"Company": "Amazon.com",
			"CurrentCompany": "true",
			"WorkedFrom": "Sept 2014",
			"WorkedTill": ""
		}, {
			"Designation": "Software Developer",
			"Company": "Microsoft",
			"CurrentCompany": "false",
			"WorkedFrom": "Jun 2012",
			"WorkedTill": "Sept 2014"
		}],
		"Education": [{
			"UniversityOrCollege": "XYZ University",
			"Degree": "MS Computer Science",
			"Year": "2012",
			"FieldOfStudy": "Computer Science",
			"Grade": "6.5"
		}, {
			"UniversityOrCollege": "XYZ University",
			"Degree": "BTech",
			"Year": "2010",
			"FieldOfStudy": "Computer Science",
			"Grade": "70%"
		}],
		"Projects": [{
			"ProjectName": "XYZ Project",
			"ProjectUrl": "www.xyzproject.com",
			"OnGoingProject": "true",
			"StartDate": "Sept 2014",
			"EndDate": "",
			"Description": "",
			"RelatedSkills": "Algorithms, Java, Facebook Graph API"
		}, {
			"ProjectName": "XYZ Project 2",
			"ProjectUrl": "www.xyzproject2.com",
			"OnGoingProject": "false",
			"StartDate": "Jun 2012",
			"EndDate": "Sept 2014",
			"Description": "",
			"RelatedSkills": "Java, J2EE, CSS, HTML"
		}],
		"SkillSet": [{
			"Programming": ["C", "Java", "J2EE"],
			"Frameworks": ["Hibernate"],
			"Concepts": ["Data Strutures", "Algorithms", "Operating Systems"],
			"GeekySkills": ["Multithreading", "Basic Structures"]
		}],
		"Resume": {
			"ResumeTitle": "Software Developer 2 at Amazon",
			"ResumeUrl": "aws s3 url"
		}
				}
			}	

		}
	},

	getProfileDetails: function(){
		var profileDetails = _.values(this.state.profileDetails);
		var totalDetails = _.first(profileDetails);
		return totalDetails;
	},

	getEducationDetails: function(){
		var education = this.getProfileDetails();
		return education['Education'];
	},

	getExperianceDetails: function(){
		var experiance = this.getProfileDetails();
		return experiance['Experience'];
	},

	getProjectDetails: function(){
		var projects = this.getProfileDetails();
		return projects["Projects"];
	},

	getskillSet: function(){
		var skills = this.getProfileDetails();
		return skills["SkillSet"];
	},

	render: function(){
		return(
			<div>
				<h3>Geek Info</h3>
				<section className='Education'>
					<Education educationDetails={this.getEducationDetails}/>
					<Experiance experianceDetails={this.getExperianceDetails}/>
					<Projects projectsDetails={this.getProjectDetails}/>
					<Skillset skillSet={this.getskillSet}/>
				</section>
			</div>
		);
	}
});

/* All Details about Education is stored here in Education */

var Education = React.createClass({
	getInitialState: function(){
		return{
			isSelected: false
			//educationData: []
		};

	},

	handleClick: function(){
		this.setState({
			isSelected: true
		})
	},

	render: function(){
		
		var educationItems = this.props.educationDetails().map(function(eachItem) {
            return <EducationItem key={eachItem.Year} itemDetails={eachItem} />
        });
        
        var style = {
			float: 'right'
		};

		console.log(this.state.isSelected);

		return (
			<div>
				<header className="educationHeader">
					<h6 className="card-panel teal lighten-2 educationAddLogo"><b>Education</b><i className="material-icons" style={style} onClick={this.handleClick}>note_add</i></h6>
				</header>
				<ul>
					{educationItems}
				</ul>
			</div>
		);
	}
});

var EducationItem = React.createClass({

	render: function(){
		var style = {
			float: 'right'
		};

		return(
			<div>
				<li>
					<h5><strong>{this.props.itemDetails.UniversityOrCollege}</strong><i className="material-icons" style={style}>mode_edit</i></h5>
					<h6>{this.props.itemDetails.FieldOfStudy}</h6>
					<h6>{this.props.itemDetails.Degree}, {this.props.itemDetails.Grade}</h6>
					<h6><span>Graduated in year </span>{this.props.itemDetails.Year}</h6>
				</li>

				<br></br>
			</div>
		);
	}

});

var Experiance = React.createClass({
	render: function(){
		var experianceItems = this.props.experianceDetails().map(function(eachItem) {
            return <ExperianceItem key={eachItem.Company} itemDetails={eachItem} />
        });
        
        var style = {
			float: 'right'
		};

		return (
			<div>
				<header className="experianceHeader">
					<h6 className="card-panel teal lighten-2"><b>Experience</b><i className="material-icons" style={style}>note_add</i></h6>
				</header>
				<ul>
					{experianceItems}
				</ul>
			</div>
		);
	}

});

var ExperianceItem = React.createClass({
	render: function(){
		const currentCompany = this.props.itemDetails.CurrentCompany;
		const iscurrentCompany = (currentCompany == 'true');
		let company = null
		if (iscurrentCompany){
			company = <ItemCurrent itemDetails={this.props.itemDetails}/>;
		}
		else{
			company = <ItemPrevious itemDetails={this.props.itemDetails}/>;
		}

		return(
			<div>
				{company}
			</div>
		);
	}
});

var ItemCurrent = React.createClass({
	render: function(){
		var style = {
			float: 'right'
		};

		return(
			<div>
				<li>
					<h5><strong>{this.props.itemDetails.Company}</strong><i className="material-icons" style={style}>mode_edit</i></h5>
					<h6>{this.props.itemDetails.Designation}</h6>
					<h6><span>{this.props.itemDetails.WorkedFrom}</span> - <span>Present</span></h6>
				</li>
				<br></br>
			</div>

		);
	}
});

var ItemPrevious = React.createClass({
	render: function(){
		var style = {
			float: 'right'
		};

		return(
			<div>
				<li>
					<h5><strong>{this.props.itemDetails.Company}</strong><i className="material-icons" style={style}>mode_edit</i></h5>
					<h6>{this.props.itemDetails.Designation}</h6>
					<h6><span>{this.props.itemDetails.WorkedFrom}</span> - <span>{this.props.itemDetails.WorkedTill}</span></h6>
				</li>
				<br></br>
			</div>
		);
	},
});

var Projects = React.createClass({
	render: function(){
		var projectItems = this.props.projectsDetails().map(function(eachItem) {
            return <ProjectItem key={eachItem.ProjectName} itemDetails={eachItem} />
        });
        
        var style = {
			float: 'right'
		};

		return (
			<div>
				<header className="experianceHeader">
					<h6 className="card-panel teal lighten-2"><b>Projects</b><i className="material-icons" style={style}>note_add</i></h6>
				</header>
				<ul>
					{projectItems}
				</ul>
			</div>
		);
	}

});

var ProjectItem = React.createClass({
	render: function(){
		const currentProject = this.props.itemDetails.OnGoingProject;
		const iscurrentProject = (currentProject == 'true');
		let project = null
		if (iscurrentProject){
			project = <ProjectCurrent itemDetails={this.props.itemDetails}/>;
		}
		else{
			project = <ProjectPrevious itemDetails={this.props.itemDetails}/>;
		}

		return(
			<div>
				{project}
			</div>
		);
	}
});

var ProjectCurrent = React.createClass({
	render: function(){
		var style = {
			float: 'right'
		};

		return(
			<div>
				<li>
					<h5><strong>{this.props.itemDetails.ProjectName}</strong><i className="material-icons" style={style}>mode_edit</i></h5>
					<h6><span>{this.props.itemDetails.StartDate}</span> - <span>Present</span></h6>
					<h6><a target="_blank" href='{this.props.itemDetails.ProjectUrl}'>{this.props.itemDetails.ProjectUrl}</a></h6>
					<p>{this.props.itemDetails.Description}</p>
					<h6><strong><i>{this.props.itemDetails.RelatedSkills}</i></strong></h6>
				</li>
				<br></br>
			</div>

		);
	}
});

var ProjectPrevious = React.createClass({
	render: function(){
		var style = {
			float: 'right'
		};

		return(
			<div>
				<li>
					<h5><strong>{this.props.itemDetails.ProjectName}</strong><i className="material-icons" style={style}>mode_edit</i></h5>
					<h6><span>{this.props.itemDetails.StartDate}</span> - <span>{this.props.itemDetails.EndDate}</span></h6>
					<h6><a target="_blank" href='{this.props.itemDetails.ProjectUrl}'>{this.props.itemDetails.ProjectUrl}</a></h6>
					<p>{this.props.itemDetails.Description}</p>
					<h6><strong><i>{this.props.itemDetails.RelatedSkills}</i></strong></h6>
				</li>
				<br></br>
			</div>
		);
	},
});

var Skillset = React.createClass({

	render: function(){

		var skills = _.first(this.props.skillSet());
		var skillItems = _.map(skills, function(value, key) {
            return <SkillItem key={key} skillKey={key} skillValue={value}/>
        });
 
        var style = {
			float: 'right'
		};

		return (
			<div>
				<header className="skilsetHeader">
					<h6 className="card-panel teal lighten-2"><b>Skillset</b><i className="material-icons" style={style}>note_add</i></h6>
				</header>
				<ul>
					{skillItems}
				</ul>
			</div>
		);
	}
});

var SkillItem = React.createClass({

	render: function(){
		var style = {
			float: 'right'
		};

		console.log(this.props.skillKey);
		console.log(this.props.skillValue);
		var items = this.props.skillValue.map(function(each){
			return <Item key={each} value={each} />
		});

		return(
			<div>
				<h5><strong>{this.props.skillKey}</strong><i className="material-icons" style={style}>mode_edit</i></h5>
				{items}
			</div>
		);
	}

});

var Item = React.createClass({
	render: function(){

		return(
			<p>{this.props.value}</p>
		);
	}
});

var AccountSetting = React.createClass({
	render: function(){
		return(
			<div>
				<p>Hello AccountSetting!</p>
			</div>
		);
	}
});

var Notifications = React.createClass({
	render: function(){
		return(
			<div>
				<p>Hello Notifications!</p>
			</div>
		);
	}
});

var Payments = React.createClass({
	render: function(){
		return(
			<div>
				<p>Hello Payments!</p>
			</div>
		);
	}
});

var Preferences = React.createClass({
	render: function(){
		return(
			<div>
				<p>Hello Preferences!</p>
			</div>
		);
	}
});

ReactDOM.render( 
	<Router history={hashHistory}>
      <Route path='/' component={Profile}>
        <IndexRoute component={GeekInfo}/>
        <Route path='accountsetting' component={AccountSetting}/>
        <Route path='notifications' component={Notifications}/>
        <Route path='payments' component={Payments}/>
        <Route path='preferences' component={Preferences}/>
      </Route>
    </Router>,  
document.querySelector("#container"));