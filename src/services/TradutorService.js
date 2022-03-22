import axios from 'axios';

const TRADUTOR_API_BASE_URL = "https://rifugo-application.herokuapp.com/api/tradutor";

class TradutorService {

 getTradutor(){
return axios.get(TRADUTOR_API_BASE_URL);
}

 createTradutor(tradutor){
return axios.post(TRADUTOR_API_BASE_URL, tradutor);
}

 getTradutorById(tradutorId){
return axios.get(TRADUTOR_API_BASE_URL + '/' + tradutorId);
}

 updateTradutor(tradutor, tradutorId){
return axios.put(TRADUTOR_API_BASE_URL + '/' + tradutorId, tradutor);
}

 deleteTradutor(tradutorId){
return axios.delete(TRADUTOR_API_BASE_URL + '/' + tradutorId);
}
}

export default new TradutorService()