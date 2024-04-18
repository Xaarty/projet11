import { Form } from "react-router-dom"

export default function FormLog () {
    return (
        <Form id="form" method='post' action="/sign-in">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" name="username"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
          <input type="submit" name="button" className="sign-in-button" value="Sign In"></input> 
        </Form>
    )
}
