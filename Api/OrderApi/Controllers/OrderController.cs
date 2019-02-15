using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderApi.Models;

namespace OrderApi.Controllers
{
    [Route("api/orders")]
    public class OrderController : Controller
    {
        private static IList<Order> _orders = new List<Order>();

        [HttpPost("")]
        public void MakeOrder([FromBody] IReadOnlyList<DrinkDTO> requestedDrinks)
        {
            var request = new Order()
            {
                CreationDate = DateTime.Now,
                IsCompleted = false,
                Drinks = requestedDrinks.Select(x => new RequestedDrink(x)).ToList()
            };
            _orders.Add(request);
        }
         [HttpGet("")]
         public IReadOnlyList<Order> GetRequests()
         {
            return _orders.Where(r => !r.IsCompleted).ToList();
         }
         [HttpDelete("{id}")]
         public void DeleteOrder(Guid id)
      {
         if(_orders.Single(o => o.Id == id) == null) {
            throw new Exception("This order does not exist"); 
         }
         _orders = _orders.Where(o => o.Id != id).ToList();
      }
      [HttpPut("{orderId}/drinks/{drinkId}")]
      public void UpdateOrderedDrink(Guid orderId, Guid drinkId, RequestedDrink newDrink)
      {
         var order = _orders.Single(o => o.Id == orderId);
         var drink = order.Drinks.Single(d => d.Id == drinkId);
         drink = newDrink;

      }
   }

    public class RequestedDrink
    {
        private DrinkDTO _drinkDto;

        public Guid Id { get; set; }

      public bool IsCompleted { get; set; }

        public RequestedDrink(DrinkDTO drinkDto)
        {
            Id = Guid.NewGuid();
            _drinkDto = drinkDto;
        }

        public string Name => _drinkDto.Name;

        public Containers Container => _drinkDto.Container;
    }

    public class Order
    {
        public Guid Id { get; set; }
        public bool IsCompleted { get; set; }
        public List<RequestedDrink> Drinks { get; set; }
        public DateTime CreationDate { get; set; }

      public Order()
      {
         Id = Guid.NewGuid();
      }
    }
}
