import  { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from './authSlice';
import { useNavigate } from 'react-router-dom';

export async function navigateToLogin(navigate) {
  
  await new Promise(resolve => setTimeout(resolve, 50));
 
  navigate('/login', { replace: true });
}

export function Protected({ children }) {
  const navigate = useNavigate();
  const authenticated = useSelector(selectAuthenticated);
console.log(authenticated)
  useEffect(() => {
    async function handleNavigation() {
      if (!authenticated) {
        // Call the async function to navigate to login
        await navigateToLogin(navigate);
      }
    }

    handleNavigation();
  }, [authenticated, navigate]);

  return authenticated ? children : null;
}
