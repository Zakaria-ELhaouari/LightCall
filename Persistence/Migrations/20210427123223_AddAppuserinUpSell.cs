using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddAppuserinUpSell : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Upsell",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Upsell_AppUserId",
                table: "Upsell",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Upsell_AspNetUsers_AppUserId",
                table: "Upsell",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Upsell_AspNetUsers_AppUserId",
                table: "Upsell");

            migrationBuilder.DropIndex(
                name: "IX_Upsell_AppUserId",
                table: "Upsell");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Upsell");
        }
    }
}
