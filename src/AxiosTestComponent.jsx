import axios from 'axios';
function AxiosTestComponent() {
  axios
    .post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return <div>테스트 1</div>;
}
export default AxiosTestComponent;
