using System;
using OrderApi.Models;

namespace OrderApi.Controllers
{
    public class RequestedDrink
    {

        public Guid Id { get; set; }

        public bool IsCompleted { get; set; }

        public RequestedDrink()
        {
            Id = Guid.NewGuid();
        }

        public string Name { get; set; }

        public Containers Container { get; set; }
        public DateTime CreationDate { get; set; }
    }
}