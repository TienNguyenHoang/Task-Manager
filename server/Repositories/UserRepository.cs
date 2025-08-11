using server.Data;
using server.Dtos.User;
using server.Models;
using server.Repositories.IRepository;

namespace server.Repositories
{
    public class UserRepository : Repository<Models.User>, IUserRepository
    {
        private readonly TaskManagerContext _db;

        public UserRepository(TaskManagerContext db) : base(db)
        {
            _db = db;
        }

        public async Task<User?> Update(int userId, UpdateUserRequest updateUserRequest)
        {
            var user = await GetAsync(user => user.UserId == userId, tracked: true);
            if (user == null) return null;
            user.FullName = updateUserRequest.FullName;
            user.Email = updateUserRequest.Email;
            user.PasswordHash = BCrypt.Net.BCrypt.EnhancedHashPassword(updateUserRequest.Password, 13);
            await _db.SaveChangesAsync();
            return user;
        }
    }
}
