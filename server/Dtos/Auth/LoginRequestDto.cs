using System.ComponentModel.DataAnnotations;

namespace server.Dtos.Auth
{
    public class LoginRequestDto
    {
        [Required(ErrorMessage = "Vui lòng nhập email")]
        [EmailAddress(ErrorMessage = "Sai định dạng email")]
        public string Email { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập passowrd")]
        public string Password { get; set; } = null!;
    }
}
