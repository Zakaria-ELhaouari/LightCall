using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Web;
using System.Linq;
using System.Threading.Tasks;


using Microsoft.EntityFrameworkCore;
using OfficeOpenXml;
using Persistence;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly DataContext _context;
        private UserManager<AppUser> _userManager;

        public OrderController(DataContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }



        [HttpPost]
        [Route("Import")]
        public async Task<JsonResult> ImportFile(IFormFile importFile)
        {
            if (importFile == null) return Json(new { Status = 0, Message = "No File Selected" });


            try
            {

                var orderList = new List<Order>();

                using (var stream = new MemoryStream())
                {
                    await importFile.CopyToAsync(stream);
                    using(var package = new ExcelPackage(stream))
                    {
                        ExcelWorksheet excelWorksheet = package.Workbook.Worksheets[0];
                        var rowcount = excelWorksheet.Dimension.Rows;
                        for (int row = 2; row < rowcount   ; row++)
                        {

                            orderList.Add(new Order
                            {
                                OrderId = Convert.ToInt32(excelWorksheet.Cells[row, 1].Value.ToString().Trim()),
                                Description = excelWorksheet.Cells[row, 2].Value.ToString().Trim(),
                                Customer = excelWorksheet.Cells[row, 3].Value.ToString().Trim(),
                                Price = Convert.ToInt32(excelWorksheet.Cells[row, 4].Value.ToString().Trim()),
                                Product = excelWorksheet.Cells[row, 5].Value.ToString().Trim(),

                            }); ;

                        }

                        await _context.Orders.AddRangeAsync(orderList);
                        await _context.SaveChangesAsync();
                    }
                }



                

                return Json(new { Status = 1, Message = "File Imported Successfully " });
            }
            catch (Exception ex)
            {
                return Json(new { Status = 0, Message = ex.Message });
            }


          
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(Guid id, Order order)
        {
            order.Id = id;

            _context.Entry(order).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> PostOrder( Order order)
        {

            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();

            return Ok();
        }


        [HttpPost]
        [Route("inAsinOrder")]

        public async Task<Order> InAsinOrder(Guid id)
        {

            string userid = _userManager.GetUserId(User);

            var Operator = await _context.OperatoreAccount.FindAsync(userid);

            if (!Operator.Status)
            {
                var order = await _context.Orders.Where(o => o.Id == id).FirstOrDefaultAsync();

                order.Operators.Remove(Operator);

                await _context.SaveChangesAsync();

                return order;

            }
            return null;

        }


        [HttpPost]
        [Route("AsinOrder")]
        public async Task<Order> AsinOrder()
        {

            string id = _userManager.GetUserId(User);

            var Operator = await _context.OperatoreAccount.FindAsync(id);

            if (Operator.Status)
            {
                var order = await _context.Orders.Include(o => o.Status).OrderBy(o => o.Status.StatusPiority).FirstOrDefaultAsync();

                order.Operators.Add(Operator);

                await _context.SaveChangesAsync();

                return order;

            }
            return null;

        }


    }
}
