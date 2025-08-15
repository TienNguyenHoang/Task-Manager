using server.Dtos.User;
using server.Models;

namespace server.Repositories.IRepository
{
    public interface IUserRepository : IRepository<Models.User>
    {
        Task<User> UpdateProfile(int userId, EditProfileRequest updateUserRequest);
        Task<Object> ChangePassword(int userId, ChangePasswordRequest request);
    }
}
