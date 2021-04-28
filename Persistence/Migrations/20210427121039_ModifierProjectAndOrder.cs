using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ModifierProjectAndOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Order_OrderId",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "AspNetUsers",
                newName: "OrdersId");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_OrderId",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_OrdersId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Order_OrdersId",
                table: "AspNetUsers",
                column: "OrdersId",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Order_OrdersId",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "OrdersId",
                table: "AspNetUsers",
                newName: "OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_OrdersId",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Order_OrderId",
                table: "AspNetUsers",
                column: "OrderId",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
