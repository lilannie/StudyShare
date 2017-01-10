using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudyShare.Models
{
    public class UserModel
    {
        //Auto-Gen database ID
        public int UserId { get; set; }
 
        //basic user info
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get { return String.Format("{0} {1}", this.FirstName, this.LastName); } }
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        //Time logging
        public DateTime AccountCreatedOnDate { get; }
        public DateTime LastLoggin { get; set; }
        
        //Account info
        public bool isAdmin { get; set; }
        public bool isTeacher { get; set; }


    }
}