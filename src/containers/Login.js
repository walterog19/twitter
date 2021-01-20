import React, { useState } from 'react';
import API from '../api';

export default function Login() {
  const [user, setUser] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;
    try {
      const data = await API.login({
        username: username.value,
        password: password.value,
      });
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!user) {
    return (
      <div>
        <form onSubmit={submit}>
          <label>
            Username:
            <input type="text" autoFocus name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      {user.name} - {user.email}
    </div>
  );
}
