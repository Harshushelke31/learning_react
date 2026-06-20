// import axios from 'axios';
// import React from 'react'

// const CRUDAxios = () => {
//     const [users,setUsers] = useState([]);
//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [editId,setEdit] = useState(null);

//     const API = "/path copy karaychi";
//     //Read (Fetch all users)
//     const fetchUsers = async () =>{
//         try{
//             const res = await axios.get(API);
//             setUsers(res.data)
//         }catch(err){
//             console.log("Error fetching Users" , err);
//         }
//     };
//     useEffect(() =>{
//         fetchUsers();
//     },[]);


//   return (
//     <div>

//         <div className="container">
          

//           <h2 className='text-center mb-4'>CRUD Axios - using JSON db</h2>


//           <table className='table table-bordered'>
//             <thea
//           </table>
//         </div>
//     </div>
//   )
// }

// export default CRUDAxios