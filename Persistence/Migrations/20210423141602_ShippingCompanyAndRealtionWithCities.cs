using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ShippingCompanyAndRealtionWithCities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Shipping_Company",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    ApiClient = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shipping_Company", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CitiesShipping_Company",
                columns: table => new
                {
                    CitiesId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Shipping_CompanyId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CitiesShipping_Company", x => new { x.CitiesId, x.Shipping_CompanyId });
                    table.ForeignKey(
                        name: "FK_CitiesShipping_Company_Cities_CitiesId",
                        column: x => x.CitiesId,
                        principalTable: "Cities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CitiesShipping_Company_Shipping_Company_Shipping_CompanyId",
                        column: x => x.Shipping_CompanyId,
                        principalTable: "Shipping_Company",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CitiesShipping_Company_Shipping_CompanyId",
                table: "CitiesShipping_Company",
                column: "Shipping_CompanyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CitiesShipping_Company");

            migrationBuilder.DropTable(
                name: "Shipping_Company");
        }
    }
}
