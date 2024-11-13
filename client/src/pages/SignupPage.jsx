import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
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
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Nama" />
              <TextInput type="text" placeholder="Nama Anda" id="username" />
            </div>

            <div className="">
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="emailanda@contoh.com"
                id="email"
              />
            </div>

            <div className="">
              <Label value="Kata Sandi" />
              <TextInput
                type="password"
                placeholder="Password Anda"
                id="password"
              />
            </div>

            <Button gradientDuoTone="greenToBlue" type="submit">
              Daftar
            </Button>
          </form>

          <div className=" flex gap-2 text-sm mt-5">
            <span>Sudah punya akun?</span>
            <Link to="/signin" className="text-blue-500 hover:underline ">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
