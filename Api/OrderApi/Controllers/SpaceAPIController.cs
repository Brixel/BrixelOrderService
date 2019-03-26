using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Brixel.SpaceAPI.Core.Models;
using Brixel.SpaceAPI.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace OrderApi.Controllers
{
    public class SpaceAPIController : Controller
    {
        private readonly ISpaceAPIService _apiService;
        private HttpClient _client;

        public SpaceAPIController(ISpaceAPIService apiService)
        {
            _apiService = apiService;
        }

        [HttpGet("spaceapi/status")]
        public async Task<SpaceAPIRoot> GetCurrentSpaceState()
        {
            var state =  await _apiService.GetSpaceApiAsync();
            return state;
        }
    }
}
