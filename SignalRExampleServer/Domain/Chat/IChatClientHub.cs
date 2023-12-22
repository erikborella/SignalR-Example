namespace SignalRExampleServer.Domain.Chat
{
    public interface IChatClientHub
    {
        Task ReceiveMessage(ChatMessage chatMessage);
    }
}
