using server.Dtos.User;
using server.Exceptions;
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

        public async Task<UserDto> UpdateProfile(int userId, EditProfileRequest updateUserRequest)
        {
            try
            {
                var user = await _userRepository.UpdateProfile(userId, updateUserRequest);
                return user.ToDto();
            }
            catch (NotFoundException ex) {
                throw new NotFoundException(ex.Message);
            }
            catch (BadHttpRequestException ex)
            {
                throw new BadHttpRequestException(ex.Message);
            }

        }
        public async Task<object> ChangePassword(int userId, ChangePasswordRequest request)
        {
            try
            {
                var result = await _userRepository.ChangePassword(userId, request);
                return result;
            }
            catch (NotFoundException ex)
            {
                throw new NotFoundException(ex.Message);
            }
            catch (BadHttpRequestException ex)
            {
                throw new BadHttpRequestException(ex.Message);
            }
        }
    }
}
