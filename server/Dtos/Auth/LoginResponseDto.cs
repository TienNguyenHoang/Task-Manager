using server.Dtos.User;

namespace server.Dtos.Auth
{
    public class LoginResponseDto
    {
        public UserDto User { get; set; } = null!;
        public string token { get; set; } = null!;
    }
}
