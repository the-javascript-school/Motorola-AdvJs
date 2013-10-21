using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MvcForAjaxApp.Controllers
{
    public class Calculator
    {
        public int Number1 { get; set; }
        public int Number2 { get; set; }
        public int Result { get; set; }
        public void Add()
        {
            this.Result = this.Number1 + this.Number2;
        }
    }
}
