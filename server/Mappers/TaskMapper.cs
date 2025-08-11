using server.Dtos.Task;
using server.Models;

namespace server.Mappers
{
    public static class TaskMapper
    {
        public static TaskDto ToDto(this Models.Task task)
        {
            return new TaskDto
            {
                Title = task.Title,
                CreatedAt = task.CreatedAt,
                Description = task.Description,
                DueDate = task.DueDate,
                Priority = task.Priority,
                Status = task.Status,
                TaskId = task.TaskId,
                UserId = task.UserId,
            };
        }
    }
}
