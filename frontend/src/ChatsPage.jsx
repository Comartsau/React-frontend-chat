import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // Theme Advance
//   const chatProps = useMultiChatLogic(
//     "97329087-36b7-4806-9c13-27bf967a1d74",
//     props.user.username,
//     props.user.secret
//   );
  return (
    // Theme Advance
    // <div style={{height:'100vh'}}>
    //     <MultiChatSocket {...chatProps} />
    //     <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    // </div>
    // Theme Pretty
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="97329087-36b7-4806-9c13-27bf967a1d74"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
