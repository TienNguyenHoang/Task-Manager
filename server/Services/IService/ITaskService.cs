using server.Dtos.Task;
using server.Models;
namespace server.Services.IService
{
    public interface ITaskService
    {
        Task<TaskDto?> GetTaskById(int userId, int taskId);
        Task<IEnumerable<TaskDto>?> GetTasks(int userId);
        Task<IEnumerable<TaskDto>?> FilterByStatus(int userId, string status);
        Task<IEnumerable<TaskDto>?> FilterByPriority(int userId, string priority);
        Task<TaskDto> CreateTask(int userId, CreateTaskRequest createTaskRequest);
        Task<TaskDto?> UpdateTask(int userId, int taskId, UpdateTaskRequest createTaskRequest);
        Task<TaskDto?> DeleteTask(int userId, int taskId);

    }
}
