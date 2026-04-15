using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BusManagementAPI.Data;
using RouteModel = BusManagementAPI.Models.Route;

namespace BusManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoutesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RoutesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RouteModel>>> Get()
        {
            return await _context.Routes.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<RouteModel>> Post(RouteModel route)
        {
            _context.Routes.Add(route);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = route.Id }, route);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, RouteModel route)
        {
            if (id != route.Id) return BadRequest();
            _context.Entry(route).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var route = await _context.Routes.FindAsync(id);
            if (route == null) return NotFound();
            _context.Routes.Remove(route);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}