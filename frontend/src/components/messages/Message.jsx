const Message = () => {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-bubble rounded-xl">You were the Chosen One!</div>
        <div className="chat-footer text-xs opacity-50">2 hours ago</div>
      </div>
      <div className="chat chat-start">
        {/* <div className="chat-header">
          <time className="text-xs opacity-50">2 hour ago</time>
        </div> */}
        <div className="chat-bubble rounded-xl">I loved you.</div>
        <div className="chat-footer text-xs opacity-50">Delivered</div>
      </div>
    </>
  );
};

export default Message;
