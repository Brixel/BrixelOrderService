using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Protocol;

namespace OrderApi.Services
{
    public class SpaceAPIMqtt
    {
        public async Task RequestOpenState(bool isOpen)
        {
            var mqttClientFactory = new MqttFactory();
            var client = mqttClientFactory.CreateMqttClient();
            var options = new MqttClientOptionsBuilder()
                .WithTcpServer("192.168.20.100", 1883).Build();
            var result = await client.ConnectAsync(options);

            var isOpenPayload = isOpen ? "open" : " close";

            var message = new MqttApplicationMessageBuilder()
                .WithTopic("/brixel/spaceapi/state")
                .WithAtMostOnceQoS()

                .WithPayload(isOpenPayload).Build();
            await client.PublishAsync(message);
        }
    }
}
