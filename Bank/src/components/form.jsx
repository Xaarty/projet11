import { Form } from "react-router-dom";


// Si il y a une erreur l'afficher en rouge, sinon afficher l'élément sans erreur

export default function FormLog({ error }) {
  return (
    <>
      {error ? (
        <Form id="form" method="post" action="/sign-in">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <div className="error-message" style={{ color: 'red' }}>
              {error}
            </div>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" name="button" className="sign-in-button" value="Sign In" />
        </Form>
      ) : (
        <Form id="form" method="post" action="/sign-in">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" name="button" className="sign-in-button" value="Sign In" />
        </Form>
      )}
    </>
  );
}
