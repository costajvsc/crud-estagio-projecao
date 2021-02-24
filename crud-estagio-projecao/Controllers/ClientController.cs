using crud_estagio_projecao.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Controllers
{
    public class ClientController : Controller
    {
        private AppDbContext _context;
        public ClientController()
        {
            _context = new AppDbContext();
        }
        public IActionResult Index()
        {
            var clients = _context.Clients.Include(client => client.Phones).ToList();
            return View(clients);
        }

        [HttpPost]
        public IActionResult Create(string nameClient)
        {
            var client = new Client();
            client.nameClient = nameClient;
            _context.Add<Client>(client);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }


        [HttpPost]
        public IActionResult Edit(string ClientID, string nameClient)
        {
            var id = Convert.ToInt32(ClientID);
            var client = _context.Clients.Find(id);
            if(client == null)
            {
                return RedirectToAction("Index");
            }

            client.nameClient = nameClient;

            _context.Clients.Update(client);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(string ClientID)
        {
            var id = Convert.ToInt32(ClientID);
            var client = _context.Clients.Find(id);

            if(client == null)
            {
                return RedirectToAction("Index");
            }

            _context.Clients.Remove(client);
            _context.SaveChanges();

            return RedirectToAction("Index");

              
        }
    }
}
