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
    public class NotecardsController : Controller
    {
        private UsersSettings db = new UsersSettings();

        // GET: Notecards
        public ActionResult Index()
        {
            return Json(db.Notecards.ToList(), JsonRequestBehavior.AllowGet);
        }

        // GET: Notecards/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Notecard notecard = db.Notecards.Find(id);
            if (notecard == null)
            {
                return HttpNotFound();
            }
            return Json(notecard, JsonRequestBehavior.AllowGet);
        }

        // GET: Notecards/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Notecards/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Owner,DateCreated,LastModified,Font,Back,DeckId,Rating")] Notecard notecard)
        {
            if (ModelState.IsValid)
            {
                db.Notecards.Add(notecard);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(notecard);
        }

        // GET: Notecards/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Notecard notecard = db.Notecards.Find(id);
            if (notecard == null)
            {
                return HttpNotFound();
            }
            return View(notecard);
        }

        // POST: Notecards/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Owner,DateCreated,LastModified,Font,Back,DeckId,Rating")] Notecard notecard)
        {
            if (ModelState.IsValid)
            {
                db.Entry(notecard).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return Json(notecard, JsonRequestBehavior.AllowGet);
        }

        // GET: Notecards/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Notecard notecard = db.Notecards.Find(id);
            if (notecard == null)
            {
                return HttpNotFound();
            }
            return Json(notecard, JsonRequestBehavior.AllowGet);
        }

        // POST: Notecards/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Notecard notecard = db.Notecards.Find(id);
            db.Notecards.Remove(notecard);
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
