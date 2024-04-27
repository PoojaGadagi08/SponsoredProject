import axios from 'axios';

const TRACK_API_BASE_URL = 'http://localhost:8080/user/tracking';

class TrackingService{


    trackData(){
        return axios.get(TRACK_API_BASE_URL);
    }

    // searchData(igmNo, containerNo) {
    //     return axios.get(`http://localhost:8080/user/search?query=${igmNo}&containerNo=${containerNo}`);
    // }

    searchData(igmNo, containerNo) {
        let url = 'http://localhost:8080/user/search?';
        
        if (igmNo) {
            url += `query=${igmNo}`;
        } else if (containerNo) {
            url += `query=${containerNo}`;
        } else {
            throw new Error('At least one parameter (igmNo or containerNo) must be provided');
        }
    
        return axios.get(url);
    }
    
    
    

}

export default new TrackingService();
