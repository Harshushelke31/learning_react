export const EventExample = () =>{
     const showMessage = () =>{
         alert("Botton was Clicked");
    

     const getName = (yourname) => {
        alert(`Hello ${yourname}, Welcome`);
                };

    }
    return(
        <>
        
         <div className="container">
            <h1 style={{color:"lightblue"}}>Arrow Function Event Example</h1>
            <button className="btn btn-primary" onClick={()=>alert("Hello Wellcome")}>onclick InLine</button>
        </div>
        <hr/>
         
         <div className="container">
            <h1 style={{color:"lightblue"}}>On click Function Calling</h1>
            <button className="btn btn-primary" onClick={showMessage}>onclick Function Call</button>

         </div>
         <hr/> 
         
         <div className="container">
         <h1>Parameterized Function Calling</h1>
         <button className="btn btn-primary" onClick={() => getName("Harshada")}>onclick Parameterized Function calling</button>

         </div>

        </>
    )
}
