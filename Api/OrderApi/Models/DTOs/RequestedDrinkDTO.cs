using System;

namespace OrderApi.Models.DTOs
{
    public class RequestedDrinkDTO
    {
        public Guid DrinkId { get; set; }

        public DateTime CreationDate { get; set; }

        public Guid OrderId { get; set; }

        public bool IsCompleted { get; set; }

        public string Name { get; set; }

        public Containers Container { get; set; }
    }
}