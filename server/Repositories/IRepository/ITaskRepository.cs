using server.Dtos.Task;

namespace server.Repositories.IRepository
{
    public interface ITaskRepository : IRepository<Models.Task>
    {
        Task<Models.Task?> Update(int userId, int taskId, UpdateTaskRequest updateTaskRequest);
    }
}
