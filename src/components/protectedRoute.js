import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const logged = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (!logged) {
      navigate("/");
    }
  }, [logged, navigate]);

  return logged ? children : null;
};
