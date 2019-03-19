using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using Microsoft.AspNetCore.Http;
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
                    Container = Containers.Bottle50,
                    ImageUri =  "/assets/drinks/club_mate.jpg"
                },
                new DrinkDTO()
                {
                    Name = "Flora power",
                    Container = Containers.Bottle50,
                    ImageUri = "/assets/drinks/flora_power.jpg"
                },
                new DrinkDTO()
                {
                    Name = "Club mate (Granaatappel)",
                    Container = Containers.Bottle50,
                    ImageUri = "/assets/drinks/club_mate_pomegranate.jpg"
                },
                new DrinkDTO()
                {
                    Name = "Tönisteiner",
                    Container = Containers.Can33,
                    ImageUri = "/assets/drinks/tonissteiner-orange.jpg"
                },
                new DrinkDTO()
                {
                    Name ="Karmeliet",
                    Container = Containers.Bottle33,
                    ImageUri = "/assets/drinks/karmeliet_tripel.png"
                },
                new DrinkDTO{
                    Name ="Duvel",
                    Container = Containers.Bottle33,
                    ImageUri = "/assets/drinks/duvel.png"
                },
                new DrinkDTO
                {
                    Name ="Dr. Pepper",
                    Container = Containers.Can33,
                    ImageUri = "/assets/drinks/dr_pepper.png"
                },
                new DrinkDTO()
                {
                    Name = "Lipton Ice Tea",
                    Container= Containers.Can33,
                    ImageUri = "/assets/drinks/lipton_icetea.jpg"
                },
                new DrinkDTO()
                {
                    Name = "Jupiler",
                    Container = Containers.Bottle25,
                    ImageUri = "/assets/drinks/jupiler.jpg"
                },
                new DrinkDTO
                {
                    Name ="Bruiswater",
                    Container = Containers.Bottle25,
                    ImageUri = "/assets/drinks/carbonated_water.png"
                },
                new DrinkDTO()
                {
                    Name = "Kriek Lindemans",
                    Container = Containers.Bottle25,
                    ImageUri = "/assets/drinks/lindemans_kriek.png"
                },
                new DrinkDTO()
                {
                    Name = "Strongbow Red Berries",
                    Container = Containers.Bottle25,
                    ImageUri = "/assets/drinks/strongbow.png"
                },
                new DrinkDTO()
                {
                    Name ="Coca Cola",
                    Container = Containers.Bottle25,
                    ImageUri = "/assets/drinks/coca_cola.jpg"
                }
            }.OrderBy(x =>x .Name).ToList();
        }
    }
}