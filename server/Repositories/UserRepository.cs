using server.Data;
using server.Repositories.IRepository;

namespace server.Repositories
{
    public class UserRepository : Repository<Models.User>, IUserRepository
    {
        private readonly TaskManagerContext _db;

        public UserRepository(TaskManagerContext db) : base(db)
        {
            _db = db;
        }
    }
}
