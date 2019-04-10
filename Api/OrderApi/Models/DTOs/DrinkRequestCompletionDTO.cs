using System;

namespace OrderApi.Models.DTOs
{
    public class DrinkRequestCompletionDTO
    {
        public Guid Id { get; set; }
        public bool IsCompleted { get; set; }
    }

    public class AllDrinkRequestCompletedDTO
    {
        public bool IsCompleted { get; set; }
    }
}