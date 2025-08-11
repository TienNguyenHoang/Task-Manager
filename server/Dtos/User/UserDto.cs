using server.Dtos.Task;

namespace server.Dtos.User
{
    public class UserDto
    {
        public int UserId { get; set; }

        public string FullName { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string PasswordHash { get; set; } = null!;

    }
}
