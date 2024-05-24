import FormLog from "./form";

// Continuer de passer l'erreur en prop

export default function Modale({ error }) {
  return (
    <section className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormLog error={error} />
      </div>
    </section>
  );
}