using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Dtos.User;
using server.Services.IService;
using System.Security.Claims;

namespace server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost("editProfile")]
        public async Task<IActionResult> EditProfile(UpdateUserRequest updateUserRequest)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId)) return Unauthorized(new { message = "Invalid or missing token" });
            var user = await _userService.Update(Int32.Parse(userId), updateUserRequest);
            if (user == null) return NotFound();
            return Ok(user);
        }
    }
}
