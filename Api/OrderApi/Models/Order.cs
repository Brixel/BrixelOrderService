using System;
using System.Collections.Generic;
using OrderApi.Controllers;

namespace OrderApi.Models
{
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