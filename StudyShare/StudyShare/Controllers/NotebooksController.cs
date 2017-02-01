using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using StudyShare;

namespace StudyShare.Controllers
{
    public class NotebooksController : Controller
    {
        private UsersSettings db = new UsersSettings();

        // GET: Notebooks
        public ActionResult Index()
        {
            return View(db.Notebooks.ToList());
        }

        // GET: Notebooks/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Notebook notebook = db.Notebooks.Find(id);
            if (notebook == null)
            {
                return HttpNotFound();
            }
            return Json(notebook, JsonRequestBehavior.AllowGet);
        }

        // GET: Notebooks/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Notebooks/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,NotebookOwner,DateCreated,LastModified,Title,Desctiption,Body")] Notebook notebook)
        {
            if (ModelState.IsValid)
            {
                db.Notebooks.Add(notebook);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return Json(notebook, JsonRequestBehavior.AllowGet);
        }

        // GET: Notebooks/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Notebook notebook = db.Notebooks.Find(id);
            if (notebook == null)
            {
                return HttpNotFound();
            }
            return Json(notebook, JsonRequestBehavior.AllowGet);
        }

        // POST: Notebooks/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,NotebookOwner,DateCreated,LastModified,Title,Desctiption,Body")] Notebook notebook)
        {
            if (ModelState.IsValid)
            {
                db.Entry(notebook).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return Json(notebook, JsonRequestBehavior.AllowGet);
        }

        // GET: Notebooks/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Notebook notebook = db.Notebooks.Find(id);
            if (notebook == null)
            {
                return HttpNotFound();
            }
            return Json(notebook, JsonRequestBehavior.AllowGet);
        }

        // POST: Notebooks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Notebook notebook = db.Notebooks.Find(id);
            db.Notebooks.Remove(notebook);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
