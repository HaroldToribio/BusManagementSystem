using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusManagementAPI.Models
{
    public class Schedule
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Departure time is required")]
        public string DepartureTime { get; set; } = string.Empty;

        [Required(ErrorMessage = "Arrival time is required")]
        public string ArrivalTime { get; set; } = string.Empty;

        [Required(ErrorMessage = "Route ID is required")]
        [Range(1, int.MaxValue, ErrorMessage = "Invalid route ID")]
        public int RouteId { get; set; }

        [ForeignKey("RouteId")]
        public Route? Route { get; set; }
    }
}
