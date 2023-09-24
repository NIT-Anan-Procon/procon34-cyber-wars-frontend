// import { useNavigate } from 'react-router-dom';

// import { IS_LOGGED_IN_KEY, useAuthenticatedUserQuery } from '@/features/auth';

// type AuthProviderProps= {
//   children: React.ReactNode;
// };

// export const AuthProvider= ({ children }: AuthProviderProps ) => {
//   const navigate= useNavigate();

//   const { data: isAuthenticated, isLoading }= useAuthenticatedUserQuery({
//     config: {
//       select: ( authUser ) => authUser[ IS_LOGGED_IN_KEY ] 
//     }
//   });

//   if( isLoading ) {
//     return <>loading</>
//   };

//   return ( isAuthenticated ? { children }: () => navigate('*') );
// };