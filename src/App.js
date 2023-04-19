// export const name = "Ramraj";
// export const profession = "Developer";

// export const App = "Vishal";

// export function sum(a, b) {
//   console.log(a + b);
// }

// props: built-in object in React, which recieves all the arguments passed to any functional componenent in react

// export function Friends(props){
//     return <h2>{props.f1} and {props.f2} are friends</h2>
// }

export function Friends({ f1, f2 }) {
  return (
    <h2>
      {f1} and {f2} are friends
    </h2>
  );
}
// export function Friends([props]) {
//     return (
//       <h2>
//         {props.f1} and {props.f2} are friends
//       </h2>
//     );
//   }
