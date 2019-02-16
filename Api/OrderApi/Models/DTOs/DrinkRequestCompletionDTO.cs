using System;

namespace OrderApi.Models.DTOs
{
    public class DrinkRequestCompletionDTO
    {
        public Guid Id { get; set; }
        public bool IsCompleted { get; set; }
    }
}