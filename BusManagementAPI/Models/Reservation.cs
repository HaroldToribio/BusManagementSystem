using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusManagementAPI.Models
{
    public class Reservation
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Passenger name is required")]
        [StringLength(200, MinimumLength = 2, ErrorMessage = "Passenger name must be between 2 and 200 characters")]
        public string PassengerName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Schedule ID is required")]
        [Range(1, int.MaxValue, ErrorMessage = "Invalid schedule ID")]
        public int ScheduleId { get; set; }

        [ForeignKey("ScheduleId")]
        public Schedule? Schedule { get; set; }
    }
}
