using Microsoft.AspNetCore.SignalR;
using SignalRExampleServer.Domain.Chat;

namespace SignalRExampleServer.Hubs.Chat
{
    public class ChatHub : Hub<IChatClientHub>
    {
        public async Task SendMessage(ChatMessage message)
        {
            //Para quem enviou a mensagem
            //await Clients.Caller.ReceiveMessage(message);

            //Para quem não enviou a mensagem
            //await Clients.Others.ReceiveMessage(message);

            //Para todos
            await Clients.All.ReceiveMessage(message);
        }
    }
}
