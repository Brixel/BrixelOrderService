using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace OrderApi.Controllers
{
    public class SpaceAPIController : Controller
    {
        private HttpClient _client;

        public SpaceAPIController()
        {
            _client = new HttpClient();
            _client.BaseAddress = new Uri("https://spaceapi.azurewebsites.net");
            
        }
        public void GetCurrentSpaceState()
        {
            
        }
    }
}
