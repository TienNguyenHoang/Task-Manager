using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity.Data;
using server.Dtos.Auth;
using server.Dtos.User;
using server.Mappers;
using server.Models;
using server.Repositories;
using server.Repositories.IRepository;
using Server.Service.IService;

namespace Server.Service
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;
        public AuthService(IUserRepository userRepository, ITokenService tokenService)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
        }

        public async Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto)
        {
            var userModel = await _userRepository.GetAsync(user => user.Email == loginRequestDto.Email)
                ?? throw new UnauthorizedAccessException("Tài khoản không tồn tại!");

            if (!BCrypt.Net.BCrypt.EnhancedVerify(loginRequestDto.Password, userModel.PasswordHash))
                throw new BadHttpRequestException("Sai thông tin tài khoản");

            return new LoginResponseDto
            {
                token = _tokenService.GenerateToken(userModel),
                User = userModel.ToDto()
            };
        }
        
        public async Task<UserDto?> Register(RegisterRequestDto registerRequestDto)
        {
            var existingUser = await _userRepository.GetAsync(user => user.Email == registerRequestDto.Email);
            if (existingUser != null) return null;
            var user = new User
            {
                Email = registerRequestDto.Email,
                FullName = registerRequestDto.FullName,
            };
            
            user.PasswordHash = BCrypt.Net.BCrypt.EnhancedHashPassword(registerRequestDto.Password, 13);
            await _userRepository.AddAsync(user);
            return user.ToDto();
        }
    }
}