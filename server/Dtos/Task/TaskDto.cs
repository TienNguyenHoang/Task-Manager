using server.Dtos.User;

namespace server.Dtos.Task
{
    public class TaskDto
    {
        public int TaskId { get; set; }

        public int UserId { get; set; }

        public string Title { get; set; } = null!;

        public string? Description { get; set; }

        public string? Status { get; set; }

        public string? Priority { get; set; }

        public DateTime? DueDate { get; set; }

        public DateTime? CreatedAt { get; set; }

    }
}
