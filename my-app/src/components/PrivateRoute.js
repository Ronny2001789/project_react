// import { useEffect, useState } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth, db } from '../firebase';
// import { Navigate } from 'react-router-dom';

// function PrivateRoute({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     onAuthStateChanged(auth, currentUser => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   return user ? children : <Navigate to="/login" />;
// }

// export default PrivateRoute;
