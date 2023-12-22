using Microsoft.AspNetCore.SignalR.Client;
using SignalRExampleServer.Domain.Chat;

const string CHAT_URL = "https://localhost:3000/chat";

await using var connection = new HubConnectionBuilder()
    .WithUrl(CHAT_URL)
    .WithAutomaticReconnect()
    .Build();

await connection.StartAsync();


Console.Write("Digite seu nome: ");
var name = Console.ReadLine();


connection.On<ChatMessage>("ReceiveMessage", (chatMessage) =>
{
    Console.WriteLine();
    Console.WriteLine($"{chatMessage.Date}");
    Console.WriteLine($"{chatMessage.User}: {chatMessage.Message}");
});


while (true)
{
    var message = Console.ReadLine();

    if (message == "--exit")
        break;

    var chatMessage = new ChatMessage()
    {
        Message = message,
        User = name
    };

    await connection.SendAsync("SendMessage", chatMessage);
}