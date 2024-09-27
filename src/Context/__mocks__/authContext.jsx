export const getAuth = () => Promise.resolve({});


export const signInWithEmailAndPassword = async (auth, email, password) => {
  console.log("estoy en el mock")
  return await Promise.resolve({ user: { email: email, password: password } });

}
export const createUserWithEmailAndPassword = async (auth, email, password) => {
  console.log("estoy en el mock")
  return await Promise.resolve({ user: { email: email, password: password } });
}
/* export const userContext = {
  loginUser: jest.fn()
 } */

/*  export const loginUser = (auth, emailUser, passwordUser) => Promise.resolve({ user: { email: emailUser, password: passwordUser } });
 export const registerUser = (auth, emailUser, passwordUser) => Promise.resolve({ user: { email: emailUser, password: passwordUser } });

 export function AuthProvider({ children }) {
  return 
        <userContext.Provider value={{ registerUser, loginUser }}>
            {children}
        </userContext.Provider>

}
 */
// export const AuthProvider = () => ({ children }) => {
//   const [user, setUser] = useState(false);

//   // useEffect(() => {
//   //     const unsuscribe = onAuthStateChanged(auth,(user)  => {
//   //         console.log(user)
//   //     })
//   //     return () => unsuscribe()
//   // }, [])
//   // const user = {
//   //     login: true
//   // };
//   const registerUser = (email, password,role ) =>  createUserWithEmailAndPassword(auth ,email ,password,role);
//    const loginUser = (email, password) => {
//        console.log("entrando en la funcion")
//        signInWithEmailAndPassword(auth, email, password);
//   } 
  
//   return (
//   <userContext.Provider value={{ user, setUser,  registerUser, loginUser}}>
//   {children}
//   </userContext.Provider>
//   );
// };
