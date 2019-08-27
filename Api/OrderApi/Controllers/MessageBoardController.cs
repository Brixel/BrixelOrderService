using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace OrderApi.Controllers
{
    [Route("api/messageboard")]
    public class MessageBoardController : Controller
    {
        private readonly IMQTTService _mqttService;

        public MessageBoardController(IMQTTService mqttService)
        {
            _mqttService = mqttService;
        }
        [HttpPost("write")]
        public async Task WriteMessage([FromBody] string message)
        {
            await _mqttService.SendMessage(message);
        }
    }
}