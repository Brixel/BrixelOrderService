namespace OrderApi.Models
{
    public class DrinkDTO
    {
        public string ImageUri { get; set; }
        public string Name { get; set; }
        public Containers Container { get; set; }
    }
}