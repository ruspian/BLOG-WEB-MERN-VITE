import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const GoogleAuthComponent = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // masuk dengan akun google
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    try {
      // simpan ke database
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="greenToBlue"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Masuk dengan akun Google
    </Button>
  );
};

export default GoogleAuthComponent;
