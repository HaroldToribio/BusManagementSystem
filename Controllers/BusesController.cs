using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BusManagementAPI.Data;
using BusManagementAPI.Models;

namespace BusManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BusesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BusesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/buses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bus>>> Get() =>
            await _context.Buses.ToListAsync();

        // GET: api/buses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bus>> Get(int id)
        {
            var bus = await _context.Buses.FindAsync(id);
            if (bus == null) return NotFound();
            return bus;
        }

        // POST: api/buses
        [HttpPost]
        public async Task<ActionResult<Bus>> Post(Bus bus)
        {
            _context.Buses.Add(bus);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = bus.Id }, bus);
        }

        // PUT: api/buses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Bus bus)
        {
            if (id != bus.Id) return BadRequest();
            _context.Entry(bus).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/buses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var bus = await _context.Buses.FindAsync(id);
            if (bus == null) return NotFound();
            _context.Buses.Remove(bus);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}