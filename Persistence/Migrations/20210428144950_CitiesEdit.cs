using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class CitiesEdit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CitiesShipping_Company");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Shipping_Companys",
                table: "Shipping_Companys");

            migrationBuilder.RenameTable(
                name: "Shipping_Companys",
                newName: "Shipping_Companies");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Cities",
                newName: "CityName");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Shipping_Companies",
                table: "Shipping_Companies",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "CityShipping_Company",
                columns: table => new
                {
                    CitiesId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Shipping_CompaniesId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CityShipping_Company", x => new { x.CitiesId, x.Shipping_CompaniesId });
                    table.ForeignKey(
                        name: "FK_CityShipping_Company_Cities_CitiesId",
                        column: x => x.CitiesId,
                        principalTable: "Cities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CityShipping_Company_Shipping_Companies_Shipping_CompaniesId",
                        column: x => x.Shipping_CompaniesId,
                        principalTable: "Shipping_Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CityShipping_Company_Shipping_CompaniesId",
                table: "CityShipping_Company",
                column: "Shipping_CompaniesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CityShipping_Company");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Shipping_Companies",
                table: "Shipping_Companies");

            migrationBuilder.RenameTable(
                name: "Shipping_Companies",
                newName: "Shipping_Companys");

            migrationBuilder.RenameColumn(
                name: "CityName",
                table: "Cities",
                newName: "City");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Shipping_Companys",
                table: "Shipping_Companys",
                column: "Id");

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
                        name: "FK_CitiesShipping_Company_Shipping_Companys_Shipping_CompanyId",
                        column: x => x.Shipping_CompanyId,
                        principalTable: "Shipping_Companys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CitiesShipping_Company_Shipping_CompanyId",
                table: "CitiesShipping_Company",
                column: "Shipping_CompanyId");
        }
    }
}
