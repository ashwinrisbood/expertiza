import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseURL';


export const fetchProfile = () =>(dispatch) => {
//     return fetch(baseUrl +'profile/show')
//     .then(data => console.log(data.json())) // JSON from `response.json()` call
//     .catch(error => console.error(error))
//     // .then(response => response.json())
//     //  .then(profile => dispatch(addProfile(profile)));
//     // .then(profile => console.log(profile));
    return null
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