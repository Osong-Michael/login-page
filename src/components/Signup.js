import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h2 className="go">Let's set up your account</h2>
      <p className="taken">Already have an account? <a href="/"> Sign in</a></p>
      <form className="form">
        <div className="form-input">
          <input type="text" name="name" placeholder="Your name" />
        </div>
        <div className="form-input">
          <input type="email" name="email" placeholder="Email address" />
        </div>
        <div className="form-input">
          <select>
            <option value="default" disabled >I would decribe my user type as</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </div>
        <div className="form-input">
          <input type="password" name="password" placeholder="Password" />
          <i class="bi bi-eye" id="togglePassword"></i>
          <p className="more">Minimum 8 characters</p>
        </div>
        <div className="form-input"><button type="button" disabled >Next</button></div>
      </form>
      <p className="taken more">
        By clicking the "Next" button you agree to creating a free account and to <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>
      </p>
    </div>
  )
}

export default SignUp