using Microsoft.AspNetCore.Mvc;

namespace dev.Areas.Rbac {
    [Area ("Rbac")]
    public class UserController : Controller {
        public IActionResult Index () {
            return View ();
        }
    }
}