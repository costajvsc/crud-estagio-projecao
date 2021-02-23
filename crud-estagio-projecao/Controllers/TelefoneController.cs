using crud_estagio_projecao.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Controllers
{
    public class TelefoneController : Controller
    {

        private AppDbContext _context;
        public TelefoneController()
        {
            _context = new AppDbContext();
        }
        [HttpPost]
        public IActionResult Create(string clientID, string dddPhone, string phoneNumber)
        {
            var telefone = new Telefone();

            telefone.ClienteID = Convert.ToInt32(clientID);
            telefone.ddd = Convert.ToInt32(dddPhone);
            telefone.telefone = Convert.ToInt32(phoneNumber);

            _context.Add<Telefone>(telefone);
            _context.SaveChanges();

            return RedirectToAction("Index", "Cliente", null);
        }

        [HttpPost]
        public IActionResult Edit(string phoneID, string dddPhone, string phoneNumber)
        {
            var telefone = _context.Telefones.Find(Convert.ToInt32(phoneID));


            if (telefone == null)
                return RedirectToAction("Index", "Cliente", null);

            telefone.ddd = Convert.ToInt32(dddPhone);
            telefone.telefone = Convert.ToInt32(phoneNumber);

            _context.Telefones.Update(telefone);
            _context.SaveChanges();

            return RedirectToAction("Index", "Cliente", null);
        }

        [HttpPost]
        public IActionResult Delete(string phoneID)
        {
            var telefone = _context.Telefones.Find(Convert.ToInt32(phoneID));

            if (telefone == null)
                return RedirectToAction("Index", "Cliente", null);

            _context.Telefones.Remove(telefone);
            _context.SaveChanges();

            return RedirectToAction("Index", "Cliente", null);
        }
    }
}
