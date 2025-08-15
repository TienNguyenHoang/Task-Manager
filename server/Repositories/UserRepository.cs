using Microsoft.AspNetCore.Mvc.Filters;
using server.Data;
using server.Dtos.User;
using server.Exceptions;
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

        public async Task<User> UpdateProfile(int userId, EditProfileRequest updateUserRequest)
        {
            var user = await GetAsync(user => user.UserId == userId, tracked: true);
            if (user == null) throw new NotFoundException("Không tìm thấy người dùng!");
            var existingUser = await GetAsync(user => user.UserId != userId && user.Email == updateUserRequest.Email);
            if (existingUser != null) throw new BadHttpRequestException("Email đã tồn tại!");
            user.FullName = updateUserRequest.FullName;
            user.Email = updateUserRequest.Email;
            await _db.SaveChangesAsync();
            return user;
        }
        public async Task<object> ChangePassword(int userId, ChangePasswordRequest request)
        {
            var user = await GetAsync(user => user.UserId == userId, tracked: true);
            if (user == null) throw new NotFoundException("Không tìm thấy người dùng!");
            if (!BCrypt.Net.BCrypt.EnhancedVerify(request.OldPassword, user.PasswordHash))
                throw new BadHttpRequestException("Mật khẩu hiện tại không chính xác!");
            user.PasswordHash = BCrypt.Net.BCrypt.EnhancedHashPassword(request.NewPassword);
            await _db.SaveChangesAsync();
            return new
            {
                message = "Đổi mật khẩu thành công!"
            };
        }
    }
}
