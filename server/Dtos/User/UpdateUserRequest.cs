using System.ComponentModel.DataAnnotations;

namespace server.Dtos.User
{
    public class UpdateUserRequest
    {
        [Required(ErrorMessage = "Vui lòng nhập tên")]
        public string FullName { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập email")]
        [EmailAddress(ErrorMessage = "Sai định dạng email")]
        public string Email { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập mật khẩu")]
        public string Password { get; set; } = null!;
    }
}
