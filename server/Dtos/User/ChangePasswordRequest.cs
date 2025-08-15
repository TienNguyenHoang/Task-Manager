using System.ComponentModel.DataAnnotations;

namespace server.Dtos.User
{
    public class ChangePasswordRequest
    {
        [Required(ErrorMessage = "Vui lòng nhập mật khẩu hiện tại")]
        public string OldPassword { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập mật khẩu mới")]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Tối thiểu 6 ký tự")]
        public string NewPassword { get; set; } = null!;
    }
}
