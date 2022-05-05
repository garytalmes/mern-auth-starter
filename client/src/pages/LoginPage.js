import { useState, useEffect } from "react"
import cookie from "js-cookie"

const LoginPage = (props) => {

  const defForm = { email: "", password: "" }
  const [ formData, setFormData ] = useState(defForm)

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const query = await fetch("/api/user/auth", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await query.json()

    if( result && !result.err && result.data && result.data.token ){
      cookie.set("auth-token", result.data.token, { expires: 3 })
    }
  }

  return (
    <>
      <h1>Login Page</h1>

      <form className="form">
        <div className="form-group">
          <label>Email Address</label>
          <input   
            type="text"
            name="email"
            placeholder="john@gmail.com"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input   
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary" onClick={handleFormSubmit}>Log Me In!</button>
        </div>
      </form>
    </>
  )

}

export default LoginPage