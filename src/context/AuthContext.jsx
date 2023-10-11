import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Store user data in local storage
        localStorage.setItem('authUser', JSON.stringify(user));
        localStorage.setItem('token', user.accessToken);
      } else {
        // Clear local storage when the user signs out
        localStorage.removeItem('authUser');
        localStorage.removeItem('token');
      }
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    // Clear local storage when the user signs out
    localStorage.removeItem('authUser');
    localStorage.removeItem('token');
    navigate('/login');
    await auth.signOut();
  };

  const value = { user, logout, loading, setUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
