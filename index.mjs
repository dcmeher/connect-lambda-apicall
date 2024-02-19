const axios = require('axios');
export const handler = async (event) => {
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.mohfw.gov.in/data/datanew.json',
  headers: { 
    'Cookie': 'BIGipServer10.247.252.72:80=1159460362.20480.0000'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  let resposnseObj ={};
  let data = JSON.parse(JSON.stringify(response.data));
  resposnseObj.active =data[36].active;
  console.log( resposnseObj.active);
  return resposnseObj;
})
.catch((error) => {
  console.log(error);
});


}
// export const handler = async (event) => {
//     // TODO implement
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
//   };
  