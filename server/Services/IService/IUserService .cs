using server.Dtos.User;

namespace server.Services.IService
{
    public interface IUserService
    {
        Task<UserDto?> Update(int userId, UpdateUserRequest request);
    }
}
