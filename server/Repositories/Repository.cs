using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Repositories.IRepository;
using System.Linq.Expressions;

namespace server.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly TaskManagerContext _db;
        internal DbSet<T> dbSet;

        public Repository(TaskManagerContext db)
        {
            _db = db;
            dbSet = _db.Set<T>();
        }
        public async Task AddAsync(T entity)
        {
            dbSet.Add(entity);
            _db.SaveChanges();
        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> filter, string? includeProperties = null, bool tracked = false)
        {
            IQueryable<T> query;
            if (tracked)
            {
                query = dbSet;

            }
            else
            {
                query = dbSet.AsNoTracking();
            }

            query = query.Where(filter);
            if (!string.IsNullOrEmpty(includeProperties))
            {
                foreach (var includeProp in includeProperties
                    .Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProp);
                }
            }
            return query.FirstOrDefault();
        }

        public async Task<IEnumerable<T>> GetAllAsync(Expression<Func<T, bool>>? filter = null, string? includeProperties = null)
        {
            IQueryable<T> query = dbSet;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (!string.IsNullOrEmpty(includeProperties))
            {
                foreach (var includeProp in includeProperties
                    .Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProp);
                }
            }

            return query.ToList();

        }

        public async Task RemoveAsync(T entity)
        {
            dbSet.Remove(entity);
            _db.SaveChanges();
        }

        public async Task RemoveRangeAsync(IEnumerable<T> entity)
        {
            dbSet.RemoveRange(entity);
            _db.SaveChanges();
        }
    }
}
