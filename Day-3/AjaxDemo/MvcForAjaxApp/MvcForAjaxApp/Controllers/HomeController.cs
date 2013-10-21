using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace MvcForAjaxApp.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Calculate(Calculator calculator) {
            Thread.Sleep(5000);
            calculator.Add();
            return Json(calculator,JsonRequestBehavior.DenyGet);
        }

    }
}
