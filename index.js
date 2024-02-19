import axios from 'axios';

export const handler = async (event,context, callback) => {
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.mohfw.gov.in/data/datanew.json',
  headers: { 
    'Cookie': 'BIGipServer10.247.252.72:80=1159460362.20480.0000'
  }
};
console.log ( " before api call");

await axios.request(config)
.then((response) => {
  console.log('response.data=', JSON.stringify(response.data));
  let resposnseObj ={};
  let data = JSON.parse(JSON.stringify(response.data));
   console.log("state_name" ,JSON.stringify(data[0].state_name));
  resposnseObj.active =data[36].active;
   resposnseObj.positive =data[36].positive;
  console.log( resposnseObj.active);
  console.log( resposnseObj.positive);
   callback(null,  resposnseObj);
})
.catch((error) => {
  console.log(error);
});


}

  