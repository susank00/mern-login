import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const userEmail = location.state && location.state.email;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.post("http://localhost:3001/getUserInfo", {
          email: userEmail,
        });

        if (response.data.success) {
          setName(response.data.name);
          setPassword(response.data.password);
          setRole(response.data.role);
        } else {
          console.error("User information not found:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching user information:", error.message);
      }
    };

    if (userEmail) {
      fetchUserInfo();
    }
  }, [userEmail]);

  return (
    <div>
      {name || password ? (
        <p>
          Welcome,
          {name}
          (Role: {role})
        </p>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Profile;
