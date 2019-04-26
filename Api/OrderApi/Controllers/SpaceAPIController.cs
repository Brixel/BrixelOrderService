using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Brixel.SpaceAPI.Core.Models;
using Brixel.SpaceAPI.Core.Services;
using Microsoft.AspNetCore.Internal;
using Microsoft.AspNetCore.Mvc;
using OrderApi.Services;

namespace OrderApi.Controllers
{
    [Route("api/spaceapi")]
    public class SpaceAPIController : Controller
    {
        private readonly ISpaceAPIService _apiService;
        private readonly ISpaceAPIMqttService _spaceApiMqttService;


        public SpaceAPIController(ISpaceAPIService apiService, ISpaceAPIMqttService spaceApiMqttService)
        {
            _apiService = apiService;
            _spaceApiMqttService = spaceApiMqttService;
        }

        [HttpGet("info")]
        public async Task<SpaceAPIRoot> GetCurrentSpaceInfo()
        {
            var state =  await _apiService.GetSpaceApiAsync();
            return state;
        }

        [HttpGet("status")]
        public async Task<SpaceApiLog> GetCurrrentSpaceState()
        {
            return await _apiService.GetCurrentSpaceStatusAsync();
        }

        [HttpPost("open")]
        public async Task<SpaceApiLog> Open()
        {
            await _spaceApiMqttService.RequestOpenState(true);
            return await _apiService.GetCurrentSpaceStatusAsync();
        }

        [HttpPost("close")]
        public async Task<SpaceApiLog> Close()
        {
            await _spaceApiMqttService.RequestOpenState(false);
            return await _apiService.GetCurrentSpaceStatusAsync();
        }
    }
}
