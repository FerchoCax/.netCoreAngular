using Microsoft.EntityFrameworkCore;
namespace web_api_db.Models{
    class Conexion : DbContext{
        public Conexion(DbContextOptions <Conexion> options) : base (options){}
        
    }
}