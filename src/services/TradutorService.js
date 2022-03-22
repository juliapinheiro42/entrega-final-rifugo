import axios from 'axios';

const TRADUTOR_API_BASE_URL = axios.create({ baseURL:"https://rifugo-application.herokuapp.com/api/tradutor",})

class TradutorService {

 getTradutor(){
return axios.get(TRADUTOR_API_BASE_URL);
}

 createTradutor(tradutors){
return axios.post(TRADUTOR_API_BASE_URL, tradutors);
}

 getTradutorById(tradutorId){
return axios.get(TRADUTOR_API_BASE_URL + '/' + tradutorId);
}

 updateTradutor(tradutors, tradutorId){
return axios.put(TRADUTOR_API_BASE_URL + '/' + tradutorId, tradutors);
}

 deleteTradutor(tradutorId){
return axios.delete(TRADUTOR_API_BASE_URL + '/' + tradutorId);
}
}

export default new TradutorService();