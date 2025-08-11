using server.Models;
namespace Server.Service.IService
{
    public interface ITokenService
    {
        string GenerateToken(User userModel);
    }
}
