using server.Dtos.Task;
using server.Mappers;
using server.Repositories.IRepository;
using server.Services.IService;

namespace server.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;
        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }
        public async Task<TaskDto?> GetTaskById(int userId, int taskId)
        {
            var task = await _taskRepository.GetAsync(task => task.UserId == userId && task.TaskId == taskId);
            if (task == null) return null;
            return task.ToDto();
        }
        public async Task<IEnumerable<TaskDto>?> GetTasks(int userId)
        {
            var tasks = await _taskRepository.GetAllAsync(task => task.UserId == userId);
            if (tasks == null) return null;
            var taskdtos = tasks.Select(task => task.ToDto()).ToList();
            return taskdtos;
        }
        public async Task<TaskDto> CreateTask(int userId, CreateTaskRequest createTaskRequest)
        {
            var task = new Models.Task()
            {
                UserId = userId,
                CreatedAt = DateTime.UtcNow,
                Description = createTaskRequest.Description,
                DueDate = createTaskRequest.DueDate,
                Priority = createTaskRequest.Priority,
                Status = createTaskRequest.Status,
                Title = createTaskRequest.Title,
            };
            await _taskRepository.AddAsync(task);
            return task.ToDto();
        }
        public async Task<TaskDto?> UpdateTask(int userId, int taskId, UpdateTaskRequest updateTaskRequest)
        {
            var task = await _taskRepository.Update(userId, taskId, updateTaskRequest);
            if (task == null) return null;
            return task.ToDto();
        }

        public async Task<TaskDto?> DeleteTask(int userId, int taskId)
        {
            var task = await _taskRepository.GetAsync(task => task.UserId == userId && task.TaskId == taskId);
            if (task == null) return null;
            await _taskRepository.RemoveAsync(task);
            return task.ToDto();
        }

        public Task<IEnumerable<TaskDto>> FilterByPriority(int userId, string priority)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TaskDto>> FilterByStatus(int userId, string status)
        {
            throw new NotImplementedException();
        }




    }
}
