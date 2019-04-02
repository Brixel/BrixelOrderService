using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderApi.Models;
using OrderApi.Models.DTOs;

namespace OrderApi.Controllers
{
    [Route("api/orders")]
    public class OrderController : Controller
    {
        private static List<RequestedDrink> requestedDrinks = new List<RequestedDrink>();

        [HttpPost("")]
        public void MakeOrder([FromBody] IReadOnlyList<DrinkDTO> requestedDrinks)
        {
            var drinks = requestedDrinks.Select(x => new RequestedDrink()
            {
                CreationDate = DateTime.Now,
                IsCompleted = false,
                Container = x.Container,
                Id = Guid.NewGuid(),
                Name = x.Name

            }).ToList();
            OrderController.requestedDrinks.AddRange(drinks);
        }

         [HttpGet("")]
         public List<RequestedDrinkDTO> GetOrders()
         {
           
             var requestedDrink = requestedDrinks.Where(o => !o.IsCompleted).Select(d => new RequestedDrinkDTO()
             {
                 DrinkId = d.Id,
                 IsCompleted = d.IsCompleted,
                 CreationDate = d.CreationDate,
                 Container = d.Container,
                 Name = d.Name
             }).ToList();
             return requestedDrink;
         }

         [HttpDelete("{id}")]
         public void DeleteOrder(Guid id)
          {
             if(requestedDrinks.Single(o => o.Id == id) == null) {
                throw new Exception("This drinkRequest does not exist"); 
             }
             requestedDrinks = requestedDrinks.Where(o => o.Id != id).ToList();
          }

          [HttpPut("{drinkId}")]
          public void UpdateOrderedDrink(Guid drinkId, RequestedDrinkDTO updateDrink)
          {
                var drink = GetDrink(drinkId);
                drink.IsCompleted = updateDrink.IsCompleted;
                drink.Container = updateDrink.Container;
                drink.Name = updateDrink.Name;
          }

        private static RequestedDrink GetDrink(Guid drinkId)
        {
            var drink = requestedDrinks.Single(o => o.Id == drinkId);
            return drink;
        }

        [HttpPost("{drinkId}/completed")]
        public void MarkDrinkCompleted([FromBody] DrinkRequestCompletionDTO completionDto,Guid drinkId)
        {
            var drink = GetDrink(drinkId);
            drink.IsCompleted = completionDto.IsCompleted;
        }

        [HttpPost("completed")]
        public AllDrinkRequestCompletedDTO MarkAllDrinksAsCompleted()
        {
            var notCompletedDrinks = requestedDrinks.Where(o => !o.IsCompleted).ToList();
            notCompletedDrinks.ForEach(x => x.IsCompleted = true);
            return new AllDrinkRequestCompletedDTO()
            {
                IsCompleted = requestedDrinks.All(x => x.IsCompleted)
            };
        }
    }
}
