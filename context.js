//import "./styles.css";
//import submitForm from "./submitForm";

export default function Context() {
  return (
    <div>
      <form
        // Ignore the onSubmit prop, it's used by GFE to
        // intercept the form submit event to check your solution.
        onSubmit={submitForm}
      >
        Name: <input type="text" id="name" />
        <br></br>
        <br></br>
        Email: <input type="text" id="email" />
        <br></br>
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
  function submitForm() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    alert("Thank You "+a+" "+b);
  }
}
