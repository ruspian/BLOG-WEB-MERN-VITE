import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuthComponent from "../components/GoogleAuthComponent";

const SignupPage = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // mengambil data inputan user dari form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    // menghentikan tindakan default dari browser
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage("Mohon isi semua kolom");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      // mengirimkan data user ke server
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      setLoading(false);

      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5">
        {/* bagian kiri */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl ">
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-blue-500 to-blue-700 rounded-lg text-white">
              Coy
            </span>
            Blog
          </Link>

          <p className="text-sm mt-5">
            Daftar sekarang untuk berbagi cerita, gagasan, dan inspirasi Anda
            dengan dunia. Daftar dengan akun Google anda atau dengan Email dan
            Password anda.
          </p>
        </div>

        {/* bagian kanan  */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Nama" />
              <TextInput
                type="text"
                placeholder="Nama Anda"
                id="username"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="emailanda@contoh.com"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <Label value="Kata Sandi" />
              <TextInput
                type="password"
                placeholder="**************"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button
              gradientDuoTone="greenToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Tunggu Sebentar...</span>
                </>
              ) : (
                "Daftar"
              )}
            </Button>
            <span className="text-xs text-gray-500 text-center">Atau</span>
            <GoogleAuthComponent />
          </form>

          <div className=" flex gap-2 text-sm mt-5">
            <span>Sudah punya akun?</span>
            <Link to="/signin" className="text-blue-500 hover:underline ">
              Masuk
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
