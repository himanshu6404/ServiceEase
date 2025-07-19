import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children, allowedRoles }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }

      const res = await fetch('http://localhost:7000/api/v1/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      const user = data?.data || data?.user || data;

      if (!allowedRoles.includes(user.role)) {
        alert('Unauthorized access');
        navigate('/');
        return;
      }

      setLoading(false);
    };

    checkAccess();
  }, []);

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  return children;
}
