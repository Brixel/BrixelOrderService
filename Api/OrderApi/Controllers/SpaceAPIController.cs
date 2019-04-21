using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Brixel.SpaceAPI.Core.Models;
using Brixel.SpaceAPI.Core.Services;
using Microsoft.AspNetCore.Mvc;
using OrderApi.Services;

namespace OrderApi.Controllers
{
    [Route("api/spaceapi")]
    public class SpaceAPIController : Controller
    {
        private readonly ISpaceAPIService _apiService;

        
        public SpaceAPIController(ISpaceAPIService apiService)
        {
            _apiService = apiService;
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
            var x = new SpaceAPIMqtt();
            await x.RequestOpenState();
            return await _apiService.GetCurrentSpaceStatusAsync();
        }
    }
}
