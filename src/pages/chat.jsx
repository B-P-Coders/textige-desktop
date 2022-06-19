import { invoke } from "@tauri-apps/api"

export default function Chat() {
    return (
        <div className="chat">
            {/* {invoke("is_logged_in")} */}
        <h1>Chat</h1>
        <form>
            <label>
            Message:
            <input type="text" />
            </label>
            <button type="submit">Send</button>
        </form>
        </div>
    )
}