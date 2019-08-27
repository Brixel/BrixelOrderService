using System.Threading.Tasks;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;

namespace OrderApi.Controllers
{
    public class MQTTService : IMQTTService
    {
        public async Task SendMessage(string input)
        {
            var options = new MqttClientOptionsBuilder()
                .WithTcpServer("192.168.20.100", 1883) // Port is optional
                .Build();
            var client = new MqttFactory().CreateMqttClient();
            var result = await client.ConnectAsync(options);
            var message = new MqttApplicationMessageBuilder()
                .WithTopic("/brixel/room1/ledmatrix/message")
                .WithPayload(input)
                .WithExactlyOnceQoS()
                .Build();

            await client.PublishAsync(message);
        }
    }
}