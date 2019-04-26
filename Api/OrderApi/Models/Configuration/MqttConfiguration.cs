using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderApi.Models.Configuration
{
    public class MqttConfiguration
    {
        public string Server { get; set; }
        public int Port { get; set; }
        public string Topic { get; set; }
    }
}
