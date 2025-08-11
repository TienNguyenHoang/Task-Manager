using server.Dtos.User;
using server.Mappers;
using server.Repositories.IRepository;
using server.Services.IService;
namespace server.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository) 
        {
            _userRepository = userRepository;
        }
        public async Task<UserDto?> Update(int userId, UpdateUserRequest updateUserRequest)
        {
            var user = await _userRepository.Update(userId, updateUserRequest);
            if (user == null) return null;
            return user.ToDto();
        }
    }
}
