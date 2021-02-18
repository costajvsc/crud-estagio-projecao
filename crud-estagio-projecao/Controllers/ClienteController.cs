using crud_estagio_projecao.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Controllers
{
    public class ClienteController : Controller
    {
        private AppDbContext _context;
        public ClienteController()
        {
            _context = new AppDbContext();
        }
        public IActionResult Index()
        {
            var clientes = _context.Clientes.Include(cliente => cliente.Telefones).ToList();
            return View(clientes);
        }

        [HttpPost]
        public IActionResult Create(string nome)
        {
            var cliente = new Cliente();
            cliente.nome = nome;
            _context.Add<Cliente>(cliente);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }


        [HttpPost]
        public IActionResult Edit(string ClienteID, string nome)
        {
            var id = Convert.ToInt32(ClienteID);
            var cliente = _context.Clientes.Find(id);
            if(cliente == null)
            {
                return RedirectToAction("Index");
            }

            cliente.nome = nome;

            _context.Clientes.Update(cliente);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(string ClienteID)
        {
            var id = Convert.ToInt32(ClienteID);
            var cliente = _context.Clientes.Find(id);

            if(cliente == null)
            {
                return RedirectToAction("Index");
            }

            _context.Clientes.Remove(cliente);
            _context.SaveChanges();

            return RedirectToAction("Index");

              
        }
    }
}
