import React, { Component } from "react";
import '../styles/PersonalInfo.css';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      job: '',
      email: '',
      phoneNumber: '',
      location: '',

      college:'',
      major:'',
      eduDateStarted:'',
      eduDateEnded:'',
      collegeDescription:'',

      company: '',
      jobTitle: '',
      workDateStarted:'',
      workDateEnded:'',
      workDescription: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){
    const { name, job, email, phoneNumber, college, major, collegeDescription } = this.state;
    event.preventDefault();
    console.log("Name: " + name);
    console.log("Last name: " + job);
    console.log("email: " + email);
    console.log("Phone Number: " + phoneNumber);
    console.log("College: " + college);
    console.log(major);
    console.log(collegeDescription);
  }

  render(){
    return(
      <div className="formContainer">
        <div className="title">Personal Information</div>
        <div className="personal-form">
          <form className="form-section">
            <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
            <input type="text" name="job" value={this.state.job} placeholder="Job title" onChange={this.handleChange} />
            <input type="text" name="email" value={this.state.email} placeholder="Email address" onChange={this.handleChange} />
            <input type="text" name="phoneNumber" value={this.state.phoneNumber} placeholder="Phone number" onChange={this.handleChange} />
            <input type="text" name="location" value={this.state.location} placeholder="City, state" onChange={this.handleChange} />
          </form> 
        </div>

        <div className="title">Education</div>
        <div className="education-form">
        <form className="form-section">
            <input type="text" name="college" value={this.state.college} placeholder="College" onChange={this.handleChange} />
            <input type="text" name="major" value={this.state.major} placeholder="Major" onChange={this.handleChange} />
            <input type="text" name="eduDateStarted" value={this.state.eduDateStarted} placeholder="Date started" onChange={this.handleChange} />
            <input type="text" name="eduDateEnded" value={this.state.eduDateEnded} placeholder="Date completed" onChange={this.handleChange} />
            <textarea type="text" name="collegeDescription" value={this.state.collegeDescription} placeholder="Education description" onChange={this.handleChange} />
          </form>
        </div>
        
        <div className="title">Work Experience</div>
        <div className="work-form">
          <form className="form-section">
            <input type="text" name="company" value={this.state.company} placeholder="Company" onChange={this.handleChange} />
            <input type="text" name="jobTitle" value={this.state.jobTitle} placeholder="Job title" onChange={this.handleChange} />
            <input type="text" name="workDateStarted" value={this.state.workDateStarted} placeholder="Date started" onChange={this.handleChange} />
            <input type="text" name="workDateEnded" value={this.state.workDateEnded} placeholder="Date completed" onChange={this.handleChange} />
            <textarea type="text" name="workDescription" value={this.state.workDescription} placeholder="Work description" onChange={this.handleChange} />
          </form>
        </div>
        
        
        <div className="cv-section">
          <div className="cv-header">
            <div className="cv-header-left">
              <div className="name">{this.state.name}</div>
              <div className="job-title">{this.state.job}</div>
            </div>
            <div className="cv-header-right">
              <div className="email">{this.state.email}</div>
              <div className="phone-number">{this.state.phoneNumber}</div>
              <div className="location">{this.state.location}</div>
            </div>
          </div>
          <div className="education-section">
            <div className="education-left">
              <div className="education-title">Education</div>
              <div className="underline"></div>
              <div className="college">{this.state.college}</div>
              <div className="major">{this.state.major}</div>
              <div className="college-description">{this.state.collegeDescription}</div>
            </div>

            <div className="education-right">
              <div className="edu-date">Started: {this.state.eduDateStarted}</div>
              <div className="edu-date">Completed: {this.state.eduDateEnded}</div>
            </div>
          </div>

          <div className="work-section">
            <div className="work-left">
              <div className="work-title">Work History</div>
              <div className="underline"></div>
              <div className="company">{this.state.company}</div>
              <div className="job-title">{this.state.jobTitle}</div>
              <div className="work-description">{this.state.workDescription}</div>
            </div>

            <div className="work-right">
              <div className="work-date">Started: {this.state.workDateStarted}</div>
              <div className="work-date">Ended: {this.state.workDateEnded}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;