using crud_estagio_projecao.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Controllers
{
    public class PhoneController : Controller
    {

        private AppDbContext _context;
        public PhoneController()
        {
            _context = new AppDbContext();
        }
        [HttpPost]
        public IActionResult Create(string clientID, string dddPhone, string phoneNumber)
        {
            var phone = new Phone();

            phone.ClientID = Convert.ToInt32(clientID);
            phone.ddd = Convert.ToInt32(dddPhone);
            phone.phoneNumber = Convert.ToInt32(phoneNumber);

            _context.Add<Phone>(phone);
            _context.SaveChanges();

            return RedirectToAction("Index", "Client", null);
        }

        [HttpPost]
        public IActionResult Edit(string phoneID, string dddPhone, string phoneNumber)
        {
            var telefone = _context.Phones.Find(Convert.ToInt32(phoneID));


            if (telefone == null)
                return RedirectToAction("Index", "Client", null);

            telefone.ddd = Convert.ToInt32(dddPhone);
            telefone.phoneNumber = Convert.ToInt32(phoneNumber);

            _context.Phones.Update(telefone);
            _context.SaveChanges();

            return RedirectToAction("Index", "Client", null);
        }

        [HttpPost]
        public IActionResult Delete(string phoneID)
        {
            var telefone = _context.Phones.Find(Convert.ToInt32(phoneID));

            if (telefone == null)
                return RedirectToAction("Index", "Client", null);

            _context.Phones.Remove(telefone);
            _context.SaveChanges();

            return RedirectToAction("Index", "Client", null);
        }
    }
}
