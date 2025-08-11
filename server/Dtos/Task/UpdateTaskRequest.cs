using System.ComponentModel.DataAnnotations;

namespace server.Dtos.Task
{
    public class UpdateTaskRequest
    {
        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        public string Title { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập mô tả")]
        public string? Description { get; set; }
        public string? Status { get; set; }
        public string? Priority { get; set; }
        [Required(ErrorMessage = "Vui lòng chọn deadline")]
        public DateTime? DueDate { get; set; }
    }
}
