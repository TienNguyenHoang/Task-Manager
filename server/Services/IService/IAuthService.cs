using server.Dtos.Auth;
using server.Dtos.User;

namespace Server.Service.IService
{
    public interface IAuthService
    {
        Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto);
        Task<UserDto?> Register(RegisterRequestDto registerRequestDto);
    }
}
