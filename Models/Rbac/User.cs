using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models {
    [Table ("user")]
    public class User {

        public int id { get; set; }

        [Display (Name = "用户名")]
        public string userName { get; set; }
        public DateTime createTime { get; set; }
    }
}