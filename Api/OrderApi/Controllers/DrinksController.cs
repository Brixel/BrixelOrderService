using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrderApi.Models;

namespace OrderApi.Controllers
{
    [Route("api/drinks")]
    public class DrinksController
    {
        [HttpGet("")]
        public IReadOnlyList<DrinkDTO> GetDrinks()
        {
            return new List<DrinkDTO>()
            {
                new DrinkDTO()
                {
                    Name = "Club mate",
                    Container = Containers.Bottle50
                },
                new DrinkDTO()
                {
                    Name = "Flora power",
                    Container = Containers.Bottle50
                },
                new DrinkDTO()
                {
                    Name = "Club mate (Granaatappel)",
                    Container = Containers.Bottle50
                },
                new DrinkDTO()
                {
                    Name = "Tönisteiner",
                    Container = Containers.Can33
                }
            };
        }
    }
}