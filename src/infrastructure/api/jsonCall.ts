import axios from 'axios';

const apiCallFunc = async() => {
  const token = '1k5sbhafeq3stb477djbommo9z2vrwj40x1zymsa'
  const apiCall = await axios.get('https://api.json-generator.com/templates/NM0ZuloCu1TZ/data', {headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
      console.log("Call request sucess!");
      return res.data;
    })
    .catch(err => console.error(err));

  return apiCall;
}

export default apiCallFunc;