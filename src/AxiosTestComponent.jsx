import axios from 'axios';
function AxiosTestComponent() {
  //이 컴포넌트가 맨 처음 로딩돼서 렌더링 되자 마자
  // axios로 샘플 json 데이터 받아오기
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
  //자바스크립트 구문

  //return (JSX)구문
  return <div>테스트 1</div>;
}
export default AxiosTestComponent;
