using Microsoft.EntityFrameworkCore;

namespace app.Models {
    public class DataContext : DbContext {
        public DbSet<User> user { get; set; }

        public DataContext (DbContextOptions<DataContext> options) : base (options) { }
    }
}