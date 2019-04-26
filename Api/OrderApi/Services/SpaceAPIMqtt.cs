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
using OrderApi.Models.Configuration;

namespace OrderApi.Services
{
    public class SpaceAPIMqtt: ISpaceAPIMqttService
    {
        private readonly MqttConfiguration _mqttConfiguration;

        public SpaceAPIMqtt(MqttConfiguration mqttConfiguration)
        {
            _mqttConfiguration = mqttConfiguration;
        }

        public async Task RequestOpenState(bool isOpen)
        {
            var mqttClientFactory = new MqttFactory();
            var client = mqttClientFactory.CreateMqttClient();
            var options = new MqttClientOptionsBuilder()
                .WithTcpServer(_mqttConfiguration.Server, _mqttConfiguration.Port).Build();
            var result = await client.ConnectAsync(options);

            var isOpenPayload = isOpen ? "open" : "close";

            var message = new MqttApplicationMessageBuilder()
                .WithTopic(_mqttConfiguration.Topic)
                .WithAtMostOnceQoS()

                .WithPayload(isOpenPayload).Build();
            await client.PublishAsync(message);
        }
    }
}
