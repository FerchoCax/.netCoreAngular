using System.ComponentModel.DataAnnotations; 
namespace web_api_db.Models{
    public class Clientes{
        [key]
        public int id_cliente{get;set;}
        public string nit{get;set;}
    }
}