using System.ComponentModel.DataAnnotations;

namespace BusManagementAPI.Models
{
    public class Bus
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Bus number is required")]
        [StringLength(50, MinimumLength = 1, ErrorMessage = "Bus number must be between 1 and 50 characters")]
        public string BusNumber { get; set; } = string.Empty;

        [Required(ErrorMessage = "Model is required")]
        [StringLength(100, MinimumLength = 1, ErrorMessage = "Model must be between 1 and 100 characters")]
        public string Model { get; set; } = string.Empty;

        [Required(ErrorMessage = "Capacity is required")]
        [Range(1, 300, ErrorMessage = "Capacity must be between 1 and 300")]
        public int Capacity { get; set; }

        [Required(ErrorMessage = "Year is required")]
        [Range(1900, 2100, ErrorMessage = "Year must be between 1900 and 2100")]
        public int Year { get; set; }

        [StringLength(50, ErrorMessage = "Status must not exceed 50 characters")]
        public string Status { get; set; } = "Active";

        public int? RouteId { get; set; }
        public Route? Route { get; set; }
    }
}
