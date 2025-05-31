import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    if (email === 'admin' && password === 'Admin@1234') {
      alert('Đăng nhập thành công')
      window.location.href = '/dashboard' 
    } else {
      alert('Sai tài khoản hoặc mật khẩu')
    }
  }

  return (
    <div className="login-container">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          /> Hiện mật khẩu
        </label>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  )
}

export default App
