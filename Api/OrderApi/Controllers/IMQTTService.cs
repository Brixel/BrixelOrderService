using System.Threading.Tasks;

namespace OrderApi.Controllers
{
    public interface IMQTTService
    {
        Task SendMessage(string input);
    }
}