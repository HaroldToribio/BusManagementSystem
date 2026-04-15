using System.ComponentModel.DataAnnotations;

namespace BusManagementAPI.Models
{
    public class Route
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Origin is required")]
        [StringLength(150, MinimumLength = 2, ErrorMessage = "Origin must be between 2 and 150 characters")]
        public string Origin { get; set; } = string.Empty;

        [Required(ErrorMessage = "Destination is required")]
        [StringLength(150, MinimumLength = 2, ErrorMessage = "Destination must be between 2 and 150 characters")]
        public string Destination { get; set; } = string.Empty;
    }
}