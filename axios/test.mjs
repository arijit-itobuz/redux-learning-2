import axios from "axios";

// const response = axios.get('https://jsonplaceholder.typicode.com/users');
// try {
//     console.log(((await response).data).map(e => e.name));
// } catch (error) {
//     console.log("error");
// }

const response = axios.post('https://dummy.restapiexample.com/api/v1/create', {
  name: "test",
  salary: "123",
  age: "23",
});
try {
    console.log((await response).data);
} catch (error) {
    console.log(error.code);
}
