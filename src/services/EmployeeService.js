import axios from "axios";
const REST_API_BASE_URL  = 'http://localhost:8181/employees'

export const listEmployee = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL+ '/' + employeeId)
export const updateEmployee = (employeeId, updatedEmployee) => axios.put(REST_API_BASE_URL + '/' + employeeId,updatedEmployee)

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL+ '/' + employeeId);