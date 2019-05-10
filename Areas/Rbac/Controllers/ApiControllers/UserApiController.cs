using System;
using app;
using app.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace dev.Areas.Rbac.ApiControllers {
    [Route ("/Rbac/[controller]/[action]")]
    public class UserApiController : Controller {
        public DataContext dataContext { get; set; }
        public UserApiController (DataContext _dataContext) {
            this.dataContext = _dataContext;
        }

        [HttpGet]
        public object loadUsers (DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load (this.dataContext.user, loadOptions);
        }

    }
}