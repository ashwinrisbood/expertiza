import { Card, CardBody, CardText, Alert, Table } from 'reactstrap';
import React, { Component } from 'react';
import PublishingRights from './PublishingRights'

class StudentList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="main_content">
                <h2>Assignments</h2>
                
                <PublishingRights></PublishingRights>
                
            <div>
                <div class="taskbox">
                    <strong>&nbsp;&nbsp;<span class="tasknum">&nbsp;&nbsp;</span> Tasks not yet started<br/></strong><br/>
                </div>
            </div>

            <Table striped >
                <thead>
                    <tr>
                    <th>Assignment</th>
                    <th>Course</th>
                    <th>Topic</th>
                    <th>Current Stage</th>
                    <th>Review Grade</th>
                    <th>Badges</th>
                    <th>Stage Deadline<img src='assets/images/info.png' 
                     title="You can change 'Prefered time Zone' in 'Profile' in the banner. ">
                    </img></th>  
                    <th>Publishing Rights</th>                  
                    </tr>
                </thead>
            </Table>

                
            </div>
        );
    }
}
export default StudentList;