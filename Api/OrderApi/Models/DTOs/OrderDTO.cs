using System;
using System.Collections.Generic;
using OrderApi.Controllers;

namespace OrderApi.Models.DTOs
{
    public class OrderDTO
    {
        public Guid Id { get; set; }
        public bool IsCompleted { get; set; }
        public List<RequestedDrinkDTO> Drinks { get; set; }
        public DateTime CreationDate { get; set; }
    }
}