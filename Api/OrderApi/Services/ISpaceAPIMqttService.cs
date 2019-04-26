using System.Threading.Tasks;

namespace OrderApi.Services
{
    public interface ISpaceAPIMqttService
    {
        Task RequestOpenState(bool isOpen);
    }
}