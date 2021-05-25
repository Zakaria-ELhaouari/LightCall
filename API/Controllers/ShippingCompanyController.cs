using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Application.ShipingCompanys;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;
using API.DTOs;

namespace API.Controllers
{
    [AllowAnonymous]
    public class ShippingCompanyController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> AddShipingCompany(ShippingCompanyDto ShippingCompanys)
        {
            return HandleResult(await Mediator.Send(new Create.Command{ShippingCompany = ShippingCompanys}));
        }

        [HttpGet]
        public async Task<ActionResult<List<Shipping_Company>>> GetShippingCompanies(){
            return HandleResult( await Mediator.Send(new List.Query()));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<StatusModel>> DeleteStatus(Guid id)
        {
          return HandleResult(  await Mediator.Send(new Delete.Command { id = id }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> editeShippingCompany(Guid id , ShippingCompanyDto ShippingCompany)
        {
            ShippingCompany.id = id;
            return HandleResult( await Mediator.Send(new Edit.Command{ShippingCompany = ShippingCompany}));
        }
    }
}