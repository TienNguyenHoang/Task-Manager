using server.Dtos.User;
using server.Models;

namespace server.Repositories.IRepository
{
    public interface IUserRepository : IRepository<Models.User>
    {
        Task<User?> Update(int userId, UpdateUserRequest updateUserRequest);
    }
}
