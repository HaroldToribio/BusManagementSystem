namespace BusManagementAPI.Models
{
    public class Bus
    {
        public int Id { get; set; }
        public string BusNumber { get; set; } = string.Empty;
        public string Model { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public int Year { get; set; }
        public string Status { get; set; } = "Active";
        public int? RouteId { get; set; }
        public Route? Route { get; set; }

    }
}
