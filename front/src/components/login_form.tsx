import { useState } from 'react';
import lock from "../assets/lock.svg";
import mail from "../assets/mail.svg";
import hide from "../assets/hide.svg";
import show from "../assets/show.svg";


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <div className="absolute w-[326px] h-[108px] flex flex-col top-[410px] pb-2 justify-between">

      <div className="flex flex-row relative border-b h-[40px] items-end border-gray-300">
        <img src={mail} className="w-[24px] h-[24px] text-gray-500"/>
        <input type="email" placeholder="Digite seu e-mail" className=" w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-row relative border-b h-[40px] items-end border-gray-300">
        <img  src={lock} className="w-[24px] h-[24px] text-gray-500 mb-[2px] mr-[1px] ml-[1px]"/>
        <input type={hidePassword ? 'text' : 'password'} placeholder="Digite sua senha" className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setHidePassword(!hidePassword)}
          className=" text-gray-500 focus:outline-none"
        >
          {hidePassword ? <img  src={hide} className={"mb-[2px]"}/> : <img  src={show} className={"mb-[2px]"}/>}
        </button>
      </div>
    </div>
  );
}