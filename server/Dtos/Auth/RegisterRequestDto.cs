using System.ComponentModel.DataAnnotations;

namespace server.Dtos.Auth
{
    public class RegisterRequestDto
    {
        [Required(ErrorMessage = "Vui lòng nhập tên")]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Tối thiểu 6 ký tự")]
        public string FullName { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập email")]
        [EmailAddress(ErrorMessage = "Sai định dạng email")]
        public string Email { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập password")]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Tối thiểu 6 ký tự")]
        public string Password { get; set; } = null!;
    }
}
