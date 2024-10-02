import { useState } from "react"
import SendButton from "./SendButton"
import axios from 'axios';

function WritePost() {
    const [text, setText] = useState("")

    function createPost() {
        axios.post('/api/posts', {
            author_id: -1, //not implemented yet
            content: text
        }).then((res) => {
            console.log(res)
            if (res.status) {
                switch (res.status) {
                    case 200:
                        console.log('OKAY!')
                        location.reload()
                        break;
                }
            }
        }).catch((err) => {
            if (err.status) {
                switch (err.status) {
                    case 400:
                        console.log('BAD REQUEST');
                        break;
                    default:
                        console.log('UNKNOWN ERROR')
                        break;
                }
            }
        });
    };




    return <>
        <div className="BorderedContainer write-post-container">
            <textarea onInput={(e) => {
                setText(e.target.value)
            }
            }
                id="write-post"
                name="write-post"
                rows="5"
                placeholder="What's going on?">
            </textarea>


            <div className="d-flex w-100 justify-content-end">
                <SendButton onclick={createPost} />
            </div>
        </div>
    </>
}
export default WritePost