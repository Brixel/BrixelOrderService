using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
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
                },
                new DrinkDTO()
                {
                    Name ="Karmeliet",
                    Container = Containers.Bottle33
                },
                new DrinkDTO{
                    Name ="Duvel",
                    Container = Containers.Bottle33
                },
                new DrinkDTO
                {
                    Name ="Dr. Pepper",
                    Container = Containers.Can33
                },
                new DrinkDTO()
                {
                    Name = "Lipton Ice Tea",
                    Container= Containers.Can33
                },
                new DrinkDTO()
                {
                    Name = "Jupiler",
                    Container = Containers.Bottle25
                },
                new DrinkDTO
                {
                    Name ="Bruiswater",
                    Container = Containers.Bottle25
                },
                new DrinkDTO()
                {
                    Name = "Kriek Lindemans",
                    Container = Containers.Bottle25
                },
                new DrinkDTO()
                {
                    Name = "Strongbow Red Berries",
                    Container = Containers.Bottle25
                },
                new DrinkDTO()
                {
                    Name ="Coca Cola",
                    Container = Containers.Bottle25
                }
            }.OrderBy(x =>x .Name).ToList();
        }
    }
}