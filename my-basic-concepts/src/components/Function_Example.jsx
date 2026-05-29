// export const Function_Example = () => {
//   function getName() {
//     return "Harshada";
//   }

//   return (
//     <>
//         <h1> Hello User {getName()}</h1>
//         <div>
//             <h3>This is a test Row by {getName()}</h3>
           
//         </div>
//     </>
//   )
// };
// export const Function_Example = () => {
//   const getName = (yourname) =>  {
//     return yourname;
//   };
//   const name = "Mayuri";
//   const name2 = "Harshada";
//   return(
//     <>
//       <h1>Using Parameterized function</h1>
//       <h2>Hello my name is {getName(name)}</h2>
//       <h2>Hello my name is {getName(name2)}</h2>
//     </>
//   );
// };

export const Function_Example = () => {
const add =(a,b) => {
  return a+b;
}
  return(
  <>
  <div className ="container">
    <h1>Addition Example</h1>
    <h3>10 + 20 = {add(10,20)}</h3>
    <h3>40 + 50 = {add(40,50)}</h3>

    
  </div>
  </>
   
)
}