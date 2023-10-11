import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product | undefined;
  id: string | undefined;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product;
    });
  }

  cancel() {
    this.router.navigate(["/products"]);
  }

  delete() {
    if (this.id != undefined) {
      this.productService.delete(this.id).subscribe(() => {
        this.productService.showMessage('Produto deletado com sucesso!')
        this.router.navigate(["/products"]);
      });
    }
  }
}
