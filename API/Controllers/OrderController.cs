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

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly DataContext _context;

        public OrderController(DataContext context)
        {
            _context = context;
        }


       

        [HttpPost]
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





    }
}
