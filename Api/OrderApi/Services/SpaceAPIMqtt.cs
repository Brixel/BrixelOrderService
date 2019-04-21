using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;
using MQTTnet;
using MQTTnet.Client;

namespace OrderApi.Services
{
    public class SpaceAPIMqtt
    {
        public async Task RequestOpenState()
        {
            var mqttClientFactory = new MqttFactory();
            var client = mqttClientFactory.CreateMqttClient();
            var options = new MqttClientOptionsBuilder()
                .WithTcpServer("192.168.20.100", 1883).Build();
            var result = await client.ConnectAsync(options);


            var message = new MqttApplicationMessageBuilder()
                .WithTopic("/brixel/spaceapi/state")

                .WithPayload(" hello").Build();
            try
            {
                await client.PublishAsync(message);

            }
            catch (Exception ex)
            {

            }
        }
    }
}
