import SendButton from "./SendButton"

function WritePost() {
    return <>
        <textarea className="BorderedContainer" id="write-post" name="write-post" rows="5" placeholder="What's going on?"></textarea>
        <SendButton/>
    </>
}
export default WritePost