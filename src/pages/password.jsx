import React, { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const handleCopyClick = () => {
    const textField = document.createElement("textarea");
    textField.innerText = password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    1;
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let chars = "";
    let password = "";

    if (uppercase) chars += upper;
    if (lowercase) chars += lower;
    if (numbers) chars += nums;
    if (symbols) chars += syms;

    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(password);
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 text-2xl">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:px-24 lg:pt-0">
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-center">
            <img className="inline-flex w-48 h-48" src="/img/senha.png"></img>
            <h1 className="m-2">Gerador De Senha</h1>
            <label className="mb-2">Número de caracteres da senha: </label>
            <input
              className="text-black rounded-md text-center"
              type="number"
              min="8"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <br />
            <label>Letra Maiúscula: </label>
            <input
              className="checked:bg-blue-500"
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <br />
            <label>Letra Minúscula: </label>
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            <br />
            <label>Números: </label>
            <input
              type="checkbox"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            <br />
            <label>Símbolos: </label>
            <input
              className=" indeterminate:bg-gray-300"
              type="checkbox"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
            <br />

            <button
              class="mt-5 mb-7 bg-orange-500 hover:bg-sky-900 px-5 py-2 leading-5 rounded-full font-semibold text-white text-xl"
              onClick={generatePassword}
            >
              Gerar Senha
            </button>

            <p className="">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-black text-center justify-center rounded-full w-full md:w-auto"
                readOnly
              />
              <button
                className="m-1 bg-orange-500 hover:bg-sky-900 px-5 py-2 leading-5 rounded-full font-semibold text-white text-xl"
                onClick={handleCopyClick}
              >
                Copiar
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
