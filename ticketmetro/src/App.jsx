import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Tạm in ra console, sau này bạn có thể gọi API
    console.log('Email:', email)
    console.log('Password:', password)
    alert('Đăng nhập thành công (demo)')
  }

  return (
    <div className="login-container">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  )
}

export default App
