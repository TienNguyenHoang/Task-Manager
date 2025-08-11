using Microsoft.AspNetCore.Mvc;
using server.Dtos.Auth;
using Server.Service.IService;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        private readonly ITokenService _tokenService;
        public AuthController(IAuthService authService, ITokenService tokenService)
        {
            _authService = authService;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto loginRequest)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            try
            {
                var response = await _authService.Login(loginRequest);
                if (response == null) return Unauthorized();
                return Ok(response);
            }
            catch (BadHttpRequestException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (UnauthorizedAccessException ex)
            {

                return Unauthorized(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto registerRequest)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var response = await _authService.Register(registerRequest);
            if (response == null) return BadRequest(new { message = "Email đã tồn tại" });
            return Ok(response);
        }
    }
}
