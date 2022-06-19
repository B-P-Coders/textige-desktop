import { open } from "@tauri-apps/api/dialog";
import { invoke } from "@tauri-apps/api";

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label>
        Username:
        <input type="text" />
        </label>
        <label>
        Password:
        <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        If you don't have an accout 
        <span onClick={() => open("https://textige.ml/register")}>register here</span>
      </p>      
    </div>
  )
}