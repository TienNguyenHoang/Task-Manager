using server.Dtos.User;
using server.Models;

namespace server.Mappers
{
    public static class UserMapper
    {
        public static UserDto ToDto(this User user)
        {
            return new UserDto
            {
                Email = user.Email,
                FullName = user.FullName,
                PasswordHash = user.PasswordHash,
                UserId = user.UserId,
            };
        }

        public static User ToModel(this UserDto userDto)
        {
            return new User
            {
                Email = userDto.Email,
                FullName = userDto.FullName,
            };
        }
    }
}
