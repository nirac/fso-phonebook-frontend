import axios from "axios";

const baseUrl = '/api/persons';

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

 const update = person => {
    console.log(2,person)
    const request = axios.put(baseUrl+'/'+person.id, person);
    return  request.then(response => response.data);
}

 const deleteEntry = personToRemove => {
    const request = axios.delete(baseUrl+'/'+personToRemove)
    return request.then(response => response.data)
}

const phonebookService = {getAll, create, update, deleteEntry}

export default phonebookService