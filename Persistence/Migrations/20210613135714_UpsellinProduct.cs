using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UpsellinProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Upsell_UpsellId",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "UpsellId",
                table: "Products",
                newName: "upsell_IdId");

            migrationBuilder.RenameIndex(
                name: "IX_Products_UpsellId",
                table: "Products",
                newName: "IX_Products_upsell_IdId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Upsell_upsell_IdId",
                table: "Products",
                column: "upsell_IdId",
                principalTable: "Upsell",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Upsell_upsell_IdId",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "upsell_IdId",
                table: "Products",
                newName: "UpsellId");

            migrationBuilder.RenameIndex(
                name: "IX_Products_upsell_IdId",
                table: "Products",
                newName: "IX_Products_UpsellId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Upsell_UpsellId",
                table: "Products",
                column: "UpsellId",
                principalTable: "Upsell",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
