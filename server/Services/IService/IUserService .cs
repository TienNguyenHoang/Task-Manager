using server.Dtos.User;

namespace server.Services.IService
{
    public interface IUserService
    {
        Task<UserDto> UpdateProfile(int userId, EditProfileRequest request);
        Task<Object> ChangePassword(int userId, ChangePasswordRequest request);
    }
}
