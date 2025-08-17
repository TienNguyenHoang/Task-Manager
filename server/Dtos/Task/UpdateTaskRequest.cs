using System.ComponentModel.DataAnnotations;

namespace server.Dtos.Task
{
    public class UpdateTaskRequest
    {

        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        [StringLength(200, MinimumLength = 6, ErrorMessage = "Tối thiểu 6 ký tự!")]
        public string Title { get; set; } = null!;
        [Required(ErrorMessage = "Vui lòng nhập mô tả")]
        [StringLength(600, MinimumLength = 6, ErrorMessage = "Tối thiểu 6 ký tự!")]
        public string? Description { get; set; }
        [Required(ErrorMessage = "Vui lòng chọn trạng thái")]
        [EnumDataType(typeof(TaskStatus), ErrorMessage = "Status chỉ được phép nằm trong Todo, InProgress, Completed")]
        public TaskStatus Status { get; set; }
        [EnumDataType(typeof(TaskPriority), ErrorMessage = "Priority chỉ được phép nằm trong Low, Normal, High")]
        [Required(ErrorMessage = "Vui lòng chọn độ ưu tiên")]
        public TaskPriority Priority { get; set; }
        [Required(ErrorMessage = "Vui lòng chọn deadline")]
        public DateTime? DueDate { get; set; }
    }
}
