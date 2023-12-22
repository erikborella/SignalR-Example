namespace SignalRExampleServer.Domain.Chat
{
    public class ChatMessage
    {
        public DateTime Date { get; set; } = DateTime.Now;
        public string Message { get; set; }
        public string User { get; set; }
    }
}
