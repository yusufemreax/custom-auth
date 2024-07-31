"use client"
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginForm(handleSubmit:()=>void){
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
    return(
        <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
    )
}