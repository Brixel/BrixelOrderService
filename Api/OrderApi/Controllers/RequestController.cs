using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

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

    public class DrinkDTO
    {
        public string Name { get; set; }
        public Containers Container { get; set; }
    }

    public enum Containers
    {
        Can25 = 1,
        Can33 = 2,
        Bottle33 = 3,
        Bottle50 = 4,
        Glass = 5
    }

}
