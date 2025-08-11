using server.Data;
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

    }
}
