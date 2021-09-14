import axios from 'axios';

const listItems = async() => {
  const token: string = '1k5sbhafeq3stb477djbommo9z2vrwj40x1zymsa'
  const fetchItems = await axios.get('https://api.json-generator.com/templates/NM0ZuloCu1TZ/data', {headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => res.data)
    .catch(err => {throw err});

  return fetchItems;
}

export default listItems;