using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using OrderApi.Models;

namespace OrderApi.Controllers
{
    [Route("api/orders")]
    public class RequestController : Controller
    {
        private static readonly IList<Request> _requests = new List<Request>();

        [HttpPost("")]
        public void MakeRequest([FromBody] IReadOnlyList<DrinkDTO> requestedDrinks)
        {
            var request = new Request()
            {
                CreationDate = DateTime.Now,
                IsCompleted = false,
                Drinks = requestedDrinks.Select(x => new RequestedDrink(x)).ToList()
            };
            _requests.Add(request);
        }
         [HttpGet("")]
         public IReadOnlyList<Request> GetRequests()
         {
            return _requests.Where(r => !r.IsCompleted).ToList();
         }
    }

    public class RequestedDrink
    {
        private DrinkDTO _drinkDto;

        public Guid Id { get; set; }

        public RequestedDrink(DrinkDTO drinkDto)
        {
            Id = Guid.NewGuid();
            _drinkDto = drinkDto;
        }

        public string Name => _drinkDto.Name;

        public Containers Container => _drinkDto.Container;
    }

    public class Request
    {
        public bool IsCompleted { get; set; }
        public List<RequestedDrink> Drinks { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
