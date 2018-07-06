import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseURL';
import axios from 'axios';

export const fetchProfile = () =>(dispatch) => {
    return axios({
        method: 'get',
        url: 'http://localhost:3001/api/v1/profile',
        headers: { AUTHORIZATION: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo2fQ.edz6wZkJeHqaZjBOtOLwO-9WSQIQo0RnQYBNl7AoTS0" }
    })
    .then(response => response.data)
    .then(profile => dispatch(addProfile(profile['user'])))
    .catch(error => console.log(error));


}

export const fetchInstitutions = () =>(dispatch) => {
    return axios({
        method: 'get',
        url: 'http://localhost:3001/api/v1/institution',
        headers: { AUTHORIZATION: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo2fQ.edz6wZkJeHqaZjBOtOLwO-9WSQIQo0RnQYBNl7AoTS0" }
    })
    .then(response => response.data)
    .then(institutions => dispatch(addInstitutions(institutions)))
    .catch(error => console.log(error));
}

export const fetchTasksNotYetStarted = () =>(dispatch) => {
    return axios ({
        method : 'get',
        url : 'http://localhost:3001/api/v1/student_tasks_list'
    })
    .then(response => response.data)
    .then(tasksNotYetStarted => dispatch(addTasksNotYetStrarted(tasksNotYetStarted)))
    .catch(error => console.log(error));

}



export const addProfile = (profile) => ({
    type: ActionTypes.ADD_PROFILE,
    payload: profile
});

export const addTasksNotYetStrarted = (tasksNotYetStarted) => ({
    type: ActionTypes.ADD_TASKSNOTSTARTED,
    payload: tasksNotYetStarted
});
export const addInstitutions = (institutions) => ({
    type: ActionTypes.ADD_INSTITUTIONS,
    payload: institutions
});

