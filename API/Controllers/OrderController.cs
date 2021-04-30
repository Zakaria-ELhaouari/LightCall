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
using Application.Interfaces;
using Application.Orders;
using MediatR;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : BaseApiController
    {
        private readonly DataContext _context;
        
        private readonly IUserAccessor _userAccessor;

        public OrderController(DataContext context, IUserAccessor userAccessor)
        {
            _context = context;
            
            _userAccessor = userAccessor;
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
                                // Product = excelWorksheet.Cells[row, 5].Value.ToString().Trim(),

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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { id = id }));

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(Guid id, Order order)
        {
            order.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Order = order }));
        }


        [HttpPost]
        public async Task<IActionResult> PostOrder( Order order)
        {

          return HandleResult(  await Mediator.Send(new Create.Command { Order = order }));
           

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> DeleteOrder(Guid id)
        {

            return HandleResult(await Mediator.Send(new Delete.Command { id = id }));

        }


        [HttpPut]
        [Route("inAsinOrder")]

        public async Task<Order> InAsinOrder(Guid id)
        {

            var userid = _userAccessor.GetUserId();

            var Operator = await _context.OperatoreAccount.FindAsync(userid);

            if (Operator.Status)
            {
                var order = await _context.Orders.Where(o => o.Id == id).Include(o => o.Operators).FirstOrDefaultAsync();

                order.Operators.Remove(Operator);

                await _context.SaveChangesAsync();

                return order;

            }
            return null;

        }


        [HttpPut]
        [Route("AsinOrder")]
        public async Task<Order> AsinOrder()
        {


            var id = _userAccessor.GetUserId();
            var Operator = await _context.OperatoreAccount.FindAsync(id);
            if (Operator.Status)
            {
                var order = await _context.Orders.Include(o => o.Status).OrderBy(o => o.Status.StatusPiority).FirstOrDefaultAsync();
                order.Operators ??= new List<OperatorAcc>();
                order.Operators.Add(Operator);
                await _context.SaveChangesAsync();
                return order;

            }
            return null;

        }


    }
}
