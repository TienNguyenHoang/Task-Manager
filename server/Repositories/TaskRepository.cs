using server.Data;
using server.Dtos.Task;
using server.Repositories.IRepository;

namespace server.Repositories
{
    public class TaskRepository : Repository<Models.Task>, ITaskRepository
    {
        private readonly TaskManagerContext _db;

        public TaskRepository(TaskManagerContext db) : base(db)
        {
            _db = db;
        }

        public async Task<Models.Task?> Update(int userId, int taskId, UpdateTaskRequest updateTaskRequest)
        {
            var task = await GetAsync(task => task.UserId == userId && task.TaskId == taskId, tracked: true);
            if (task == null) return null;
            task.Title = updateTaskRequest.Title;
            task.Description = updateTaskRequest.Description;
            task.Status = updateTaskRequest.Status;
            task.DueDate = updateTaskRequest.DueDate;
            task.Priority = updateTaskRequest.Priority;
            await _db.SaveChangesAsync();
            return task;
        }
    }
}
