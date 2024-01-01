import { useEffect } from "react";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ( { children }) => {
  const navigate = useNavigate();
  const { currentUser, isGettingUser } = useGetCurrentUser();
  useEffect(() => {
    if (!currentUser && !isGettingUser) {
      navigate('/login');
    }
  }, [currentUser, isGettingUser, navigate])
  if (isGettingUser) {
    return <p>Loading...</p>
  }
  if (currentUser) return children;
}

export default ProtectedRoute