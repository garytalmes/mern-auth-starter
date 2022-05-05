import { useState, useEffect } from "react"

const SignupPage = (props) => {

  const defForm = { email: "", password: "" }
  const [ formData, setFormData ] = useState(defForm)

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    const query = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(query)
    
    const result = await query.json()
    console.log(result)
  }

  return (
    <>
      <h1>Signup Page</h1>

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
          <button className="btn btn-primary" onClick={handleFormSubmit}>Sign Me Up!</button>
        </div>
      </form>
    </>
  )
}

export default SignupPage